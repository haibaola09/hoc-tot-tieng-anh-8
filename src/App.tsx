import { useState, useEffect } from "react";
import Header from "./components/Header";
import UnitSelector from "./components/UnitSelector";
import LessonDetail from "./components/LessonDetail";
import VocabularyTab from "./components/VocabularyTab";
import ReadingTab from "./components/ReadingTab";
import QuizTab from "./components/QuizTab";
import AiCompanionTab from "./components/AiCompanionTab";
import ProgressAndAchievements from "./components/ProgressAndAchievements";
import { CURRICULUM } from "./data/enhanced_curriculum";
import { UserProgress, ChatMessage } from "./types";
import { Award, BookOpen, MessageSquare, ListTodo, Trophy, PartyPopper, Newspaper } from "lucide-react";

const LOCAL_STORAGE_PROGRESS_KEY = "tienganh8_progress_v1";
const LOCAL_STORAGE_LEARNED_WORDS_KEY = "tienganh8_learned_words_v1";
const LOCAL_STORAGE_CHAT_KEY = "tienganh8_chat_history_v1";

const DEFAULT_PROGRESS: UserProgress = {
  selectedUnitId: 1,
  starsEarned: 0,
  dailyStreak: 1,
  completedUnits: [],
  learnedVocabularyCount: 0
};

