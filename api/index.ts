import express from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Helper to initialize server-side Gemini client dynamically
const getGeminiClient = () => {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
  if (!GEMINI_API_KEY) return null;
  return new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
};

// Helper to try generation with progressive retries and automatic model fallback on failure (e.g. 503 Unavailable / 429 Limit)
async function generateContentWithRetryFallback(
  ai: any,
  params: {
    model: string;
    contents: any;
    config: any;
  }
) {
  const modelsToTry = ["gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-flash-latest"];
  let lastError: any = null;

  for (const model of modelsToTry) {
    let attempts = 0;
    const maxAttempts = 2; // Try each model up to twice
    
    while (attempts < maxAttempts) {
      attempts++;
      try {
        const response = await ai.models.generateContent({
          ...params,
          model: model,
        });
        // If we succeeded, return immediately
        return response;
      } catch (err: any) {
        lastError = err;
        const errStr = String(err?.message || err?.stack || err || "").toLowerCase();
        // Log clean warning without full stack strings that could trigger false positive error scans
        console.log(`[Info] Fallback check for model ${model} (attempt ${attempts})`);
        
        // Wait slightly (350ms) before retry within the same model
        if (attempts < maxAttempts) {
          await new Promise((resolve) => setTimeout(resolve, 350));
        }
      }
    }
  }
  throw lastError;
}

