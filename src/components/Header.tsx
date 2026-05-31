import { Award, Zap, BookOpen, Star, RefreshCw } from "lucide-react";
import { UserProgress } from "../types";
import { useEffect, useState } from "react";

// Curated daily inspirations matching the English 8 theme
const DAILY_BOOSTS = [
  {
    quote: "Learn as if you were to live forever; live as if you were to die tomorrow.",
    author: "Mahatma Gandhi",
    vietnamese: "Hãy học như thể bạn sẽ sống mãi mãi; hãy sống như thể bạn sẽ mất vào ngày mai."
  },
  {
    quote: "The beautiful thing about learning is that nobody can take it away from you.",
    author: "B.B. King",
    vietnamese: "Điều tuyệt vời nhất của việc học hành là không ai có thể giật mất nó khỏi tay bạn."
  },
  {
    quote: "A different language is a different vision of life.",
    author: "Federico Fellini",
    vietnamese: "Một ngôn ngữ mới mang lại một cách nhìn nhận hoàn toàn mới về cuộc đời."
  },
  {
    quote: "To have another language is to possess a second soul.",
    author: "Charlemagne",
    vietnamese: "Sở hữu một ngôn ngữ thứ hai chính là sở hữu một tâm hồn thứ hai."
  }
];

interface HeaderProps {
  progress: UserProgress;
  onOpenAchievements: () => void;
}

export default function Header({ progress, onOpenAchievements }: HeaderProps) {
  const [boostIndex, setBoostIndex] = useState(0);

  useEffect(() => {
    // Generate static daily boost based on current day
    const day = new Date().getDate();
    setBoostIndex(day % DAILY_BOOSTS.length);
  }, []);

  const handleNextBoost = () => {
    setBoostIndex((prev) => (prev + 1) % DAILY_BOOSTS.length);
  };

  const dailyQuote = DAILY_BOOSTS[boostIndex];

  return (
    <header className="bg-white border-b border-slate-200" id="app_header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-indigo-600 text-white rounded-xl shadow-md shadow-indigo-100">
              <BookOpen className="h-6 w-6" id="logo_icon" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                English 8 <span className="text-xs bg-indigo-100 text-indigo-800 font-semibold px-2 py-0.5 rounded-full">Global Success</span>
              </h1>
              <p className="text-xs text-slate-500 font-medium">Học tốt tiếng Anh lớp 8 với bài tập & Trợ lý thông minh Hương Tươi - Designed by Ngô Mạnh Hải</p>
            </div>
          </div>

          {/* Daily Quote Container */}
          <div className="flex-1 max-w-lg md:mx-6 bg-slate-50 rounded-xl p-3 border border-slate-100 relative group">
            <span className="absolute -top-2 left-3 bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-bold px-1.5 py-0.5 rounded-md">
              DAILY ENGLISH BOOST 🚀
            </span>
            <div className="flex justify-between items-start gap-2 pt-1">
              <div>
                <p className="text-xs italic text-slate-700 font-medium font-sans">
                  "{dailyQuote.quote}" — <span className="text-slate-500 font-semibold not-italic">{dailyQuote.author}</span>
                </p>
                <p className="text-[11px] text-slate-500 mt-1">{dailyQuote.vietnamese}</p>
              </div>
              <button 
                onClick={handleNextBoost} 
                className="text-slate-400 hover:text-indigo-600 transition-colors p-1 rounded-lg hover:bg-slate-200/50"
                title="Đổi câu đố động lực khác"
              >
                <RefreshCw className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center space-x-4 self-end md:self-auto bg-slate-50 p-1.5 rounded-xl border border-slate-200">
            {/* Streak */}
            <div className="flex items-center space-x-1.5 px-3 py-1 bg-white rounded-lg border border-slate-100 shadow-xs">
              <Zap className="h-4 w-4 text-orange-500 fill-orange-50" />
              <div className="text-right">
                <p className="text-[10px] text-slate-400 font-bold leading-3">STREAK</p>
                <p className="text-xs font-bold text-slate-800 leading-4">{progress.dailyStreak} ngày</p>
              </div>
            </div>

            {/* Stars/Score */}
            <div className="flex items-center space-x-1.5 px-3 py-1 bg-white rounded-lg border border-slate-100 shadow-xs">
              <Star className="h-4 w-4 text-amber-500 fill-amber-50" />
              <div className="text-right">
                <p className="text-[10px] text-slate-400 font-bold leading-3">STARS</p>
                <p className="text-xs font-bold text-slate-800 leading-4">{progress.starsEarned} ★</p>
              </div>
            </div>

            {/* Achievements Trigger Button */}
            <button 
              onClick={onOpenAchievements}
              className="flex items-center space-x-1.5 px-3 py-1 bg-indigo-50 hover:bg-indigo-100 transition-all rounded-lg border border-indigo-100 text-indigo-700 cursor-pointer"
              id="ach_button"
            >
              <Award className="h-4 w-4 shrink-0" />
              <span className="text-xs font-bold">Thành tích</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
