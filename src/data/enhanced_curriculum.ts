import { UnitData, QuizQuestion, VocabularyItem } from "../types";
import { CURRICULUM as BASE_CURRICULUM } from "./curriculum";

// Extra vocabulary items to ensure EVERY single unit has exactly 10 robust terms
const SUPPLEMENTARY_VOCABULARY: Record<number, Omit<VocabularyItem, "unitId">[]> = {
  1: [
    { word: "adore", pos: "v", phonetic: "/əˈdɔː(r)/", vietnamese: "yêu thích, mê mẩn", exampleEng: "She adores making origami cranes under her parents' coaching.", exampleVie: "Cô ấy mê mẩn công việc gấp hạc giấy dưới sự chỉ dạy của cha mẹ." },
    { word: "addicted", pos: "adj", phonetic: "/əˈdɪktɪd/", vietnamese: "nghiện, bị cuốn hút vào", exampleEng: "He is addicted to playing computer games in his free time.", exampleVie: "Anh ấy rất nghiện chơi trò chơi máy tính vào lúc rảnh rỗi." },
    { word: "hangout", pos: "n", phonetic: "/ˈhæŋaʊt/", vietnamese: "địa điểm tụ tập, vui chơi quen thuộc", exampleEng: "The local cinema is the favorite hangout for teenagers.", exampleVie: "Rạp chiếu phim địa phương là địa điểm tụ tập ưa thích của tuổi teen." },
    { word: "virtual", pos: "adj", phonetic: "/ˈvɜːtʃuəl/", vietnamese: "ảo, trực tuyến qua mạng", exampleEng: "Leisure activities can be both virtual and physical.", exampleVie: "Hoạt động giải trí có thể vừa mang tính trực tuyến ảo vừa mang tính trực tiếp thực tế." }
  ],
  2: [
    { word: "paddy field", pos: "n", phonetic: "/ˈpædi fiːld/", vietnamese: "ruộng lúa, cánh đồng trồng thóc gạo", exampleEng: "Golden paddy fields look extremely beautiful in harvest season.", exampleVie: "Những ruộng lúa chín vàng óng trông thật tuyệt vào mùa gặt." },
    { word: "peaceful", pos: "adj", phonetic: "/ˈpiːsfl/", vietnamese: "yên bình, thanh thản, tĩnh lặng", exampleEng: "We enjoy a peaceful atmosphere and clean fresh air in this village.", exampleVie: "Chúng tôi tận hưởng bầu không khí yên bình và không khí trong lành ở ngôi làng này." },
    { word: "load", pos: "v", phonetic: "/ləʊd/", vietnamese: "chất hàng, bốc dỡ rơm rạ hay thóc lên xe kéo", exampleEng: "The workers are helping farmers load rice straw onto the carts.", exampleVie: "Các công nhân đang giúp nông dân chất rơm rạ khô lên xe kéo." },
    { word: "well-trained", pos: "adj", phonetic: "/ˌwel ˈtreɪnd/", vietnamese: "được huấn luyện kỹ càng, thành thục", exampleEng: "The buffaloes are well-trained to help farmers plough fields.", exampleVie: "Các chú trâu được huấn luyện thành thục để giúp nông dân cày ruộng." },
    { word: "rural", pos: "adj", phonetic: "/ˈrʊərəl/", vietnamese: "thuộc về nông thôn, làng quê dã ngoại", exampleEng: "Her family moved away from city smoke to live in a rural estate.", exampleVie: "Gia đình cô ấy rời khỏi khói bụi thành phố để về sống tại một điền trang nông thôn." }
  ],
  3: [
    { word: "avoid", pos: "v", phonetic: "/əˈvɔɪd/", vietnamese: "tránh né, phòng ngừa điều không tốt", exampleEng: "To avoid stress, students should balance homework with playtime.", exampleVie: "Để tránh căng thẳng, học sinh nên cân bằng bài tập về nhà với thời gian chơi." },
    { word: "stressful", pos: "adj", phonetic: "/ˈstresfl/", vietnamese: "áp lực lớn, gây căng thẳng mệt mỏi", exampleEng: "Preparing for midterm exams can be very stressful for teenagers.", exampleVie: "Chuẩn bị cho bài thi giữa kỳ có thể cực kỳ căng thẳng đối với học sinh tuổi teen." },
    { word: "coach", pos: "n", phonetic: "/kəʊtʃ/", vietnamese: "huấn luyện viên, người hướng dẫn kèm cặp", exampleEng: "Our football coach is highly enthusiastic and patient.", exampleVie: "Huấn luyện viên bóng đá của chúng tôi rất nhiệt huyết và kiên nhẫn." },
    { word: "concentrate", pos: "v", phonetic: "/ˈkɒnsntreɪt/", vietnamese: "tập trung cao độ tinh thần", exampleEng: "Noisy environments make it hard to concentrate on math homework.", exampleVie: "Môi trường ồn ào khiến ta thật khó tập trung làm bài tập toán." },
    { word: "expectation", pos: "n", phonetic: "/ˌekspekˈteɪʃn/", vietnamese: "sự kỳ vọng, mong đợi từ người khác", exampleEng: "We often feel pressured by parents' high expectations of grades.", exampleVie: "Chúng tôi thường cảm thấy áp lực bởi kỳ vọng điểm số quá cao từ cha mẹ." }
  ],
  4: [
    { word: "ethnic minority", pos: "n", phonetic: "/ˈeθnɪk maɪˈnɒrəti/", vietnamese: "dân tộc thiểu số", exampleEng: "There are 53 ethnic minority groups living peacefully in Vietnam.", exampleVie: "Có 53 nhóm dân tộc thiểu số đang sinh sống hòa bình tại Việt Nam." },
    { word: "costume", pos: "n", phonetic: "/ˈkɒstjuːm/", vietnamese: "trang phục truyền thống di sản văn hóa", exampleEng: "Each minority group wears different traditional hand-woven costumes.", exampleVie: "Mỗi nhóm thiểu số mặc các trang phục truyền thống dệt thổ cẩm khác nhau." },
    { word: "communal house", pos: "n", phonetic: "/kəˈmjuːnl haʊs/", vietnamese: "nhà rông bản làng, nhà sinh hoạt chung", exampleEng: "The village communal house is always built in the exact center.", exampleVie: "Ngôi nhà rông cộng đồng của bản làng luôn được xây dựng ở chính giữa trung tâm." },
    { word: "heritage", pos: "n", phonetic: "/ˈherɪtɪdʒ/", vietnamese: "di sản truyền thống vô giá cứu giữ", exampleEng: "The unique music instruments constitute beautiful cultural heritage.", exampleVie: "Các nhạc cụ độc đáo tạo nên những di sản văn hóa tuyệt đẹp." },
    { word: "weave", pos: "v", phonetic: "/wiːv/", vietnamese: "dệt sợi vải, dệt lụa/thổ cẩm", exampleEng: "The ethnic women are well-trained to weave gorgeous brocade.", exampleVie: "Phụ nữ dân tộc được đào tạo bài bản để dệt nên những dải thổ cẩm tuyệt đẹp." }
  ],
  5: [
    { word: "worship", pos: "v", phonetic: "/ˈwɜːʃɪp/", vietnamese: "thờ cúng tổ tiên, tôn kính tôn giáo", exampleEng: "Vietnamese families worship their ancestors on special holidays.", exampleVie: "Các gia đình Việt Nam thờ cúng tổ tiên vào các dịp lễ tết đặc biệt." },
    { word: "offspring", pos: "n", phonetic: "/ˈɒfsprɪŋ/", vietnamese: "con cháu, thế hệ sau trong gia tộc", exampleEng: "The patriarch teaches his offspring to respect filial duties.", exampleVie: "Người chủ gia đình dạy bảo con cháu mình luôn ghi nhớ đạo đức hiếu nghĩa." },
    { word: "respect", pos: "v", phonetic: "/rɪˈspekt/", vietnamese: "tôn trọng, tôn hiếu kính nể người lớn", exampleEng: "You should respect local traditions when visiting traditional homes.", exampleVie: "Bạn nên tôn trọng phong tục địa phương khi tới tham quan các ngôi nhà truyền thống." },
    { word: "belong to", pos: "v", phonetic: "/bɪˈlɒŋ tuː/", vietnamese: "thuộc về, là thành viên của", exampleEng: "This costume belongs to the Tay ethnic minority group.", exampleVie: "Bộ quần áo truyền thống này thuộc về của nhóm đồng bào người Tày." },
    { word: "table manners", pos: "n", phonetic: "/ˈteɪbl ˈmænəz/", vietnamese: "phép tắc cư xử chuẩn mực trên bàn ăn", exampleEng: "Learning proper table manners is fully essential for every child.", exampleVie: "Học các quy tắc bàn ăn đúng mực là hoàn toàn thiết yếu cho mỗi đứa trẻ." }
  ],
  6: [
    { word: "greet", pos: "v", phonetic: "/ɡriːt/", vietnamese: "chào hỏi gùi chào khách khứa", exampleEng: "They usually greet each other with hands folded and a warm bow.", exampleVie: "Họ thường chào hỏi nhau bằng cách chắp tay và cúi đầu chào ấm áp." },
    { word: "lifestyle", pos: "n", phonetic: "/ˈlaɪfstaɪl/", vietnamese: "lối sống, phong cách sinh hoạt của cá nhân", exampleEng: "A healthy lifestyle contains nutritious foods and regular workouts.", exampleVie: "Một lối sống lành mạnh bao gồm thực phẩm nhiều dinh dưỡng và rèn luyện thể dục thường xuyên." },
    { word: "host", pos: "n", phonetic: "/həʊst/", vietnamese: "chủ nhà tiếp đón khách mời", exampleEng: "The warm host offered us plenty of delicious local regional dishes.", exampleVie: "Chủ nhà nồng hậu đã thết đãi chúng tôi rất nhiều món ngon địa phương." },
    { word: "local cuisine", pos: "n", phonetic: "/ˈləʊkl kwɪˈziːn/", vietnamese: "ẩm thực địa phương phong phú đậm vị", exampleEng: "Sampling local cuisine is always the best part of our travels.", exampleVie: "Thưởng thức ẩm thực địa phương luôn là phần tuyệt vời nhất trong mọi chuyến đi." },
    { word: "online learning", pos: "n", phonetic: "/ˌɒnˈlaɪn ˈlɜːnɪŋ/", vietnamese: "học trực tuyến, học từ xa qua internet", exampleEng: "Many schools introduced online learning sessions for students.", exampleVie: "Nhiều trường học đã đưa vào các buổi học trực tuyến từ xa cho học sinh." }
  ],
  7: [
    { word: "carbon footprint", pos: "n", phonetic: "/ˈkɑːbən ˈfʊtprɪnt/", vietnamese: "lượng khí thải carbon thải ra môi trường", exampleEng: "Cycling to school is an active way to reduce your carbon footprint.", exampleVie: "Đạp xe tới trường là một cách tích cực để giảm bớt lượng khí thải carbon của bạn." },
    { word: "pollute", pos: "v", phonetic: "/pəˈluːt/", vietnamese: "làm ô nhiễm sông ngòi, khí quyển", exampleEng: "Exhaust fumes from motorbikes pollute City fresh air heavily.", exampleVie: "Khói xả xe máy làm ô nhiễm nặng nề không khí trong lành của thành phố." },
    { word: "ecosystem", pos: "n", phonetic: "/ˈiːkəʊsɪstəm/", vietnamese: "hệ sinh thái môi trường tự nhiên", exampleEng: "Cutting down regional forests harms the entire mountain ecosystem.", exampleVie: "Chặt phá rừng khu vực sẽ gây hại đến cho toàn bộ hệ sinh thái vùng núi." },
    { word: "recycle", pos: "v", phonetic: "/ˌriːˈsaɪkl/", vietnamese: "tái chế chai lọ, giấy rác tiếp tục sử dụng", exampleEng: "Students are encouraged to recycle blank notebook papers.", exampleVie: "Học sinh được khuyến khích tái chế giấy vở nháp chưa viết." },
    { word: "endangered", pos: "adj", phonetic: "/ɪnˈdeɪndʒəd/", vietnamese: "bị đe dọa tuyệt chủng, lâm nguy", exampleEng: "Heavy logging has left many rare animals highly endangered.", exampleVie: "Khai thác lâm sản nặng nề đã khiến nhiều động vật quý hiếm bị đe dọa tuyệt chủng." }
  ],
  8: [
    { word: "bargain", pos: "v", phonetic: "/ˈbɑːɡən/", vietnamese: "mặc cả giá cả khi mua sắm ngoài chợ", exampleEng: "My mother knows how to bargain at open-air markets to save coins.", exampleVie: "Mẹ tôi rất biết cách mặc cả ở chợ lộ thiên để tiết kiệm tiền." },
    { word: "discount", pos: "n", phonetic: "/ˈdɪskaʊnt/", vietnamese: "mức chiết khấu giảm giá của sản phẩm", exampleEng: "Students receive a 10% discount on stationary purchases.", exampleVie: "Học sinh được nhận mức giảm giá chiết khấu 10% khi mua văn phòng phẩm." },
    { word: "price tag", pos: "n", phonetic: "/ˈpraɪs tæɡ/", vietnamese: "nhãn ghi giá niêm yết bán buôn", exampleEng: "He always checks the price tag before choosing clothes items.", exampleVie: "Cậu ấy luôn xem nhãn giá niêm yết trước khi chọn mua món quần áo." },
    { word: "specialty store", pos: "n", phonetic: "/ˈspeʃəlti stɔː(r)/", vietnamese: "cửa hàng bán đặc sản đặc trưng", exampleEng: "We bought local honey inside a traditional specialty store.", exampleVie: "Chúng tôi đã mua mật ong địa phương bên trong cửa hàng đặc sản truyền thống." },
    { word: "shopaholic", pos: "n", phonetic: "/ˌʃɒpəˈhɒlɪk/", vietnamese: "người bị nghiện nặng mua sắm tiêu tiền", exampleEng: "She admits she is a shopaholic when autumn discounts start.", exampleVie: "Cô ấy thừa nhận mình là kẻ nghiện mua sắm khi mùa khuyến mãi mùa thu bắt đầu." }
  ],
  9: [
    { word: "typhoon", pos: "n", phonetic: "/taɪˈfuːn/", vietnamese: "bão nhiệt đới dữ dội kèm mưa lớn", exampleEng: "The heavy typhoon destroyed secondary roofs in coastal regions.", exampleVie: "Trận bão nhiệt đới dữ dội đã tàn phá các mái nhà phụ ở khu dải ven biển." },
    { word: "volcano", pos: "n", phonetic: "/vɒlˈkeɪnəʊ/", vietnamese: "núi lửa đang hoạt động phun trào dung nham", exampleEng: "Hot red lava erupted dynamically from the active volcano.", exampleVie: "Dòng dung nham nóng đỏ phun ra mạnh mẽ từ ngọn núi lửa đang hoạt động." },
    { word: "earthquake", pos: "n", phonetic: "/ˈɜːθkweɪk/", vietnamese: "trận động đất rung lắc địa hình", exampleEng: "The massive earthquake triggered shaking buildings in town.", exampleVie: "Trận động đất lớn đã gây nên hiện tượng nhà cửa rung lắc dữ dội trong thị trấn." },
    { word: "evacuate", pos: "v", phonetic: "/ɪˈvækjuːeɪt/", vietnamese: "di tản sơ tán khẩn cấp khỏi nguy hiểm", exampleEng: "Loud sirens warned families to evacuate coastal plains early.", exampleVie: "Còi cảnh báo lớn thúc giục các gia đình khẩn cấp sơ tán khỏi vùng đồng bằng ven biển." },
    { word: "rescue worker", pos: "n", phonetic: "/ˈreskjuː ˈwɜːkə(r)/", vietnamese: "nhân viên tìm kiếm cứu hộ cứu nạn", exampleEng: "Brave rescue workers searched for stranded hikers after storms.", exampleVie: "Các chiến sĩ cứu hộ dũng cảm đã tìm kiếm người đi bộ leo núi bị kẹt sau bão." }
  ],
  10: [
    { word: "hologram", pos: "n", phonetic: "/ˈhɒləɡræm/", vietnamese: "hình ảnh ánh sáng ba chiều mô phỏng ảo", exampleEng: "The science teacher projects a spinning hologram of Mars.", exampleVie: "Giáo viên khoa học trình chiếu hình ảnh ba chiều xoay tròn của Sao Hỏa." },
    { word: "telepathy", pos: "n", phonetic: "/təˈlepəθi/", vietnamese: "thần giao cách cảm truyền ý nghĩ trực tiếp", exampleEng: "Using telepathy, astronauts can communicate without speaking.", exampleVie: "Sử dụng thần giao cách cảm, các nhà du hành có thể truyền tin không cần nói." },
    { word: "video conference", pos: "n", phonetic: "/ˈvɪdiəʊ ˈkɒnfərəns/", vietnamese: "phòng họp hội thảo video trực tuyến", exampleEng: "Our class joined a global video conference with space experts.", exampleVie: "Lớp học của chúng tôi đã tham dự một buổi họp trực tuyến video toàn cầu với các chuyên gia vũ trụ." },
    { word: "smartwatch", pos: "n", phonetic: "/ˈsmɑːtwɒtʃ/", vietnamese: "đồng hồ đeo tay thông minh đa năng", exampleEng: "My new smartwatch tracks steps and translates words instantly.", exampleVie: "Chiếc đồng hồ thông minh mới của tôi đo số bước chân và dịch nghĩa từ ngay lập tức." },
    { word: "interaction", pos: "n", phonetic: "/ˌɪntərˈækʃn/", vietnamese: "sự tương tác hai chiều qua lại", exampleEng: "The smart interface supports high-speed voice interaction.", exampleVie: "Giao diện thông minh hỗ trợ tương tác đàm thoại giọng nói tốc độ cao." }
  ],
  11: [
    { word: "inventor", pos: "n", phonetic: "/ɪnˈventə(r)/", vietnamese: "nhà hàn lâm sáng chế phát minh khoa học", exampleEng: "He dreams of becoming an advanced tech robot inventor.", exampleVie: "Cậu ấy mơ ước trở thành một nhà phát minh chế tạo robot công nghệ cao." },
    { word: "nanotechnology", pos: "n", phonetic: "/ˌnænəʊtekˈnɒlədʒi/", vietnamese: "công nghệ điều khiển cấu trúc siêu nhỏ nano", exampleEng: "Nanotechnology allows creating materials stronger than steel.", exampleVie: "Công nghệ nano siêu nhỏ cho phép dựng nên vật liệu bền chắc hơn cả thép." },
    { word: "biotechnology", pos: "n", phonetic: "/ˌbaɪəʊtekˈnɒlədʒi/", vietnamese: "công nghệ sinh học nghiên cứu đột phá gen", exampleEng: "Biotechnology introduces farmers to premium-yield rice seeds.", exampleVie: "Công nghệ sinh học giới thiệu với nông dân những hạt lúa giống năng suất vàng." },
    { word: "artificial intelligence", pos: "n", phonetic: "/ˌɑːtɪˈfɪʃl ɪnˈtelɪdʒəns/", vietnamese: "trí tuệ nhân tạo thông minh", exampleEng: "Our AI teacher Hương Tươi runs on premium artificial intelligence.", exampleVie: "Cô giáo AI Hương Tươi hoạt động dựa trên cơ sở trí tuệ nhân tạo cao cấp." },
    { word: "spacecraft", pos: "n", phonetic: "/ˈspeɪskrɑːft/", vietnamese: "con tàu du hành khám phá vũ trụ khổng lồ", exampleEng: "Engineers prepared the spacecraft for Mars soil testing.", exampleVie: "Các kỹ sư chuẩn bị con tàu vũ trụ để thực nghiệm lấy mẫu cát Sao Hỏa." }
  ],
  12: [
    { word: "solar system", pos: "n", phonetic: "/ˈsəʊlə ˈsɪstəm/", vietnamese: "hệ mặt trời bao gồm mặt trời và các hành tinh", exampleEng: "Earth is the only planet with water liquid inside our solar system.", exampleVie: "Trái Đất là hệ hành tinh duy nhất có nước lỏng trong hệ mặt trời của chúng ta." },
    { word: "astronaut", pos: "n", phonetic: "/ˈæstrənɔːt/", vietnamese: "phi hành gia vũ trụ điều khiển tàu bay", exampleEng: "To be an astronaut, you must complete rigorous body testing.", exampleVie: "Để trở thành phi hành gia, bạn phải xuất sắc hoàn thành cuộc thi kiểm tra thể trạng khắc nghiệt." },
    { word: "galaxy", pos: "n", phonetic: "/ˈɡæləksi/", vietnamese: "dải ngân hà tinh hệ khổng lồ", exampleEng: "Our solar system occupies a tiny corner of the Milky Way galaxy.", exampleVie: "Hệ mặt trời chiếm một góc siêu nhỏ bé trong dải ngân hà Milky Way." },
    { word: "space station", pos: "n", phonetic: "/ˈspeɪs ˌsteɪʃn/", vietnamese: "trạm nghiên cứu thường trú ngoài không vũ trụ", exampleEng: "Astronauts did important bio-tests on the international space station.", exampleVie: "Các phi hành gia làm thí nghiệm sinh học quan trọng trên trạm vũ trụ quốc tế." },
    { word: "oxygen tank", pos: "n", phonetic: "/ˈɒksɪdʒən tæŋk/", vietnamese: "bình dưỡng khí nén đựng khí oxi ho tuần hoàn", exampleEng: "Astronauts wear extra oxygen tanks while space walking.", exampleVie: "Phi hành gia bắt buộc đeo bình khí nén oxi phụ khi bước ra ngoài không gian vũ trụ." }
  ]
};