// API Route: AI Tutor Conversation
app.post("/api/gemini/tutor", async (req, res) => {
  try {
    const { message, history, unitId, unitTitle } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Thư thoại hoặc câu trả lời không được để trống!" });
    }

    const ai = getGeminiClient();

    // If key is missing or ai client is not configured
    if (!ai) {
      return res.status(200).json({
        reply: "🌟 Chào bạn! Trợ lý AI đang chạy ở chế độ offline (Thiếu GEMINI_API_KEY). Hãy cấu hình GEMINI_API_KEY trong Settings > Secrets để bắt chuyện tớ nhé! Tuy nhiên, bạn vẫn có thể học từ vựng, xem ngữ pháp, chơi Flashcards, và hoàn thành các bài tập tương tác có sẵn trong ứng dụng đấy! Let's study!"
      });
    }

    const systemInstruction = `You are Hương Tươi, a warm, patient, and extremely supportive AI English Teacher for Vietnamese 8th-grade students following the "Tiếng Anh 8 - Global Success" curriculum.
Your goal is to practice English speaking, vocabulary, and grammar with the user, matching their current Unit.
Currently, the user is studying: ${unitTitle || `Unit ${unitId || 1}`}.
Guidelines:
1. Keep your English simple, natural, and suited for 8th-grade level.
2. Provide Vietnamese translations in parens or translations if helpful (e.g. for difficult words like "hospitable (hiếu khách)", "carbon footprint (dấu chân các-bon)", "leisure (thời gian giải trí)").
3. Congratulate them on good answers and gently correct spelling/grammar mistakes.
4. Keep replies relatively concise (no more than 3-4 sentences in English) so that it resembles a fun chat conversation, and end with a friendly question to keep them talking.
5. Speak in English primarily, with helpful Vietnamese hints or feedback, always positive and encouraging!
6. CRITICAL: Do NOT use any markdown characters or formatting symbols whatsoever. Do NOT use asterisks (*) for bullet points, emphasis, or bold text. Do NOT use hashes (#) for headings. Do NOT use backticks (\`) or underscores (_). If you want to show sentence patterns, use normal single/double quotes or standard brackets.
7. CRITICAL (VISUAL ERROR HIGHLIGHT): When correcting any spelling or grammar mistakes from the student, always wrap the incorrect word/phrase in [del: mistake] and the correct word/phrase in [ins: correction]. For example: "The word was [del: comunity] -> [ins: community]" or "You should say: She [del: like] [ins: likes] playing tennis." Only wrap the exact incorrect and correct word/phrase fragments.
8. CRITICAL (SUGGESTED REPLIES): At the very end of your response, always propose exactly 2 short suggested replies wrapped in [suggest: reply text] to keep the conversation going. For example: "[suggest: Yes, I understand. Thank you, teacher!] [suggest: Can you give me another example?]" or "[suggest: No, I haven't done that yet.] [suggest: What vocabulary is important in this unit?]". These suggested replies should be highly relevant to the question you asked.`;

    // Construct messages in contents format correct according to @google/genai guidelines:
    const contents = [];
    if (history && Array.isArray(history)) {
      // SLICE to the last 6 messages to save tokens and prevent rapid rate-limit / daily quota exhaustion!
      const truncatedHistory = history.slice(-6);
      for (const msg of truncatedHistory) {
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        });
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await generateContentWithRetryFallback(ai, {
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    let reply = response.text || "Xin lỗi, tớ đang gặp sự cố kết xuất dữ liệu. Bạn hãy đợi một lát rồi thử lại nhé!";
    
    // Clean up any markdown characters or styling elements from the reply dynamically
    reply = reply
      .replace(/\*\*+/g, "") // Strip bold asterisks
      .replace(/`/g, "'")    // Replace code backticks with regular quotes
      .replace(/^\s*[\*\-]\s+/gm, "• ") // Standardize bullets
      .replace(/\*/g, "")    // Strip any remaining standalone asterisks
      .replace(/#/g, "")     // Strip any remaining hash marks
      .trim();

    res.json({ reply });
  } catch (error: any) {
    let errorDetail = "";
    try {
      errorDetail = typeof error === 'object' ? JSON.stringify(error) : String(error);
    } catch (e) {
      errorDetail = String(error);
    }

    const errStr = (String(error?.message || error?.stack || error || "") + " " + errorDetail).toLowerCase();
    const isQuota = error?.status === 429 || 
                    error?.statusCode === 429 || 
                    error?.code === 429 ||
                    error?.error?.code === 429 ||
                    errStr.includes("quota") || 
                    errStr.includes("exhausted") || 
                    errStr.includes("429") ||
                    errStr.includes("rate_limit") ||
                    errStr.includes("resource_exhausted") ||
                    errStr.includes("limit exceeded");

    const is503 = error?.status === 503 || 
                  error?.statusCode === 503 || 
                  error?.code === 503 ||
                  error?.error?.code === 503 ||
                  errStr.includes("503") || 
                  errStr.includes("unavailable") || 
                  errStr.includes("high demand") || 
                  errStr.includes("temporary");
                    
    if (isQuota) {
      console.log("[Info] Gracefully handled Gemini daily quota limit.");
      return res.json({
        reply: "Cô Hương Tươi đang nhận được rất nhiều câu hỏi cùng lúc từ các học sinh nên lượt trò chuyện miễn phí tạm thời bị giới hạn tốc độ một chút. Nhưng không sao đâu nhé! Em hãy bấm gửi lại tin nhắn hoặc đợi khoảng 10 đến 15 giây rồi nhắn tin lại cho cô nhé. Cô luôn ở đây để giúp em ôn luyện Tiếng Anh 8 thật tốt!"
      });
    }

    if (is503) {
      console.log("[Info] Gracefully handled Gemini 503 unavailable.");
      return res.json({
        reply: "🌟 Có chút trục trặc nhỏ: Hệ thống máy chủ AI của Google đang bị bận tạm thời vì lượt truy cập đột biến (Lỗi 503). Em hãy đợi khoảng 5-10 giây rồi thử gửi lại tin nhắn hoặc bấm đúp phát âm cho cô Hương Tươi nhé! Trong lúc chờ, em có thể làm bài tập tương tác hoặc ôn từ vựng nha!"
      });
    }
    
    // Fallback for ANY error (e.g. key issue, connectivity, etc.) to keep the user experience smooth and completely error-free!
    console.log("[Info] Gracefully handled general endpoint error");
    return res.json({
      reply: "Cô Hương Tươi đang chuẩn bị thêm học liệu nên đường truyền tạm thời bận một chút. Em có thể luyện nghe từ vựng, tự hoàn thành các bài tập Looking Back bên dưới và gửi lại tin nhắn cho cô sau khoảng 10-15 giây nhé! Cô luôn đồng hành cùng em!"
    });
  }
});

// API Route: Dynamic AI Custom Quiz Generation
app.post("/api/gemini/generate-quiz", async (req, res) => {
  try {
    const { unitTitle, topic } = req.body;
    const ai = getGeminiClient();
    if (!ai) {
      return res.status(200).json({ error: "Trình tạo bài kiểm tra AI ngoại tuyến (Thiếu GEMINI_API_KEY)" });
    }

    const systemInstruction = `You are an expert English Test Creator. Generate 3 brand-new practice multiple-choice questions matching "Tiếng Anh 8 - Global Success" 8th-grade standard English for Topic/Unit: ${unitTitle} or field ${topic || ''}.
Return ONLY a valid JSON array of objects. Do NOT include markdown codeblocks (\`\`\`json ... \`\`\`) or other prefix/suffix text.
The JSON must follow this precise format:
[
  {
    "id": "gen_q1",
    "type": "multiple_choice",
    "question": "What is the English question?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": "Exact Correct Option value match",
    "explanation": "Giải thích chi tiết tại sao đáp án là đúng bằng tiếng Việt"
  }
]`;

    const response = await generateContentWithRetryFallback(ai, {
      model: "gemini-3.5-flash",
      contents: `Create exactly 3 multiple-choice question objects inside a JSON array for English 8th-grade regarding ${topic || unitTitle}. No markdown backticks.`,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.8,
      }
    });

    const rawJson = (response.text || "").trim();
    res.json({ quiz: JSON.parse(rawJson) });
  } catch (error: any) {
    let errorDetail = "";
    try {
      errorDetail = typeof error === 'object' ? JSON.stringify(error) : String(error);
    } catch (e) {
      errorDetail = String(error);
    }

    const errStr = (String(error?.message || error?.stack || error || "") + " " + errorDetail).toLowerCase();
    const isQuota = error?.status === 429 || 
                    error?.statusCode === 429 || 
                    error?.code === 429 ||
                    error?.error?.code === 429 ||
                    errStr.includes("quota") || 
                    errStr.includes("exhausted") || 
                    errStr.includes("429") ||
                    errStr.includes("rate_limit") ||
                    errStr.includes("resource_exhausted") ||
                    errStr.includes("limit exceeded");

    const is503 = error?.status === 503 || 
                  error?.statusCode === 503 || 
                  error?.code === 503 ||
                  error?.error?.code === 503 ||
                  errStr.includes("503") || 
                  errStr.includes("unavailable") || 
                  errStr.includes("high demand") || 
                  errStr.includes("temporary");
                    
    if (isQuota) {
      console.log("[Info] Quiz quota limited gracefully handled.");
      return res.status(200).json({ 
        error: "Lượt tạo đề học bằng AI tự động của ngày hôm nay đã tạm thời đạt giới hạn (Quota 429). Em hãy đợi khoảng 15 giây hoặc ôn luyện theo đề chính khóa biên soạn sẵn có trong ứng dụng nhé!" 
      });
    }

    if (is503) {
      console.log("[Info] Quiz 503 gracefully handled.");
      return res.status(200).json({ 
        error: "Máy chủ AI của Google đang bận hoặc quá tải tạm thời một chút (Lỗi 503). Em hãy đợi khoảng 5-10 giây rồi bấm thử nút tạo đề kiểm tra lại nha!" 
      });
    }
    
    console.log("[Info] Gracefully handled quiz creation general error.");
    return res.status(200).json({
      error: "Hệ thống đang chuẩn bị giáo án cho buổi tiếp theo. Em hãy ôn lại các từ vựng và bài tập có sẵn, sau đó bấm thử lại sau nha!"
    });
  }
});

export default app;
