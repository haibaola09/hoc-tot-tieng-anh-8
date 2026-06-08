import { useState, useEffect } from "react";
import { READING_DATA, ReadingItem } from "../data/reading_data";
import { UserProgress } from "../types";
import { 
  BookOpen, 
  AlertCircle, 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Square, 
  Sparkles 
} from "lucide-react";

interface ReadingTabProps {
  unitId: number;
  progress: UserProgress;
  onUpdateStars: (starsEarned: number) => void;
}

export default function ReadingTab({ unitId, progress, onUpdateStars }: ReadingTabProps) {
  const currentReading: ReadingItem | undefined = READING_DATA.find((r) => r.unitId === unitId);

  // Score states for current lesson reading questions
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [wrongAnswers, setWrongAnswers] = useState<Record<string, boolean>>({}); // to show immediate red error state

  // Speech synthesis states
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(0.85); // friendly default speed
  const [currentParaIdx, setCurrentParaIdx] = useState<number | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string>("");
  const [readAllMode, setReadAllMode] = useState(false);

  // Load English voices on mount
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      const englishVoices = allVoices.filter(
        (v) => v.lang.toLowerCase().startsWith("en-") || v.lang.toLowerCase() === "en"
      );
      setVoices(englishVoices);

      if (englishVoices.length > 0) {
        // Try to pre-select Google or standard US/UK female/male if available
        const preferred = englishVoices.find(
          (v) =>
            v.name.includes("Google") ||
            v.name.includes("Samantha") ||
            v.name.includes("Natural") ||
            v.name.includes("Daniel") ||
            v.name.includes("Microsoft")
        );
        setSelectedVoiceName(preferred ? preferred.name : englishVoices[0].name);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.onvoiceschanged = null;
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Helper routine to speak a designated paragraph
  const speakParagraph = (idx: number, isSequential: boolean, rateOverride?: number, voiceOverride?: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window) || !currentReading) return;

    window.speechSynthesis.cancel();
    setCurrentParaIdx(idx);
    setIsPlaying(true);
    setIsPaused(false);
    setReadAllMode(isSequential);

    const paragraphs = currentReading.passage.split("\n\n");
    const textToSpeak = paragraphs[idx];
    if (!textToSpeak) {
      // Completed full text representation
      setIsPlaying(false);
      setCurrentParaIdx(null);
      setReadAllMode(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = rateOverride !== undefined ? rateOverride : playbackRate;

    const targetVoiceName = voiceOverride !== undefined ? voiceOverride : selectedVoiceName;
    const activeVoice = voices.find((v) => v.name === targetVoiceName);
    if (activeVoice) {
      utterance.voice = activeVoice;
    } else {
      utterance.lang = "en-US";
    }

    utterance.onend = () => {
      if (isSequential && idx + 1 < paragraphs.length) {
        speakParagraph(idx + 1, true, rateOverride, targetVoiceName);
      } else {
        setIsPlaying(false);
        setCurrentParaIdx(null);
        setReadAllMode(false);
      }
    };

    utterance.onerror = (e) => {
      console.warn("Utterance error callback:", e);
      setIsPlaying(false);
      setCurrentParaIdx(null);
      setReadAllMode(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePauseResume = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const handleStop = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentParaIdx(null);
    setReadAllMode(false);
  };

  const changeSpeed = (newRate: number) => {
    setPlaybackRate(newRate);
    if (isPlaying && currentParaIdx !== null) {
      speakParagraph(currentParaIdx, readAllMode, newRate, selectedVoiceName);
    }
  };

  const changeVoice = (newVoiceName: string) => {
    setSelectedVoiceName(newVoiceName);
    if (isPlaying && currentParaIdx !== null) {
      speakParagraph(currentParaIdx, readAllMode, playbackRate, newVoiceName);
    }
  };

  // Reset states when unit changes
  useEffect(() => {
    setSelectedAnswers({});
    setSubmitted({});
    setWrongAnswers({});

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentParaIdx(null);
    setReadAllMode(false);
  }, [unitId]);

  if (!currentReading) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-3" id="reading_null_state">
        <AlertCircle className="h-10 w-10 text-amber-500 mx-auto" />
        <h3 className="text-lg font-bold text-slate-800">Không tìm thấy phần đọc hiểu</h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          Bộ bài học chưa hỗ trợ bài đọc hiểu cho Unit {unitId}. Hãy chọn một bài học khác từ danh sách nhé!
        </p>
      </div>
    );
  }

  const handleSelectOption = (questionId: string, value: string) => {
    if (submitted[questionId]) return; // locked once answered correctly

    setSelectedAnswers((prev) => ({ ...prev, [questionId]: value }));
    setWrongAnswers((prev) => ({ ...prev, [questionId]: false }));
  };

  const handleSubmitQuestion = (questionId: string, correctAnswer: string) => {
    const selected = selectedAnswers[questionId];
    if (!selected) {
      alert("Vui lòng chọn 1 đáp án trước khi kiểm tra!");
      return;
    }

    const isCorrect = selected === correctAnswer;

    if (isCorrect) {
      setSubmitted((prev) => ({ ...prev, [questionId]: true }));
      // Reward +5 stars for each correct reading answer!
      onUpdateStars(5);
    } else {
      setWrongAnswers((prev) => ({ ...prev, [questionId]: true }));
      alert("Đáp án chưa chính xác rồi, hãy thử suy nghĩ lại một chút nhé! 💡");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id={`reading_tab_${unitId}`}>
      
      {/* LEFT COLUMN: Passage & Image (8 cols out of 12) - Sticky on desktop so it stays on screen when questions are scrolled */}
      <div className="lg:col-span-7 xl:col-span-8 space-y-6 lg:sticky lg:top-[74px] lg:max-h-[calc(100vh-116px)] lg:overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        
        {/* Reading Passage Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          
          {/* Cover Art Image Frame */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
            <img
              src={currentReading.imageUrl}
              alt={currentReading.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-transparent flex flex-col justify-end p-5">
              <span className="p-1 px-2.5 text-[10px] uppercase font-black bg-indigo-600 text-white rounded-md max-w-fit mb-2 shadow-xs">
                {currentReading.unitTitle}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                {currentReading.title}
              </h2>
            </div>
          </div>

          <div className="p-5 sm:p-7 space-y-6">
            
            {/* Native Speaker Pronunciation Cockpit Panel */}
            <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-4 sm:p-5 text-left shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3.5 border-b border-slate-200/60">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 bg-indigo-100 text-indigo-700 rounded-xl shrink-0">
                    <Volume2 className={`h-5 w-5 ${isPlaying && !isPaused ? "animate-bounce" : ""}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5">
                      Giọng Đọc Bản Xứ Chuẩn Mỹ / Anh 
                      {isPlaying && !isPaused && (
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                      )}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-semibold">Nghe phát âm chuẩn tự nhiên & luyện học nói nhại theo (Shadowing)</p>
                  </div>
                </div>

                {/* Status Badge */}
                {isPlaying && (
                  <div className="px-2.5 py-1 text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-full flex items-center space-x-1.5 self-start sm:self-auto uppercase tracking-wide">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                    </span>
                    <span>{isPaused ? "Đã tạm dừng" : `Đang đọc đoạn ${currentParaIdx !== null ? currentParaIdx + 1 : 0}`}</span>
                  </div>
                )}
              </div>

              {/* Controls bar */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
                {/* Standard buttons: play, pause, stop */}
                <div className="md:col-span-5 flex items-center space-x-2">
                  {!isPlaying ? (
                    <button
                      onClick={() => speakParagraph(0, true)}
                      className="flex-1 py-2 sm:py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-extrabold shadow-sm hover:shadow-md transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <Play className="h-4 w-4 shrink-0 fill-current" />
                      <span>Đọc toàn bài</span>
                    </button>
                  ) : (
                    <div className="flex-1 flex space-x-2">
                      <button
                        onClick={handlePauseResume}
                        className="flex-1 py-2 sm:py-2.5 px-3 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                        title={isPaused ? "Tiếp tục" : "Tạm dừng"}
                      >
                        {isPaused ? <Play className="h-4 w-4 shrink-0" /> : <Pause className="h-4 w-4 shrink-0" />}
                        <span>{isPaused ? "Tiếp tục" : "Tạm dừng"}</span>
                      </button>
                      <button
                        onClick={handleStop}
                        className="py-2 sm:py-2.5 px-3.5 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-100 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center cursor-pointer"
                        title="Dừng hẳn"
                      >
                        <Square className="h-4 w-4 shrink-0 fill-current" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Speed Controls Selector */}
                <div className="md:col-span-7 flex flex-wrap items-center justify-between sm:justify-start gap-3 sm:gap-4">
                  <div className="flex items-center space-x-1 sm:space-x-1.5 text-xs font-bold text-slate-500">
                    <span className="text-[11px] uppercase tracking-wide text-slate-400">Tốc độ:</span>
                    <div className="flex bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
                      {[0.7, 0.85, 1.0, 1.15].map((speed) => (
                        <button
                          key={speed}
                          onClick={() => changeSpeed(speed)}
                          className={`px-2 py-1 text-[10px] sm:text-xs font-extrabold rounded-md transition-all cursor-pointer ${
                            playbackRate === speed
                              ? "bg-indigo-600 text-white shadow-xs"
                              : "text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {speed === 1.0 ? "1x" : `${speed}x`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Accents Selector */}
                  {voices.length > 0 && (
                    <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-bold">
                      <select
                        value={selectedVoiceName}
                        onChange={(e) => changeVoice(e.target.value)}
                        className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-[11px] sm:text-xs font-extrabold rounded-lg px-2.5 py-1.5 focus:ring-1 focus:ring-indigo-500 shadow-2xs outline-none cursor-pointer max-w-[130px] sm:max-w-[160px] truncate"
                      >
                        {voices.map((v) => (
                          <option key={v.name} value={v.name}>
                            🗣️ {v.name.replace("Microsoft", "").replace("Google", "").trim()}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* The Text Content */}
            <div className="prose prose-slate max-w-none text-left space-y-3.5">
              {currentReading.passage.split("\n\n").map((paragraph, idx) => {
                const isThisParaPlaying = currentParaIdx === idx && isPlaying;
                return (
                  <div 
                    key={idx}
                    className={`relative p-3.5 sm:p-4 rounded-xl transition-all duration-300 border ${
                      isThisParaPlaying 
                        ? "bg-indigo-50/60 border-indigo-200/80 shadow-xs" 
                        : "hover:bg-slate-50/50 border-transparent"
                    }`}
                  >
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify indent-4 font-sans font-normal pr-10">
                      {paragraph}
                    </p>
                    
                    {/* Floating Audio Read Button for this paragraph */}
                    <button
                      onClick={() => {
                        if (isThisParaPlaying) {
                          handleStop();
                        } else {
                          speakParagraph(idx, false);
                        }
                      }}
                      title={isThisParaPlaying ? "Dừng đọc đoạn này" : "Nghe đọc đoạn này"}
                      className={`absolute bottom-3 right-3 p-2 rounded-xl transition-all border shrink-0 ${
                        isThisParaPlaying
                          ? "bg-rose-50 border-rose-200 text-rose-600 animate-pulse shadow-sm"
                          : "bg-white hover:bg-indigo-50 border-slate-200 hover:border-indigo-200 text-slate-400 hover:text-indigo-600 shadow-2xs cursor-pointer"
                      }`}
                    >
                      {isThisParaPlaying ? (
                        <VolumeX className="h-4 w-4" />
                      ) : (
                        <Volume2 className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Micro Highlight Notice */}
            <div className="flex items-center space-x-2 text-[11px] text-slate-400 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              <HelpCircle className="h-4 w-4 text-indigo-400 shrink-0" />
              <span>Nên nghe kỹ giọng điệu bản xứ từng đoạn văn, bấm nút loa nhỏ kế bên mỗi đoạn để chủ động luyện nghe đi nghe lại nhé!</span>
            </div>

          </div>
        </div>

        {/* Dynamic Vocabulary Glossary Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 text-left shadow-xs">
          <div className="flex items-center space-x-2.5 pb-4 mb-4 border-b border-slate-100">
            <div className="p-1.5 bg-indigo-100 text-indigo-700 rounded-lg">
              <BookOpen className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-800">Tra Cứu Từ Khó (Glossary Vocabulary)</h4>
              <p className="text-[11px] text-slate-400">Từ vựng tương đối nâng cao xuất hiện trong bài đọc kèm định nghĩa Việt ngữ</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentReading.glossary.map((g, idx) => (
              <div 
                key={idx} 
                className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/20 transition-all text-left"
              >
                <span className="font-extrabold text-indigo-600 text-xs sm:text-sm">{g.word}</span>
                <span className="text-xs text-slate-400 font-bold block pt-0.5">: {g.meaning}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: Interactive Comprehension Questions (4 cols) */}
      <div className="lg:col-span-5 xl:col-span-4 space-y-6">
        
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs text-left">
          
          <div className="pb-3 mb-4 border-b border-slate-100">
            <h3 className="text-sm sm:text-base font-extrabold text-slate-800 flex items-center space-x-2">
              <span>Kiểm Tra Đọc Hiểu</span>
              <span className="p-1 px-1.5 text-[10px] bg-indigo-100 text-indigo-700 font-bold rounded-lg shrink-0">
                +5 Sao / câu
              </span>
            </h3>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              Trả lời đúng mỗi câu trắc nghiệm đọc hiểu (Comprehension Questions) để đạt điểm sao hoàn hảo.
            </p>
          </div>

          <div className="space-y-6">
            {currentReading.questions.map((q, qIdx) => {
              const isQSubmitted = submitted[q.id];
              const isWrong = wrongAnswers[q.id];
              const activeVal = selectedAnswers[q.id] || "";

              return (
                <div 
                  key={q.id} 
                  className={`p-4 rounded-xl transition-all border ${
                    isQSubmitted 
                      ? "bg-emerald-50/40 border-emerald-200" 
                      : isWrong 
                        ? "bg-rose-50/40 border-rose-200" 
                        : "bg-slate-50/70 border-slate-200"
                  }`}
                >
                  {/* Question Title */}
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 mb-3 flex items-start space-x-2 leading-relaxed">
                    <span className="bg-indigo-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                      {qIdx + 1}
                    </span>
                    <span className="flex-1">{q.question}</span>
                  </h4>

                  {/* Options List */}
                  <div className="space-y-2">
                    {q.options.map((option) => {
                      const isSelected = activeVal === option;

                      return (
                        <button
                          key={option}
                          disabled={isQSubmitted}
                          onClick={() => handleSelectOption(q.id, option)}
                          className={`w-full text-left p-2.5 rounded-lg text-xs transition-all flex items-center space-x-2.5 cursor-pointer disabled:cursor-not-allowed border ${
                            isQSubmitted && option === q.correctAnswer
                              ? "bg-emerald-100/80 border-emerald-300 text-emerald-800 font-bold"
                              : isSelected
                                ? isWrong
                                  ? "bg-rose-100 border-rose-300 text-rose-800 font-bold"
                                  : "bg-indigo-100 border-indigo-300 text-indigo-800 font-bold"
                                : "bg-white hover:bg-slate-100 border-slate-200 text-slate-600 font-medium"
                          }`}
                        >
                          <span className={`h-4 w-4 rounded-full flex items-center justify-center border text-[9px] font-bold shrink-0 ${
                            isSelected ? "border-indigo-500 bg-indigo-50" : "border-slate-300 bg-slate-50"
                          }`}>
                            {isSelected && "✓"}
                          </span>
                          <span className="flex-1 leading-relaxed">{option}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Submission and Action States */}
                  {!isQSubmitted ? (
                    <button
                      onClick={() => handleSubmitQuestion(q.id, q.correctAnswer)}
                      disabled={!activeVal}
                      className="mt-3.5 w-full py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 text-white disabled:text-slate-400 font-bold text-xs rounded-lg transition-all shadow-xs cursor-pointer"
                    >
                      Kiểm tra đáp án 🔍
                    </button>
                  ) : (
                    <div className="mt-3 bg-emerald-100/30 p-3 rounded-lg border border-emerald-200 text-left">
                      <div className="flex items-center space-x-1.5 text-emerald-700 text-xs font-bold leading-relaxed mb-1">
                        <CheckCircle className="h-4 w-4 shrink-0" />
                        <span>Chính xác (+5 ⭐):</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                        {q.explanation}
                      </p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
}
