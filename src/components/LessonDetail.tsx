import { Compass, BookOpen, MessageSquare, Volume2, HelpCircle } from "lucide-react";
import { UnitData } from "../types";

interface LessonDetailProps {
  unit: UnitData;
  onTutorClick: () => void;
}

export default function LessonDetail({ unit, onTutorClick }: LessonDetailProps) {
  
  // Highlighting key phonetic words to click and trigger browser Speech Synthesis
  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.85; // slightly slower for better listening
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden" id="lesson_detail_component">
      
      {/* Accent Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 p-4 sm:p-5 text-white">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/10 rounded-lg">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold">Kiến Thức Trọng Tâm (Unit Focus)</h3>
            <p className="text-xs text-indigo-100 font-medium">Tóm tắt lý thuyết, từ vựng, ngữ pháp và phát âm cốt lõi</p>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        
        {/* Core Themes Summary */}
        <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-100 flex items-start space-x-3">
          <BookOpen className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-slate-800">Chủ Điểm Học Tập</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">{unit.overview.theme}</p>
          </div>
        </div>

        {/* Column Grid: Grammar vs Pronunciation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Grammar column */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="flex items-center space-x-2 pb-3 mb-3 border-b border-slate-200">
              <span className="p-1 px-2 text-[10px] uppercase font-extrabold bg-indigo-100 text-indigo-700 rounded-md">
                Lớp 8
              </span>
              <h4 className="text-sm font-extrabold text-slate-800">Ngữ Pháp (Grammar)</h4>
            </div>
            <div className="text-xs text-slate-700 leading-relaxed font-sans whitespace-pre-line text-left">
              {unit.overview.grammarSummary}
            </div>
          </div>

          {/* Pronunciation Column */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="flex items-center space-x-2 pb-3 mb-3 border-b border-slate-200">
              <span className="p-1 px-2 text-[10px] uppercase font-extrabold bg-emerald-100 text-emerald-800 rounded-md">
                Âm Học
              </span>
              <h4 className="text-sm font-extrabold text-slate-800">Phát Âm (Pronunciation)</h4>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed text-left mb-3">
              {unit.overview.pronunciationSummary}
            </p>
            
            {/* Interactive Pronunciation Sound Bites */}
            <div className="mt-3 bg-white p-3 rounded-lg border border-slate-100">
              <h5 className="text-[11px] font-bold text-slate-400 uppercase mb-2">Từ khóa phát âm chuẩn (Click để nghe):</h5>
              <div className="flex flex-wrap gap-1.5">
                {unit.vocabulary.map((vocab) => (
                  <button
                    key={vocab.word}
                    onClick={() => handleSpeak(vocab.word)}
                    className="flex items-center space-x-1.5 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 transition-all border border-slate-200 hover:border-indigo-200 rounded-lg px-2 py-1 text-xs text-slate-600 font-semibold cursor-pointer"
                  >
                    <span>{vocab.word}</span>
                    <Volume2 className="h-3 w-3 opacity-60" />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* AI Tutor call to action */}
        <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2.5 bg-indigo-600 text-white rounded-lg">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-800">Chưa hiểu rõ lý thuyết?</h4>
              <p className="text-[11px] sm:text-xs text-slate-500">Bắt chuyện ngay với giáo viên AI Hương Tươi để được giải thích thêm!</p>
            </div>
          </div>
          <button
            onClick={onTutorClick}
            className="w-full sm:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            Hỏi Trợ lý Hương Tươi 💬
          </button>
        </div>

      </div>
    </div>
  );
}
