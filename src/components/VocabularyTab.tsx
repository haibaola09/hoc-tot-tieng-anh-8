import { Search, Volume2, BookOpen, ToggleLeft, ToggleRight, ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, HelpCircle } from "lucide-react";
import { VocabularyItem, UserProgress } from "../types";
import { useState, MouseEvent } from "react";

interface VocabularyTabProps {
  vocabulary: VocabularyItem[];
  progress: UserProgress;
  onMarkLearned: (word: string) => void;
  learnedWords: string[];
}

export default function VocabularyTab({ vocabulary, progress, onMarkLearned, learnedWords }: VocabularyTabProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [playMode, setPlayMode] = useState<"list" | "flashcard">("list");
  
  // Flashcard State
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filter vocabulary by search query
  const filteredVocab = vocabulary.filter((vocab) =>
    vocab.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vocab.vietnamese.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSpeak = (text: string, e?: MouseEvent) => {
    if (e) {
      e.stopPropagation(); // prevent flipping card if clicking speaker inside flashcard
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.85; 
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCardIndex((prev) => (prev + 1) % vocabulary.length);
    }, 150);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCardIndex((prev) => (prev - 1 + vocabulary.length) % vocabulary.length);
    }, 150);
  };

  const currentFlashcard = vocabulary[cardIndex];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-6" id="vocabulary_tab_component">
      
      {/* Tab Mode & Tools */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-200">
        
        {/* Toggle Mode */}
        <div className="flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-indigo-500" />
          <h3 className="text-base sm:text-lg font-extrabold text-slate-800">Từ Vựng Mỗi Ngày (Vocabulary)</h3>
        </div>

        {/* View Mode Switcher */}
        <div className="flex bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setPlayMode("list")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-all ${
              playMode === "list"
                ? "bg-white text-indigo-700 shadow-xs"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Dạng Danh Sách
          </button>
          <button
            onClick={() => {
              setPlayMode("flashcard");
              setCardIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-all ${
              playMode === "flashcard"
                ? "bg-white text-indigo-700 shadow-xs"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Chơi Flashcards 🎴
          </button>
        </div>

      </div>

      {playMode === "list" ? (
        <div className="space-y-4">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm kiếm từ vựng hoặc nghĩa tiếng Việt..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 focus:bg-white text-sm border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl transition-all"
            />
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto border border-slate-100 rounded-xl">
            {filteredVocab.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-xl">
                <p className="text-xs sm:text-sm text-slate-500 font-bold">Không tìm thấy từ vựng nào khớp với từ khóa tìm kiếm.</p>
                <button 
                  onClick={() => setSearchTerm("")} 
                  className="mt-2 text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
                >
                  Xóa bộ lọc tìm kiếm
                </button>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-3 sm:px-4 py-3 text-xs font-bold text-slate-400 uppercase">Từ / Phát Âm</th>
                    <th className="px-3 sm:px-4 py-3 text-xs font-bold text-slate-400 uppercase">Loại từ / Nghĩa</th>
                    <th className="px-3 sm:px-4 py-3 text-xs font-bold text-slate-400 uppercase hidden md:table-cell">Ví dụ</th>
                    <th className="px-3 sm:px-4 py-3 text-xs font-bold text-slate-400 uppercase text-center">Học</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {filteredVocab.map((vocab) => {
                    const isLearned = learnedWords.includes(vocab.word);
                    return (
                      <tr key={vocab.word} className="hover:bg-indigo-50/20 transition-all text-xs sm:text-sm">
                        
                        {/* Word & Phonetic */}
                        <td className="px-3 sm:px-4 py-3.5">
                          <div className="flex items-center space-x-2">
                            <span className="font-extrabold text-slate-900">{vocab.word}</span>
                            <button
                              onClick={(e) => handleSpeak(vocab.word, e)}
                              className="text-slate-400 hover:text-indigo-600 p-1 rounded-md hover:bg-slate-100 cursor-pointer transition-colors"
                              title="Nghe phát âm bản xứ"
                            >
                              <Volume2 className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="text-slate-400 italic text-[11px] sm:text-xs font-mono">{vocab.phonetic}</div>
                        </td>

                        {/* POS & Meaning */}
                        <td className="px-3 sm:px-4 py-3.5">
                          <span className="inline-block bg-slate-100 text-slate-600 text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase mr-2 shrink-0">
                            {vocab.pos}
                          </span>
                          <span className="font-bold text-slate-800">{vocab.vietnamese}</span>
                        </td>

                        {/* Examples */}
                        <td className="px-3 sm:px-4 py-3.5 hidden md:table-cell max-w-xs xl:max-w-md">
                          <div className="text-xs text-slate-700 font-medium">"{vocab.exampleEng}"</div>
                          <div className="text-[11px] text-slate-400 italic mt-0.5">{vocab.exampleVie}</div>
                        </td>

                        {/* Mark learned status */}
                        <td className="px-3 sm:px-4 py-3.5 text-center">
                          <button
                            onClick={() => onMarkLearned(vocab.word)}
                            className={`p-1.5 rounded-full transition-all border shrink-0 inline-flex items-center justify-center cursor-pointer ${
                              isLearned
                                ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                                : "hover:bg-slate-50 border-slate-200 text-slate-300 hover:text-slate-600"
                            }`}
                            title={isLearned ? "Đã thành thạo từ này" : "Đánh dấu đã ôn thuộc"}
                          >
                            <CheckCircle2 className="h-5 w-5" />
                          </button>
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>

        </div>
      ) : (
        /* FLASHCARDS GAME VIEW */
        <div className="flex flex-col items-center justify-center py-6">
          {vocabulary.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 rounded-xl max-w-sm">
              <p className="text-sm text-slate-500 font-bold">Không tìm thấy từ vựng nào để chơi trong Unit này.</p>
            </div>
          ) : (
            <div className="w-full max-w-md space-y-6">
              
              {/* Card Container */}
              <div 
                onClick={() => setIsFlipped(!isFlipped)}
                className={`group bg-white rounded-3xl border-2 ${
                  isFlipped 
                    ? "border-emerald-300 bg-emerald-50/20" 
                    : "border-indigo-200 hover:border-indigo-400"
                } shadow-md p-6 h-64 flex flex-col justify-between cursor-pointer transition-all duration-300 relative select-none`}
                id="interactive_flashcard"
              >
                {/* Flip Badge Indicator */}
                <span className="absolute top-4 right-4 bg-slate-100 group-hover:bg-indigo-100 text-slate-500 group-hover:text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-md transition-all">
                  LẬT THẺ 🔄
                </span>

                {/* Card Content */}
                <div className="flex-1 flex flex-col justify-center items-center text-center mt-4">
                  {isFlipped ? (
                    // Back side (Meaning + Sentence)
                    <div className="space-y-3">
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#10b981]">
                        TIẾNG VIỆT
                      </span>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-slate-800">
                        {currentFlashcard.vietnamese}
                      </h4>
                      <div className="max-w-xs mx-auto border-t border-slate-200/50 pt-2 text-left">
                        <p className="text-xs sm:text-sm italic text-slate-600 font-sans leading-relaxed">
                          "{currentFlashcard.exampleEng}"
                        </p>
                        <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                          {currentFlashcard.exampleVie}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Front side (English)
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          {currentFlashcard.word}
                        </h4>
                        <button
                          onClick={(e) => handleSpeak(currentFlashcard.word, e)}
                          className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 p-2 rounded-xl transition-colors shrink-0"
                          title="Phát tiếng"
                        >
                          <Volume2 className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                          {currentFlashcard.pos}
                        </span>
                        <span className="text-slate-400 text-sm font-semibold italic font-mono">
                          {currentFlashcard.phonetic}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mark Learned inside card */}
                <div className="border-t border-slate-100 pt-3 flex justify-between items-center bg-white/50 -mx-6 -mb-6 px-6 pb-4 rounded-b-3xl">
                  <span className="text-xs text-slate-400 font-medium">Ấn vào thẻ để đảo nghĩa</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onMarkLearned(currentFlashcard.word);
                    }}
                    className={`flex items-center space-x-1 border hover:bg-slate-50 px-2.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                      learnedWords.includes(currentFlashcard.word)
                        ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                        : "border-slate-200 text-slate-500"
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{learnedWords.includes(currentFlashcard.word) ? "Đã Thuộc" : "Chưa Thuộc"}</span>
                  </button>
                </div>

              </div>

              {/* Card Controls */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">
                  Từ {cardIndex + 1} trên {vocabulary.length}
                </span>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={handlePrevCard}
                    className="p-2 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-600 rounded-xl transition-all cursor-pointer"
                    title="Từ trước đó"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleNextCard}
                    className="p-2 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-600 rounded-xl transition-all cursor-pointer"
                    title="Từ tiếp theo"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>
      )}

    </div>
  );
}