// Handcrafted additional curriculum-focused grammar/pronunciation questions for each unit
const STATIC_EXTRA_QUIZZES: Record<number, QuizQuestion[]> = {
  1: [
    {
      id: "u1_extra_1",
      type: "multiple_choice",
      question: "Which of the following verbs of liking CANNOT be followed directly by a to-infinitive (only gerund is correct)?",
      options: ["fancy", "enjoy", "adore", "Both fancy and enjoy are correct"],
      correctAnswer: "Both fancy and enjoy are correct",
      explanation: "Động từ 'fancy' và 'enjoy' bắt buộc đi kèm danh động từ V-ing, không sử dụng to-infinitive. Ngược lại 'adore' (trong một số ngữ cảnh) hoặc 'love', 'like' có thể đi cùng cả hai."
    },
    {
      id: "u1_extra_2",
      type: "word_form",
      question: "Convert the bracketed verb: My close friend dislikes (do) __________ DIY, as he finds it messy and tiring.",
      wordFormBase: "doing",
      sentenceTemplate: "My close friend dislikes __________ DIY, as he finds it messy and tiring.",
      correctAnswer: "doing",
      explanation: "Sau các động từ phủ nhận/không thích như 'dislike', ta luôn dùng dạng Gerund 'doing'."
    },
    {
      id: "u1_extra_3",
      type: "error_correction",
      question: "Identify the mistake: 'She preferred playing origami to surfing the net last year.'",
      errorSentence: "She preferred playing origami to surfing the net.",
      correctAnswer: "playing origami -> doing origami",
      explanation: "Trong nghệ thuật gấp giấy origami, ta sử dụng động từ 'do' chứ không dùng 'play'. Cụm đúng là 'do origami'."
    }
  ],
  2: [
    {
      id: "u2_extra_1",
      type: "multiple_choice",
      question: "Choose the correct comparative adverb: He drives ________ than he did yesterday because the rural road is slippery.",
      options: ["more carefully", "carefully", "more careful", "carefuller"],
      correctAnswer: "more carefully",
      explanation: "'Carefully' là trạng từ dài, so sánh hơn là 'more carefully'."
    },
    {
      id: "u2_extra_2",
      type: "word_form",
      question: "Fill in the blank: People in rural villages live (quietly) ____________ than those in high-tech city hubs.",
      wordFormBase: "quietly",
      sentenceTemplate: "People in rural villages live ____________ than those in high-tech city hubs.",
      correctAnswer: "more quietly",
      explanation: "'Quietly' là trạng từ dài đuôi -ly, dạng so sánh hơn là 'more quietly'."
    },
    {
      id: "u2_extra_3",
      type: "error_correction",
      question: "Identify the wrong adverb form: My father harvested the wheat crops weller than his brothers.",
      errorSentence: "My father harvested the wheat crops weller than his brothers.",
      correctAnswer: "weller -> better",
      explanation: "'Well' là trạng từ bất quy tắc, so sánh hơn là 'better', không tồn tại từ 'weller'."
    }
  ],
  3: [
    {
      id: "u3_extra_1",
      type: "multiple_choice",
      question: "Identify the compound sentence connecting adverb: The storm destroyed our internet cables; ________, we couldn't log on to the forum.",
      options: ["therefore", "however", "otherwise", "but"],
      correctAnswer: "therefore",
      explanation: "Mệnh đề thứ hai chỉ kết quả của mệnh đề trước, có dấu chấm phẩy và dấu phẩy, dùng trạng từ kết quả 'therefore' (do đó)."
    },
    {
      id: "u3_extra_2",
      type: "word_form",
      question: "Complete the sentence: You must finish your assigned school club presentation, _________ you will get bad marks. (Gợi ý liên từ: nếu không thì)",
      wordFormBase: "otherwise",
      sentenceTemplate: "You must finish your assigned school club presentation, _________ you will get bad marks.",
      correctAnswer: "otherwise",
      explanation: "Từ 'otherwise' diễn tả nghĩa răn đe, phòng ngừa hậu quả 'nếu không thì'."
    },
    {
      id: "u3_extra_3",
      type: "error_correction",
      question: "Locate the misplaced transition inside this compound sentence.",
      errorSentence: "I wanted to browse social media for peer updates, therefore I had to study for the English quiz.",
      correctAnswer: "therefore -> but",
      explanation: "Vế sau chỉ sự mâu thuẫn trái chiều (Tôi muốn lướt mạng, NHƯNG tôi phải học thi). Dùng liên từ tương hợp 'but' hợp lý nhất."
    }
  ],
  4: [
    {
      id: "u4_extra_1",
      type: "multiple_choice",
      question: "Identify the correct quantifier for uncountable noun: How ________ information about the Tay ethnic group did you find?",
      options: ["much", "many", "few", "some"],
      correctAnswer: "much",
      explanation: "'Information' là danh từ không đếm được, câu hỏi số lượng dùng 'How much'."
    },
    {
      id: "u4_extra_2",
      type: "word_form",
      question: "Fill with countable quantifier: There are only a ____________ (ít) terraced fields near our holiday resort.",
      wordFormBase: "few",
      sentenceTemplate: "There are only a ____________ terraced fields near our holiday resort.",
      correctAnswer: "few",
      explanation: "'Terraced fields' là danh từ số nhiều đếm được, lượng từ đi kèm là 'a few' (một ít)."
    },
    {
      id: "u4_extra_3",
      type: "error_correction",
      question: "What is wrong with the following list?",
      errorSentence: "Each minority group have its own gorgeous traditional outfits.",
      correctAnswer: "have -> has",
      explanation: "Chủ ngữ bắt đầu bằng 'Each' chỉ từng thành phần đơn lẻ, yêu cầu động từ chia số ít: 'has' thay vì 'have'."
    }
  ],
  5: [
    {
      id: "u5_extra_1",
      type: "multiple_choice",
      question: "Obligation vs advice check: While entering the sacred worship house, you ________ take off your muddy shoes.",
      options: ["have to", "should", "shouldn't", "don't have to"],
      correctAnswer: "have to",
      explanation: "Cởi giày trước khi vào nhà thờ là luật lệ bắt buộc (obligation), dùng 'have to' thể hiện sự ràng buộc."
    },
    {
      id: "u5_extra_2",
      type: "word_form",
      question: "Provide advice auxiliary: Youth _________ (nên) respect community customs when visiting other provinces.",
      wordFormBase: "should",
      sentenceTemplate: "Youth _________ respect community customs when visiting other provinces.",
      correctAnswer: "should",
      explanation: "Dùng từ khuyên nhủ 'should' để biểu thị lời khuyên văn hóa lịch sự."
    },
    {
      id: "u5_extra_3",
      type: "error_correction",
      question: "Correct the wrong auxiliary use.",
      errorSentence: "In Western table manners, you shouldn't to make loud slurping noises.",
      correctAnswer: "shouldn't to make -> shouldn't make",
      explanation: "Động từ khuyết thiếu 'should/shouldn't' đi trực tiếp với một động từ nguyên mẫu không 'to' (bare infinitive)."
    }
  ],
  6: [
    {
      id: "u6_extra_1",
      type: "multiple_choice",
      question: "Conditional Sentence review: If you eat that delicious local food too fast, you ________ a stomachache.",
      options: ["will get", "get", "getting", "got"],
      correctAnswer: "will get",
      explanation: "Mệnh đề điều kiện Loại 1: If + HTĐ (eat), mệnh đề chính dùng TLĐ (will get)."
    },
    {
      id: "u6_extra_2",
      type: "word_form",
      question: "Change bracketed verb: If the host greets us warmly, we (feel) ____________ instantly relaxed.",
      wordFormBase: "will feel",
      sentenceTemplate: "If the host greets us warmly, we ____________ instantly relaxed.",
      correctAnswer: "will feel",
      explanation: "Mệnh đề chính của câu điều kiện Loại 1 chỉ sự việc có thể xảy ra ở tương lai: 'will feel'."
    },
    {
      id: "u6_extra_3",
      type: "error_correction",
      question: "Fix the conditional sentence tense mismatch.",
      errorSentence: "If you will study online, you can save a lot of money and commuting time.",
      correctAnswer: "will study -> study",
      explanation: "Trong câu điều kiện loại 1, mệnh đề chứa 'If' chia ở thì Hiện tại đơn (If you study), tuyệt đối không dùng 'will' trực tiếp."
    }
  ],
  7: [
    {
      id: "u7_extra_1",
      type: "multiple_choice",
      question: "Connective check: ________ plastic bottles takes hundreds of years, we should purchase reusable eco-flasks.",
      options: ["Since", "Although", "But", "Therefore"],
      correctAnswer: "Since",
      explanation: "Nối câu chỉ nguyên nhân (Vì chai nhựa mất hàng trăm năm để phân hủy, ta nên mua bình dùng nhiều lần). 'Since' = 'Because' rất phù hợp."
    },
    {
      id: "u7_extra_2",
      type: "word_form",
      question: "Supply contrastive connector: We continued picking up litter ____________ the heavy rain was pouring down.",
      wordFormBase: "although",
      sentenceTemplate: "We continued picking up litter ____________ the heavy rain was pouring down.",
      correctAnswer: "although",
      explanation: "Liên từ biểu thị quan hệ tương phản đối lập: 'although' / 'even though' (mặc dù trời mưa to, vẫn nhặt rác)."
    },
    {
      id: "u7_extra_3",
      type: "error_correction",
      question: "Identify the redundant conjunction error.",
      errorSentence: "Because the air is heavily polluted, so many birds are leaving the local wetland.",
      correctAnswer: "Because ... so -> Bỏ 'so'",
      explanation: "Trong tiếng Anh, không được sử dụng đồng thời cả 'Because' và 'so' trong cùng một câu ghép. Hãy bỏ 'so' để câu chính xác."
    }
  ],
  8: [
    {
      id: "u8_extra_1",
      type: "multiple_choice",
      question: "Adverb of frequency positioning: She ________ is a shopaholic, but she tries to control her budget.",
      options: ["usually", "is usually", "are usually", "usually is"],
      correctAnswer: "usually",
      explanation: "Trạng từ tần suất đứng trước động từ thường hoặc đứng sau động từ tobe."
    },
    {
      id: "u8_extra_2",
      type: "word_form",
      question: "Positioning of frequency adverb: He (always/checks) ____________ the price tag before shopping.",
      wordFormBase: "always checks",
      sentenceTemplate: "He ____________ the price tag before shopping.",
      correctAnswer: "always checks",
      explanation: "Trạng từ đứng trước động từ chính: 'always checks'."
    },
    {
      id: "u8_extra_3",
      type: "error_correction",
      question: "Identify frequency word placement error.",
      errorSentence: "My mother bargains never with local store sellers.",
      correctAnswer: "bargains never -> never bargains",
      explanation: "Trạng từ tần suất 'never' phải đứng TRƯỚC động từ thường 'bargains' (never bargains)."
    }
  ],
  9: [
    {
      id: "u9_extra_1",
      type: "multiple_choice",
      question: "Identify the Past Continuous form: When the earthquake struck the city center, which of the following were they doing?",
      options: ["They were evacuating to safe open areas.", "They evacuated to safe zones.", "They evacuate.", "They are evacuating."],
      correctAnswer: "They were evacuating to safe open areas.",
      explanation: "Cấu trúc quá khứ tiếp diễn: S + was/were + V-ing diễn tả hành động đang diễn ra tại thời điểm quá khứ đột biến (were evacuating)."
    },
    {
      id: "u9_extra_2",
      type: "word_form",
      question: "Correct past tense: While the volcano was erupting hot lava, the rescue workers (prepare) ____________ the emergency camps.",
      wordFormBase: "were preparing",
      sentenceTemplate: "While the volcano was erupting hot lava, the rescue workers ____________ the emergency camps.",
      correctAnswer: "were preparing",
      explanation: "Diễn đạt hai hành động cùng song song diễn ra tại quá khứ, sử dụng quá khứ tiếp diễn: 'were preparing'."
    },
    {
      id: "u9_extra_3",
      type: "error_correction",
      question: "Identify past continuous structure error.",
      errorSentence: "At 10 PM last night, a massive typhoon was destroy many old wood houses.",
      correctAnswer: "was destroy -> was destroying",
      explanation: "Công thức tiếp diễn là 'was + V-ing', do đó 'was destroy' phải sửa đổi thành 'was destroying'."
    }
  ],
  10: [
    {
      id: "u10_extra_1",
      type: "multiple_choice",
      question: "Choose correct future tense form: I think humans ________ telepathy interaction widely in the next century.",
      options: ["will use", "are using", "uses", "use"],
      correctAnswer: "will use",
      explanation: "Đưa ra phỏng đoán cá nhân tương lai xa kèm 'I think', ta dùng thì Tương lai đơn 'will use'."
    },
    {
      id: "u10_extra_2",
      type: "word_form",
      question: "Convert bracketed verb: Technology experts predict we (hold) ____________ global holographic meetings by 2040.",
      wordFormBase: "will hold",
      sentenceTemplate: "Technology experts predict we ____________ global holographic meetings by 2040.",
      correctAnswer: "will hold",
      explanation: "Dự đoán tương lai mang tính chất khách quan hoặc mốc thời gian cụ thể: 'will hold'."
    },
    {
      id: "u10_extra_3",
      type: "error_correction",
      question: "Evaluate future predictions text.",
      errorSentence: "We are meeting our friends inside Virtual parks tomorrow at 5 PM because we booked the slot.",
      correctAnswer: "are meeting -> are going to meet",
      explanation: "Lịch lên kế hoạch cụ thể chuẩn bị sẵn và đăng ký mua slot trước thường được dùng 'are going to meet' hoặc dùng Hiện tại Tiếp Diễn 'are meeting' biểu thị lịch trình cố định. Nhưng dùng 'are going to meet' để nói về kế hoạch chung."
    }
  ],
  11: [
    {
      id: "u11_extra_1",
      type: "multiple_choice",
      question: "Identify the correct verb change in reported speech: 'I am inventing a nanotechnology material now,' said Dr. Liam.",
      options: [
        "Dr. Liam said he was inventing a nanotechnology material then.",
        "Dr. Liam said he is inventing a nanotechnology material now.",
        "Dr. Liam said he invented a nanotechnology material then.",
        "Dr. Liam said he was inventing a nanotechnology material now."
      ],
      correctAnswer: "Dr. Liam said he was inventing a nanotechnology material then.",
      explanation: "Trong câu gián tiếp, động từ 'am inventing' lùi thành 'was inventing', trạng từ 'now' lùi thành 'then', đại từ 'I' đổi thành 'he'."
    },
    {
      id: "u11_extra_2",
      type: "word_form",
      question: "Convert pronoun: She told me, 'I will explain artificial intelligence to you tomorrow.' -> She told me she would explain artificial intelligence to me the (next day) __________.",
      wordFormBase: "following day",
      sentenceTemplate: "She told me she would explain artificial intelligence to me the __________.",
      correctAnswer: "following day",
      explanation: "Khi lùi thì gián tiếp, từ chỉ tương lai 'tomorrow' được chuyển hóa phù hợp thành 'the following day' hoặc 'the next day'."
    },
    {
      id: "u11_extra_3",
      type: "error_correction",
      question: "Identify the backshift error.",
      errorSentence: "The guide told us that the spacecraft had launched successfully yesterday.",
      correctAnswer: "yesterday -> the day before",
      explanation: "Trong câu gián tiếp lùi thì quá khứ, ta buộc phải chuyển trạng từ thời gian 'yesterday' thành 'the day before' hoặc 'the previous day'."
    }
  ],
  12: [
    {
      id: "u12_extra_1",
      type: "multiple_choice",
      question: "Reported WH-question check: She asked, 'Where did you find this telescope?'",
      options: [
        "She asked where I had found that telescope.",
        "She asked where did I find this telescope.",
        "She asked that where I found that telescope.",
        "She asked if I found that telescope."
      ],
      correctAnswer: "She asked where I had found that telescope.",
      explanation: "Câu hỏi Wh-word lùi về dạng khẳng định (không đảo ngữ trợ động từ 'did'), lùi thì quá khứ đơn 'did find' về quá khứ hoàn thành 'had found', và 'this' thành 'that'."
    },
    {
      id: "u12_extra_2",
      type: "word_form",
      question: "Fill indirect connector: The teacher asked us ____________ we believed aliens existed in other solar systems. (Gợi ý: liệu rằng, Yes/No question)",
      wordFormBase: "if",
      sentenceTemplate: "The teacher asked us ____________ we believed aliens existed in other solar systems.",
      correctAnswer: "if",
      explanation: "Từ nối Yes/No trong câu gián tiếp nghi vấn là 'if' hoặc 'whether'."
    },
    {
      id: "u12_extra_3",
      type: "error_correction",
      question: "Find the structural issue in reported question.",
      errorSentence: "My mother wondered if would astronauts ever find intelligent life in other galaxies.",
      correctAnswer: "if would astronauts -> if astronauts would",
      explanation: "Trong câu gián tiếp, cấu trúc động từ phải ở dạng khẳng định chứ không đảo trợ động từ lên trước chủ ngữ. Do đó sửa thành 'if astronauts would'."
    }
  ]
};

