import { MessageSquare, Send, RotateCcw, AlertCircle, HelpCircle, Check, Play, Globe, Mic, MicOff, Square } from "lucide-react";
import { ChatMessage, UnitData } from "../types";
import { useState, useRef, useEffect, FormEvent } from "react";

// Unit-specific starter and follow-up suggested replies
const getFallbackSuggestions = (unitId: number): string[] => {
  const fallbacks: Record<number, string[]> = {
    1: [
      "Let's practice some vocab on leisure activities! 🎨",
      "Cô ơi, làm thế nào để nói về sở thích tự chế (handmade)?",
      "How do I use 'be keen on' in a sentence?"
    ],
    2: [
      "Let's chat about peaceful countryside life! 🌾",
      "Cô giải thích giúp em cách dùng các trạng từ tần suất.",
      "Can you give me an example with 'hospitable'?"
    ],
    3: [
      "I want to practice talking about school pressure. 🎒",
      "Cô ơi, làm sao để giải tỏa áp lực từ bạn bè?",
      "Can we practice making a sentence with 'however'?"
    ],
    4: [
      "Tell me more about the Tây Nguyên people! 🏔️",
      "Em muốn học về nhà Rông của Tây Nguyên cô ơi.",
      "How do we say 'bản sắc văn hóa' in English?"
    ],
    5: [
      "What is the difference between custom and tradition? 🏮",
      "Cô ơi, kể cho em về một số phong tục cúng tổ tiên.",
      "How do we say 'kính lão đắc thọ' or 'gần gũi'?"
    ],
    6: [
      "What are the traditional table manners in other nations? 🍜",
      "Em muốn luyện đóng vai (roleplay) gọi món bằng tiếng Anh.",
      "How do you define 'lifestyle'?"
    ],
    7: [
      "What is carbon footprint and how to reduce it? 🌱",
      "Dạy em một số động từ liên quan đến bảo vệ môi trường hằng ngày.",
      "How do I say 'năng lượng tái tạo'?"
    ],
    8: [
      "How do I ask for price discounts when shopping? 🛒",
      "Em làm người mua, cô đóng vai người bán mặc cả nhé!",
      "What is 'convenience store' and 'open-air market'?"
    ],
    9: [
      "What should we pack in an emergency rescue kit? ⚡",
      "Cô hãy kiểm tra từ vựng về thiên tai (natural disasters) của em.",
      "How do we prep for heavy rain or storms?"
    ],
    10: [
      "How will people communicate in 50 years? 🛸",
      "Cô ơi, thần giao cách cảm (telepathy) là gì ạ?",
      "Let's practice vocabulary on communication channels!"
    ],
    11: [
      "What biometric technology will we use in the future? 🤖",
      "AI sẽ thay thế các phương thức học hiện tại không cô?",
      "How do I use future continuous tense correctly?"
    ],
    12: [
      "Are we alone in the universe? 🪐",
      "Dạy em tên các hành tinh trong hệ mặt trời bằng tiếng Anh cô ơi.",
      "Could you explain the indirect speech rule in Unit 12?"
    ],
  };

  return fallbacks[unitId] || [
    "Yes, I understand! Thank you, teacher! ❤️",
    "Cô giảng thêm kèm ví dụ dễ hiểu về mặt ngữ pháp được không cô?",
    "Em sẵn sàng làm đề thi thử rồi cô ơi!"
  ];
};

// Parser to extract dynamic suggested replies and style errors/corrections matching student needs
function parseMessage(content: string, isUser: boolean) {
  if (isUser) {
    return {
      nodes: [content],
      suggestions: []
    };
  }

  // 1. Extract suggested replies wrapped in [suggest: reply text]
  const suggestRegex = /\[suggest:\s*([^\]]+?)\s*\]/g;
  const suggestions: string[] = [];
  let match;
  while ((match = suggestRegex.exec(content)) !== null) {
    suggestions.push(match[1]);
  }

  // 2. Clear out matched suggestions from text bubble itself so they are only clicked below
  const textWithoutSuggestions = content.replace(/\[suggest:\s*([^\]]+?)\s*\]/g, "").trim();

  // 3. Segment text by [del: misspelled] and [ins: correct] tags for red/green visual badges
  const tokenRegex = /(\[del:\s*[^\]]+?\s*\]|\[ins:\s*[^\]]+?\s*\])/g;
  const parts = textWithoutSuggestions.split(tokenRegex);

  const nodes = parts.map((part, index) => {
    if (part.startsWith("[del:")) {
      const mistake = part.slice(5, -1).trim();
      return (
        <span 
          key={`del-${index}`} 
          className="inline-flex items-center mx-1 px-1.5 py-0.5 rounded-lg bg-rose-50 text-rose-700 line-through font-extrabold text-[11px] sm:text-xs border border-rose-250 shadow-3xs"
          title="Lỗi viết sai / Grammar issue"
        >
          {mistake}
        </span>
      );
    } else if (part.startsWith("[ins:")) {
      const correction = part.slice(5, -1).trim();
      return (
        <span 
          key={`ins-${index}`} 
          className="inline-flex items-center mx-1 px-1.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 font-extrabold text-[11px] sm:text-xs border border-emerald-250 shadow-3xs"
          title="Sửa từ/cụm từ chuẩn xác"
        >
          {correction}
        </span>
      );
    }
    return part;
  });

  return { nodes, suggestions };
}

