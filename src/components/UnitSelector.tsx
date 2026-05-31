import { BookOpen, CheckCircle2, ChevronDown, Compass } from "lucide-react";
import { UnitData, UserProgress } from "../types";
import { useState } from "react";

interface UnitSelectorProps {
  units: UnitData[];
  selectedUnitId: number;
  onSelectUnit: (unitId: number) => void;
  progress: UserProgress;
}

export default function UnitSelector({ units, selectedUnitId, onSelectUnit, progress }: UnitSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedUnit = units.find((u) => u.id === selectedUnitId) || units[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs" id="unit_selector_component">
      <div className="p-4 sm:p-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Active Unit Description */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 text-[11px] font-bold px-2 py-0.5 rounded-md mb-2">
              <Compass className="h-3 w-3" /> ĐANG HỌC
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              {selectedUnit.title}
            </h2>
            <p className="text-sm font-medium text-slate-500 mt-1">
              Chủ đề: <span className="text-indigo-600 font-semibold">{selectedUnit.overview.theme}</span>
            </p>
          </div>

          {/* Selector Trigger Button / Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full sm:w-64 flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 active:bg-slate-100 transition-all border border-slate-200 rounded-xl px-4 py-3 cursor-pointer text-left"
              id="dropdown_unit_trigger"
            >
              <div className="flex items-center space-x-2.5">
                <BookOpen className="h-4 w-4 text-indigo-500" />
                <span className="text-sm font-bold text-slate-700">Chọn Bài Học (Unit)</span>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </button>

            {/* Dropdown Options */}
            {isOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsOpen(false)} 
                />
                <div className="absolute right-0 mt-2 w-full sm:w-72 bg-white border border-slate-200 rounded-xl shadow-xl z-20 max-h-96 overflow-y-auto p-1.5 scrollbar-thin">
                  <div className="text-[11px] font-bold text-slate-400 px-3 py-1.5 uppercase sticky top-0 bg-white border-b border-slate-100">
                    Danh Sách 12 Units Lớp 8
                  </div>
                  {units.map((unit) => {
                    const isSelected = unit.id === selectedUnitId;
                    const isCompleted = progress.completedUnits.includes(unit.id);

                    return (
                      <button
                        key={unit.id}
                        onClick={() => {
                          onSelectUnit(unit.id);
                          setIsOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs sm:text-sm cursor-pointer transition-all ${
                          isSelected
                            ? "bg-indigo-600 text-white font-bold"
                            : "hover:bg-slate-50 text-slate-700 hover:text-slate-900"
                        }`}
                      >
                        <div className="flex flex-col pr-2">
                          <span className={`${isSelected ? "text-indigo-100" : "text-slate-500"} font-bold text-[10px]`}>
                            Unit {unit.id}
                          </span>
                          <span className="font-semibold truncate max-w-44 md:max-w-56">{unit.title.replace(`Unit ${unit.id}: `, '')}</span>
                        </div>
                        {isCompleted && (
                          <CheckCircle2 className={`h-4 w-4 shrink-0 ${isSelected ? "text-indigo-200" : "text-emerald-500"}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
