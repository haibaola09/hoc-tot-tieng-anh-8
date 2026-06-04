import { Sparkles, Trophy, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { UnitData, UserProgress } from "../types";
import { useState } from "react";

interface UnitsProgressBoardProps {
  units: UnitData[];
  progress: UserProgress;
  learnedWords: string[];
  selectedUnitId: number;
  onSelectUnit: (unitId: number) => void;
}

export default function UnitsProgressBoard({
  units,
  progress,
  learnedWords,
  selectedUnitId,
  onSelectUnit,
}: UnitsProgressBoardProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Calculate stats for each of the 12 units
  const unitsStats = units.map((unit) => {
    const vocabInUnit = unit.vocabulary;
    const learnedInUnit = vocabInUnit.filter((v) => learnedWords.includes(v.word)).length;
    const vocabRate = vocabInUnit.length > 0 ? learnedInUnit / vocabInUnit.length : 0;
    
    const quizPassed = progress.completedUnits.includes(unit.id);
    
    // 50% vocab learned status + 50% passing the interactive quiz
    const percentage = Math.round((vocabRate * 50) + (quizPassed ? 50 : 0));

    return {
      id: unit.id,
      title: unit.title.replace(`Unit ${unit.id}: `, ""),
      percentage,
      vocabLearned: learnedInUnit,
      vocabTotal: vocabInUnit.length,
      quizPassed,
    };
  });

  // Calculate general overall course completion
  const courseCompletionSum = unitsStats.reduce((sum, u) => sum + u.percentage, 0);
  const overallPercentage = Math.round(courseCompletionSum / 12);

  return (
    <div 
      className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden text-left" 
      id="units_progress_board"
    >
      {/* Header with main stats line */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-all select-none"
      >
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <div className="p-2 bg-indigo-50 text-indigo-705 rounded-xl shrink-0">
            <Trophy className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm sm:text-base font-extrabold text-slate-800 flex items-center gap-2 flex-wrap">
              <span>Bảng Theo Dõi Tiến Độ 12 Units Lớp 8</span>
              <span className="p-1 px-2.5 text-xs bg-emerald-100 text-emerald-800 font-black rounded-lg">
                Đã học: {overallPercentage}%
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5 truncate">
              Bao quát {units.length} bài học. Học từ vựng và đỗ bài tập để đạt 100% hoàn hảo!
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 pl-2">
          {/* Overall mini-progress-bar */}
          <div className="hidden sm:block w-32 bg-slate-100 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${overallPercentage}%` }}
            />
          </div>
          <button 
            type="button" 
            className="text-slate-400 hover:text-slate-600 p-1 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200"
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Expanded grid of 12 Units */}
      {isExpanded && (
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/40">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {unitsStats.map((stat) => {
              const isActive = stat.id === selectedUnitId;
              const isFinished = stat.percentage === 100;

              let bgClass = "bg-white border-slate-200 hover:border-slate-300";
              let textTitleClass = "text-slate-800";
              let progressColorClass = "bg-slate-200";
              let progressFillColorClass = "bg-indigo-500";
              
              if (isActive) {
                bgClass = "bg-indigo-50/50 border-indigo-400 ring-1 ring-indigo-400 shadow-2xs";
              } else if (isFinished) {
                bgClass = "bg-emerald-50/20 border-emerald-250 hover:border-emerald-350";
                textTitleClass = "text-emerald-950";
                progressFillColorClass = "bg-emerald-500";
              } else if (stat.percentage > 0) {
                bgClass = "bg-amber-50/10 border-amber-200 hover:border-amber-300";
                progressFillColorClass = "bg-amber-500";
              }

              return (
                <button
                  key={stat.id}
                  onClick={() => onSelectUnit(stat.id)}
                  className={`p-3 rounded-2xl border text-left cursor-pointer transition-all active:scale-97 flex flex-col justify-between h-28 group relative ${bgClass}`}
                  title={`Ấn để chuyển nhanh sang Unit ${stat.id}`}
                >
                  {/* Unit Number & Icon mark */}
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-black text-slate-400 group-hover:text-amber-500 transition-colors uppercase">
                      Unit {stat.id}
                    </span>
                    {isFinished ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    ) : (
                      <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                        {stat.percentage}%
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="my-1.5 flex-1 select-none">
                    <p className={`text-xs font-extrabold leading-tight line-clamp-2 ${textTitleClass}`}>
                      {stat.title}
                    </p>
                  </div>

                  {/* Detailed Unit Stats */}
                  <div className="space-y-1.5 w-full">
                    {/* Micro completion bar */}
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`h-1.5 rounded-full transition-all duration-500 ${progressFillColorClass}`}
                        style={{ width: `${stat.percentage}%` }}
                      />
                    </div>
                    {/* Footnote statistics */}
                    <div className="flex justify-between items-center text-[9px] font-bold text-slate-400">
                      <span> Từ: {stat.vocabLearned}/{stat.vocabTotal}</span>
                      <span> {stat.quizPassed ? "Quiz ✓" : "Quiz ✕"}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick learning tip footer info */}
          <div className="mt-4 flex items-center space-x-1.5 text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
            <span>
              Mẹo học nhanh: Các thẻ bài học có màu vàng nhạt là đang học dở, màu xanh lục là đã hoàn thành xuất sắc 100%. Hãy gõ câu hỏi cho Tutor AI Hương Tươi để củng cố phản xạ nghe phát âm nhé!
            </span>
          </div>

        </div>
      )}
    </div>
  );
}