interface AiCompanionTabProps {
  unit: UnitData;
  chatMessages: ChatMessage[];
  onSendMessage: (text: string) => void;
  onClearChat: () => void;
  isSending: boolean;
}

export default function AiCompanionTab({ unit, chatMessages, onSendMessage, onClearChat, isSending }: AiCompanionTabProps) {
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  // Voice Input (Speech-to-Text) State
  const [isListening, setIsListening] = useState(false);
  const [speechLang, setSpeechLang] = useState<"en-US" | "vi-VN">("en-US");
  const [speechError, setSpeechError] = useState<string | null>(null);
  
  const recognitionRef = useRef<any>(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;

      rec.onstart = () => {
        setIsListening(true);
        setSpeechError(null);
      };

      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText((prev) => (prev ? prev.trim() + " " + transcript : transcript));
      };

      rec.onerror = (event: any) => {
        console.error("Speech recognition error", event);
        if (event.error === 'not-allowed') {
          setSpeechError("Chưa cấp quyền truy cập microphone! 🎙️");
        } else {
          setSpeechError("Không rõ ghi âm giọng nói! Hãy thử lại 🎙️");
        }
        setIsListening(false);
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      if (!recognitionRef.current) {
        alert("Trình duyệt không hỗ trợ ghi âm tiếng Việt/tiếng Anh. Vui lòng dùng Chrome hoặc Safari!");
        return;
      }
      setSpeechError(null);
      recognitionRef.current.lang = speechLang;
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Cancel speech synthesis on unmount
  useEffect(() => {
    return () => {
      try {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
          window.speechSynthesis.cancel();
        }
      } catch (e) {
        console.error(e);
      }
    };
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isSending]);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isSending) return;
    onSendMessage(inputText.trim());
    setInputText("");
  };

  const handleShortcutClick = (promptText: string) => {
    if (isSending) return;
    onSendMessage(promptText);
  };

  // Curated quick starter prompts depending on selected unit
  const QUICK_PROMPTS = [
    {
      label: "💬 Roleplay Hội Thoại",
      prompt: `Chào cô Hương Tươi! Hãy cùng em đóng vai (roleplay) thực hành giao tiếp đối thoại cho chủ đề của ${unit.title} nhé! Cô bắt đầu trước đi ạ.`
    },
    {
      label: "📐 Giải Thích Ngữ Pháp",
      prompt: `Cô Hương Tươi có thể giảng giải chi tiết hơn kèm ví dụ cực dễ hiểu về mặt ngữ pháp của ${unit.title} cho em được không ạ?`
    },
    {
      label: "🗣️ Luyện Nói Từ Vựng",
      prompt: `Hãy hướng dẫn em cách phát âm chuẩn và cách đặt câu thực tế với các từ vựng cốt lõi của ${unit.title} nha cô!`
    },
    {
      label: "📝 Kiểm Tra Chữ Lỗi",
      prompt: `Hãy đóng vai giáo viên kiểm tra viết tiếng Anh cho em. Hãy đưa ra 1 câu tiếng Việt ngắn thuộc chủ đề này để em dịch sang tiếng Anh, sau đó chấm điểm và sửa lỗi giúp em nhé!`
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col h-[440px] overflow-hidden" id="ai_companion_component">
      
      {/* Header bar */}
      <div className="bg-indigo-650 p-4 text-white flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3 text-left">
          {/* Avatar sphere */}
          <div className="relative">
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-indigo-650 rounded-full animate-pulse" />
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 text-lg shadow-sm border border-white/20 select-none">
              👩‍🏫
            </div>
          </div>
          <div>
            <h4 className="font-extrabold text-sm sm:text-base flex items-center gap-1.5">
              Cô Giáo AI Hương Tươi <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 px-1.5 py-0.5 rounded-full">Trực Tuyến</span>
            </h4>
            <p className="text-[11px] text-indigo-200">Giao tiếp thông minh, sửa lỗi phát âm và đặt câu tiếng Anh lớp 8</p>
          </div>
        </div>

        {chatMessages.length > 1 && (
          <button
            onClick={onClearChat}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-all cursor-pointer text-xs flex items-center gap-1"
            title="Xóa cuộc trò chuyện để bắt đầu lại"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Làm mới</span>
          </button>
        )}
      </div>

      {/* Messages viewport */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 scrollbar-thin">
        
        {/* Tutor introduction bubble if chat is empty */}
        {chatMessages.length === 0 && (
          <div className="max-w-md mx-auto text-center py-6 px-4 space-y-4 bg-white border border-slate-100 rounded-2xl shadow-xs">
            <div className="text-3xl">✨</div>
            <div>
              <h5 className="font-extrabold text-slate-800 text-sm">Trò Chuyện Thân Thiện Cùng Hương Tươi</h5>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Tớ là Hương Tươi, người bạn AI siêu hiền kiêm cô giáo hỗ trợ bạn ôn luyện toàn bộ kiến thức của <span className="text-indigo-600 font-bold">{unit.title}</span>. Bạn có thể hỏi tớ bất kỳ thắc mắc ngữ pháp nào hoặc gõ nhanh các gợi ý luyện tập bên dưới nhé!
              </p>
            </div>
          </div>
        )}

        {/* Render actual chat array */}
        {chatMessages.map((msg, index) => {
          const isUser = msg.role === 'user';
          const { nodes, suggestions } = parseMessage(msg.content, isUser);
          const isLatest = index === chatMessages.length - 1;
          const showSuggestionsForThisMessage = !isUser && isLatest && !isSending;

          return (
            <div key={msg.id} className="space-y-2">
              <div
                className={`flex items-start gap-2.5 ${isUser ? "justify-end" : "justify-start"}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs shrink-0 select-none border border-indigo-200">
                    👩‍🏫
                  </div>
                )}
                
                <div className={`max-w-[80%] sm:max-w-md rounded-2xl p-3 text-xs sm:text-sm text-left shadow-xs border ${
                  isUser
                    ? "bg-indigo-600 text-white border-indigo-500 rounded-tr-none"
                    : "bg-white text-slate-800 border-slate-200 rounded-tl-none leading-relaxed"
                }`}>
                  {/* Paragraph spacing in messages */}
                  <p className="whitespace-pre-wrap">{nodes}</p>
                  
                  <div className={`text-[10px] mt-1.5 text-right select-none ${isUser ? "text-indigo-200" : "text-slate-400"}`}>
                    {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs shrink-0 font-bold border border-slate-300">
                    Me
                  </div>
                )}
              </div>

              {/* Suggested dynamic replies */}
              {showSuggestionsForThisMessage && (
                <div className="flex flex-wrap gap-1.5 justify-start pl-10.5 pt-0.5 pb-1">
                  {(suggestions.length > 0 ? suggestions : getFallbackSuggestions(unit.id)).map((s, idx) => (
                    <button
                      key={`sugg-${idx}`}
                      type="button"
                      disabled={isSending}
                      onClick={() => onSendMessage(s)}
                      className="bg-indigo-50/70 hover:bg-indigo-100/80 border border-indigo-100 hover:border-indigo-300 text-[10px] sm:text-xs font-semibold py-1 px-2.5 rounded-full text-indigo-700 transition-all outline-hidden active:scale-95 inline-flex items-center gap-1.5 shadow-3xs cursor-pointer select-none"
                    >
                      <span className="text-[11px]">💬</span>
                      <span className="truncate max-w-[180px] sm:max-w-xs">{s}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Loading bubble */}
        {isSending && (
          <div className="flex items-start gap-2.5 justify-start">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs shrink-0 border border-indigo-200">
              👩‍🏫
            </div>
            <div className="bg-white text-slate-800 border-slate-200 rounded-2xl rounded-tl-none p-3 shadow-xs space-y-1">
              <span className="flex items-center space-x-1 justify-center p-1.5 shrink-0">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce" />
              </span>
              <p className="text-[10px] text-slate-400 italic">Hương Tươi đang suy nghĩ câu trả lời tốt nhất...</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Recommended Prompt Pills */}
      <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 shrink-0">
        <p className="text-[10px] font-bold text-slate-450 uppercase mb-1.5 text-left">Gợi ý cách luyện tập nhanh:</p>
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none select-none">
          {QUICK_PROMPTS.map((pill) => (
            <button
              key={pill.label}
              disabled={isSending}
              onClick={() => handleShortcutClick(pill.prompt)}
              className="shrink-0 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-[10px] calc sm:text-xs font-bold px-2.5 py-1.5 rounded-lg text-slate-650 cursor-pointer shadow-2xs transition-all active:scale-95"
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom input area */}
      <form onSubmit={handleSend} className="p-2 sm:p-3 bg-white border-t border-slate-200 shrink-0 flex flex-col gap-2">
        {/* Voice Controls Ribbon to avoid horizontal crowding */}
        <div className="flex items-center justify-between bg-slate-50/80 px-2 py-1.5 rounded-xl border border-slate-100 flex-wrap gap-1">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleListening}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all shadow-3xs transform active:scale-95 cursor-pointer ${
                isListening
                  ? "bg-red-500 hover:bg-red-600 text-white animate-pulse"
                  : "bg-white hover:bg-slate-100 text-slate-705 border border-slate-200"
              }`}
              title={isListening ? "Dừng nói" : "Nói giọng nói của bạn (Voice Input)"}
            >
              {isListening ? (
                <>
                  <MicOff className="h-3 w-3 animate-bounce" />
                  <span>Đang nghe...</span>
                </>
              ) : (
                <>
                  <Mic className="h-3 w-3 text-indigo-600" />
                  <span>Nói AI (Voice Input) 🎙️</span>
                </>
              )}
            </button>

            {/* Quick Language Switcher */}
            <div className="flex bg-slate-200/60 p-0.5 rounded-lg border border-slate-250 shrink-0">
              <button
                type="button"
                disabled={isListening}
                onClick={() => setSpeechLang("en-US")}
                className={`px-1.5 py-0.5 text-[9px] font-bold rounded-md transition-all cursor-pointer ${
                  speechLang === "en-US"
                    ? "bg-white text-indigo-700 shadow-2xs font-extrabold"
                    : "text-slate-500 hover:text-slate-900 disabled:opacity-50"
                }`}
                title="Thiết lập nhận diện tiếng Anh-Mỹ"
              >
                EN 🇺🇸
              </button>
              <button
                type="button"
                disabled={isListening}
                onClick={() => setSpeechLang("vi-VN")}
                className={`px-1.5 py-0.5 text-[9px] font-bold rounded-md transition-all cursor-pointer ${
                  speechLang === "vi-VN"
                    ? "bg-white text-indigo-700 shadow-2xs font-extrabold"
                    : "text-slate-500 hover:text-slate-900 disabled:opacity-50"
                }`}
                title="Thiết lập nhận diện tiếng Việt"
              >
                VI 🇻🇳
              </button>
            </div>


          </div>

          {/* Voice Indicator or Error Message */}
          <div className="text-[10px] text-slate-500 flex items-center pr-1 select-none">
            {isListening ? (
              <span className="text-red-500 font-bold animate-pulse flex items-center gap-1">
                ● LIVE
              </span>
            ) : speechError ? (
              <span className="text-red-500 font-medium truncate max-w-[120px] sm:max-w-none" title={speechError}>
                ⚠️ {speechError}
              </span>
            ) : (
              <span className="text-slate-400 italic">Trợ giúp giọng nói</span>
            )}
          </div>
        </div>

        {/* Text Input Row */}
        <div className="flex items-center gap-1.5">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={isListening ? "Hãy nói điều gì đó..." : `Hỏi Hương Tươi hoặc nhập văn bản...`}
            disabled={isSending}
            className="flex-1 min-w-0 px-3 py-2 bg-slate-50 focus:bg-white text-xs sm:text-sm border border-slate-250 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl transition-all outline-hidden disabled:bg-slate-100 disabled:text-slate-400 disabled:border-slate-200"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isSending}
            className={`p-2 sm:p-2.5 rounded-xl text-white transition-all shadow-md transform shrink-0 cursor-pointer ${
              inputText.trim() && !isSending
                ? "bg-indigo-600 hover:bg-indigo-700 active:scale-95"
                : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
            }`}
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>

    </div>
  );
}