export default function App() {
  const [viewState, setViewState] = useState<"study" | "achievements">("study");
  
  // Progress & Game scores state
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_PROGRESS_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_PROGRESS;
  });

  const [learnedWords, setLearnedWords] = useState<string[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_LEARNED_WORDS_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // Current selected unit state
  const [activeUnitId, setActiveUnitId] = useState<number>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_PROGRESS_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as UserProgress;
      return parsed.selectedUnitId || 1;
    }
    return 1;
  });

  // Tab navigation state
  const [activeTab, setActiveTab] = useState<"lesson" | "vocabulary" | "reading" | "quiz" | "ai_companion">("lesson");

  // Chat message logs state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_CHAT_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [isSending, setIsSending] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationMessage, setCelebrationMessage] = useState("");

  // Sync to local storage on select changes
  useEffect(() => {
    const updatedProgress = { ...progress, selectedUnitId: activeUnitId };
    localStorage.setItem(LOCAL_STORAGE_PROGRESS_KEY, JSON.stringify(updatedProgress));
    setProgress(updatedProgress);
  }, [activeUnitId]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_LEARNED_WORDS_KEY, JSON.stringify(learnedWords));
    // update learned count in progress
    setProgress((prev) => {
      const draft = { ...prev, learnedVocabularyCount: learnedWords.length };
      localStorage.setItem(LOCAL_STORAGE_PROGRESS_KEY, JSON.stringify(draft));
      return draft;
    });
  }, [learnedWords]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CHAT_KEY, JSON.stringify(chatMessages));
  }, [chatMessages]);

  const activeUnit = CURRICULUM.find((unit) => unit.id === activeUnitId) || CURRICULUM[0];

  // Global total vocabularies
  const totalVocabCount = CURRICULUM.reduce((sum, curr) => sum + curr.vocabulary.length, 0);

  const handleMarkLearned = (word: string) => {
    setLearnedWords((prev) => {
      const isAlreadyLearned = prev.includes(word);
      let updated;
      if (isAlreadyLearned) {
        updated = prev.filter((w) => w !== word);
      } else {
        updated = [...prev, word];
        // celebrate with small speech Synthesis
        triggerCelebration(`Tuyệt vời! Bạn đã thuộc từ ${word}!`);
      }
      return updated;
    });
  };

  const triggerCelebration = (msg: string) => {
    setCelebrationMessage(msg);
    setShowCelebration(true);
    setTimeout(() => {
      setShowCelebration(false);
    }, 4000);
  };

  const handleQuizCompleted = (score: number) => {
    const totalQuestions = activeUnit.quizzes.length;
    const isPassing = (score / totalQuestions) >= 0.7; // 70% threshold
    
    setProgress((prev) => {
      let completed = [...prev.completedUnits];
      if (isPassing && !prev.completedUnits.includes(activeUnitId)) {
        completed.push(activeUnitId);
        triggerCelebration(`Chúc mừng! Bạn đạt điểm kiểm tra ${score}/${totalQuestions} của ${activeUnit.title}! Huy hiệu đạt được! 🎉`);
      } else {
        triggerCelebration(`Chúc mừng bạn hoàn thành kiểm tra với số điểm ${score}/${totalQuestions}! ★`);
      }

      const updated = {
        ...prev,
        starsEarned: prev.starsEarned + score,
        completedUnits: completed
      };
      localStorage.setItem(LOCAL_STORAGE_PROGRESS_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const handleUpdateStars = (stars: number) => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        starsEarned: prev.starsEarned + stars
      };
      localStorage.setItem(LOCAL_STORAGE_PROGRESS_KEY, JSON.stringify(updated));
      return updated;
    });
    triggerCelebration(`Tuyệt vời! Bạn trả lời đúng và tích lũy thêm +${stars} sao vàng! ⭐`);
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isSending) return;

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      role: 'user',
      content: text,
      createdAt: new Date().toISOString()
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setIsSending(true);

    try {
      // Proxy call to server-side Express endpoint
      const response = await fetch("/api/gemini/tutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: text,
          history: chatMessages.slice(-10), // send last 10 messages for context
          unitId: activeUnitId,
          unitTitle: activeUnit.title
        })
      });

      const data = await response.json();
      
      let replyContent = data.reply;
      if (!response.ok || data.error) {
        replyContent = data.error || data.reply || "Hệ thống cô giáo AI đang bận một lát. Em hãy thử gửi lại tin nhắn nhé!";
      }

      const assistantMsg: ChatMessage = {
        id: `asst_${Date.now()}`,
        role: 'assistant',
        content: replyContent,
        createdAt: new Date().toISOString()
      };

      setChatMessages((prev) => [...prev, assistantMsg]);

      // If speak synthesis exists, we can optionally speak the first sentence or full reply
      // But keeping it silent as default is better so as not to startle users unless they click speak explicitly in vocabulary list!
    } catch (error) {
      console.error(error);
      const errMsg = {
        id: `err_${Date.now()}`,
        role: 'assistant',
        content: "🚨 Lỗi mạng không thể trò chuyện trực tiếp được với cô giáo Hương Tươi rồi! Bạn nhớ thiết lập GEMINI_API_KEY ở góc màn hình và khởi động lại nhé! Đừng lo, các bài tập lý thuyết lớp 8 vẫn làm tốt nha!",
        createdAt: new Date().toISOString()
      };
      setChatMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsSending(false);
    }
  };

  const handleClearChat = () => {
    if (confirm("Xóa toàn bộ cuộc trò chuyện với cô giáo AI Hương Tươi để bắt đầu lại nhé?")) {
      setChatMessages([]);
    }
  };

  const handleResetProgress = () => {
    localStorage.removeItem(LOCAL_STORAGE_PROGRESS_KEY);
    localStorage.removeItem(LOCAL_STORAGE_LEARNED_WORDS_KEY);
    localStorage.removeItem(LOCAL_STORAGE_CHAT_KEY);
    setProgress(DEFAULT_PROGRESS);
    setLearnedWords([]);
    setChatMessages([]);
    setActiveUnitId(1);
    setViewState("study");
    alert("Đã làm mới tất cả tiến độ đạt sao và huy hiệu!");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans relative antialiased" id="tienganh8_app">
      
      {/* Dynamic Floating Celebration Message */}
      {showCelebration && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-indigo-900 border border-indigo-700 text-white rounded-2xl px-6 py-3.5 shadow-2xl flex items-center space-x-3 max-w-sm sm:max-w-md animate-fade-in animate-bounce">
          <PartyPopper className="h-6 w-6 text-amber-400 shrink-0" />
          <div className="text-xs sm:text-sm font-extrabold leading-relaxed text-left">
            {celebrationMessage}
          </div>
        </div>
      )}

      {/* Header with metrics and status */}
      <Header progress={progress} onOpenAchievements={() => setViewState("achievements")} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {viewState === "study" ? (
          <>
            {/* Unit Dropdown Selector Card */}
            <UnitSelector 
              units={CURRICULUM} 
              selectedUnitId={activeUnitId} 
              onSelectUnit={setActiveUnitId} 
              progress={progress}
            />

            {/* Navigation Tabbed Interface */}
            <div className="flex bg-slate-200/65 p-1 rounded-2xl border border-slate-200 sticky top-2 z-10 shadow-xs max-w-full overflow-x-auto scrollbar-none select-none">
              <button
                onClick={() => setActiveTab("lesson")}
                className={`flex-1 py-3 px-3.5 text-xs sm:text-sm font-extrabold rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 shrink-0 ${
                  activeTab === "lesson"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <BookOpen className="h-4 w-4 shrink-0" />
                <span>Lý Thuyết & Phát Âm</span>
              </button>

              <button
                onClick={() => setActiveTab("vocabulary")}
                className={`flex-1 py-3 px-3.5 text-xs sm:text-sm font-extrabold rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 shrink-0 ${
                  activeTab === "vocabulary"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Award className="h-4 w-4 shrink-0" />
                <span>Từ Vựng ({activeUnit.vocabulary.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("reading")}
                className={`flex-1 py-3 px-3.5 text-xs sm:text-sm font-extrabold rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 shrink-0 ${
                  activeTab === "reading"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Newspaper className="h-4 w-4 shrink-0" />
                <span>Luyện Đọc Hiểu 📖</span>
              </button>

              <button
                onClick={() => setActiveTab("quiz")}
                className={`flex-1 py-3 px-3.5 text-xs sm:text-sm font-extrabold rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 shrink-0 ${
                  activeTab === "quiz"
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <ListTodo className="h-4 w-4 shrink-0" />
                <span>Bài Tập Tương Tác</span>
              </button>

              <button
                onClick={() => setActiveTab("ai_companion")}
                className={`flex-1 py-3 px-3.5 text-xs sm:text-sm font-extrabold rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 shrink-0 ${
                  activeTab === "ai_companion"
                    ? "bg-white text-indigo-700 shadow-sm animate-pulse"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span>Tutor AI Hương Tươi 🤖</span>
              </button>
            </div>

            {/* TAB PANELS WITH TRANSITIONS */}
            <div className="transition-all duration-300">
              {activeTab === "lesson" && (
                <LessonDetail 
                  unit={activeUnit} 
                  onTutorClick={() => setActiveTab("ai_companion")} 
                />
              )}

              {activeTab === "vocabulary" && (
                <VocabularyTab
                  vocabulary={activeUnit.vocabulary}
                  progress={progress}
                  onMarkLearned={handleMarkLearned}
                  learnedWords={learnedWords}
                />
              )}

              {activeTab === "reading" && (
                <ReadingTab
                  unitId={activeUnitId}
                  progress={progress}
                  onUpdateStars={handleUpdateStars}
                />
              )}

              {activeTab === "quiz" && (
                <QuizTab
                  unitTitle={activeUnit.title}
                  unitId={activeUnitId}
                  quizzes={activeUnit.quizzes}
                  onQuizCompleted={handleQuizCompleted}
                  progress={progress}
                />
              )}

              {activeTab === "ai_companion" && (
                <AiCompanionTab
                  unit={activeUnit}
                  chatMessages={chatMessages}
                  onSendMessage={handleSendMessage}
                  onClearChat={handleClearChat}
                  isSending={isSending}
                />
              )}
            </div>
          </>
        ) : (
          /* LEVEL ACHIEVEMENTS VIEW STATE */
          <ProgressAndAchievements
            progress={progress}
            totalVocabCount={totalVocabCount}
            learnedCount={learnedWords.length}
            onResetProgress={handleResetProgress}
            onBack={() => setViewState("study")}
          />
        )}

      </main>

    </div>
  );
}
