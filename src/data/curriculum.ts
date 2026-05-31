import { UnitData } from "../types";

export const CURRICULUM: UnitData[] = [
  {
    id: 1,
    title: "Unit 1: Leisure Time",
    overview: {
      theme: "Thời gian rảnh rỗi (Thủ công DIY, Thể thao, Giải trí)",
      vocabularySummary: "Từ vựng về hoạt động giải trí: do DIY (tự làm đồ), craft (thủ công), origami (gấp giấy), hang out (đi chơi), messaging friends (nhắn tin bạn bè), surfing the net (lướt mạng).",
      grammarSummary: "- Động từ chỉ sở thích + V-ing: adore, love, like, enjoy, fancy, prefer, dislike, hate, detest + Gerund.\n- Một số từ đi được cả to-Infinitive: love, like, prefer, hate.\nVí dụ: I love surfing / to surf the net.",
      pronunciationSummary: "Phân biệt nguyên âm ngắn /u/ (cook, push, wood) và nguyên âm dài /u:/ (group, school, move, June)."
    },
    vocabulary: [
      {
        word: "do DIY",
        pos: "v",
        phonetic: "/ˌduː ˌdiː aɪ ˈwaɪ/",
        vietnamese: "tự làm đồ thủ công/đồ gia dụng (tự tay làm)",
        exampleEng: "My teenage brother loves to do DIY in his spare time.",
        exampleVie: "Em trai tuổi teen của tôi rất thích tự làm đồ thủ công vào thời gian rảnh.",
        unitId: 1
      },
      {
        word: "leisure",
        pos: "n",
        phonetic: "/ˈleʒə(r)/",
        vietnamese: "thời gian rảnh rỗi, giải trí",
        exampleEng: "In my leisure time, I adore building dollhouses.",
        exampleVie: "Trong thời gian rảnh, tôi rất mê lắp ráp nhà búp bê.",
        unitId: 1
      },
      {
        word: "hang out",
        pos: "v",
        phonetic: "/hæŋ aʊt/",
        vietnamese: "đi chơi, tụ tập (với bạn bè)",
        exampleEng: "I usually hang out with my friends in the central park on Sundays.",
        exampleVie: "Tôi thường đi chơi với bạn bè ở công viên trung tâm vào Chủ Nhật.",
        unitId: 1
      },
      {
        word: "fancy",
        pos: "v",
        phonetic: "/ˈfænsi/",
        vietnamese: "thích, mến (ở mức độ nhẹ, thân thuộc)",
        exampleEng: "Do you fancy going for a walk by the lake with us?",
        exampleVie: "Bạn có hứng thú đi dạo quanh hồ với chúng tôi không?",
        unitId: 1
      },
      {
        word: "detest",
        pos: "v",
        phonetic: "/dɪˈtest/",
        vietnamese: "ghét cay ghét đắng, căm ghét",
        exampleEng: "I detest hunting animals because I think it's very cruel.",
        exampleVie: "Tôi ghét cay ghét đắng việc săn bắn động vật vì tôi nghĩ nó rất tàn nhẫn.",
        unitId: 1
      },
      {
        word: "origami",
        pos: "n",
        phonetic: "/ˌɒrɪˈɡɑːmi/",
        vietnamese: "nghệ thuật gấp giấy Nhật Bản",
        exampleEng: "Doing origami helps me relax and increase my creativity.",
        exampleVie: "Gấp giấy origami giúp tôi thư giãn và tăng dồi dào sức sáng tạo.",
        unitId: 1
      }
    ],
    quizzes: [
      {
        id: "u1_q1",
        type: "multiple_choice",
        question: "Choose the correct sentence template: My sister enjoys ________ paper flowers in her leisure time.",
        options: ["making", "to make", "make", "made"],
        correctAnswer: "making",
        explanation: "Động từ 'enjoy' bắt buộc đi kèm danh động từ (V-ing)."
      },
      {
        id: "u1_q2",
        type: "word_form",
        question: "Complete the sentence with the correct form of the verb in brackets: Tom loves (surf) __________ the net, but his parents want him to play sports.",
        wordFormBase: "surf",
        sentenceTemplate: "Tom loves __________ the net, but his parents want him to play sports.",
        correctAnswer: "surfing",
        explanation: "Sau các động từ yêu thích như 'love', ta thường dùng dạng danh động từ 'surfing' (hoặc 'to surf') để diễn tả sở thích lâu dài."
      },
      {
        id: "u1_q3",
        type: "error_correction",
        question: "Find the grammatical mistake in the following sentence.",
        errorSentence: "She is keen about taking photos in her free time.",
        correctAnswer: "about -> on",
        explanation: "Cấu trúc đúng là 'be keen on' (thích làm gì đó), không dùng 'keen about' (cần đổi 'about' thành 'on')."
      },
      {
        id: "u1_q4",
        type: "matching",
        question: "Match the phrase with its correct English meaning.",
        matchingPairs: [
          { left: "be fond of", right: "be interested in / like something very much" },
          { left: "be crazy about", right: "extremely loving or obsessed with an activity" },
          { left: "fancy", right: "feel a desire for or be liking something" },
          { left: "detest", right: "intensely dislike or hate something" }
        ],
        correctAnswer: "Match pairs correctly",
        explanation: "Các cụm từ biểu thị mức độ yêu thích từ thích vừa ('be fond of'), cực thích ('be crazy about'), thích nhẹ nhàng ('fancy') tới ghét cay ghét đắng ('detest')."
      }
    ],
    speakingPrompt: "Hi there! Today in Unit 1, let's practice inviting each other to do a leisure activity or talking about our hobbies. Can you tell me what you love doing in your free time, and why?"
  },
  {
    id: 2,
    title: "Unit 2: Life in the Countryside",
    overview: {
      theme: "Cuộc sống ở miền quê (Thu hoạch lúa, Chăn trâu, Cảnh sắc thanh bình)",
      vocabularySummary: "Từ vựng về hoạt động làng quê: harvest time (mùa gặt), combine harvester (máy gặt đập), herd (chăn giữ gia súc), hospitable (hiếu khách), vast (mênh mông), picturesque (đẹp như tranh).",
      grammarSummary: "So sánh hơn của trạng từ (Comparative adverbs):\n- Trạng từ ngắn: thêm -er (faster, harder, earlier, louder).\n- Trạng từ dài (đuôi -ly): thêm more/less (more slowly, more beautifully).\n- Trạng từ bất quy tắc: well -> better, badly -> worse, little -> less.",
      pronunciationSummary: "Phân biệt nguyên âm /ə/ (hospitable, collect, picture) và nguyên âm /ɪ/ (village, harvest, pick, cottage)."
    },
    vocabulary: [
      {
        word: "combine harvester",
        pos: "n",
        phonetic: "/ˈkɒmbaɪn ˈhɑːvɪstə(r)/",
        vietnamese: "máy gặt đập liên hợp",
        exampleEng: "Nowadays, farmers in my village use a combine harvester to harvest rice.",
        exampleVie: "Ngày nay, nông dân ở làng tôi sử dụng máy gặt đập để thu hoạch lúa.",
        unitId: 2
      },
      {
        word: "hospitable",
        pos: "adj",
        phonetic: "/hɒˈspɪtəbl/",
        vietnamese: "hiếu khách, mến khách, cởi mở",
        exampleEng: "The local people in Bac Giang are extremely kind and hospitable.",
        exampleVie: "Người dân địa phương ở Bắc Giang vô cùng tốt bụng và mến khách.",
        unitId: 2
      },
      {
        word: "picturesque",
        pos: "adj",
        phonetic: "/ˌpɪktʃəˈresk/",
        vietnamese: "đẹp như tranh vẽ, cổ kính",
        exampleEng: "We took many photos of the picturesque fields surrounded by hills.",
        exampleVie: "Chúng tôi đã chụp rất nhiều ảnh về những cánh đồng đẹp như vẽ được bao quanh bởi các ngọn đồi.",
        unitId: 2
      },
      {
        word: "herd",
        pos: "v",
        phonetic: "/hɜːd/",
        vietnamese: "chăn dắt, chăn giữ (trâu, bò...)",
        exampleEng: "When I stayed at my uncle's house, I helped him herd the buffaloes.",
        exampleVie: "Khi tôi ở nhà bác, tôi đã giúp bác chăn dắt đàn trâu.",
        unitId: 2
      },
      {
        word: "vast",
        pos: "adj",
        phonetic: "/vɑːst/",
        vietnamese: "mênh mông, bao la, rộng lớn",
        exampleEng: "The scenery here is gorgeous with vast fields stretching long distances.",
        exampleVie: "Phong cảnh ở đây thật tuyệt vời với những cánh đồng bao la trải dài tít tắp.",
        unitId: 2
      }
    ],
    quizzes: [
      {
        id: "u2_q1",
        type: "multiple_choice",
        question: "Choose the correct comparative adverb: A horse can run ________ than a buffalo drawn-cart.",
        options: ["faster", "more fast", "fastest", "more faster"],
        correctAnswer: "faster",
        explanation: "'Fast' là trạng từ ngắn, dạng so sánh hơn là 'faster'."
      },
      {
        id: "u2_q2",
        type: "word_form",
        question: "Complete the sentence with comparative form of the adverb: Mai dances (beautifully) ____________ than Hoa does.",
        wordFormBase: "beautifully",
        sentenceTemplate: "Mai dances ____________ than Hoa does.",
        correctAnswer: "more beautifully",
        explanation: "'Beautifully' là trạng từ dài, dạng so sánh hơn là 'more beautifully'."
      },
      {
        id: "u2_q3",
        type: "error_correction",
        question: "Find the grammatical mistake in the following comparisons.",
        errorSentence: "He works more hard than his brother to get high grades.",
        correctAnswer: "more hard -> harder",
        explanation: "'Hard' là trạng từ ngắn bất quy tắc, dạng so sánh hơn là 'harder', không sử dụng 'more hard'."
      }
    ],
    speakingPrompt: "Hello! Country life is a major theme of Unit 2. Can you tell me what you like or dislike about life in the countryside compared to life in the big city?"
  },
  {
    id: 3,
    title: "Unit 3: Teenagers",
    overview: {
      theme: "Học sinh tuổi Teen (Câu lạc bộ School Club, Áp lực đồng lứa Peer Pressure, Mạng xã hội)",
      vocabularySummary: "Mạng xã hội và áp lực: upload (tải lên), browse (duyệt mạng), log on (đăng nhập), forum (diễn đàn), peer pressure (áp lực đồng lứa), school club (câu lạc bộ trường học).",
      grammarSummary: "- Câu đơn (Simple sentence): chỉ gồm một mệnh đề độc lập lẻ.\n- Câu ghép (Compound sentence): gồm từ 2 mệnh đề độc lập trở lên, nối bằng liên từ kết hợp (for, and, but, or, so) hoặc trạng từ liên kết (however, therefore, otherwise).",
      pronunciationSummary: "Phân biệt phát âm nguyên âm /ʊə/ (tour, tourist, ensure) và /ɔɪ/ (toy, choice, avoid, join)."
    },
    vocabulary: [
      {
        word: "peer pressure",
        pos: "n",
        phonetic: "/pɪə(r) ˈpreʃə(r)/",
        vietnamese: "áp lực từ bạn bè đồng trang lứa",
        exampleEng: "Many teenagers suffer from peer pressure to fit in with school trends.",
        exampleVie: "Nhiều thanh thiếu niên chịu áp lực từ bạn bè để hòa nhập với trào lưu trường học.",
        unitId: 3
      },
      {
        word: "upload",
        pos: "v",
        phonetic: "/ˌʌpˈləʊd/",
        vietnamese: "tải lên mạng, cập nhật dữ liệu",
        exampleEng: "We can upload photos and videos of our school club on the Facebook page.",
        exampleVie: "Chúng ta có thể tải ảnh và video của câu lạc bộ trường học lên trang Facebook.",
        unitId: 3
      },
      {
        word: "forum",
        pos: "n",
        phonetic: "/ˈfɔːrəm/",
        vietnamese: "diễn đàn trực tuyến hoặc trực tiếp",
        exampleEng: "We set up a class forum to share tips about preparing for midterm tests.",
        exampleVie: "Chúng tôi đã thiết lập một diễn đàn lớp học để chia sẻ mẹo chuẩn bị cho bài thi giữa kỳ.",
        unitId: 3
      },
      {
        word: "browse",
        pos: "v",
        phonetic: "/braʊz/",
        vietnamese: "lướt xem, duyệt website/mạng xã hội",
        exampleEng: "I often spend about 15 minutes browsing Instagram for relaxation before bed.",
        exampleVie: "Tôi thường dành khoảng 15 phút lướt Instagram để thư giãn trước khi đi ngủ.",
        unitId: 3
      },
      {
        word: "bully",
        pos: "n",
        phonetic: "/ˈbʊli/",
        vietnamese: "kẻ bắt nạt",
        exampleEng: "The school has a strict zero-tolerance policy against any classroom bully.",
        exampleVie: "Trường học có chính sách nghiêm khắc tuyệt đối không tha thứ cho bất kỳ kẻ bắt nạt học đường nào.",
        unitId: 3
      }
    ],
    quizzes: [
      {
        id: "u3_q1",
        type: "multiple_choice",
        question: "Choose the correct coordinating conjunction/ conjunctive adverb: Lan wants to join the school music club; ________, she can't sing or play any instrument.",
        options: ["however", "therefore", "but", "so"],
        correctAnswer: "however",
        explanation: "Có dấu chấm phẩy ';' trước chỗ trống và dấu phẩy ',' sau chỗ trống diễn đạt sự tương phản chỉ có thể chọn trạng từ liên kết 'however'."
      },
      {
        id: "u3_q2",
        type: "word_form",
        question: "Classify this sentence: 'Sports activities at school help me relax.' Is it Simple (S) or Compound (C)?",
        wordFormBase: "S",
        sentenceTemplate: "S or C?",
        correctAnswer: "S",
        explanation: "Câu này chỉ có một cụm chủ-vị ('Sports activities at school' là chủ ngữ, 'help' là động từ chính), nên đó là câu đơn (S)."
      },
      {
        id: "u3_q3",
        type: "error_correction",
        question: "Find the error in coordinating conjunction.",
        errorSentence: "Tom was very tired, but he went to bed early last night.",
        correctAnswer: "but -> so",
        explanation: "Tom mệt mỏi, NÊN anh ấy đi ngủ sớm. Mối quan hệ nguyên nhân - kết quả đòi hỏi dùng 'so' thay vì liên từ tương phản 'but'."
      }
    ],
    speakingPrompt: "Hello teen friend! In Unit 3, we talk about issues that teenagers face. What kinds of pressure do you feel most often: parents, school tests, peer expectations, or social media? Let's discuss."
  },
  {
    id: 4,
    title: "Unit 4: Ethnic Groups of Viet Nam",
    overview: {
      theme: "Các dân tộc Việt Nam (Nhà sàn, Ruộng bậc thang, Đồng bào thiểu số, Nhạc cụ)",
      vocabularySummary: "Môi trường và nét văn hóa: stilt house (nhà sàn), terraced field (ruộng bậc thang), communal house (nhà rông), Minority group (nhóm thiểu số), costume (trang phục), weave (dệt vải).",
      grammarSummary: "- Câu hỏi Yes/No và câu hỏi Wh- (What, Where, Why, When, How, Which).\n- Danh từ đếm được và danh từ không đếm được (Countable vs Uncountable nouns).\n- Lượng từ: many, much, a lot of, some, any, a few, a little.",
      pronunciationSummary: "Phân biệt phát âm hai phụ âm /k/ (kitchen, Tay, stilt) và /ɡ/ (garden, group, gong, pig)."
    },
    vocabulary: [
      {
        word: "stilt house",
        pos: "n",
        phonetic: "/stɪlt haʊs/",
        vietnamese: "nhà sàn (nhà xây cao trên các cây cột chống gỗ)",
        exampleEng: "Our traditional stilt house overlooks beautiful terraced fields in Ha Giang.",
        exampleVie: "Ngôi nhà sàn truyền thống của chúng tôi nhìn ra những cánh đồng ruộng bậc thang tuyệt đẹp ở Hà Giang.",
        unitId: 4
      },
      {
        word: "terraced field",
        pos: "n",
        phonetic: "/ˈterəst fiːld/",
        vietnamese: "ruộng bậc thang",
        exampleEng: "The Tay people are famous for cultivating wet rice on terraced fields.",
        exampleVie: "Người Tày nổi tiếng với việc trồng lúa nước trên những thửa ruộng bậc thang.",
        unitId: 4
      },
      {
        word: "communal house",
        pos: "n",
        phonetic: "/kəˈmjuːnl haʊs/",
        vietnamese: "nhà công cộng (nhà rông của đồng bào Tây Nguyên)",
        exampleEng: "A Rong house is a communal house for village gatherings and annual festivals.",
        exampleVie: "Nhà Rông là một ngôi nhà cộng đồng cho các cuộc tụ họp làng và các lễ hội hàng năm.",
        unitId: 4
      },
      {
        word: "minority group",
        pos: "n",
        phonetic: "/maɪˈnɒrəti ɡruːp/",
        vietnamese: "nhóm dân tộc thiểu số",
        exampleEng: "There are 53 ethnic minority groups in Viet Nam.",
        exampleVie: "Có 53 nhóm dân tộc thiểu số ở Việt Nam.",
        unitId: 4
      },
      {
        word: "five-colour sticky rice",
        pos: "n",
        phonetic: "/faɪv ˈkʌlə sticky raɪs/",
        vietnamese: "xôi ngũ sắc",
        exampleEng: "On special occasions, ethnic girls usually make delicious five-colour sticky rice.",
        exampleVie: "Vào những dịp đặc biệt, các cô gái dân tộc thường làm món xôi ngũ sắc ngon lành.",
        unitId: 4
      }
    ],
    quizzes: [
      {
        id: "u4_q1",
        type: "multiple_choice",
        question: "Choose the correct question word: '________ is the Ban Flower Festival?' - 'It's in early spring.'",
        options: ["When", "Where", "Why", "How"],
        correctAnswer: "When",
        explanation: "Câu trả lời 'in early spring' chỉ mốc thời gian nên câu hỏi phải bắt đầu bằng từ hỏi 'When'."
      },
      {
        id: "u4_q2",
        type: "word_form",
        question: "Fill in the blank with a, much, many, a few or a little: My uncle owns a large plantation. He has ________ coffee trees in Kon Tum.",
        wordFormBase: "many",
        sentenceTemplate: "My uncle has ________ coffee trees in Kon Tum.",
        correctAnswer: "many",
        explanation: "Coffee trees là danh từ đếm được số nhiều, và ngữ cảnh trồng rẫy đồn điền lớn nên dùng 'many' mang ý nghĩa số lượng nhiều."
      },
      {
        id: "u4_q3",
        type: "error_correction",
        question: "Find the error regarding countable/uncountable nouns.",
        errorSentence: "We need some wood and also many grass to build our stilt house.",
        correctAnswer: "many grass -> much grass",
        explanation: "Grass (cỏ) là danh từ không đếm được, vì thế không dùng lượng từ 'many' mà phải dùng 'much' hoặc 'a lot of'."
      }
    ],
    speakingPrompt: "Hello and welcome! Unit 4 celebrates the minority cultures of Viet Nam. Which ethnic group do you find most interesting? Is it their stilt house, their colorful costumes, or their festive gong music?"
  },
  {
    id: 5,
    title: "Unit 5: Our Customs and Traditions",
    overview: {
      theme: "Phong tục và truyền thống (Ngày Tết, Phong tục thờ cúng, Đoàn tụ gia đình)",
      vocabularySummary: "Phong tục và nghi lễ: custom (phong tục), tradition (truyền thống), worship (thờ phụng), ancestor (tổ tiên), lucky money (tiền lì xì), family reunion (gia đình đoàn tụ).",
      grammarSummary: "Mạo từ (Articles):\n- Mạo từ bất định: a / an (danh từ số ít nhắc đến lần đầu, đếm được).\n- Mạo từ xác định: the (đã biết rõ, duy nhất, nhạc cụ, nhắc lại lần hai).\n- Không mạo từ (Zero article): danh từ không đếm được/ở số nhiều nói chung, quốc gia, lục địa, môn thể thao, bữa ăn.",
      pronunciationSummary: "Phân biệt phát âm hai phụ âm mũi /n/ (thin, land, traditional) và âm mũi họng /ŋ/ (thing, thank, language, offering)."
    },
    vocabulary: [
      {
        word: "worship",
        pos: "v",
        phonetic: "/ˈwɜːʃɪp/",
        vietnamese: "thờ phụng, tôn kính, cúng bái",
        exampleEng: "We hold a long-time tradition to worship our ancestors during Tet holiday.",
        exampleVie: "Chúng tôi giữ một truyền thống lâu đời là thờ cúng tổ tiên trong kỳ nghỉ Tết.",
        unitId: 5
      },
      {
        word: "family reunion",
        pos: "n",
        phonetic: "/ˈfæmili ˌriːˈjuːniən/",
        vietnamese: "buổi đoàn tụ gia đình",
        exampleEng: "New Year's Eve is an important occasion for a warm family reunion.",
        exampleVie: "Đêm Giao thừa là một dịp quan trọng cho một buổi tụ họp gia đình đầm ấm.",
        unitId: 5
      },
      {
        word: "ancestor",
        pos: "n",
        phonetic: "/ˈænsestə(r)/",
        vietnamese: "tổ tiên, ông bà tổ tiên",
        exampleEng: "Traditionally, Vietnamese people prepare offerings to worship their ancestors.",
        exampleVie: "Theo truyền thống, người Việt Nam chuẩn bị các lễ vật để thờ cúng ông bà tổ tiên.",
        unitId: 5
      },
      {
        word: "custom",
        pos: "n",
        phonetic: "/ˈkʌstəm/",
        vietnamese: "phong tục (của một cá nhân hoặc nhóm nhỏ thường niên)",
        exampleEng: "It is a standard custom in my family to gather for breakfast on Sundays.",
        exampleVie: "Ăn sáng cùng nhau vào Chủ Nhật đã trở thành một phong tục quen thuộc trong gia đình tôi.",
        unitId: 5
      },
      {
        word: "lucky money",
        pos: "n",
        phonetic: "/ˈlʌki ˈmʌni/",
        vietnamese: "tiền lì xì, tiền mừng tuổi",
        exampleEng: "Children look forward to Tet because they will receive lucky money.",
        exampleVie: "Trẻ em rất ngóng đợi Tết vì chúng sẽ nhận được tiền mừng tuổi lì xì.",
        unitId: 5
      }
    ],
    quizzes: [
      {
        id: "u5_q1",
        type: "multiple_choice",
        question: "Choose the correct article option: My father bought ________ ornamental kumquat tree for Tet.",
        options: ["an", "a", "the", "Ø (no article)"],
        correctAnswer: "an",
        explanation: "Kumquat bắt đầu bằng chữ 'k', tuy nhiên đi với tính từ 'ornamental' bắt đầu bằng âm nguyên âm /ɔː/ nên ta phải dùng mạo từ 'an'."
      },
      {
        id: "u5_q2",
        type: "word_form",
        question: "Identify the correct article needed: 'We went to Can Tho by _______ air.'",
        wordFormBase: "no article",
        sentenceTemplate: "We went to Can Tho by _______ air. (Type 'the', 'a', 'an' or 'no article')",
        correctAnswer: "no article",
        explanation: "Khi nói về các phương tiện giao thông sử dụng cụm giới từ 'by + phương tiện' (by air, by car, by bus, by train), ta sử dụng zero article (không mạo từ)."
      },
      {
        id: "u5_q3",
        type: "error_correction",
        question: "Spot the mistake in article usage.",
        errorSentence: "I think it is an unique tradition of the ethnic groups in Viet Nam.",
        correctAnswer: "an unique -> a unique",
        explanation: "'Unique' bắt đầu bằng âm bán nguyên âm /j/ (yew-nique). Do đó, ta phải dùng mạo từ 'a unique' chứ không dùng 'an unique'."
      }
    ],
    speakingPrompt: "Greetings! In Unit 5, we look at the warm traditions of Tet and other festivals. Tell me about an interesting holiday custom in your family. What do you do on New Year's Eve?"
  },
  {
    id: 6,
    title: "Unit 6: Lifestyles",
    overview: {
      theme: "Phong cách sống (Ẩm thực đường phố, Học trực tuyến trực quan, Chào hỏi giao tiếp)",
      vocabularySummary: "Phong cách sống và thói quen: street food (ẩm thực đường phố), online learning (học trực tuyến), traditional craft (thủ công truyền thống), greeting (lời chào), maintain (duyệt giữ).",
      grammarSummary: "- Thì tương lai đơn (Future simple): will / won't + V-inf biểu thị dự đoán hoặc quyết định ngay lúc nói.\n- Câu điều kiện loại 1 (First conditional): IF + present simple, WILL + V-inf để diễn tả điều kiện có thể xảy ra ở hiện tại hoặc tương lai.",
      pronunciationSummary: "Phân biệt phát âm tổ hợp phụ âm đầu /br/ (bridge, breakfast, brochure) và /pr/ (present, practice, program)."
    },
    vocabulary: [
      {
        word: "street food",
        pos: "n",
        phonetic: "/striːt fuːd/",
        vietnamese: "ẩm thực đường phố, món ăn vỉa hè",
        exampleEng: "People buy and sell a lot of cheap but delicious street food in Ha Noi.",
        exampleVie: "Người ta mua bán rất nhiều món ăn đường phố rẻ nhưng ngon lành ở Hà Nội.",
        unitId: 6
      },
      {
        word: "online learning",
        pos: "n",
        phonetic: "/ˌɒnˈlaɪn ˈlɜːnɪŋ/",
        vietnamese: "việc học trực tuyến, học qua mạng",
        exampleEng: "Online learning has become very convenient during bad weather.",
        exampleVie: "Học trực tuyến đã trở nên cực kỳ tiện lợi khi thời tiết xấu.",
        unitId: 6
      },
      {
        word: "maintain",
        pos: "v",
        phonetic: "/meɪnˈteɪn/",
        vietnamese: "duy trì, gìn giữ (phong cách, nếp sống)",
        exampleEng: "The native tribes in Alaska try to maintain their traditional lifestyle.",
        exampleVie: "Các bộ tộc bản xứ ở Alaska cố gắng giữ gìn nếp sống truyền thống của họ.",
        unitId: 6
      },
      {
        word: "common practice",
        pos: "n",
        phonetic: "/ˈkɒmən ˈpræktɪs/",
        vietnamese: "thói quen phổ biến, tập quán chung",
        exampleEng: "Bowing slightly when greeting others is a common practice in Japan.",
        exampleVie: "Cúi đầu nhẹ khi chào hỏi người khác là một thói quen rất phổ biến ở Nhật Bản.",
        unitId: 6
      },
      {
        word: "dogsled",
        pos: "n",
        phonetic: "/ˈdɒɡsled/",
        vietnamese: "xe quệt tuyết do chó kéo",
        exampleEng: "In Alaska, dogsled mushing is still used as a traditional means of transport.",
        exampleVie: "Ở Alaska, xe trượt tuyết do chó kéo vẫn được coi là phương tiện di chuyển truyền thống.",
        unitId: 6
      }
    ],
    quizzes: [
      {
        id: "u6_q1",
        type: "multiple_choice",
        question: "Choose the correct sentence form: If it rains heavily tomorrow, we ________ at home and have online classes instead.",
        options: ["will stay", "stay", "stayed", "would stay"],
        correctAnswer: "will stay",
        explanation: "Câu điều kiện loại 1. Mệnh đề IF dùng hiện tại đơn 'rains', mệnh đề chính dùng tương lai đơn 'will stay'."
      },
      {
        id: "u6_q2",
        type: "word_form",
        question: "Put the verbs in bracket into correct form: Unless she studies harder, she (not pass) ____________ the final exams.",
        wordFormBase: "will not pass",
        sentenceTemplate: "Unless she studies harder, she ____________ the final exams.",
        correctAnswer: "will not pass",
        explanation: "'Unless' tương đương 'If... not' (Nếu cô ấy không học chăm hơn, cô ấy sẽ không đỗ). Trực thuộc điều kiện loại 1, mệnh đề chính ở phủ định tương lai đơn 'will not pass' (hoặc 'won't pass')."
      },
      {
        id: "u6_q3",
        type: "error_correction",
        question: "Spot the tense mistake in this first conditional sentence.",
        errorSentence: "If you will read books everyday, you will improve your English vocabulary.",
        correctAnswer: "will read -> read",
        explanation: "Trong câu điều kiện loại 1, mệnh đề điều kiện (sau IF) không dùng thì tương lai với 'will', mà dùng hiện tại đơn ('If you read...')."
      }
    ],
    speakingPrompt: "Hello! Today we discuss diets, greetings, and school systems globally in Unit 6. Do you prefer online learning or classroom learning, and why? Let's chat."
  },
  {
    id: 7,
    title: "Unit 7: Environmental Protection",
    overview: {
      theme: "Bảo vệ môi trường (Carbon Footprint, Động vật hoang dã, Rác thải nhựa)",
      vocabularySummary: "Môi trường: carbon footprint (dấu chân các-bon), habitat loss (mất môi trường sống), pollution (ô nhiễm), single-use products (sản phẩm dùng một lần), ecosystem (hệ sinh thái).",
      grammarSummary: "Mệnh đề trạng ngữ chỉ thời gian (Adverb clauses of time):\nđược giới thiệu bằng các liên từ thời gian: when (khi), while (trong khi), before (trước khi), after (sau khi), as soon as (ngay khi), until (cho đến khi).\nLưu ý: Không dùng 'will' trong mệnh đề trạng ngữ chỉ thời gian.",
      pronunciationSummary: "Phân biệt tổ hợp phụ âm /bl/ (black, blanket, block) và /kl/ (clean, classroom, club, clear)."
    },
    vocabulary: [
      {
        word: "carbon footprint",
        pos: "n",
        phonetic: "/ˌkɑːbən ˈfʊtprɪnt/",
        vietnamese: "dấu chân các-bon (lượng khí CO2 phát thải)",
        exampleEng: "We can reduce our carbon footprint by recycling paper and walking more.",
        exampleVie: "Chúng ta có thể giảm dấu chân carbon bằng cách tái chế giấy và đi bộ nhiều hơn.",
        unitId: 7
      },
      {
        word: "single-use products",
        pos: "n",
        phonetic: "/ˈsɪŋɡl juːs ˈprɒdʌkts/",
        vietnamese: "sản phẩm sử dụng một lần (túi nilon, chai nhựa dỏm...)",
        exampleEng: "The local club leader advises us to avoid using single-use products.",
        exampleVie: "Trưởng câu lạc bộ địa phương khuyên chúng tôi né tránh dùng các sản phẩm sử dụng một lần.",
        unitId: 7
      },
      {
        word: "endangered species",
        pos: "n",
        phonetic: "/ɪnˈdeɪndʒəd ˈspiːʃiːz/",
        vietnamese: "các loài sinh vật có nguy cơ tuyệt chủng",
        exampleEng: "Con Dao National Park provides a rich ecosystem to protect endangered species.",
        exampleVie: "Vườn quốc gia Côn Đảo cung cấp một hệ sinh thái trù phú bảo tồn các loài động vật hoang dã có nguy cơ tuyệt chủng.",
        unitId: 7
      },
      {
        word: "habitat loss",
        pos: "n",
        phonetic: "/ˈhæbɪtæt lɒs/",
        vietnamese: "sự tàn phá/mất đi môi trường sống tự nhiên",
        exampleEng: "Pollution and cutting down trees are leading to severe habitat loss.",
        exampleVie: "Ô nhiễm và nạn đốn rừng đang dẫn đến sự hủy hoại môi trường sống tự nhiên nghiêm trọng.",
        unitId: 7
      },
      {
        word: "ecosystem",
        pos: "n",
        phonetic: "/ˈiːkəʊsɪstəm/",
        vietnamese: "hệ sinh thái",
        exampleEng: "When chemicals are dumped into rivers, the whole aquatic ecosystem is damaged.",
        exampleVie: "Khi hóa chất bị đổ vào sông ngòi, toàn bộ hệ sinh thái dưới nước sẽ bị phá hủy.",
        unitId: 7
      }
    ],
    quizzes: [
      {
        id: "u7_q1",
        type: "multiple_choice",
        question: "Choose the correct time connector: Make sure you turn off all the lights and devices ________ you leave the house.",
        options: ["before", "after", "while", "until"],
        correctAnswer: "before",
        explanation: "Theo nghĩa logic hành động: Cần đảm bảo tắt hết bóng đèn và thiết bị TRƯỚC KHI rời khỏi nhà ('before')."
      },
      {
        id: "u7_q2",
        type: "word_form",
        question: "Conjugate the verb in bracket with adverb clause of time rule: As soon as my classmates (arrive) ________, we will start picking up rubbish on the beach.",
        wordFormBase: "arrive",
        sentenceTemplate: "As soon as my classmates ________, we will start picking up rubbish.",
        correctAnswer: "arrive",
        explanation: "Mặc dù mệnh đề chính ở tương lai đơn ('will start'), mệnh đề trạng ngữ chỉ thời gian đứng sau 'as soon as' chỉ được chia ở thì hiện tại đơn ('arrive')."
      },
      {
        id: "u7_q3",
        type: "error_correction",
        question: "Find the grammatical tense error in time clause.",
        errorSentence: "We will wait here until they will clean up the meeting hall.",
        correctAnswer: "will clean -> clean",
        explanation: "Mệnh đề trạng ngữ chỉ thời gian đứng sau liên từ 'until' tuyệt đối không dùng thì tương lai với 'will', mà phải chuyển thành hiện tại đơn ('clean' / 'clean up')."
      }
    ],
    speakingPrompt: "Hi friend! Unit 7 focuses on protecting our wonderful environment. What can you do in your everyday life to reduce your carbon footprint or save electricity?"
  },
  {
    id: 8,
    title: "Unit 8: Shopping",
    overview: {
      theme: "Mua sắm tiêu dùng (Siêu thị, Chợ trời, Săn giá rẻ, Mua sắm Online)",
      vocabularySummary: "Thời trang và giao thương: open-air market (chợ trời ngoài trời), bargain (mặc cả), price tag (nhãn giá), shopaholic (kẻ nghiện mua sắm), discount shop (tiệm bán đại hạ giá).",
      grammarSummary: "- Trạng từ chỉ tần suất (always, usually, often, sometimes, rarely, never) đứng trước động từ thường, đứng sau động từ to be.\n- Thì hiện tại đơn (Present simple) mang ý nghĩa tương lai dùng để diễn đạt thời khóa biểu, lịch trình giờ xe xích, lịch trình bảo tàng hoặc trường học phát hành.",
      pronunciationSummary: "Phân biệt phát âm hai tổ hợp phụ âm /sp/ (spend, space, specialty) và /st/ (stall, staff, store, assistant)."
    },
    vocabulary: [
      {
        word: "bargain",
        pos: "v",
        phonetic: "/ˈbɑːɡən/",
        vietnamese: "mặc cả, trả giá khi mua đồ",
        exampleEng: "At open-air traditional markets, customers can always bargain for lower prices.",
        exampleVie: "Tại các chợ truyền thống ngoài trời, khách hàng luôn có thể mặc cả để có giá thấp hơn.",
        unitId: 8
      },
      {
        word: "price tag",
        pos: "n",
        phonetic: "/ˈpraɪs tæɡ/",
        vietnamese: "nhãn ghi giá tiền, mác giá",
        exampleEng: "In a supermarket, all the items have fixed prices with clear price tags.",
        exampleVie: "Trong siêu thị, tất cả các mặt hàng đều có giá niêm yết với nhãn giá rõ ràng.",
        unitId: 8
      },
      {
        word: "shopaholic",
        pos: "n",
        phonetic: "/ˌʃɒpəˈhɒlɪk/",
        vietnamese: "kẻ nghiện mua sắm (luôn muốn mua mọi thứ)",
        exampleEng: "My sister is a real shopaholic; she spends almost all her salary on clothes.",
        exampleVie: "Chị gái tôi là một người nghiện mua sắm đích thực; chị ấy tiêu sạch tiền lương cho quần áo.",
        unitId: 8
      },
      {
        word: "open-air market",
        pos: "n",
        phonetic: "/ˈəʊpən eə(r) ˈmɑːkɪt/",
        vietnamese: "chợ ngoài trời, chợ phiên lộ thiên",
        exampleEng: "I love exploring Bac Ha fair because it is a vibrant open-air market.",
        exampleVie: "Tôi thích đi khám phá phiên chợ Bắc Hà vì đó là một khu chợ ngoài trời đầy rực rỡ sắc màu.",
        unitId: 8
      },
      {
        word: "convenience store",
        pos: "n",
        phonetic: "/kənˈviːniəns stɔː(r)/",
        vietnamese: "cửa hàng tiện lợi (mở cửa 24/7 bán hàng thiết yếu)",
        exampleEng: "She bought some snacks and cold drinks from the convenience store near her flat.",
        exampleVie: "Cô ấy đã mua một số đồ ăn vặt và đồ uống lạnh từ cửa hàng tiện lợi gần căn hộ của mình.",
        unitId: 8
      }
    ],
    quizzes: [
      {
        id: "u8_q1",
        type: "multiple_choice",
        question: "Choose the correct future timeline form: The train for our grade-8 field trip ________ from the station at 8:30 tomorrow morning.",
        options: ["leaves", "will leave", "leaving", "is leaving"],
        correctAnswer: "leaves",
        explanation: "Để nói về sự kiện chạy theo lịch trình, thời khóa biểu cố định trong tương lai, ta dùng thì hiện tại đơn ('leaves')."
      },
      {
        id: "u8_q2",
        type: "word_form",
        question: "Arrange the frequency adverb correctly in brackets: My mom (never / shops) ____________ online because she fears scam websites.",
        wordFormBase: "never shops",
        sentenceTemplate: "My mom ____________ online because she fears scam websites.",
        correctAnswer: "never shops",
        explanation: "Trạng từ chỉ tần suất 'never' đứng ngay trước động từ chính 'shops'."
      },
      {
        id: "u8_q3",
        type: "error_correction",
        question: "Find the scheduling tense error.",
        errorSentence: "Our flight to Singapore tomorrow will land at 10 a.m.",
        correctAnswer: "will land -> lands",
        explanation: "Lịch trình bay cố định hàng ngày của máy bay sử dụng thì hiện tại đơn ('lands'), tránh lạm dụng 'will land'."
      }
    ],
    speakingPrompt: "Hello shopping enthusiast! What do you like more: online shopping via shopping apps or walking around a traditional open-air market? Let's check why!"
  },
  {
    id: 9,
    title: "Unit 9: Natural Disasters",
    overview: {
      theme: "Thiên tai (Bão lũ, Núi lửa, Đất lở, Động đất, Bộ cứu hộ)",
      vocabularySummary: "Khí tượng hiểm họa: volcanic eruption (núi lửa phun trào), tornado (vòi rồng), landslide (sạt lở đất), earthquake (động đất), emergency kit (túi khẩn cấp).",
      grammarSummary: "Thì quá khứ tiếp diễn (Past continuous):\n- Công thức: S + was / were + V-ing.\n- Cách dùng: Diễn đạt hành động đang xảy ra tại một thời điểm xác định trong quá khứ, hoặc diễn tả một hành động đang kéo dài liên tục thì có hành động khác cắt ngang đột ngột (dùng when/while).",
      pronunciationSummary: "Nhận biết trọng âm của từ có hậu tố kết thúc là -al và -ous. Trọng âm thường rơi vào âm tiết thứ 3 từ dưới lên (nửa đầu kề cuối)."
    },
    vocabulary: [
      {
        word: "volcanic eruption",
        pos: "n",
        phonetic: "/vɒlˈkænɪk ɪˈrʌpʃn/",
        vietnamese: "núi lửa phun trào (tro bụi, khí gas phóng ra)",
        exampleEng: "We saw thick layers of grey ash cover the islands after the volcanic eruption.",
        exampleVie: "Chúng tôi thấy các lớp tro xám dày đặc bao phủ toàn đảo sau đợt núi lửa phun trào.",
        unitId: 9
      },
      {
        word: "landslide",
        pos: "n",
        phonetic: "/ˈlændslaɪd/",
        vietnamese: "vụ sạt lở đất đá (từ sườn đồi núi sập xuống)",
        exampleEng: "Heavy rain caused a massive landslide that blocked our road to Ha Giang.",
        exampleVie: "Mưa lớn đã gây ra một trận sạt lở đất lớn làm chắn ngang con đường của chúng tôi lên Hà Giang.",
        unitId: 9
      },
      {
        word: "emergency kit",
        pos: "n",
        phonetic: "/ɪˈmɜːdʒənsi kɪt/",
        vietnamese: "bộ dụng cụ cứu hộ khẩn cấp (thuốc, đèn pin, còi...)",
        exampleEng: "To prepare for natural disasters, every family should arrange an emergency kit.",
        exampleVie: "Để chuẩn bị đối phó thiên tai, mỗi gia đình nên chuẩn bị sẵn một bộ cứu hộ khẩn cấp.",
        unitId: 9
      },
      {
        word: "warning",
        pos: "n",
        phonetic: "/ˈwɔːnɪŋ/",
        vietnamese: "lời cảnh báo, sự khuyến nghị phòng hộ",
        exampleEng: "The local authorities issued a flood warning early yesterday morning.",
        exampleVie: "Chính quyền địa phương đã phát đi cảnh báo lũ lụt vào sáng sớm hôm qua.",
        unitId: 9
      },
      {
        word: "tsunami",
        pos: "n",
        phonetic: "/tsuːˈnɑːmi/",
        vietnamese: "sóng thần (sóng sóng cao đột ngột đổ bộ biển lớn)",
        exampleEng: "The massive underwater earthquake triggered a destructive tsunami.",
        exampleVie: "Vụ động đất lớn dưới đáy biển đã kích hoạt một trận sóng thần tàn phá khủng khiếp.",
        unitId: 9
      }
    ],
    quizzes: [
      {
        id: "u9_q1",
        type: "multiple_choice",
        question: "Choose the correct past tense syntax: My parents and I ________ having dinner when the earthquake shook our room last night.",
        options: ["were", "was", "are", "been"],
        correctAnswer: "were",
        explanation: "Hành động đang diễn ra tại quá khứ với chủ ngữ số nhiều ('My parents and I'), cấu trúc chia là 'were having'."
      },
      {
        id: "u9_q2",
        type: "word_form",
        question: "Conjugate the verb in brackets: 'While my sister (clean) ____________ her cupboard, she found her old primary school photos.'",
        wordFormBase: "was cleaning",
        sentenceTemplate: "While my sister ____________ her cupboard, she found her old photos.",
        correctAnswer: "was cleaning",
        explanation: "'While' dẫn đầu hành động kéo dài đang xảy ra liên tục trong quá khứ số ít, ta chia quá khứ tiếp diễn 'was cleaning'."
      },
      {
        id: "u9_q3",
        type: "error_correction",
        question: "Find the past continuous action mistake.",
        errorSentence: "When Tom ran out of the house, it is raining very hard outside.",
        correctAnswer: "is raining -> was raining",
        explanation: "Vì Tom hành động 'ran' xảy ra ở quá khứ, nên yếu tố song hành thời tiết lúc đó phải ở quá khứ tiếp diễn 'was raining'."
      }
    ],
    speakingPrompt: "Hi there. Unit 9 discusses extreme weather and natural disasters. Have you ever experienced a heavy flood, a thunderstorm, or extreme storm in your town? What should we do to prepare our homes?"
  },
  {
    id: 10,
    title: "Unit 10: Communication in the Future",
    overview: {
      theme: "Truyền thông tương lai (Cuộc họp Hologram, Thần giao cách cảm, Người máy mạng)",
      vocabularySummary: "Khoa học kết nối tương lai: video conference (hội nghị truyền hình), telepathy (thần giao cách cảm), holography (ảnh nổi 3 chiều), social network (mạng xã hội), webcam, tablet.",
      grammarSummary: "- Giới từ chỉ nơi chốn và thời gian (Prepositions of place and time): in, on, at, by etc.\n- Đại từ sở hữu (Possessive pronouns): mine, yours, his, hers, ours, theirs (thay thế cụm tính từ sở hữu + danh từ).",
      pronunciationSummary: "Học trọng âm của từ có đuôi tận cùng là -ese và -ee. Trọng âm thường nhấn thẳng vào chính đuôi này (Vietnamese, agree, guarantee)."
    },
    vocabulary: [
      {
        word: "telepathy",
        pos: "n",
        phonetic: "/təˈlepəθi/",
        vietnamese: "thần giao cách cảm, việc giao tiếp bằng suy nghĩ trực tiếp",
        exampleEng: "With telepathy, we might communicate thoughts to each other without words by 2050.",
        exampleVie: "Với thần giao cách cảm, chúng ta có thể truyền đạt suy nghĩ cho nhau mà không cần dùng từ ngữ vào năm 2050.",
        unitId: 10
      },
      {
        word: "holography",
        pos: "n",
        phonetic: "/hɒˈlɒɡrəfi/",
        vietnamese: "kỹ thuật trình chiếu ảnh ba chiều 3D",
        exampleEng: "Future schools will study with smart robots and holography science.",
        exampleVie: "Các trường học tương lai sẽ học tập với robot thông minh và kỹ thuật trình chiếu hình ảnh 3D nổi.",
        unitId: 10
      },
      {
        word: "video conference",
        pos: "n",
        phonetic: "/ˈvɪdiəʊ ˈkɒnfərəns/",
        vietnamese: "hội nghị truyền hình, gọi video nhóm trực tuyến",
        exampleEng: "The teachers are having an urgent video conference with school supervisors tonight.",
        exampleVie: "Các thầy cô giáo đang có một buổi họp hội nghị truyền hình khẩn cấp với các giám sát của trường tối nay.",
        unitId: 10
      },
      {
        word: "possessive pronoun",
        pos: "n",
        phonetic: "/pəˈzesɪv ˈprəʊnaʊn/",
        vietnamese: "đại từ sở hữu",
        exampleEng: "We use a possessive pronoun like 'mine' to avoid repeating the original noun phrase.",
        exampleVie: "Chúng ta sử dụng đại từ sở hữu như 'mine' để tránh lặp lại cụm danh từ gốc ban đầu.",
        unitId: 10
      },
      {
        word: "social network",
        pos: "n",
        phonetic: "/ˈsəʊʃl ˈnetwɜːk/",
        vietnamese: "mạng xã hội",
        exampleEng: "Internet users spend hours posting updates on their favorite social network.",
        exampleVie: "Người dùng Internet dành hàng giờ đăng tải cập nhật trên mạng xã hội yêu thích của họ.",
        unitId: 10
      }
    ],
    quizzes: [
      {
        id: "u10_q1",
        type: "multiple_choice",
        question: "Choose the correct possessive pronoun: 'My smartphone is gold. What colour is ________?' - 'Mine is black.'",
        options: ["yours", "your", "you", "yourse"],
        correctAnswer: "yours",
        explanation: "'Yours' là đại từ sở hữu, tương đương với 'your smartphone' để tránh lặp từ đã nhắc ở câu trước."
      },
      {
        id: "u10_q2",
        type: "word_form",
        question: "Select correct preposition: 'The camera phone first appeared _______ May 1999 in Japan.'",
        wordFormBase: "in",
        sentenceTemplate: "The camera phone appeared _______ May 1999 in Japan.",
        correctAnswer: "in",
        explanation: "Trước khoảng thời gian lớn là tháng và năm (May 1999), ta sử dụng giới từ 'in'."
      },
      {
        id: "u10_q3",
        type: "error_correction",
        question: "Find the possessive error in this sentence.",
        errorSentence: "This tablet is my, and that one on the table is hers.",
        correctAnswer: "my -> mine",
        explanation: "Ở đây cần một đại từ sở hữu đóng vai trò là bổ ngữ đứng một mình ('my' phải đổi thành 'mine')."
      }
    ],
    speakingPrompt: "Hello future visual learner! Unit 10 introduces holograms, telepathy, and holographic meetings. Do you think we will ever stop using smartphones and communicate by thinking directly inside our heads?"
  },
  {
    id: 11,
    title: "Unit 11: Science and Technology",
    overview: {
      theme: "Khoa học công nghệ (Nhận diện sinh trắc học, Học tinh gọn Nanolearning, Kính áp tròng 3D)",
      vocabularySummary: "Công nghệ tiên tiến: biometrics (sinh trắc học), nanolearning (học tinh gọn nhanh), robot teacher (giáo viên robot), 3D contact lenses (kính áp tròng 3D), fingerprint scanner (quét vân tay).",
      grammarSummary: "Lời kể gián tiếp (Reported speech for statements):\n- Lùi thì: Hiện tại đơn -> Quá khứ đơn; Hiện tại tiếp diễn -> Quá khứ tiếp diễn; Will -> Would.\n- Biến đổi đại từ: I -> he/she, we -> they, my -> his/her.\n- Biến đổi trạng ngữ thời gian: now -> then, today -> that day, tomorrow -> the next day, ago -> before.",
      pronunciationSummary: "Nhấn mạnh nhịp điệu câu (Sentence stress) - nhấn mạnh vào các từ mang nội nghĩa (content words) như danh từ, động từ chính, tính từ."
    },
    vocabulary: [
      {
        word: "biometrics",
        pos: "n",
        phonetic: "/ˌbaɪəʊˈmetrɪks/",
        vietnamese: "ứng dụng sinh trắc học (vân tay, mống mắt, nhận diện khuôn mặt)",
        exampleEng: "Schools use biometrics to check students' attendance automatically.",
        exampleVie: "Các trường học sử dụng sinh trắc học để kiểm tra điểm danh học sinh một cách tự động.",
        unitId: 11
      },
      {
        word: "nanolearning",
        pos: "n",
        phonetic: "/ˈnænəʊ ˈlɜːnɪŋ/",
        vietnamese: "phương thức học tinh gọn (bài học siêu ngắn trong 2-5 phút)",
        exampleEng: "Tired of long lectures? Nanolearning provides quick bits of lessons on your gadget.",
        exampleVie: "Mệt mỏi với bài giảng dài? Phương thức học tinh gọn cung cấp các mẩu kiến thức nhanh trên thiết bị của bạn.",
        unitId: 11
      },
      {
        word: "fingerprint scanner",
        pos: "n",
        phonetic: "/ˈfɪŋɡəprɪnt ˈskænə(r)/",
        vietnamese: "máy/thiết bị quét dấu vân tay",
        exampleEng: "You just need to place your thumb on the fingerprint scanner to open the gate.",
        exampleVie: "Bạn chỉ cần đặt ngón tay cái lên máy quét vân tay để mở cổng.",
        unitId: 11
      },
      {
        word: "robot teacher",
        pos: "n",
        phonetic: "/ˈrəʊbɒt ˈtiːtʃə(r)/",
        vietnamese: "giáo viên rô-bốt thông minh",
        exampleEng: "Doubt exists whether a robot teacher can someday understand students' emotions.",
        exampleVie: "Còn nhiều hoài nghi việc liệu một giáo viên robot một ngày nào đó có thể thấu hiểu được cảm xúc của học sinh.",
        unitId: 11
      },
      {
        word: "contact lenses",
        pos: "n",
        phonetic: "/ˈkɒntækt lenzɪz/",
        vietnamese: "kính áp tròng trực tiếp",
        exampleEng: "In the future, 3D contact lenses will record video and display documents right on our eyes.",
        exampleVie: "Trong tương lai, kính áp tròng 3D sẽ ghi lại video và hiển thị tài liệu ngay trên mắt của chúng ta.",
        unitId: 11
      }
    ],
    quizzes: [
      {
        id: "u11_q1",
        type: "multiple_choice",
        question: "Choose the correct indirect reporting statement: Nam said, 'I want to study face recognition technology.'",
        options: [
          "Nam said that he wanted to study face recognition technology.",
          "Nam said that he wants to study face recognition technology.",
          "Nam said that I wanted to study face recognition technology.",
          "Nam said that he had wanted study face technology."
        ],
        correctAnswer: "Nam said that he wanted to study face recognition technology.",
        explanation: "Khi chuyển sang lời gián tiếp, đại từ 'I' đổi thành 'he' và động từ hiện tại đơn 'want' lùi về quá khứ 'wanted'."
      },
      {
        id: "u11_q2",
        type: "word_form",
        question: "Complete the indirect speech sentence: Mary told me, 'We are working on our science project now.' -> Mary told me they was/were working on their science project (now) _________.",
        wordFormBase: "then",
        sentenceTemplate: "Mary told me they were working on their science project _________.",
        correctAnswer: "then",
        explanation: "Khi chuyển trực tiếp sang gián tiếp, trạng từ thời gian 'now' bắt buộc chuyển hóa thành 'then' tương thích."
      },
      {
        id: "u11_q3",
        type: "error_correction",
        question: "Identify the reported speech error.",
        errorSentence: "The teacher said that tomorrow we will have a lesson on bio-tech.",
        correctAnswer: "will have -> would have",
        explanation: "Trực thuộc lời nói kể lại gián tiếp, từ chỉ điểm gốc bắt đầu bằng 'said' (quá khứ), nên từ tương lai 'will' phải lùi thì thành 'would'."
      }
    ],
    speakingPrompt: "Hello future scientist! Unit 11 is about inventions and technology. Do you think robot teachers will replace human teachers in the future? Do you agree or disagree, and what are your reasons?"
  },
  {
    id: 12,
    title: "Unit 12: Life on Other Planets",
    overview: {
      theme: "Sự sống trên các hành tinh khác (Vũ trụ, Vật thể bay UFO, Bộ hành tinh, Người ngoài hành tinh)",
      vocabularySummary: "Thiên văn vũ trụ: habitable planet (hành tinh có thể cư ngụ), solar system (hệ mặt trời), alien (người ngoài hành tinh), crater (hố núi lửa/hố thiên thạch), telescope (kính thiên văn).",
      grammarSummary: "- Câu hỏi gián tiếp (Reported speech for questions):\n- Câu hỏi Yes/No: Dùng IF hoặc WHETHER hành động lùi thì. S + asked / wondered + if/whether + S + V (lùi thì).\n- Câu hỏi Wh-words: Giữ lại từ hỏi. S + asked / wondered + Wh-word + S + V (lùi thì).\nLưu ý: Không đảo ngữ (không dùng trợ động từ) ở mệnh đề gián tiếp.",
      pronunciationSummary: "Ngữ điệu khi liệt kê (Intonation for lists): Ngữ điệu lên giọng nhẹ (rising) ở các vật thể kể trước, và hạ giọng (falling) ở vật thể cuối cùng để báo kết thúc liệt kê."
    },
    vocabulary: [
      {
        word: "habitable planet",
        pos: "n",
        phonetic: "/ˈhæbɪtəbl ˈplænɪt/",
        vietnamese: "hành tinh có thể sinh sống được (đủ điều kiện khí oxy, nước)",
        exampleEng: "Astronomers are active to search for a habitable planet outside our solar system.",
        exampleVie: "Các nhà thiên văn học đang tích cực tìm kiếm một hành tinh có thể sinh sống được bên ngoài hệ mặt trời của chúng ta.",
        unitId: 12
      },
      {
        word: "alien",
        pos: "n",
        phonetic: "/ˈeɪliən/",
        vietnamese: "người ngoài hành tinh, sinh vật ngoài trái đất",
        exampleEng: "We enjoy watching science fiction novels about green-skinned aliens.",
        exampleVie: "Chúng tôi rất thích xem tiểu thuyết khoa học viễn tưởng nói về những người ngoài hành tinh da xanh.",
        unitId: 12
      },
      {
        word: "crater",
        pos: "n",
        phonetic: "/ˈkreɪtə(r)/",
        vietnamese: "hố thiên thạch, miệng núi lửa khổng lồ",
        exampleEng: "Through a telescope, you can view many large dusty craters on the moon.",
        exampleVie: "Thông qua kính thiên văn, bạn có thể chiêm ngưỡng nhiều hố thiên thạch phủ cát bụi khổng lồ trên mặt trăng.",
        unitId: 12
      },
      {
        word: "telescope",
        pos: "n",
        phonetic: "/ˈtelɪskəʊp/",
        vietnamese: "kính thiên văn (dùng để quan sát các hành tinh xa xôi)",
        exampleEng: "We placed a modern telescope on our roof so we can view the night stars.",
        exampleVie: "Chúng tôi đã đặt một chiếc kính thiên văn hiện đại trên sân thượng để quan sát các ngôi sao ban đêm.",
        unitId: 12
      },
      {
        word: "gravity",
        pos: "n",
        phonetic: "/ˈɡrævəti/",
        vietnamese: "trọng lực, lực hút của các hành tinh",
        exampleEng: "Because the moon has very weak gravity, astronauts can float easily.",
        exampleVie: "Bởi vì mặt trăng có trọng lực rất yếu, các phi hành gia có thể bay lơ lửng rất dễ dàng.",
        unitId: 12
      }
    ],
    quizzes: [
      {
        id: "u12_q1",
        type: "multiple_choice",
        question: "Choose the correct reported question output: The pupil asked, 'Is there liquid water on Mars?'",
        options: [
          "The pupil asked if there was liquid water on Mars.",
          "The pupil asked was there liquid water on Mars.",
          "The pupil asked that if there is liquid water on Mars.",
          "The pupil asked if there will be liquid water on Mars."
        ],
        correctAnswer: "The pupil asked if there was liquid water on Mars.",
        explanation: "Câu hỏi Yes/No chuyển sang gián tiếp dùng đầu trợ từ 'if', chủ ngữ đảo lên trước động từ và lùi thì động từ 'is' thành 'was'."
      },
      {
        id: "u12_q2",
        type: "word_form",
        question: "Put direct question to indirect form: She asked her dad, 'How fast can a UFO travel?' -> She asked her dad how fast a UFO (can) _______ travel.",
        wordFormBase: "could",
        sentenceTemplate: "She asked her dad how fast a UFO _______ travel.",
        correctAnswer: "could",
        explanation: "Giữ nguyên từ hỏi 'how fast', lùi thì động từ khiếm khuyết 'can' về 'could' và xếp theo trật tự câu khẳng định không đảo ngữ."
      },
      {
        id: "u12_q3",
        type: "error_correction",
        question: "Identify the reported question syntax error.",
        errorSentence: "He asked his teacher what did spacemen eat while living in space.",
        correctAnswer: "what did spacemen eat -> what spacemen ate",
        explanation: "Trong câu hỏi gián tiếp, tuyệt đối không dùng trợ động từ nghi vấn 'did'. Phải chuyển thành cấu trúc khẳng định: 'what spacemen ate' (lùi động từ eat thành ate)."
      }
    ],
    speakingPrompt: "Hi astronut! Let's explore space in Unit 12. Do you believe there is intelligent life or aliens on other planets in the universe? What do you think they look like?"
  }
];
