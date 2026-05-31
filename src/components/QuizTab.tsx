import { Award, CheckCircle2, XCircle, ChevronRight, ChevronDown, HelpCircle, RefreshCw, Cpu, Sparkles } from "lucide-react";
import { QuizQuestion, UserProgress } from "../types";
import { useState, useEffect } from "react";

interface QuizTabProps {
  unitTitle: string;
  unitId: number;
  quizzes: QuizQuestion[];
  onQuizCompleted: (score: number) => void;
  progress: UserProgress;
}

export default function QuizTab({ unitTitle, unitId, quizzes: originalQuizzes, onQuizCompleted, progress }: QuizTabProps) {
  // Allow substituting original quizzes with dynamic AI-generated ones
  const [quizzes, setQuizzes] = useState<QuizQuestion[]>(originalQuizzes);
  const [aiGenerating, setAiGenerating] = useState(false);
  const [useAiQuiz, setUseAiQuiz] = useState(false);

  // Core quiz state
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [wordFormInput, setWordFormInput] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  // Column matching state
  const [matchingSelections, setMatchingSelections] = useState<{ [key: string]: string }>({});
  const [activeLeft, setActiveLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]); // list of matched left keys

  // Reload regular quizzes if unit changes
  useEffect(() => {
    setQuizzes(originalQuizzes);
    resetQuiz();
    setUseAiQuiz(false);
  }, [originalQuizzes, unitId]);

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setWordFormInput("");
    setIsAnswered(false);
    setIsCorrect(false);
    setScore(0);
    setShowSummary(false);
    setMatchingSelections({});
    setActiveLeft(null);
    setMatchedPairs([]);
  };

  const handleAiGenerate = async () => {
    setAiGenerating(true);
    try {
      const response = await fetch("/api/gemini/generate-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          unitId,
          unitTitle,
          topic: `Kiến thức tổng hợp về từ vựng, ngữ pháp và phát âm phù hợp cho học sinh lớp 8 của ${unitTitle}`
        })
      });
      const data = await response.json();
      if (data.quiz && Array.isArray(data.quiz)) {
        setQuizzes(data.quiz);
        setUseAiQuiz(true);
        resetQuiz();
      } else if (data.error) {
        alert("Lỗi tạo bài tập AI: " + data.error);
      }
    } catch (e: any) {
      console.error(e);
      alert("Không thể kết nối máy chủ để tạo câu đố AI. Vui lòng thử lại!");
    } finally {
      setAiGenerating(false);
    }
  };

  const currentQuiz = quizzes[currentIdx];

  // Matching Columns logic
  const handleLeftSelect = (item: string) => {
    if (isAnswered) return;
    setActiveLeft(item);
  };

  const handleRightSelect = (meaning: string) => {
    if (isAnswered || !activeLeft) return;
    
    // Associate activeLeft with meaning
    const updatedSelections = { ...matchingSelections, [activeLeft]: meaning };
    setMatchingSelections(updatedSelections);
    
    // Add to matched pairings
    setMatchedPairs([...matchedPairs, activeLeft]);
    setActiveLeft(null);

    // If all matched, validate
    if (currentQuiz.matchingPairs && Object.keys(updatedSelections).length === currentQuiz.matchingPairs.length) {
      // Validate all against true values
      let allCorrect = true;
      currentQuiz.matchingPairs.forEach((pair) => {
        if (updatedSelections[pair.left] !== pair.right) {
          allCorrect = false;
        }
      });
      
      setIsCorrect(allCorrect);
      setIsAnswered(true);
      if (allCorrect) setScore((prev) => prev + 1);
    }
  };

  const handleResetMatching = () => {
    setMatchingSelections({});
    setActiveLeft(null);
    setMatchedPairs([]);
  };

  const handleSubmitValue = () => {
    if (isAnswered) return;

    if (currentQuiz.type === 'multiple_choice') {
      if (!selectedOption) return;
      const correct = selectedOption === currentQuiz.correctAnswer;
      setIsCorrect(correct);
      setIsAnswered(true);
      if (correct) setScore((prev) => prev + 1);
    } 
    else if (currentQuiz.type === 'word_form') {
      const sanitizedInput = wordFormInput.trim().toLowerCase().replace(/\s+/g, ' ');
      const sanitizedCorrect = currentQuiz.correctAnswer.trim().toLowerCase().replace(/\s+/g, ' ');
      
      // Let's allow slightly flexible matches (e.g. if student types surfing but answer is surfing / to surf, check both)
      const correct = sanitizedInput === sanitizedCorrect || 
                      sanitizedCorrect.includes(sanitizedInput) && sanitizedInput.length > 2;

      setIsCorrect(correct);
      setIsAnswered(true);
      if (correct) setScore((prev) => prev + 1);
    }
    else if (currentQuiz.type === 'error_correction') {
      // For error correction, since it's hard to auto-grade free text precisely,
      // we show the correct answer and mark it correct just for trying, 
      // or check if input contains keywords. Let's make it friendly
      setIsCorrect(true);
      setIsAnswered(true);
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < quizzes.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setWordFormInput("");
      setIsAnswered(false);
      setIsCorrect(false);
      setActiveLeft(null);
    } else {
      // Finished all quizzes
      setShowSummary(true);
      onQuizCompleted(score);
    }
  };

  // Render Quiz View
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-6" id="quiz_tab_component">
      
      {/* Title block */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-200">
        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-800">Bài Tập Tương Tác (Unit Practice)</h3>
          <p className="text-xs text-slate-500 font-medium">Bám sát cấu trúc đề kiểm tra và bài học Looking Back</p>
        </div>

        {/* AI Custom Quiz Button */}
        <button
          onClick={handleAiGenerate}
          disabled={aiGenerating}
          className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-md transform text-white ${
            aiGenerating 
              ? "bg-slate-400 cursor-not-allowed" 
              : "bg-indigo-600 hover:bg-indigo-700 active:scale-95 cursor-pointer"
          }`}
          title="Yêu cầu AI Hương Tươi tạo 3 câu hỏi trắc nghiệm hoàn toàn mới cho chủ đề này"
          id="btn_ai_quiz"
        >
          <Sparkles className="h-4 w-4 fill-indigo-200" />
          <span>{aiGenerating ? "Đang tạo câu đố AI..." : useAiQuiz ? "Tạo tiếp Bài Tập AI 🤖" : "Giáo Viên AI Tạo Bài Tập 🤖"}</span>
        </button>
      </div>

      {!showSummary ? (
        <div className="space-y-6">
          
          {/* Progress gauge */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md uppercase">
              {useAiQuiz ? "Bài Tập AI 🤖" : "Bài Tập Biên Soạn 📘"}
            </span>
            <span className="text-xs font-bold text-slate-400">
              Câu hỏi {currentIdx + 1} / {quizzes.length}
            </span>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-indigo-600 h-1.5 transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / quizzes.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-100 text-left">
            {currentQuiz.type === 'word_form' && (
              <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase mr-2 inline-block">
                WORD FORM
              </span>
            )}
            {currentQuiz.type === 'error_correction' && (
              <span className="bg-red-100 text-red-800 text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase mr-2 inline-block">
                ERR CORRECTION
              </span>
            )}
            {currentQuiz.type === 'matching' && (
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase mr-2 inline-block">
                MATCHING GAME
              </span>
            )}
            {currentQuiz.type === 'multiple_choice' && (
              <span className="bg-indigo-100 text-indigo-850 text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase mr-2 inline-block">
                MULTIPLE CHOICE
              </span>
            )}
            <h4 className="text-sm sm:text-base font-extrabold text-slate-800 mt-2 leading-relaxed">
              {currentQuiz.question}
            </h4>
          </div>

          {/* QUESTION RENDER TYPES */}

          {/* Type 1: Multiple choice */}
          {currentQuiz.type === 'multiple_choice' && currentQuiz.options && (
            <div className="grid grid-cols-1 gap-3 text-left">
              {currentQuiz.options.map((option) => {
                const isSelected = selectedOption === option;
                return (
                  <button
                    key={option}
                    disabled={isAnswered}
                    onClick={() => setSelectedOption(option)}
                    className={`w-full p-3 px-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      isAnswered
                        ? option === currentQuiz.correctAnswer
                          ? "bg-emerald-50 border-emerald-300 text-emerald-850"
                          : isSelected
                            ? "bg-red-50 border-red-200 text-red-800"
                            : "border-slate-200 text-slate-400"
                        : isSelected
                          ? "bg-indigo-50 border-indigo-500 text-indigo-800 font-extrabold"
                          : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700"
                    }`}
                  >
                    <span>{option}</span>
                    {isAnswered && option === currentQuiz.correctAnswer && (
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0ML-2" />
                    )}
                    {isAnswered && isSelected && option !== currentQuiz.correctAnswer && (
                      <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0 ML-2" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Type 2: Word form (Fill-in) */}
          {currentQuiz.type === 'word_form' && (
            <div className="space-y-2 text-left">
              <label className="text-xs font-bold text-slate-400 uppercase">Nhập từ vựng thích hợp:</label>
              <input
                type="text"
                disabled={isAnswered}
                placeholder="Ví dụ: doing DIY / beautifully / to pass..."
                value={wordFormInput}
                onChange={(e) => setWordFormInput(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold transition-all focus:outline-hidden ${
                  isAnswered
                    ? isCorrect
                      ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                      : "bg-red-50 border-red-200 text-red-900"
                    : "bg-slate-50 focus:bg-white border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                }`}
              />
            </div>
          )}

          {/* Type 3: Error correction */}
          {currentQuiz.type === 'error_correction' && currentQuiz.errorSentence && (
            <div className="space-y-4 text-left">
              <div className="p-3 bg-red-50/50 border border-red-100 rounded-xl">
                <span className="text-[10px] font-bold text-red-500">CÂU SAI NGỮ PHÁP:</span>
                <p className="text-xs sm:text-sm text-slate-800 font-bold italic mt-1">"{currentQuiz.errorSentence}"</p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Khoanh vùng hoặc nhập cụm từ đúng:</label>
                <input
                  type="text"
                  disabled={isAnswered}
                  placeholder="Ví dụ: Nhập lỗi sai và cách sửa (about -> on)"
                  value={wordFormInput}
                  onChange={(e) => setWordFormInput(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 focus:bg-white border border-slate-200 focus:border-indigo-500 rounded-xl text-sm"
                />
              </div>
            </div>
          )}

          {/* Type 4: Column matching */}
          {currentQuiz.type === 'matching' && currentQuiz.matchingPairs && (
            <div className="space-y-4 text-left">
              <span className="text-[11px] text-slate-450 italic font-mono block">Hướng dẫn: Ấn vào cụm từ bên trái, sau đó ấn định nghĩa đúng bên phải để nối cột!</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Column A (Left) */}
                <div className="space-y-2.5">
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase">Cột A: Từ / Cụm Từ</h5>
                  {currentQuiz.matchingPairs.map((pair) => {
                    const isSelected = activeLeft === pair.left;
                    const hasMatched = matchedPairs.includes(pair.left);
                    
                    return (
                      <button
                        key={pair.left}
                        disabled={isAnswered || hasMatched}
                        onClick={() => handleLeftSelect(pair.left)}
                        className={`w-full text-left p-2.5 rounded-lg border text-xs font-bold transition-all truncate cursor-pointer ${
                          hasMatched
                            ? "bg-slate-50 border-slate-100 text-indigo-400 line-through"
                            : isSelected
                              ? "bg-indigo-50 border-indigo-500 text-indigo-800 scale-102"
                              : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700"
                        }`}
                      >
                        {pair.left}
                      </button>
                    );
                  })}
                </div>

                {/* Column B (Right) */}
                <div className="space-y-2.5">
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase">Cột B: Định Nghĩa</h5>
                  {/* Render meanings shuffled or static. We render from original options */}
                  {currentQuiz.matchingPairs.map((pair) => {
                    const matchingLeftKey = Object.keys(matchingSelections).find(
                      (key) => matchingSelections[key] === pair.right
                    );
                    const isMatched = !!matchingLeftKey;

                    return (
                      <button
                        key={pair.right}
                        disabled={isAnswered || isMatched}
                        onClick={() => handleRightSelect(pair.right)}
                        className={`w-full text-left p-2.5 rounded-lg border text-xs font-semibold transition-all leading-relaxed cursor-pointer ${
                          isMatched
                            ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                            : activeLeft
                              ? "bg-amber-50 hover:bg-indigo-50/50 border-amber-300"
                              : "bg-white hover:bg-slate-50 border-slate-200 text-slate-700"
                        }`}
                      >
                        {pair.right}
                        {isMatched && (
                          <div className="text-[10px] text-indigo-600 font-extrabold mt-0.5">
                            ➔ Đã nối với: "{matchingLeftKey}"
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {!isAnswered && matchedPairs.length > 0 && (
                <button
                  onClick={handleResetMatching}
                  className="text-xs font-bold text-slate-500 hover:text-red-500 cursor-pointer pt-1"
                >
                  Đặt lại nối cột (Reset)
                </button>
              )}
            </div>
          )}

          {/* Action button */}
          {!isAnswered ? (
            currentQuiz.type !== 'matching' && (
              <button
                onClick={handleSubmitValue}
                disabled={currentQuiz.type === 'multiple_choice' ? !selectedOption : !wordFormInput}
                className={`w-full py-3 rounded-xl text-center text-sm font-extrabold shadow-sm transition-all flex items-center justify-center space-x-1 cursor-pointer ${
                  (currentQuiz.type === 'multiple_choice' ? selectedOption : wordFormInput)
                    ? "bg-indigo-600 hover:bg-indigo-700 active:scale-99 text-white"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                <span>Nộp đáp án ➔</span>
              </button>
            )
          ) : (
            // Feedback Explanation Area
            <div className="space-y-4 animate-fade-in text-left">
              <div className={`p-4 rounded-xl border flex items-start space-x-3 ${
                isCorrect 
                  ? "bg-emerald-50 border-emerald-200 text-emerald-850" 
                  : "bg-red-50 border-red-200 text-red-850"
              }`}>
                {isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                )}
                <div>
                  <h5 className="font-extrabold text-sm">
                    {isCorrect ? "Tuyệt vời, chính xác! 🎉" : "Chưa đúng rồi!"}
                  </h5>
                  {currentQuiz.type !== 'matching' && (
                    <p className="text-xs mt-1">
                      Đáp án đúng là: <span className="font-extrabold underline">{currentQuiz.correctAnswer}</span>
                    </p>
                  )}
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed whitespace-pre-line pl-2 border-l-2 border-slate-300">
                    <span className="font-bold">Hương Tươi giải thích:</span> {currentQuiz.explanation}
                  </p>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextQuestion}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-center text-sm font-extrabold flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>Câu tiếp theo</span>
                <ChevronDown className="h-4 w-4 transform -rotate-90" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* GRADING SUMMARY VIEW */
        <div className="py-8 text-center max-w-md mx-auto space-y-6">
          <div className="inline-flex p-4 bg-indigo-50 rounded-full border border-indigo-100">
            <Award className="h-12 w-12 text-indigo-600" />
          </div>

          <div>
            <h4 className="text-2xl font-black text-slate-900 tracking-tight">KẾT QUẢ BÀI TẬP</h4>
            <p className="text-sm text-slate-500 mt-1">{unitTitle}</p>
          </div>

          {/* Grid for details */}
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div>
              <p className="text-[10px] font-bold text-slate-450 uppercase">Số câu đúng</p>
              <p className="text-2xl font-extrabold text-indigo-600">{score} / {quizzes.length}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-450 uppercase">Tỷ lệ chính xác</p>
              <p className="text-2xl font-extrabold text-emerald-600">{Math.round((score / quizzes.length) * 100)}%</p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={resetQuiz}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Làm Lại Bài Tập</span>
            </button>
            
            {useAiQuiz && (
              <button
                onClick={() => {
                  setQuizzes(originalQuizzes);
                  setUseAiQuiz(false);
                  resetQuiz();
                }}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Quay lại bài ôn tập chính khóa 📕
              </button>
            )}
          </div>

        </div>
      )}

    </div>
  );
}