// Main Enhanced Curriculum builder
export const CURRICULUM: UnitData[] = BASE_CURRICULUM.map((unit) => {
  // 1. Double the vocabulary items to exactly 10 words
  const baseVocab = [...unit.vocabulary];
  const unitId = unit.id;
  const extraVocab = SUPPLEMENTARY_VOCABULARY[unitId] || [];
  
  // Tag unique extra vocab items and append
  const fullVocab: VocabularyItem[] = [
    ...baseVocab,
    ...extraVocab.map((item) => ({ ...item, unitId }))
  ];

  // 2. Double-check duplicate prevention and trim/slice to exactly 10 items
  const uniqueVocabMap = new Map<string, VocabularyItem>();
  fullVocab.forEach((item) => uniqueVocabMap.set(item.word.toLowerCase(), item));
  let finalVocabulary = Array.from(uniqueVocabMap.values()).slice(0, 10);

  // Fallback filler in case any unit still missed 10 items (safety)
  while (finalVocabulary.length < 10) {
    const fillerWord = `word_extra_${finalVocabulary.length + 1}`;
    finalVocabulary.push({
      word: fillerWord,
      pos: "n",
      phonetic: "/ˌekstrə ˈwɜːd/",
      vietnamese: "từ vựng mở rộng bổ sung",
      exampleEng: `Let's use the word ${fillerWord} to construct a beautiful sentence.`,
      exampleVie: `Hãy sử dụng từ này để xây dựng một câu nói hữu ích.`,
      unitId
    });
  }

  // 3. Assemble quizzes dynamically to hit EXACTLY 20 questions
  const baseQuizzes = [...unit.quizzes];
  const extraStaticQuizzes = STATIC_EXTRA_QUIZZES[unitId] || [];
  
  // Combine base + static extra
  let finalQuizzes: QuizQuestion[] = [...baseQuizzes, ...extraStaticQuizzes];

  // To reach exactly 20 quizzes, we dynamically generate contextual questions based on the 10 vocabulary words of this unit!
  // This is highly educational, as it tests spelling and definitions of the exact words they studied.
  let step = 0;
  while (finalQuizzes.length < 20) {
    const vocabIndex = step % finalVocabulary.length;
    const vocabWord = finalVocabulary[vocabIndex];
    step++;

    const isEven = step % 2 === 0;

    if (isEven) {
      // Create a clean contextual "word_form" fill-in-the-blank question using the word's actual example sentence
      const cleanExample = vocabWord.exampleEng;
      // Replace the word (case-insensitive) with __________
      const regex = new RegExp(`\\b${vocabWord.word}\\b`, "i");
      const hasMatch = regex.test(cleanExample);
      
      let sentenceTemplate = "";
      if (hasMatch) {
         sentenceTemplate = cleanExample.replace(regex, "__________");
      } else {
         // Fallback replacement if word has slightly varied ending
         const words = vocabWord.word.split(" ");
         let temp = cleanExample;
         words.forEach((w) => {
            if (w.length > 3) {
               temp = temp.replace(new RegExp(w, "i"), "__________");
            }
         });
         sentenceTemplate = temp;
      }

      // Check if template received a proper blanking, else use basic template
      if (!sentenceTemplate.includes("__________")) {
         sentenceTemplate = `Complete the blank space with the correct word: This is a beautiful ____________ landscape. (Gợi ý nghĩa: ${vocabWord.word})`;
      }

      finalQuizzes.push({
        id: `gen_${unitId}_vocab_wf_${vocabWord.word.replace(/\s+/g, '_')}_${step}`,
        type: "word_form",
        question: `Complete the sentence spelling with the correct word from this Unit: "${sentenceTemplate}" (Nghĩa gợi ý: ${vocabWord.vietnamese})`,
        wordFormBase: vocabWord.word,
        sentenceTemplate: sentenceTemplate,
        correctAnswer: vocabWord.word,
        explanation: `Động từ/danh từ/tính từ phù hợp ngữ cảnh câu là "${vocabWord.word}" mang nghĩa tiếng Việt là: "${vocabWord.vietnamese}".`
      });
    } else {
      // Create a smart multiple choice question testing translation / definition
      const otherVocab = finalVocabulary.filter((v) => v.word !== vocabWord.word);
      const wrongTranslation1 = otherVocab[0]?.vietnamese || "bảo vệ môi trường";
      const wrongTranslation2 = otherVocab[1]?.vietnamese || "ruộng bậc thang kì vĩ";
      const wrongTranslation3 = otherVocab[2]?.vietnamese || "máy gặt thóc liên hợp";

      const options = [
         vocabWord.vietnamese,
         wrongTranslation1,
         wrongTranslation2,
         wrongTranslation3
      ];

      // Shuffle options randomly
      const shuffledOptions = [...options].sort(() => Math.random() - 0.5);

      finalQuizzes.push({
        id: `gen_${unitId}_vocab_mc_${vocabWord.word.replace(/\s+/g, '_')}_${step}`,
        type: "multiple_choice",
        question: `What is the correct Vietnamese definition of the English term: "${vocabWord.word}" (pronunciation: ${vocabWord.phonetic})?`,
        options: shuffledOptions,
        correctAnswer: vocabWord.word.toLowerCase() === "both fancy and enjoy are correct" ? vocabWord.vietnamese : vocabWord.vietnamese,
        explanation: `Từ tiếng Anh "${vocabWord.word}" (${vocabWord.pos}) có phát âm học chuẩn là ${vocabWord.phonetic}, mang nghĩa dịch chuẩn xác là: "${vocabWord.vietnamese}".`
      });
    }
  }

  // Final trim to exactly 20 to ensure perfect constraint alignment under all conditions
  finalQuizzes = finalQuizzes.slice(0, 20);

  // Make sure IDs are unique to satisfy rendering
  finalQuizzes = finalQuizzes.map((quiz, idx) => ({
    ...quiz,
    id: quiz.id.startsWith("gen_") || quiz.id.includes("_extra_") ? quiz.id : `${quiz.id}_pos_${idx}`
  }));

  return {
    ...unit,
    vocabulary: finalVocabulary,
    quizzes: finalQuizzes
  };
});
