import { useState, useEffect } from "react";
import { READING_DATA, ReadingItem } from "../data/reading_data";
import { UserProgress } from "../types";
import { BookOpen, AlertCircle, HelpCircle, CheckCircle, XCircle } from "lucide-react";

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

  // Reset states when unit changes
  useEffect(() => {
    setSelectedAnswers({});
    setSubmitted({});
    setWrongAnswers({});
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
      
      {/* LEFT COLUMN: Passage & Image (8 cols out of 12) */}
      <div className="lg:col-span-7 xl:col-span-8 space-y-6">
        
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

          <div className="p-5 sm:p-7">
            
            {/* The Text Content */}
            <div className="prose prose-slate max-w-none text-left">
              {currentReading.passage.split("\n\n").map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 text-justify indent-4 font-sans font-normal"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Micro Highlight Notice */}
            <div className="mt-6 flex items-center space-x-2 text-[11px] text-slate-400 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              <HelpCircle className="h-4 w-4 text-indigo-400 shrink-0" />
              <span>Nên đọc kỹ từng đoạn văn để tóm tắt các luận điểm chính ứng dụng trả lời trắc nghiệm.</span>
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
