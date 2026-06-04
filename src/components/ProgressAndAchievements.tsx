import { Award, CheckCircle2, Star, Zap, Trash2, ArrowLeft, Trophy } from "lucide-react";
import { UserProgress, Badge } from "../types";

interface ProgressAndAchievementsProps {
  progress: UserProgress;
  totalVocabCount: number;
  learnedCount: number;
  onResetProgress: () => void;
  onBack: () => void;
}

export default function ProgressAndAchievements({ progress, totalVocabCount, learnedCount, onResetProgress, onBack }: ProgressAndAchievementsProps) {
  
  // Custom definitions for all 12 unlockable Unit badges and 4 general milestones
  const BADGES_CONFIG = [
    {
      id: "u1_badge",
      title: "DIY Artisan",
      description: "Đội vương miện thành thạo Unit 1 về thời gian rảnh rỗi và đồ tự chế",
      icon: "🎨",
      condition: progress.completedUnits.includes(1)
    },
    {
      id: "u2_badge",
      title: "Countryside Explorer",
      description: "Thành tựu xuất sắc mến khách và ruộng lúa Unit 2",
      icon: "🌾",
      condition: progress.completedUnits.includes(2)
    },
    {
      id: "u3_badge",
      title: "Teen Peer Mentor",
      description: "Vượt qua áp lực trường học và hoàn thành xuất sắc Unit 3",
      icon: "🎒",
      condition: progress.completedUnits.includes(3)
    },
    {
      id: "u4_badge",
      title: "National Heritage Guardian",
      description: "Có hiểu biết sâu rộng về 54 dân tộc anh em của Unit 4",
      icon: "🏔️",
      condition: progress.completedUnits.includes(4)
    },
    {
      id: "u5_badge",
      title: "Traditions Keeper",
      description: "Worship ancestors và gìn giữ văn hóa gia đình Unit 5",
      icon: "🏮",
      condition: progress.completedUnits.includes(5)
    },
    {
      id: "u6_badge",
      title: "Cosmopolitan Citizen",
      description: "Khám phá ẩm thực và phong cách sống các nước Unit 6",
      icon: "🍜",
      condition: progress.completedUnits.includes(6)
    },
    {
      id: "u7_badge",
      title: "Green Warrior",
      description: "Tích cực chung tay giảm thiểu carbon footprint Unit 7",
      icon: "🌱",
      condition: progress.completedUnits.includes(7)
    },
    {
      id: "u8_badge",
      title: "Wise Consumer",
      description: "Nắm vững kỹ năng mua sắm, giá rổ và tiết kiệm Unit 8",
      icon: "🛒",
      condition: progress.completedUnits.includes(8)
    },
    {
      id: "u9_badge",
      title: "Disaster Specialist",
      description: "Trang bị cứu hộ khẩn cấp xuất sắc của Unit 9",
      icon: "⚡",
      condition: progress.completedUnits.includes(9)
    },
    {
      id: "u10_badge",
      title: "Future Communicator",
      description: "Làm chủ thần giao cách cảm và hội thảo ảo Unit 10",
      icon: "🛸",
      condition: progress.completedUnits.includes(10)
    },
    {
      id: "u11_badge",
      title: "Next-Gen Innovator",
      description: "Phát kiến công nghệ sinh trắc học thông minh Unit 11",
      icon: "🤖",
      condition: progress.completedUnits.includes(11)
    },
    {
      id: "u12_badge",
      title: "Interstellar Captain",
      description: "Du hành hệ mặt trời và tìm kiếm sự sống Unit 12",
      icon: "🪐",
      condition: progress.completedUnits.includes(12)
    },
    // Milestones
    {
      id: "streak_badge",
      title: "Daily Champion",
      description: "Duy trì dồi dào học tập tối thiểu 3 ngày học tập liên tục",
      icon: "🔥",
      condition: progress.dailyStreak >= 3
    },
    {
      id: "vocab_badge",
      title: "Lexicon Expert",
      description: "Đánh dấu đã học thuộc lòng trên 5 từ vựng bất kỳ",
      icon: "📒",
      condition: learnedCount >= 5
    }
  ];

  const totalBadgesEarned = BADGES_CONFIG.filter((b) => b.condition).length;

  const handleResetClick = () => {
    onResetProgress();
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-6 space-y-6 text-left" id="progress_component">
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-xs sm:text-sm font-extrabold text-indigo-600 hover:text-indigo-800 transition-all cursor-pointer group"
      >
        <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-0.5 transition-transform" />
        <span>Quay lại trang học tập chính</span>
      </button>

      {/* Main progress cards */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-white/10 rounded-xl text-amber-400">
              <Trophy className="h-5 w-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-black tracking-tight">KỶ LỤC HỌC TẬP</h3>
          </div>
          <p className="text-xs text-indigo-200">Bạn đang tiến bộ rất nhanh mỗi ngày! Hãy chinh phục toàn bộ 12 Units để mở khóa Huy hiệu Bạch Kim nhé!</p>
        </div>

        {/* Big badges metric counter */}
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <span className="text-3xl sm:text-4xl font-black text-amber-400">{progress.starsEarned}</span>
            <p className="text-[10px] text-indigo-200 font-bold uppercase mt-1">SAO ★ ĐẠT ĐƯỢC</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <span className="text-3xl sm:text-4xl font-black text-emerald-400">{totalBadgesEarned}</span>
            <p className="text-[10px] text-indigo-200 font-bold uppercase mt-1">HUY HIỆU ĐÃ CÓ</p>
          </div>
        </div>
      </div>

      {/* Dynamic Statistics Trackers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Unit Completion Rate */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <h5 className="text-xs font-extrabold text-slate-700 uppercase">Hoàn Thành Unit</h5>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
              {progress.completedUnits.length} / 12
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all"
              style={{ width: `${(progress.completedUnits.length / 12) * 100}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">Units đạt trên 70% điểm kiểm tra sẽ được đánh dấu hoàn thành bôi xanh.</p>
        </div>

        {/* Vocabulary Progress */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <h5 className="text-xs font-extrabold text-slate-700 uppercase">Học Thuộc Từ Vựng</h5>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              {learnedCount} / {totalVocabCount}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-emerald-500 h-2 rounded-full transition-all"
              style={{ width: `${(learnedCount / totalVocabCount) * 100}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">Đánh dấu kiểm tích 'đã thuộc' ở Tab Từ Vựng để đẩy tiến độ từ vựng.</p>
        </div>

        {/* Active Streak */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
          <div className="space-y-1.5">
            <h5 className="text-xs font-extrabold text-slate-700 uppercase">Streak Liên Tục</h5>
            <p className="text-sm font-bold text-slate-800">{progress.dailyStreak} ngày học liên tục</p>
            <p className="text-[11px] text-slate-400">Vào ôn tập đều đặn hàng ngày để giữ ngọn lửa thăng hạng!</p>
          </div>
          <Zap className="h-10 w-10 text-orange-500 fill-orange-50 animate-bounce" />
        </div>

      </div>

      {/* Badges Grid */}
      <div className="space-y-4">
        <h4 className="text-base font-extrabold text-slate-800 flex items-center gap-1.5 border-b border-slate-100 pb-2">
          <span>Huy Hiệu Đã Chinh Phục ({totalBadgesEarned})</span>
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BADGES_CONFIG.map((badge) => (
            <div
              key={badge.id}
              className={`p-4 rounded-xl border flex items-start space-x-3 transition-all ${
                badge.condition
                  ? "bg-amber-50/40 border-amber-200 shadow-2xs"
                  : "bg-slate-50/50 border-slate-200 opacity-60"
              }`}
            >
              <div className="text-3xl p-1 select-none shrink-0 bg-white shadow-3xs rounded-lg border border-slate-100">{badge.icon}</div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center space-x-1.5">
                  <h5 className="text-xs sm:text-sm font-extrabold text-slate-800">{badge.title}</h5>
                  {badge.condition ? (
                    <span className="text-[9px] bg-amber-100 font-bold px-1 text-amber-700 rounded-md">ĐÃ NHẬN</span>
                  ) : (
                    <span className="text-[9px] bg-slate-200 font-bold px-1 text-slate-500 rounded-md">KHOÁ</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
        <div>
          <h5 className="text-xs font-extrabold text-red-650 uppercase">Tính Năng Hệ Thống</h5>
          <p className="text-[11px] text-slate-400 mt-1">Sử dụng để đặt lại tất cả tiến trình học tập nếu muốn học lại từ đầu.</p>
        </div>
        <button
          onClick={handleResetClick}
          className="flex items-center space-x-1.5 px-3 py-2 border border-red-200 hover:bg-red-50 text-red-600 rounded-xl text-xs font-bold transition-all cursor-pointer"
        >
          <Trash2 className="h-4 w-4 shrink-0" />
          <span>Đặt lại tiến trình</span>
        </button>
      </div>

    </div>
  );
}
