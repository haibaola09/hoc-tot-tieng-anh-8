export interface ReadingQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface GlossaryItem {
  word: string;
  meaning: string;
}

export interface ReadingItem {
  unitId: number;
  unitTitle: string;
  title: string;
  passage: string;
  imageUrl: string;
  glossary: GlossaryItem[];
  questions: ReadingQuestion[];
}

export const READING_DATA: ReadingItem[] = [
  {
    unitId: 1,
    unitTitle: "Unit 1: Leisure Time",
    title: "How Teenagers Spend Their Leisure Time Today",
    passage: `In their leisure time, modern teenagers engage in a variety of activities to relax and recharge. With the rise of technology, many teenagers spend their free time on virtual activities. For example, they are addicted to playing online games, scrolling through social media, or watching video clips on platforms like YouTube or TikTok.

However, many adolescents still enjoy offline or physical hobbies. Some creative teenagers adore doing DIY projects, such as folding beautiful origami cranes, making jewelry, or updating their bedrooms. Others prefer outdoor sports like football or badminton because they like hanging out in the local park with close friends.

No matter what leisure activity you prefer, the most important thing is to balance your hobby with study time. Spending too much time in front of a computer screen can harm your eyes and lead to low concentration. Therefore, teenagers are advised to limit their virtual screen time and join more physical outdoor sports clubs.`,
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80",
    glossary: [
      { word: "leisure", meaning: "thời gian rảnh rỗi" },
      { word: "addicted to", meaning: "bị nghiện, mê mẩn" },
      { word: "adore", meaning: "cực kỳ yêu thích" },
      { word: "concentration", meaning: "sự tập trung" }
    ],
    questions: [
      {
        id: "u1_r1",
        question: "What is the main topic of the reading passage?",
        options: [
          "Healthy food choices for modern teenagers",
          "How modern teenagers spend their leisure time",
          "Tips to build a successful game program",
          "How to make origami cranes step-by-step"
        ],
        correctAnswer: "How modern teenagers spend their leisure time",
        explanation: "Đoạn văn chủ yếu bàn luận về cách các bạn thanh thiếu niên thời nay dành thời gian rảnh rỗi (leisure time) của họ vào các hoạt động trực tuyến và ngoại tuyến."
      },
      {
        id: "u1_r2",
        question: "According to the text, which of the following is a physical or offline hobby?",
        options: [
          "Scrolling through TikTok feeds",
          "Doing DIY projects or playing outdoor sports",
          "Watching live video clips on computer screens",
          "Playing games online with virtual friends"
        ],
        correctAnswer: "Doing DIY projects or playing outdoor sports",
        explanation: "Trong đoạn 2, tác giả chỉ ra các hoạt động offline bao gồm làm đồ tự chế (DIY) và chơi thể thao ngoài trời."
      },
      {
        id: "u1_r3",
        question: "What advice is given to teenagers at the end of the passage?",
        options: [
          "They should give up studies and play games",
          "They should avoid hanging out in local parks",
          "They should limit screen time and balance hobbies with study",
          "They should only do origami at home"
        ],
        correctAnswer: "They should limit screen time and balance hobbies with study",
        explanation: "Đoạn cuối khuyên học sinh nên cân bằng sở thích với học tập và giới hạn thời gian lướt màn hình điện thoại/máy tính."
      },
      {
        id: "u1_r4",
        question: "What does the word 'adore' in paragraph 2 closest in meaning to?",
        options: [
          "To hate or dislike strongly",
          "To ignore or avoid completely",
          "To love and enjoy very much",
          "To fear or feel frightened of"
        ],
        correctAnswer: "To love and enjoy very much",
        explanation: "Từ 'adore' có nghĩa là cực kỳ yêu thích, đồng nghĩa với 'love and enjoy very much'."
      },
      {
        id: "u1_r5",
        question: "Which of the following online platforms is NOT mentioned in paragraph 1?",
        options: [
          "YouTube",
          "TikTok",
          "Facebook",
          "None of the above"
        ],
        correctAnswer: "Facebook",
        explanation: "Đoạn 1 chỉ nhắc đến YouTube và TikTok để xem clip ('video clips on platforms like YouTube or TikTok'), không nhắc đến Facebook."
      },
      {
        id: "u1_r6",
        question: "Why do some teenagers prefer outdoor sports like football or badminton?",
        options: [
          "Because they do not like physical exercises",
          "Because they like hanging out in the local park with close friends",
          "Because those sports are cheaper than social media apps",
          "Because they want to stay alone in their bedroom"
        ],
        correctAnswer: "Because they like hanging out in the local park with close friends",
        explanation: "Đoạn 2 nêu lý do các em thích thể thao ngoài trời vì: 'because they like hanging out in the local park with close friends'."
      },
      {
        id: "u1_r7",
        question: "What is a negative effect of spending too much time looking at screens?",
        options: [
          "It improves your concentration significantly",
          "It can harm your eyes and lead to low concentration",
          "It helps you make more physical friends at school",
          "It helps you get high exam grades easily"
        ],
        correctAnswer: "It can harm your eyes and lead to low concentration",
        explanation: "Đoạn 3 ghi rõ: 'Spending too much time in front of a computer screen can harm your eyes and lead to low concentration'."
      },
      {
        id: "u1_r8",
        question: "Which of the following is an example of DIY projects mentioned in the text?",
        options: [
          "Playing outdoor badminton with classmates",
          "Scrolling through social media for comments",
          "Folding beautiful origami cranes or making jewelry",
          "Watching live gaming clips on tablets"
        ],
        correctAnswer: "Folding beautiful origami cranes or making jewelry",
        explanation: "Đoạn 2 đề cập các dự án DIY tự làm bao gồm xếp hạc giấy origami ('folding beautiful origami cranes'), làm đồ trang sức ('making jewelry') hoặc sửa soạn lại phòng ngủ."
      },
      {
        id: "u1_r9",
        question: "Which word in paragraph 1 refers to being unable to stop doing or using something?",
        options: [
          "addicted to",
          "engage in",
          "recharge",
          "virtual"
        ],
        correctAnswer: "addicted to",
        explanation: "Từ 'addicted to' chỉ trạng thái bị nghiện, không ngừng sử dụng hay làm việc gì đó."
      },
      {
        id: "u1_r10",
        question: "According to the passage, is screen time recommendation to be limited?",
        options: [
          "No, screens are completely healthy all day",
          "Yes, teenagers are advised to limit virtual screen time",
          "Screen time should only be restricted for adults",
          "Technology has deleted the need for outdoor clubs"
        ],
        correctAnswer: "Yes, teenagers are advised to limit virtual screen time",
        explanation: "Đoạn cuối khẳng định: 'teenagers are advised to limit their virtual screen time and join more physical outdoor sports clubs'."
      }
    ]
  },
  {
    unitId: 2,
    unitTitle: "Unit 2: Life in the Countryside",
    title: "The Peaceful Charm of Rural Life",
    passage: `Life in the countryside of Viet Nam offers a very different atmosphere from busy city areas. One of the first things you notice in a rural village is the endless green or golden paddy fields stretching to the horizon. During the harvest season, the fields become lively as farmers work hard to harvest and load golden rice straw onto traditional carts.

The pace of life in the countryside is much slower and more peaceful. The air is fresh and clean because there are very few factories and cars. In the afternoon, children often run along the village dikes to fly kites, or play traditional folk games. The local people are famous for being incredibly hospitable, always welcoming visitors with warm smiles.

Although rural life is beautiful, it can sometimes be hard during stormy seasons. Moreover, the lack of modern specialty stores means villagers have to travel quite far to buy high-tech electronics. However, many people still prefer living in rural estates because they appreciate the peaceful nature and solid sense of community support.`,
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80",
    glossary: [
      { word: "paddy field", meaning: "cánh đồng trồng lúa" },
      { word: "harvest", meaning: "thu hoạch vụ mùa" },
      { word: "hospitable", meaning: "hiếu khách, mến khách" },
      { word: "rural estate", meaning: "vùng trang trại thôn quê" }
    ],
    questions: [
      {
        id: "u2_r1",
        question: "What is rural life in Viet Nam famous for?",
        options: [
          "Crowded luxury shopping centers and subways",
          "Endless paddy fields and a slow, peaceful pace",
          "Skyscrapers and high-tech robot cafes",
          "Heavy factory pollution and loud motor noises"
        ],
        correctAnswer: "Endless paddy fields and a slow, peaceful pace",
        explanation: "Đoạn văn viết ở đoạn 1 và 2: cuộc sống nông thôn nổi tiếng với các đồng lúa bao la vàng chín và nhịp sống chậm dãi, thanh bình."
      },
      {
        id: "u2_r2",
        question: "Why is the countryside air considered clean and fresh?",
        options: [
          "Because people use air conditioners outdoors",
          "Because there are very few factories and cars",
          "Because it rains heavily non-stop every day",
          "Because there are high-tech giant ventilation trees"
        ],
        correctAnswer: "Because there are very few factories and cars",
        explanation: "Đoạn 2 nêu rõ nguyên nhân không khí trong lành: 'because there are very few factories and cars'."
      },
      {
        id: "u2_r3",
        question: "What is one disadvantage of countryside living mentioned in the passage?",
        options: [
          "The hospitality of local farmers is poor",
          "Children are forbidden from flying kites",
          "A lack of modern specialty stores to buy electronics",
          "There is no grass or nature anywhere"
        ],
        correctAnswer: "A lack of modern specialty stores to buy electronics",
        explanation: "Đoạn 3 chỉ ra nhược điểm: thiếu các cửa hàng chuyên doanh hiện đại (specialty stores) khiến người dân phải đi rất xa để mua thiết bị công nghệ."
      },
      {
        id: "u2_r4",
        question: "When are the fields described as becoming very lively?",
        options: [
          "During the stormy seasons",
          "During the harvest season",
          "Early in the cold winter nights",
          "When modern electronics arrive"
        ],
        correctAnswer: "During the harvest season",
        explanation: "Đoạn 1 nêu: 'During the harvest season, the fields become lively as farmers work hard'."
      },
      {
        id: "u2_r5",
        question: "What do countryside children often do in the afternoon?",
        options: [
          "Work in modern city factories",
          "Run along village dikes to fly kites or play folk games",
          "Shop in major electronic specialty stores",
          "Study all day on laptops inside their bedrooms"
        ],
        correctAnswer: "Run along village dikes to fly kites or play folk games",
        explanation: "Đoạn 2 chỉ ra hoạt động buổi chiều của trẻ em: 'children often run along the village dikes to fly kites, or play traditional folk games'."
      },
      {
        id: "u2_r6",
        question: "The word 'hospitable' in paragraph 2 is closest in meaning to:",
        options: [
          "Cold and unfriendly to tourists",
          "Welcoming, generous, and warm-hearted to guests",
          "Very rich and owning high-tech items",
          "Rude and noisy on public roads"
        ],
        correctAnswer: "Welcoming, generous, and warm-hearted to guests",
        explanation: "Từ 'hospitable' chỉ lòng hiếu khách, luôn niềm nở chào đón người lạ hay du khách với nụ cười ấm áp."
      },
      {
        id: "u2_r7",
        question: "What do farmers load onto traditional carts during the harvest season?",
        options: [
          "High-tech electronics and TVs",
          "Golden rice straw",
          "Plastics and factory waste",
          "Heavy mechanical devices"
        ],
        correctAnswer: "Golden rice straw",
        explanation: "Đoạn 1 mô tả nông dân làm việc chăm chỉ để: 'harvest and load golden rice straw onto traditional carts'."
      },
      {
        id: "u2_r8",
        question: "According to the passage, when does rural life experience hardships?",
        options: [
          "During harvest seasons",
          "During stormy seasons",
          "In the sunny afternoons",
          "When children play traditional folk games"
        ],
        correctAnswer: "During stormy seasons",
        explanation: "Đoạn 3 đề cập: 'Although rural life is beautiful, it can sometimes be hard during stormy seasons' (khó khăn mùa bão lũ)."
      },
      {
        id: "u2_r9",
        question: "Why do many people still prefer to live in rural estates?",
        options: [
          "Because they want to be close to high-tech factories",
          "Because they appreciate peaceful nature and strong community support",
          "Because there are no rain or wind events",
          "Because they do not need to work to earn a living"
        ],
        correctAnswer: "Because they appreciate peaceful nature and strong community support",
        explanation: "Đoạn cuối viết: 'many people still prefer living in rural estates because they appreciate the peaceful nature and solid sense of community support'."
      },
      {
        id: "u2_r10",
        question: "Which of the following is NOT a characteristic of the Vietnamese countryside?",
        options: [
          "Fresh and clean breathing air",
          "Folk games played by local children",
          "Loud, busy highways with heavily congested vehicle traffic",
          "Endless green or golden paddy fields"
        ],
        correctAnswer: "Loud, busy highways with heavily congested vehicle traffic",
        explanation: "Cuộc sống đồng quê có rất ít xe cộ và nhà máy, không có các đường cao tốc ồn ào ô nhiễm như thành phố."
      }
    ]
  },
  {
    unitId: 3,
    unitTitle: "Unit 3: Teenagers",
    title: "Understanding and Navigating Teen Pressures",
    passage: `Being a teenager can be both exciting and stressful. During these high school years, adolescents face many changes in their bodies, emotions, and school surroundings. One of the biggest challenges for teenagers is managing expectations from their parents and high-school teachers regarding exam grades.

In addition to academic workload, teenagers often experience peer pressure. They want to be accepted by their classmate groups, which can sometimes lead them to do things they are not comfortable with. Some teens feel constant pressure to look perfect on social media, checking their phones repeatedly for likes and comments.

To avoid mental exhaustion, teenagers need to build healthy ways to concentrate and relax. School clubs, such as sports, drama, or debate clubs, are great hangouts. They help students develop leadership skills and make true friends. Most importantly, teenagers should not hide their problems, but discuss them openly with a patient school counselor or parent.`,
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80",
    glossary: [
      { word: "expectation", meaning: "sự kỳ vọng, mong mỏi" },
      { word: "peer pressure", meaning: "áp lực đồng trang lứa" },
      { word: "avoid", meaning: "chủ động tránh né" },
      { word: "counselor", meaning: "người tư vấn, cố vấn học đường" }
    ],
    questions: [
      {
        id: "u3_r1",
        question: "What is one of the biggest challenges teenagers face according to the text?",
        options: [
          "Finding a job to pay for household taxes",
          "Managing expectations from parents and teachers about grades",
          "Buying high-tech virtual gadgets at the store",
          "Learning how to cook breakfast by themselves"
        ],
        correctAnswer: "Managing expectations from parents and teachers about grades",
        explanation: "Đoạn 1 nêu rõ: Một trong những thử thách lớn nhất là kiểm soát kỳ vọng từ cha mẹ và thầy cô về mặt điểm số kiểm tra."
      },
      {
        id: "u3_r2",
        question: "What can lead teenagers to do things they are not fully comfortable with?",
        options: [
          "Peer pressure from classmates to be accepted",
          "Reading too many old history textbooks",
          "Joining beneficial school sports clubs",
          "Sleeping too early in the evening"
        ],
        correctAnswer: "Peer pressure from classmates to be accepted",
        explanation: "Đoạn 2 giải thích rằng áp lực đồng trang lứa (peer pressure) khiến học sinh muốn được hòa nhập nên đôi khi làm những việc chưa thực sự thấy thoải mái."
      },
      {
        id: "u3_r3",
        question: "What is suggested as a great way for teens to gain leadership skills and friends?",
        options: [
          "Scrolling social media posts alone in their bedroom",
          "Avoiding all school activities and staying home",
          "Joining school clubs like sports, drama, or debate",
          "Avoiding talking to parents completely"
        ],
        correctAnswer: "Joining school clubs like sports, drama, or debate",
        explanation: "Đoạn 3 đưa ra giải pháp gia nhập câu lạc bộ trường học để phát triển kỹ năng lãnh đạo và kết nối bạn bè."
      },
      {
        id: "u3_r4",
        question: "To look perfect on which platform do some teens feel constant pressure?",
        options: [
          "In school textbooks",
          "On social media",
          "At country wet markets",
          "During space walks"
        ],
        correctAnswer: "On social media",
        explanation: "Đoạn 2 viết: 'Some teens feel constant pressure to look perfect on social media...'"
      },
      {
        id: "u3_r5",
        question: "What do teenagers check repeatedly on their phones?",
        options: [
          "Weather disaster warnings",
          "Likes and comments",
          "Banh Chung recipes",
          "Brochure price tags"
        ],
        correctAnswer: "Likes and comments",
        explanation: "Đoạn 2 nêu học sinh lặp đi lặp lại hành động kiểm tra điện thoại: 'checking their phones repeatedly for likes and comments'."
      },
      {
        id: "u3_r6",
        question: "Which of the following is NOT explicitly listed as a school club in the text?",
        options: [
          "Sports club",
          "Drama club",
          "Debate club",
          "Science robot club"
        ],
        correctAnswer: "Science robot club",
        explanation: "Đoạn 3 liệt kê: 'sports, drama, or debate clubs', không có câu lạc bộ robot khoa học."
      },
      {
        id: "u3_r7",
        question: "Who should teenagers discuss their personal problems with?",
        options: [
          "Nobody, they should keep secrets completely hidden",
          "A patient school counselor or a parent",
          "Strangers on virtual gaming social rooms",
          "Classmates who are pushing them into peer pressure"
        ],
        correctAnswer: "A patient school counselor or a parent",
        explanation: "Đoạn 3 khuyên các em nên giãi bày: 'discuss them openly with a patient school counselor or parent'."
      },
      {
        id: "u3_r8",
        question: "The word 'exhaustion' in paragraph 3 is closest in meaning to:",
        options: [
          "A state of feeling completely tired and worn out",
          "Great energy and ultimate happiness",
          "A fast speed of running along paths",
          "An interest in folding origami paper"
        ],
        correctAnswer: "A state of feeling completely tired and worn out",
        explanation: "Từ 'exhaustion' chỉ trạng thái kiệt quệ sức lực hoặc tinh thần do áp lực, mệt mỏi."
      },
      {
        id: "u3_r9",
        question: "What physical and emotional environments do teenagers face changes in?",
        options: [
          "Their bodies, emotions, and high-school surroundings",
          "Only and exclusively their height",
          "The climate of other distant planets",
          "Traditional wet market bargaining rules"
        ],
        correctAnswer: "Their bodies, emotions, and high-school surroundings",
        explanation: "Đoạn 1 viết: 'adolescents face many changes in their bodies, emotions, and school surroundings'."
      },
      {
        id: "u3_r10",
        question: "True or False: Hiding academic or peer pressure problems makes them disappear.",
        options: [
          "True, keeping it quiet is always healthy",
          "False, hiding problems can lead to exhaustion, and sharing is recommended"
        ],
        correctAnswer: "False, hiding problems can lead to exhaustion, and sharing is recommended",
        explanation: "Đoạn 3 nhấn mạnh tầm quan trọng của việc không nên che giấu ('should not hide their problems') mà hãy trò chuyện cởi mở để tháo gỡ khó khăn."
      }
    ]
  },
  {
    unitId: 4,
    unitTitle: "Unit 4: Ethnic Groups of Viet Nam",
    title: "The Beautiful Heritage of Viet Nam's Minority Groups",
    passage: `Viet Nam is a beautiful country rich in cultural diversity, with 54 ethnic groups living in unity. While the Kinh people make up the majority of the population, the other 53 ethnic minority groups have their own unique traditions, languages, and artistic costumes. Many of these groups reside in mountainous provinces in northern or central Viet Nam.

If you visit these villages, you will see breathtaking terraced fields curving along the hillsides. The local women are highly skilled at weaving colourful brocade patterns, which they use to make their unique traditional costumes. Each group has a distinct pattern that tells stories about their ancestors and local nature.

In Western Highlands villages, the communal house is the central heart of the community. It is a large stilt house with a tall, axe-blade roof, where village elders meet to make important decisions. Preserving these languages, clothes, and custom structures constitutes a crucial duty to ensure the rich cultural heritage of Viet Nam remains alive for future generations.`,
    imageUrl: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&auto=format&fit=crop&q=80",
    glossary: [
      { word: "ethnic minority", meaning: "dân tộc thiểu số" },
      { word: "terraced field", meaning: "ruộng bậc thang kì vĩ" },
      { word: "communal house", meaning: "nhà rông của bản làng" },
      { word: "heritage", meaning: "di sản truyền thống quý báu" }
    ],
    questions: [
      {
        id: "u4_r1",
        question: "How many ethnic groups live in Viet Nam in total?",
        options: [
          "53 groups",
          "54 groups",
          "12 groups",
          "8 groups"
        ],
        correctAnswer: "54 groups",
        explanation: "Đoạn 1 nêu rõ Việt Nam có tổng cộng 54 nhóm dân tộc chung sống hòa thuận cùng nhau."
      },
      {
        id: "u4_r2",
        question: "What special agricultural feature can you see in mountainous minority villages?",
        options: [
          "High-tech greenhouse desert gardens",
          "Breathtaking terraced fields on hillsides",
          "Giant modern automatic rice factories",
          "Nothing but dry sandy plains"
        ],
        correctAnswer: "Breathtaking terraced fields on hillsides",
        explanation: "Đoạn 2 miêu tả nét nông nghiệp đặc sắc của miền biên viễn là ruộng bậc thang uốn lượn ('terraced fields')."
      },
      {
        id: "u4_r3",
        question: "What is the role of the communal house in Western Highlands villages?",
        options: [
          "It is used as a private hotel for tourists",
          "It is where elders meet and community activities happen",
          "It represents a specialized high-tech shopping center",
          "It is kept empty and isolated from everyone"
        ],
        correctAnswer: "It is where elders meet and community activities happen",
        explanation: "Đoạn 3 giải thích nhà rông/nhà sinh hoạt chung (communal house) là đầu não trọng tâm để hội họp và tổ chức các sinh hoạt văn hóa di sản."
      },
      {
        id: "u4_r4",
        question: "Where do most of the 53 ethnic minority groups reside?",
        options: [
          "In major coastal cities like Da Nang",
          "In the center of Ha Noi and Ho Chi Minh City",
          "In mountainous provinces in northern or central Viet Nam",
          "Abroad in other Western European countries"
        ],
        correctAnswer: "In mountainous provinces in northern or central Viet Nam",
        explanation: "Đoạn 1 nêu: 'Many of these groups reside in mountainous provinces in northern or central Viet Nam'."
      },
      {
        id: "u4_r5",
        question: "What technique are local minority women highly skilled at?",
        options: [
          "Bargaining deep prices on phone apps",
          "Weaving colourful brocade patterns for costumes",
          "Constructing giant factory chimneys",
          "Coding AI virtual learning tools"
        ],
        correctAnswer: "Weaving colourful brocade patterns for costumes",
        explanation: "Đoạn 2 chỉ ra tài hoa của phụ nữ miền cao: 'highly skilled at weaving colourful brocade patterns'."
      },
      {
        id: "u4_r6",
        question: "What stories do the distinct patterns of brocade clothing tell?",
        options: [
          "Stories about their ancestors and local nature",
          "Tales of modern shopping centers and computers",
          "Instructions to make high-yield agricultural seeds",
          "Lessons about future space explorations"
        ],
        correctAnswer: "Stories about their ancestors and local nature",
        explanation: "Theo đoạn 2: 'distinct pattern that tells stories about their ancestors and local nature'."
      },
      {
        id: "u4_r7",
        question: "Which description matches the Western Highlands communal house?",
        options: [
          "A small concrete apartment with a flat roof",
          "A large stilt house with a tall, axe-blade roof",
          "An open-air morning wet rice market",
          "A modern high-school counselor room"
        ],
        correctAnswer: "A large stilt house with a tall, axe-blade roof",
        explanation: "Đoạn 3 mô tả nhà rông: 'It is a large stilt house with a tall, axe-blade roof...'"
      },
      {
        id: "u4_r8",
        question: "Who holds meetings in the communal house to resolve village affairs?",
        options: [
          "School children and teenagers",
          "Village elders",
          "Astronauts from Mars",
          "Tourists from other nations"
        ],
        correctAnswer: "Village elders",
        explanation: "Đoạn 3 chỉ ra: 'where village elders meet to make important decisions'."
      },
      {
        id: "u4_r9",
        question: "Why should we preserve ethnic minority languages, clothes, and custom structures?",
        options: [
          "To force Kinh people to locate to the mountains",
          "To ensure the rich cultural heritage of Viet Nam remains alive",
          "To increase the production of plastic bottles",
          "To stop students from using social media programs"
        ],
        correctAnswer: "To ensure the rich cultural heritage of Viet Nam remains alive",
        explanation: "Đoạn 3 nêu nhiệm vụ quan trọng: 'ensure the rich cultural heritage of Viet Nam remains alive for future generations'."
      },
      {
        id: "u4_r10",
        question: "Which group of people represents the majority population in Viet Nam?",
        options: [
          "The Kinh people",
          "The Tay people",
          "The Hmong people",
          "The Thai people"
        ],
        correctAnswer: "The Kinh people",
        explanation: "Đoạn 1 nêu rõ: 'While the Kinh people make up the majority of the population...'"
      }
    ]
  },
  {
    unitId: 5,
    unitTitle: "Unit 5: Our Customs and Traditions",
    title: "Tet Holiday: Celebrating Family Reunion and Ancestors",
    passage: `In Viet Nam, customs and traditions are passed down deep from generation to generation. Among all festivals, Tet is the most important traditional celebration. This holiday represents a sacred time for family members to return home, show respect to elders, and worship their ancestors at the family altar.

Before Tet begins, households clean and decorate their homes with pink peach blossoms or yellow apricot flowers. People cook traditional foods like Banh Chung, a sticky rice cake filled with green beans and fatty pork. During the feast dinners, children learn proper table manners, such as waiting for the elderly to start eating and holding rice bowls with both hands.

As a custom, adults give lucky money inside red envelopes to offspring with wishes of good health and scholastic success. These traditions are essential because they build a sense of belonging to a family. They teach younger generations to respect ancestral roots, cultivate filial piety, and safeguard traditional family values.`,
    imageUrl: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=600&auto=format&fit=crop&q=80",
    glossary: [
      { word: "worship", meaning: "thờ phụng, cúng kiếng" },
      { word: "table manners", meaning: "quy tắc, phép cư xử trên bàn ăn" },
      { word: "offspring", meaning: "con cháu đời sau" },
      { word: "filial piety", meaning: "đạo làm con, lòng hiếu thảo" }
    ],
    questions: [
      {
        id: "u5_r1",
        question: "What is the most important traditional holiday in Viet Nam?",
        options: [
          "Mid-Autumn Lantern Festival",
          "The Tet Holiday",
          "Christmas Eve Festival",
          "National Day Holiday"
        ],
        correctAnswer: "The Tet Holiday",
        explanation: "Đoạn văn đầu chỉ rõ 'Among all festivals, Tet is the most important traditional celebration' (Tết là ngày lễ truyền thống quan trọng nhất)."
      },
      {
        id: "u5_r2",
        question: "What are some examples of polite table manners children learn during Tet dinners?",
        options: [
          "Eating all the food before adults arrive at the table",
          "Waiting for the elderly to start eating first and holding bowls with both hands",
          "Making loud slurping noises to show appreciation for chefs",
          "Using smartphones to play games while chewing Banh Chung"
        ],
        correctAnswer: "Waiting for the elderly to start eating first and holding bowls with both hands",
        explanation: "Đoạn 2 viết về phép lịch sự bàn ăn: đợi người lớn tuổi gắp ăn trước và bưng bát bằng hai tay."
      },
      {
        id: "u5_r3",
        question: "Why are Tet traditions considered essential for younger generations?",
        options: [
          "They help teenagers get larger allowance coins for video games",
          "They teach offspring to respect ancestral roots and keep traditions alive",
          "They replace high-school exams with flower arrangements",
          "They force children to move to other big city locations"
        ],
        correctAnswer: "They teach offspring to respect ancestral roots and keep traditions alive",
        explanation: "Đoạn cuối viết: Phong tục đón Tết dạy con cháu tôn kính nguồn cội tổ tiên và bảo tồn tinh hoa văn hóa gia đình."
      },
      {
        id: "u5_r4",
        question: "How do families decorate their houses before the Tet Holiday begins?",
        options: [
          "By building stilt houses with tall, heavy wooden logs",
          "With pink peach blossoms or yellow apricot flowers",
          "With modern electronic signs showing prices",
          "By covering everything in green brocade ribbons"
        ],
        correctAnswer: "With pink peach blossoms or yellow apricot flowers",
        explanation: "Đoạn 2 viết: 'clean and decorate their homes with pink peach blossoms or yellow apricot flowers'."
      },
      {
        id: "u5_r5",
        question: "What ingredients are filled inside the sticky rice holiday cake, Banh Chung?",
        options: [
          "Potatoes, wheat bread, and cheese slices",
          "Green beans and fatty pork",
          "Lucky silver coins and sweet chocolate",
          "Apples, grapes, and yellow flower buds"
        ],
        correctAnswer: "Green beans and fatty pork",
        explanation: "Bánh chưng là bánh nếp nhân đậu xanh và thịt lợn mỡ dẻo thơm ('filled with green beans and fatty pork')."
      },
      {
        id: "u5_r6",
        question: "What sacred activity do family members perform at the family altar?",
        options: [
          "Worship their ancestors and show respect to elders",
          "Play online matches with internet classmates",
          "Count high-school grade sheets recursively",
          "Practice English pronuciation with virtual robots"
        ],
        correctAnswer: "Worship their ancestors and show respect to elders",
        explanation: "Đoạn 1 nêu: 'show respect to elders, and worship their ancestors at the family altar'."
      },
      {
        id: "u5_r7",
        question: "What are adults traditional custom inside the red envelopes given to offspring?",
        options: [
          "DIY origami paper cranes",
          "Lucky money containing health and success wishes",
          "Small pieces of fatty pork",
          "Cardboard coupons for shopping discount items"
        ],
        correctAnswer: "Lucky money containing health and success wishes",
        explanation: "Theo đoạn 3, người lớn mừng tuổi trẻ em lì xì ('lucky money inside red envelopes') kèm lời chúc hay học tốt."
      },
      {
        id: "u5_r8",
        question: "The term 'filial piety' in paragraph 3 refers to:",
        options: [
          "Having severe pressure from peer classmates",
          "Respect, honor, and obedience towards parents and ancestors",
          "The skill of bargaining at traditional open-air wet markets",
          "Preparing survival prepared emergency kits or sirens"
        ],
        correctAnswer: "Respect, honor, and obedience towards parents and ancestors",
        explanation: "Từ 'filial piety' chỉ lòng hiếu thảo, hiếu kính đối với cha mẹ và tổ tiên."
      },
      {
        id: "u5_r9",
        question: "What long-term emotional bond do these family traditions reinforce?",
        options: [
          "A sense of belonging to a family",
          "Frequent eye strain from screens",
          "Doubt about life on other planets",
          "The habit of buying items at cheap discount rates"
        ],
        correctAnswer: "A sense of belonging to a family",
        explanation: "Từ đoạn cuối: 'These traditions are essential because they build a sense of belonging to a family'."
      },
      {
        id: "u5_r10",
        question: "True or False: Vietnamese families only clean their altars during storms.",
        options: [
          "True, only when an emergency siren sounds",
          "False, households clean and decorate ready for Tet celebrating"
        ],
        correctAnswer: "False, households clean and decorate ready for Tet celebrating",
        explanation: "Mọi người dọn dẹp trang hoàng nhà cửa đón Tết là nét đẹp truyền thống và phong tục thường niên trước Tết."
      }
    ]
  },
  {
    unitId: 6,
    unitTitle: "Unit 6: Lifestyles",
    title: "Global Diversity in Lifestyles and Livelihoods",
    passage: `Lifestyles vary greatly from country to country, shaped by local culture, climate, and traditions. For instance, the way people greet one another reflects their national identity. In Japan, bowing is a key lifestyle custom showing respect, while in Western countries like the USA, people usually greet with a firm handshake or a friendly wave.

Another major difference is local cuisine. In Viet Nam, meals are shared family-style, with various dishes placed in the center of the table for everyone to share. In contrast, Western lifestyles usually serve food on individual plates. Diet habits also focus on different key ingredients, such as rice in Asia and potatoes, cheese, or wheat bread in European households.

Modern technology is also changing regional school lifestyles. The introduction of online learning allows student groups to collaborate on projects from miles away. However, many students still prefer physical classrooms because they miss active face-to-face social interaction with teachers and classmates.`,
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80",
    glossary: [
      { word: "lifestyle", meaning: "lối sống, nếp sống thường ngày" },
      { word: "bow", meaning: "cúi đầu chào kính cẩn" },
      { word: "local cuisine", meaning: "ẩm thực vùng miền độc đáo" },
      { word: "interaction", meaning: "sự giao lưu, tương tác qua lại" }
    ],
    questions: [
      {
        id: "u6_r1",
        question: "How do people in Japan traditionally greet each other?",
        options: [
          "By hugging tightly",
          "By bowing respectfully",
          "By waving hands from afar",
          "By exchanging corporate cards"
        ],
        correctAnswer: "By bowing respectfully",
        explanation: "Khoản 1 nêu rõ phong tục tại Nhật Bản: 'bowing is a key lifestyle custom showing respect'."
      },
      {
        id: "u6_r2",
        question: "How does Asian dining cuisine style differ from Western dining style?",
        options: [
          "Asian families share various dishes in the center, while Western serves individual plates",
          "Western tables do not use spoons or knives at all",
          "Asian families prefer buying fast food boxes only",
          "There is no difference between them whatsoever"
        ],
        correctAnswer: "Asian families share various dishes in the center, while Western serves individual plates",
        explanation: "Đoạn 2 chỉ ra: mâm cơm Việt Nam gồm các món chung xếp ở giữa bàn ăn tập thể, còn người phương Tây phục vụ suất ăn đơn lẻ trên từng đĩa riêng."
      },
      {
        id: "u6_r3",
        question: "Why do many students still prefer attending physical school classes despite online learning options?",
        options: [
          "Because they hate using laptops or smart tablets",
          "Because they value face-to-face social interaction with peers and teachers",
          "Because physical schools provide free food every day",
          "Because physical homework is much easier than digital testing"
        ],
        correctAnswer: "Because they value face-to-face social interaction with peers and teachers",
        explanation: "Đoạn 3 viết: học sinh vẫn chuộng lớp học trực tiếp vì trân trọng sự tương tác xã hội mắt đối mặt (face-to-face social interaction) với giáo viên và bè bạn."
      },
      {
        id: "u6_r4",
        question: "According to paragraph 1, what factors shape a country's unique lifestyle?",
        options: [
          "The height of skyscrapers in big cities",
          "Local culture, climate, and traditions",
          "The speed of virtual gaming processors",
          "The price of electronics in specialty stores"
        ],
        correctAnswer: "Local culture, climate, and traditions",
        explanation: "Đoạn 1 nêu: 'Lifestyles vary greatly from country to country, shaped by local culture, climate, and traditions'."
      },
      {
        id: "u6_r5",
        question: "What is the common greeting custom in Western countries like the USA?",
        options: [
          "Folding hands to pray on altars",
          "Bowing deeply until your head touches your legs",
          "A firm handshake or a friendly wave",
          "Waving red envelopes containing lucky money"
        ],
        correctAnswer: "A firm handshake or a friendly wave",
        explanation: "Đoạn 1 viết: 'USA, people usually greet with a firm handshake or a friendly wave'."
      },
      {
        id: "u6_r6",
        question: "What is the key starch food focus in Asian diet habits?",
        options: [
          "Potatoes",
          "Dairy cheese",
          "Rice",
          "Wheat bread"
        ],
        correctAnswer: "Rice",
        explanation: "Đoạn 2 viết về thực phẩm cốt lõi: 'such as rice in Asia' (ví dụ lúa gạo ở Châu Á)."
      },
      {
        id: "u6_r7",
        question: "Which foods are European households more focused on in their diet?",
        options: [
          "Banh Chung and sticky rice",
          "Potatoes, cheese, or wheat bread",
          "Green beans and fatty pork",
          "Uncooked fish and brocade seeds"
        ],
        correctAnswer: "Potatoes, cheese, or wheat bread",
        explanation: "Đoạn 2 chỉ ra các nguyên liệu ăn uống Châu Âu: 'potatoes, cheese, or wheat bread in European households'."
      },
      {
        id: "u6_r8",
        question: "The word 'cuisine' in paragraph 2 is closest in meaning to:",
        options: [
          "Ways or styles of preparing, cooking, and serving food",
          "Traditional clothing items worn by dancers",
          "Severe storms causing massive damage on land",
          "Digital communication devices connecting students"
        ],
        correctAnswer: "Ways or styles of preparing, cooking, and serving food",
        explanation: "Cuisine nghĩa là ẩm thực, phong cách nấu nướng và các đặc sản ăn uống bản địa."
      },
      {
        id: "u6_r9",
        question: "How has modern technology positively affected students' lifestyles?",
        options: [
          "It forces them to study for exam grades 24 hours a day",
          "It allows student groups to collaborate on projects from miles away",
          "It prevents teenagers from playing badminton outdoors",
          "It lowers the quality of their overall concentration"
        ],
        correctAnswer: "It allows student groups to collaborate on projects from miles away",
        explanation: "Đoạn 3 viết: 'The introduction of online learning allows student groups to collaborate on projects from miles away'."
      },
      {
        id: "u6_r10",
        question: "True or False: Handshaking is the main greeting style in Japanese traditional culture.",
        options: [
          "True",
          "False"
        ],
        correctAnswer: "False",
        explanation: "Ở Nhật Bản, cúi đầu chào ('bowing respectfully') mới là văn hóa chào hỏi then chốt chứ không phải bắt tay."
      }
    ]
  },
  {
    unitId: 7,
    unitTitle: "Unit 7: Environmental Protection",
    title: "Urgent Actions to Protect Our Earth",
    passage: `Our planet's environment is facing extreme pressures from human activities. As cities grow larger and vehicle numbers increase, factories and motorbikes emit thick exhaust fumes that pollute our air. Moreover, raw waste thrown directly into rivers damages freshwater ecosystems, leaving many aquatic species highly endangered.

To reduce our environmental carbon footprint, we need to take active steps. One simple action is to follow the '3 Rs': Reduce, Reuse, and Recycle. We should reduce our use of single-use plastic bottles, recycle old cardboard papers, and reuse shopping bags. Schools can organize weekend garbage collections in local schoolyards or lakes.

Furthermore, planting green trees can absorb harmful carbon dioxide and refresh local breathing air. If everyone works together to save water, turn off lights when leaving rooms, and select clean public buses instead of personal motorbikes, we can restore our nature and create a beautifully sustainable future.`,
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80",
    glossary: [
      { word: "pollute", meaning: "gây ô nhiễm môi trường" },
      { word: "carbon footprint", meaning: "lượng khí thải cac-bon xả thải" },
      { word: "recycle", meaning: "tái chế phế liệu tái sử dụng" },
      { word: "endangered", meaning: "bị đe dọa tuyệt chủng lâm nguy" }
    ],
    questions: [
      {
        id: "u7_r1",
        question: "What damages freshwater ecosystems according to the text?",
        options: [
          "Fresh organic tree leaves dropping into water",
          "Throwing raw waste directly into rivers",
          "Saving rain water for plant watering",
          "Building wooden bridges over lakes"
        ],
        correctAnswer: "Throwing raw waste directly into rivers",
        explanation: "Đoạn 1 nêu rõ việc thải rác bừa bãi trực tiếp ra sông ngòi đã tàn phá các hệ sinh thái nước ngọt hiểm họa động vật."
      },
      {
        id: "u7_r2",
        question: "What does the 3 Rs rule stand for?",
        options: [
          "Run, Read, and Repeat",
          "Reduce, Reuse, and Recycle",
          "Rebuild, Restore, and Reconnect",
          "Raise, Rise, and Reconsider"
        ],
        correctAnswer: "Reduce, Reuse, and Recycle",
        explanation: "Quy tắc 3R nổi tiếng bảo vệ môi trường viết ở đoạn 2: Giảm thiểu, Tái sử dụng, và Tái chế."
      },
      {
        id: "u7_r3",
        question: "Which simple lifestyle change can help reduce carbon footprint at home?",
        options: [
          "Leaving lights and computers running all night",
          "Turning off lights when leaving rooms and choosing public buses",
          "Always using one-time plastic shopping bags",
          "Cutting down backyard trees to build larger concrete lots"
        ],
        correctAnswer: "Turning off lights when leaving rooms and choosing public buses",
        explanation: "Đoạn 3 gợi ý tắt bớt đèn thiết bị điện khi không dùng và di chuyển bằng xe công cộng để tiết kiệm tài nguyên."
      },
      {
        id: "u7_r4",
        question: "What sources pollute our breathing air according to paragraph 1?",
        options: [
          "Factories and motorbikes emitting thick exhaust fumes",
          "Children playing traditional folk games",
          "Water drops falling down from mountain clouds",
          "Folding colorful DIY origami paper cranes"
        ],
        correctAnswer: "Factories and motorbikes emitting thick exhaust fumes",
        explanation: "Đoạn 1 nêu nguyên nhân không khí ô nhiễm: 'factories and motorbikes emit thick exhaust fumes that pollute our air'."
      },
      {
        id: "u7_r5",
        question: "What happens to aquatic species when raw waste is thrown directly into rivers?",
        options: [
          "They grow larger and become completely healthy",
          "They live with no problems whatsoever",
          "Many aquatic species are left highly endangered",
          "They emigrate to other distant solar planets"
        ],
        correctAnswer: "Many aquatic species are left highly endangered",
        explanation: "Đoạn 1 viết việc thải xả rác bừa bãi ra sông hồ làm: 'leaving many aquatic species highly endangered' (các loài thủy sinh bị đe dọa)."
      },
      {
        id: "u7_r6",
        question: "Which action is recommended regarding single-use plastic bottles?",
        options: [
          "We should buy at least ten of them every day",
          "We should reduce our use of them",
          "We should throw them into local rivers",
          "We should replace them with cardboard carts"
        ],
        correctAnswer: "We should reduce our use of them",
        explanation: "Đoạn 2 khuyên: 'reduce our use of single-use plastic bottles'."
      },
      {
        id: "u7_r7",
        question: "What example of environment conservation can schools organize on weekends?",
        options: [
          "Virtual online games contests",
          "Weekend garbage collections in local schoolyards or lakes",
          "Motorbike racing tests on countryside dikes",
          "Specialty store electronic showcases"
        ],
        correctAnswer: "Weekend garbage collections in local schoolyards or lakes",
        explanation: "Giữa đoạn 2 có gợi ý: 'Schools can organize weekend garbage collections in local schoolyards or lakes' (thu gom rác hồ nước, sân trường)."
      },
      {
        id: "u7_r8",
        question: "What positive role do green trees play according to the text?",
        options: [
          "They emit thick carbon dioxide fumes",
          "They absorb harmful carbon dioxide and refresh local breathing air",
          "They catch fire easily and destroy ecosystems",
          "They block the wind during harvest seasons"
        ],
        correctAnswer: "They absorb harmful carbon dioxide and refresh local breathing air",
        explanation: "Đoạn 3 viết về công lao của cây xanh: 'absorb harmful carbon dioxide and refresh local breathing air'."
      },
      {
        id: "u7_r9",
        question: "The word 'sustainable' in paragraph 3 means:",
        options: [
          "Capable of continuing over a long period with minimum harm to nature",
          "Extremely expensive and difficult to maintain at home",
          "Full of heavy vehicle exhaust gases and dark smoke",
          "Having severe peer pressure inside school classrooms"
        ],
        correctAnswer: "Capable of continuing over a long period with minimum harm to nature",
        explanation: "Sustainable có nghĩa là bền vững, thân thiện với môi trường để bảo vệ thế hệ mai sau."
      },
      {
        id: "u7_r10",
        question: "True or False: Turning off power lights when leaving rooms increases your carbon footprint.",
        options: [
          "True",
          "False"
        ],
        correctAnswer: "False",
        explanation: "Tắt đèn thiết bị khi ra khỏi phòng giúp giảm lượng điện tiêu hao, tiết kiệm năng lượng và giảm dấu chân cac-bon."
      }
    ]
  },
  {
    unitId: 8,
    unitTitle: "Unit 8: Shopping",
    title: "Traditional Markets Versus Online Shopping",
    passage: `The way we shop has changed dramatically over the last ten years. In the past, people went to dynamic open-air wet markets early in the morning to buy meat and vegetables. In these places, buying involves face-to-face bargaining with friendly store owners to get a lower price because goods do not carry printed price tags.

Today, modern shopping malls and specialty stores have expanded across Viet Nam. Here, the prices of clothing, books, and cosmetics are fixed on clean price tags. Shoppers can walk around, look for clearances with attractive discount tags, or try outfits on in modern changing rooms without feeling rushed.

Furthermore, digital e-commerce has made shopping online incredibly popular. A shopaholic can browse thousands of products inside an application, pay using credit cards, and enjoy super-fast door-to-door delivery. However, online buyers should read old customer reviews carefully to avoid purchasing poor-quality goods or falling for fake commercial advertisements.`,
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=80",
    glossary: [
      { word: "bargaining", meaning: "mặc cả giá giảm" },
      { word: "price tag", meaning: "mác nhãn dán giá hàng" },
      { word: "shopaholic", meaning: "tín đồ cuồng mua sắm" },
      { word: "discount", meaning: "mức giảm giá chiết khấu" }
    ],
    questions: [
      {
        id: "u8_r1",
        question: "What do shoppers traditionally do to lower prices at traditional wet markets?",
        options: [
          "They show credit cards to get automated cashbacks",
          "They bargain face-to-face with friendly owners",
          "They print out their own price tags at home",
          "They call the local police to complain about costs"
        ],
        correctAnswer: "They bargain face-to-face with friendly owners",
        explanation: "Đoạn 1 nêu: tại các chợ truyền thống ẩm thấp lộ thiên, người dân thường mặc cả (bargain) trực tiếp với chủ bán để giảm giá."
      },
      {
        id: "u8_r2",
        question: "Where are product prices printed on static labels fixedly?",
        options: [
          "On printed price tags inside modern malls and specialty stores",
          "On the faces of shopaholic customers",
          "Nowhere, prices are always hidden online",
          "Written on the floor of the change room"
        ],
        correctAnswer: "On printed price tags inside modern malls and specialty stores",
        explanation: "Đoạn 2 làm rõ: trong các trung tâm hiện đại, giá niêm yết được in sẵn trên các nhãn giá (price tags) rõ ràng."
      },
      {
        id: "u8_r3",
        question: "What caution should online shoppers exercise according to the passage?",
        options: [
          "They must never pay with electronic bank cards",
          "They should read customer reviews carefully to avoid fake ads",
          "They must buy at least ten items at standard costs",
          "They should never check the size dimensions"
        ],
        correctAnswer: "They should read customer reviews carefully to avoid fake ads",
        explanation: "Đoạn cuối cảnh báo người mua hàng qua mạng nên đọc kỹ đánh giá cũ của khách mua trước (customer reviews) để tránh bẫy quảng cáo ảo."
      },
      {
        id: "u8_r4",
        question: "When did shoppers traditionally go to open-air wet markets in the past?",
        options: [
          "Late at night during typhoons",
          "Early in the morning",
          "Only on New Year's Eve",
          "After receiving remote e-commerce packages"
        ],
        correctAnswer: "Early in the morning",
        explanation: "Đoạn 1 nêu: 'people went to dynamic open-air wet markets early in the morning'."
      },
      {
        id: "u8_r5",
        question: "Why does buying in traditional wet markets require bargaining?",
        options: [
          "Because people have credit card problems",
          "Because goods do not carry printed price tags",
          "Because shop owners are very unfriendly",
          "Because the food is extremely bad"
        ],
        correctAnswer: "Because goods do not carry printed price tags",
        explanation: "Chợ quê truyền thống dán hay in giá: 'buying involves face-to-face bargaining... because goods do not carry printed price tags'."
      },
      {
        id: "u8_r6",
        question: "What items have fixed price tags in modern malls?",
        options: [
          "Only meat and fresh vegetables",
          "Clothing, books, and cosmetics",
          "DIY origami cranes and brocade costumes",
          "Spacesuits and oxygen tanks"
        ],
        correctAnswer: "Clothing, books, and cosmetics",
        explanation: "Đoạn 2 chỉ ra hàng hóa trung tâm mua sắm: 'prices of clothing, books, and cosmetics are fixed on clean price tags'."
      },
      {
        id: "u8_r7",
        question: "Where can shoppers go if they want to try on outfits with ease in malls?",
        options: [
          "Into open wet markets early morning",
          "Into modern changing rooms without feeling rushed",
          "To the local schoolyard counselor desk",
          "Into the stilt communal house elders chamber"
        ],
        correctAnswer: "Into modern changing rooms without feeling rushed",
        explanation: "Đoạn 2 viết khách mua sắm có thể thử đồ thoải mái: 'try outfits on in modern changing rooms without feeling rushed'."
      },
      {
        id: "u8_r8",
        question: "The word 'shopaholic' in paragraph 3 refers to:",
        options: [
          "An environmental rescue worker saving species",
          "A person who loves shopping very much and spends too much time/money on it",
          "A store owner who refuses to put tags on items",
          "A high-school teacher who prepares math exams"
        ],
        correctAnswer: "A person who loves shopping very much and spends too much time/money on it",
        explanation: "Shopaholic là người nghiện mua sắm, thích tìm kiếm đồ dùng sản phẩm liên tục."
      },
      {
        id: "u8_r9",
        question: "What checkout option and delivery system make online shopping so popular?",
        options: [
          "Paying via credit cards and enjoying fast door-to-door delivery",
          "Bargaining face-to-face first and loading items on traditional straw carts",
          "Dumping plastic garbage in lakeside boxes and waiting a year",
          "Trading brocade clothes manually at mountainous locations"
        ],
        correctAnswer: "Paying via credit cards and enjoying fast door-to-door delivery",
        explanation: "Người mua mạng ưa chuộng vì: 'pay using credit cards, and enjoy super-fast door-to-door delivery' (nhanh gọn tận nơi)."
      },
      {
        id: "u8_r10",
        question: "True or False: It is completely safe to click any digital shopping ads without checking reviews.",
        options: [
          "True, internet sellers are always 100% honest",
          "False, you should read reviews to avoid poor-quality goods or fake ads"
        ],
        correctAnswer: "False, you should read reviews to avoid poor-quality goods or fake ads",
        explanation: "Đoạn cuối viết khách hàng phải hết sức tỉnh táo đọc review để tránh nhận đồ kém chất lượng từ những quảng cáo thổi phồng bóp méo sự thật."
      }
    ]
  },
  {
    unitId: 9,
    unitTitle: "Unit 9: Natural Disasters",
    title: "Understanding and Surviving Natural Disasters",
    passage: `Natural disasters are severe, unexpected weather events caused by nature that threaten human lives and infrastructure. Some of the most common disasters include heavy floods, landslides, and typhoons. Coastal regions of Viet Nam are often hit by powerful typhoons, bringing strong winds and heavy rainfall that destroy crops and houses.

Other dangerous disasters are earthquakes and volcanoes. A massive earthquake can shake concrete buildings down in seconds, while active volcanoes erupt hot, red molten lava that wipes out nearby forest habitats. When these extreme forces struck, brave local rescue workers work night and day to search for missing hikers and evacuate families to safe emergency zones.

To survive extreme natural events, disaster preparedness plans are essential. Families ought to keep survival kits at home containing fresh bottled water, blankets, dry food, flashlights, and extra batteries. Most importantly, local villagers should listen carefully to warning sirens and weather broadcast alerts to evacuate early before the disaster strikes.`,
    imageUrl: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=600&auto=format&fit=crop&q=80",
    glossary: [
      { word: "typhoon", meaning: "trận bão nhiệt đới dữ dội" },
      { word: "rescue worker", meaning: "nhân viên cứu hộ cứu nạn dũng cảm" },
      { word: "evacuate", meaning: "di tản gấp khu sơ tán" },
      { word: "preparedness", meaning: "sự chuẩn bị phòng chống, thế chủ động" }
    ],
    questions: [
      {
        id: "u9_r1",
        question: "Which of the following natural disasters often threatens coastal regions of Viet Nam?",
        options: [
          "Active desert sandstorms",
          "Heavy earthquakes shaking underground",
          "Powerful typhoons with wind and heavy rain",
          "Violent snow blizzards and ice sheets"
        ],
        correctAnswer: "Powerful typhoons with wind and heavy rain",
        explanation: "Đoạn 1 nêu dải duyên hải Việt Nam thường hứng chịu các trận bão nhiệt đới dữ dội (typhoons) gió to mưa lớn."
      },
      {
        id: "u9_r2",
        question: "Who works tirelessly to find missing people and move families to safety?",
        options: [
          "Professional shopaholics",
          "Famous computer game creators",
          "Brave rescue workers",
          "Weavers from ethnic minority groups"
        ],
        correctAnswer: "Brave rescue workers",
        explanation: "Đoạn 2 ghi rõ: các chiến sĩ cứu hộ dũng cảm (rescue workers) túc trực tìm kiếm người mất tích và di tản người dân."
      },
      {
        id: "u9_r3",
        question: "What items should be stored inside a home basic survival prepared kit?",
        options: [
          "New video games and large televisions",
          "Warped wooden boards and extra garden tools",
          "Fresh water, dry foods, flashlights, and extra batteries",
          "Bedsheets, expensive clothes, and makeup boxes"
        ],
        correctAnswer: "Fresh water, dry foods, flashlights, and extra batteries",
        explanation: "Đoạn 3 khuyên các gia đình trữ đồ gồm: nước sạch đóng chai, đồ ăn khô dự trữ khẩn cấp, đèn pin và pin sơ phòng."
      },
      {
        id: "u9_r4",
        question: "According to paragraph 1, what are natural disasters caused by?",
        options: [
          "Uncontrolled chemical factory experiments",
          "Severe, unexpected weather events caused by nature",
          "Spacesuits breaking down during space walks",
          "Too many teenagers playing online video games"
        ],
        correctAnswer: "Severe, unexpected weather events caused by nature",
        explanation: "Đoạn 1 định nghĩa thiên tai là thiên biến thời tiết nghiêm trọng ngoài ý muốn do tự nhiên gây ra."
      },
      {
        id: "u9_r5",
        question: "What is mentioned as a major risk when powerful typhoons hit land?",
        options: [
          "They bring strong winds and heavy rainfall that destroy crops and houses",
          "They increase the growth of terraced paddy fields",
          "They make shopping discounts much more attractive",
          "They trigger telepathy between human brains"
        ],
        correctAnswer: "They bring strong winds and heavy rainfall that destroy crops and houses",
        explanation: "Đoạn 1 viết: 'powerful typhoons, bringing strong winds and heavy rainfall that destroy crops and houses'."
      },
      {
        id: "u9_r6",
        question: "How fast can a massive earthquake collapse concrete buildings down?",
        options: [
          "In a few years of slowly shaking",
          "In seconds",
          "It never damages robust concrete houses",
          "In approximately five weeks"
        ],
        correctAnswer: "In seconds",
        explanation: "Đoạn 2 chỉ ra sức hủy diệt vũ bão của động đất: 'A massive earthquake can shake concrete buildings down in seconds'."
      },
      {
        id: "u9_r7",
        question: "What dangerous hot material do active volcanoes erupt?",
        options: [
          "Cool underground fresh water",
          "Hot, red molten lava wiping out forests",
          "Thick ice sheets of freezing snow",
          "Brocade clothing particles and thread"
        ],
        correctAnswer: "Hot, red molten lava wiping out forests",
        explanation: "Đoạn 2 mô tả dung nham phun trào từ núi lửa hoạt động: 'active volcanoes erupt hot, red molten lava that wipes out nearby forest habitats'."
      },
      {
        id: "u9_r8",
        question: "The word 'evacuate' in paragraph 2 is closest in meaning to:",
        options: [
          "To stay inside a building during a dangerous storm",
          "To move people away from a dangerous place to a safer location",
          "To clean and decorate peach blossoms at family altars",
          "To bargain prices with store shopaholic owners"
        ],
        correctAnswer: "To move people away from a dangerous place to a safer location",
        explanation: "Evacuate có nghĩa là di tản, sơ tán khẩn cấp người dân ra khỏi vùng hiểm địa."
      },
      {
        id: "u9_r10",
        question: "According to the passage, our family disaster survival kits must contain:",
        options: [
          "Origami cranes and hand-made brocade costumes",
          "Fresh bottled water, blankets, dry food, flashlights, and extra batteries",
          "Online textbooks, video games, laptops, and smartwatches",
          "Fresh rice straw loaded onto traditional farms carts"
        ],
        correctAnswer: "Fresh bottled water, blankets, dry food, flashlights, and extra batteries",
        explanation: "Đoạn 3 khuyên các hộ gia đình trữ vật dụng gồm: nước uống đóng chai, chăn đắp, lương thực khô dự trữ khẩn cấp, đèn pin cùng pin phụ trợ."
      },
      {
        id: "u9_r9",
        question: "What warnings should villagers listen to for early safety action?",
        options: [
          "Their school classmates' playground conversations",
          "Warning sirens and weather broadcast alerts",
          "The noises of motorbikes running on rural highways",
          "The announcements of shopping clearing discounts"
        ],
        correctAnswer: "Warning sirens and weather broadcast alerts",
        explanation: "Để chủ động di tản an toàn, người dân cần theo dõi: 'warning sirens and weather broadcast alerts'."
      }
    ]
  },
  {
    unitId: 10,
    unitTitle: "Unit 10: Communication in the Future",
    title: "How Technology Will Transform Future Human Connections",
    passage: `In the past, communicating across long distances was slow, requiring paper letters carried by postmen. Today, smartphones and social messaging allow us to send instant text replies globally in seconds. However, technology experts predict that future communication will become even more immersive, far beyond our current imagination.

By 2040, instead of staring at flat computer screens, we might hold video conferences using high-definition 3D holograms. This technology projects a spinning, realistic light image of your friends directly into your living room, making it feel like they are sitting next to you. Some science classrooms are already experimenting with these virtual 3D projection tools.

Even more incredible is the concept of brain-to-brain telepathy. Scientists are researching super-smart smartwatch devices that can translate brainwaves into texts. This means humans might eventually share thoughts and feelings instantly without speaking or typing. Although this future feels far away, rapid digital tech progress is bringing us closer to these innovations every year.`,
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
    glossary: [
      { word: "hologram", meaning: "ảnh chiếu ba chiều ánh sáng" },
      { word: "telepathy", meaning: "thần giao cách cảm truyền ý nghĩ" },
      { word: "immersive", meaning: "chân thực sống động, chìm đắm" },
      { word: "translate", meaning: "dịch thuật giải mã thông tin" }
    ],
    questions: [
      {
        id: "u10_r1",
        question: "What major future communication technology is predicted to replace flat laptop screens?",
        options: [
          "Writing paper letters and posting them",
          "High-definition 3D holograms",
          "Using wired telephone systems along streets",
          "Sending Morse code signals using lasers"
        ],
        correctAnswer: "High-definition 3D holograms",
        explanation: "Đoạn 2 giới thiệu sự bùng nổ của ảnh ba chiều 3D holograms tạo lập thực tế ảo làm biến mất sự phụ thuộc vào màn hình máy tính phẳng dẹt."
      },
      {
        id: "u10_r2",
        question: "What is telepathy?",
        options: [
          "Sending paper mails twice a day on bikes",
          "Exchanging thoughts and mindwaves directly between brains",
          "Shouting loudly across a large green mountain valley",
          "Talking to classmates using sign language"
        ],
        correctAnswer: "Exchanging thoughts and mindwaves directly between brains",
        explanation: "Khoản 3 viết về thần giao cách cảm (telepathy): truyền thông tin suy nghĩ trực tiếp giữa bộ não con người không cần trung gian phát ngôn hay bàn phím."
      },
      {
        id: "u10_r3",
        question: "What wearable technology are scientists researching to decode brainwaves?",
        options: [
          "Traditional woven costumes",
          "Super-smart smartwatch devices",
          "Nanotechnology breathing masks",
          "High-tech oxygen gas tanks"
        ],
        correctAnswer: "Super-smart smartwatch devices",
        explanation: "Đoạn 3 đưa tin: nhà khoa học đang thí sinh học nghiên cứu đồng hồ thông minh (smartwatch) siêu việt để dịch sóng não thành dạng văn bản thoại."
      },
      {
        id: "u10_r4",
        question: "How was long-distance communication done in the past?",
        options: [
          "Using high-definition 3D holograms",
          "Paper letters carried by postmen that were slow",
          "Instant messaging with smartphones within seconds",
          "Sending brainwaves directly"
        ],
        correctAnswer: "Paper letters carried by postmen that were slow",
        explanation: "Đoạn 1 nêu: 'In the past, communicating across long distances was slow, requiring paper letters carried by postmen'."
      },
      {
        id: "u10_r5",
        question: "According to the passage, how is modern communication today described?",
        options: [
          "It is slower than paper letters",
          "It uses smartphones and messaging containing instant replies in seconds",
          "It is completely limited to 3D projected rooms",
          "It relies entirely on space satellites and lunar astronauts"
        ],
        correctAnswer: "It uses smartphones and messaging containing instant replies in seconds",
        explanation: "Ngày nay công nghệ liên lạc rất nhanh: 'Today, smartphones and social messaging allow us to send instant text replies globally in seconds'."
      },
      {
        id: "u10_r6",
        question: "How does a 3D hologram project a friend's image?",
        options: [
          "As a flat black-and-white print output",
          "As a spinning, realistic light image directly into your room",
          "As a loud audio track without any video representation",
          "As a textured brocade pattern clothing layout"
        ],
        correctAnswer: "As a spinning, realistic light image directly into your room",
        explanation: "Đoạn 2 giải thích cơ chế: 'projects a spinning, realistic light image of your friends directly into your living room'."
      },
      {
        id: "u10_r7",
        question: "Besides professional offices, where are these 3D projection tools currently experimented with?",
        options: [
          "Traditional open-air morning markets",
          "Some science school classrooms",
          "Remote stilt communal houses",
          "Inside volcanic molten chambers"
        ],
        correctAnswer: "Some science school classrooms",
        explanation: "Tận cùng đoạn 2 viết: 'Some science classrooms are already experimenting with these virtual 3D projection tools'."
      },
      {
        id: "u10_r8",
        question: "The word 'immersive' in paragraph 1 is closest in meaning to:",
        options: [
          "Providing a deep, realistic, and surrounding digital experience",
          "Extremely boring, dark, and hard to understand",
          "Related to typhoons and heavy floods from oceans",
          "Passed down from ancestors and family clean altars"
        ],
        correctAnswer: "Providing a deep, realistic, and surrounding digital experience",
        explanation: "Immersive mang nghĩa chân thực, sống động, khiến thế giới ảo bao quanh tạo độ sâu sắc như thật."
      },
      {
        id: "u10_r9",
        question: "By which year do experts predict holding virtual video conferences with 3D holograms?",
        options: [
          "By the year 2010",
          "By the year 2040",
          "In the prehistoric times",
          "After the sun completely cools down"
        ],
        correctAnswer: "By the year 2040",
        explanation: "Ngay đầu đoạn 2 tác giả dự đoán mốc tương lai: 'By 2040... we might hold video conferences using high-definition 3D holograms'."
      },
      {
        id: "u10_r10",
        question: "True or False: If telepathy is fully developed, humans might share feelings without typing any text.",
        options: [
          "True",
          "False"
        ],
        correctAnswer: "True",
        explanation: "Đoạn 3 chỉ ra viễn cảnh: 'This means humans might eventually share thoughts and feelings instantly without speaking or typing'."
      }
    ]
  },
  {
    unitId: 11,
    unitTitle: "Unit 11: Science and Technology",
    title: "Robots and Artificial Intelligence in Our Classrooms",
    passage: `Science and technology are changing the way we live and study at a rapid pace. Breakthroughs in nanotechnology and biotechnology have led to materials that are lighter than paper but stronger than iron, as well as high-yield rice seeds that help farmers avoid poor crop harvests.

Among these new creations, Artificial Intelligence (AI) and advanced robotics are receiving the most excitement. In education, AI platforms are designed to act as smart personalized tutors. These virtual assistants can check your grammatical pronunciation, generate customized learning quizzes, and answer questions 24/7 without getting tired.

However, many experts believe robot teachers will never completely replace human teachers. Human coaches provide empathy, emotional support, and guide student behavior in manners that computers cannot replicate. In the near future, the best solution is a powerful combination where teachers use AI technology to enrich studies while focusing on building close human-to-human relationships.`,
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80",
    glossary: [
      { word: "nanotechnology", meaning: "công nghệ nano siêu nhỏ" },
      { word: "biotechnology", meaning: "công nghệ sinh học đột phá" },
      { word: "artificial intelligence", meaning: "trí tuệ nhân tạo (AI)" },
      { word: "replicate", meaning: "sao chép, nhân bản bắt chước" }
    ],
    questions: [
      {
        id: "u11_r1",
        question: "What are two major high-tech science fields mentioned in Paragraph 1?",
        options: [
          "Origami folding and hand-made weaving",
          "Nanotechnology and biotechnology",
          "Lighthouse building and wooden boat rafting",
          "Traditional farming and market bartering"
        ],
        correctAnswer: "Nanotechnology and biotechnology",
        explanation: "Đoạn 1 nói về sự đột phá trong công nghệ siêu nhỏ (nanotechnology) và công nghệ sinh vật học (biotechnology)."
      },
      {
        id: "u11_r2",
        question: "What benefit do virtual AI learning companions provide to students?",
        options: [
          "They replace math teachers and close all physical school hubs",
          "They verify pronunciation, create quizzes, and reply 24/7",
          "They carry heavy backpacks to student houses dynamically",
          "They clean the classroom and plant trees outside"
        ],
        correctAnswer: "They verify pronunciation, create quizzes, and reply 24/7",
        explanation: "Đoạn 2 nêu chức năng ưu việt của trợ lý AI: sửa phát âm, ra đề ôn tập, hỗ trợ túc trực ngày đêm."
      },
      {
        id: "u11_r3",
        question: "Why will robot teachers never completely replace human teachers?",
        options: [
          "Because robots are too expensive to repair in Viet Nam",
          "Because humans possess empathy, mental support, and unique relationships",
          "Because robots do not know English grammar rules",
          "Because robot batteries exhaust quickly under five minutes"
        ],
        correctAnswer: "Because humans possess empathy, mental support, and unique relationships",
        explanation: "Đoạn cuối viết con người đem lại thấu hiểu xúc cảm, sự đồng cảm (empathy) mà máy móc vô tri không thể sao chép ('cannot replicate') được."
      },
      {
        id: "u11_r4",
        question: "What agricultural breakthrough is created by advanced biotechnology?",
        options: [
          "Baking traditional sticky rice cakes of giant sizes",
          "High-yield rice seeds that help farmers avoid poor crop harvests",
          "Automatic tractors loading rice straw onto carts",
          "Bargaining programs running on wet rural markets"
        ],
        correctAnswer: "High-yield rice seeds that help farmers avoid poor crop harvests",
        explanation: "Đoạn 1 viết: 'high-yield rice seeds that help farmers avoid poor crop harvests' (hạt giống năng suất cao giúp mùa màng bội thu)."
      },
      {
        id: "u11_r5",
        question: "What is special about the new materials created using nanotechnology?",
        options: [
          "They are extremely heavy and dissolve inside rivers rapidly",
          "They are lighter than paper but stronger than iron",
          "They are made out of hot red volcanic lava dust",
          "They cannot be decorated with any peach blossoms"
        ],
        correctAnswer: "They are lighter than paper but stronger than iron",
        explanation: "Vật liệu đột phá chế tác từ nanh nghệ: 'materials that are lighter than paper but stronger than iron'."
      },
      {
        id: "u11_r6",
        question: "What specific features of AI platforms are designed for education?",
        options: [
          "To serve as smart personalized tutors",
          "To clean school grounds on weekend afternoons",
          "To force teens to stay away from physical sports",
          "To sell expensive electronic price tags"
        ],
        correctAnswer: "To serve as smart personalized tutors",
        explanation: "Đoạn 2 nêu chức năng AI đào tạo học đường: 'AI platforms are designed to act as smart personalized tutors'."
      },
      {
        id: "u11_r7",
        question: "How long can AI learning assistants remain active and answer questions?",
        options: [
          "Only 2 hours before getting exhausted",
          "24/7 without getting tired",
          "They only reply during the harvest season",
          "Only when connected with space spacesuits"
        ],
        correctAnswer: "24/7 without getting tired",
        explanation: "Bản chất máy học ưu tú: 'answer questions 24/7 without getting tired' (bất kể ngày đêm không mệt mỏi)."
      },
      {
        id: "u11_r8",
        question: "The word 'replicate' in paragraph 3 is closest in meaning to:",
        options: [
          "To copy, duplicate, or imitate something exactly",
          "To destroy and damage a structure completely",
          "To organize garbage pick-ups in lakes",
          "To evaluate exam grades at school counseling"
        ],
        correctAnswer: "To copy, duplicate, or imitate something exactly",
        explanation: "Replicate nghĩa là sao bản, nhân bản hoặc bắt chước giống hệt mẫu cũ."
      },
      {
        id: "u11_r9",
        question: "What do human coaches provide to students that computers CANNOT replicate?",
        options: [
          "Fast processing of data calculations in seconds",
          "Empathy, emotional support, and behavioral guidance",
          "Hundreds of English quizzes without any breaks",
          "Digital screen interfaces showing pixel numbers"
        ],
        correctAnswer: "Empathy, emotional support, and behavioral guidance",
        explanation: "Giáo viên mang lại tình cảm chân quý: 'Human coaches provide empathy, emotional support, and guide student behavior...'"
      },
      {
        id: "u11_r10",
        question: "What is predicted as the best educational model in the near future?",
        options: [
          "Eliminating all human teachers and installing robot boxes",
          "A model where teachers use AI technology to enrich studies and build relationships",
          "Restricting students from using any smartphones or computers",
          "Having classmates teach English lessons to each other"
        ],
        correctAnswer: "A model where teachers use AI technology to enrich studies and build relationships",
        explanation: "Đoạn cuối khuyên giải pháp dung hòa tối ưu: 'combination where teachers use AI technology to enrich studies while focusing on building close human-to-human relationships'."
      }
    ]
  },
  {
    unitId: 12,
    unitTitle: "Unit 12: Life on Other Planets",
    title: "Exploring Space: Is There Life Beyond Earth?",
    passage: `Since prehistoric times, mankind has looked up at the night sky and wondered if we are alone in the universe. Our solar system contains eight major planets, with Earth being the only home known to host liquid water and rich organic life. However, our solar system is just a tiny speck inside the humongous Milky Way galaxy.

To search for alien life, space agencies have sent advanced spacecraft to explore neighboring planets like Mars. Astronauts reside inside the international space station to test how long-term flight impacts the human body. When astronauts leave the cabin for space walks, they wear spacesuits connected to specialized oxygen tanks to survive the extreme freezing vacuum.

With billions of other stars or extrasolar planets in our universe, astronomers guess that intelligent alien life forms might exist in far-away solar systems. Although we have not found proof of extraterrestrial beings yet, the rapid development of telescopes and spacecraft means humankind will continue to search the cosmos.`,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    glossary: [
      { word: "solar system", meaning: "hệ Mặt Trời" },
      { word: "astronaut", meaning: "phi hành gia vũ trụ" },
      { word: "galaxy", meaning: "thiên hà, dải ngân hà khổng lồ" },
      { word: "oxygen tank", meaning: "bình chứa khí nén ô-xi tuần hoàn" }
    ],
    questions: [
      {
        id: "u12_r1",
        question: "What is Earth's unique feature in our solar system?",
        options: [
          "It has giant automated neon-lit cities but no land",
          "It is the only planet containing liquid water and rich life",
          "It is identical to the sun in temperature gradients",
          "It is made entirely of titanium metal dust"
        ],
        correctAnswer: "It is the only planet containing liquid water and rich life",
        explanation: "Đoạn 1 nêu: Trái Đất là hành tinh đơn nhất được biết đến có chứa nước lỏng và thảm sinh vật sống dày dặc."
      },
      {
        id: "u12_r2",
        question: "What crucial gear keeps astronauts alive in the airless void during space walks?",
        options: [
          "Sleek solar panels fitted on smartwatches",
          "Spacesuits equipped with thick oxygen tanks",
          "Baskets loaded with traditional snacks",
          "Hand-held telescopes to look for shooting stars"
        ],
        correctAnswer: "Spacesuits equipped with thick oxygen tanks",
        explanation: "Đoạn 2 làm rõ: khi bước ra ngoài khoảng không, phi hành gia được hỗ trợ sinh tồn bởi bộ đồ phi hành và bình oxi nén ('oxygen tanks')."
      },
      {
        id: "u12_r3",
        question: "Have astronomers found clear proof of intelligent alien beings yet?",
        options: [
          "Yes, they captured multiple aliens living on Sapa mountains",
          "Yes, they communicate with Mars aliens every weekend via email",
          "No, we have not found clear proof yet but we continue searching",
          "No, because aliens only live on the Sun surface"
        ],
        correctAnswer: "No, we have not found clear proof yet but we continue searching",
        explanation: "Đoạn 3 viết: mặc dù hiện tại chưa phát hiện bằng chứng xác đáng về người ngoài hành tinh nhưng loài người vẫn bền bỉ tiếp tục dùng kính thiên văn thăm dò vũ trụ."
      },
      {
        id: "u12_r4",
        question: "How many major planets are in our solar system?",
        options: [
          "Three major planets",
          "Eight major planets",
          "Fifty-four distinct planets",
          "Twelve major planets representing units"
        ],
        correctAnswer: "Eight major planets",
        explanation: "Đoạn 1 viết: 'Our solar system contains eight major planets...' (Mặt trời có 8 hành tinh chính)."
      },
      {
        id: "u12_r5",
        question: "What is the name of our grand galaxy mentioned in paragraph 1?",
        options: [
          "The Andromeda Galaxy",
          "The Milky Way",
          "The Solar Planet Hub",
          "The Western Highlands Field"
        ],
        correctAnswer: "The Milky Way",
        explanation: "Tác giả chỉ ra hệ mặt trời của chúng ta chỉ là đốm hạt nhỏ bé nằm trong dải Ngân Hà: 'the humongous Milky Way galaxy'."
      },
      {
        id: "u12_r6",
        question: "Which neighboring planet is being explored by advanced spacecraft?",
        options: [
          "Venus",
          "Mars",
          "Jupiter",
          "The Moon"
        ],
        correctAnswer: "Mars",
        explanation: "Đoạn 2 đề cập hành tinh láng giềng đang được robot tàu thám hiểm: 'explore neighboring planets like Mars' (Sao Hỏa)."
      },
      {
        id: "u12_r7",
        question: "Where do astronauts temporarily stay to study the long-term impact of spaceflight?",
        options: [
          "Inside the hot red volcanoes",
          "Inside the International Space Station",
          "In the stilt houses of minority mountains",
          "In local parks flying traditional kites"
        ],
        correctAnswer: "Inside the International Space Station",
        explanation: "Trạm vũ trụ quốc tế là nơi sinh hoạt nghiên cứu của phi hành gia: 'Astronauts reside inside the international space station'."
      },
      {
        id: "u12_r8",
        question: "What is the physical environment of space walks outside the cabin?",
        options: [
          "An extreme freezing vacuum",
          "A hot boiling ocean of carbon dioxide",
          "A fresh and clean atmosphere like countryside dikes",
          "A stormy rain forest with heavy floods"
        ],
        correctAnswer: "An extreme freezing vacuum",
        explanation: "Vũ trụ ngoài cabin là chân không băng giá khắc nghiệt: 'extreme freezing vacuum'."
      },
      {
        id: "u12_r9",
        question: "The word 'vacuum' in paragraph 2 refers to:",
        options: [
          "A high-tech digital application that translates thoughts",
          "A space that is completely empty and contains no air or matter",
          "A clean room used to try on clothing discount outfits",
          "A cart loaded with golden straw and rice grains"
        ],
        correctAnswer: "A space that is completely empty and contains no air or matter",
        explanation: "Vacuum nghĩa là chân không, vùng không gian rỗng không chứa không khí hay vật chất sinh học."
      },
      {
        id: "u12_r10",
        question: "What advanced research tools are driving humankind's search of the cosmos?",
        options: [
          "Double-sided sticky cards and lucky money envelopes",
          "Telescopes and spacecrafts",
          "Social media video reels and smartwatches",
          "Origami paper sheets and brocade patterns"
        ],
        correctAnswer: "Telescopes and spacecrafts",
        explanation: "Tầm nhìn đoạn cuối viết loài người tiếp tục tìm kiếm nhờ: 'the rapid development of telescopes and spacecraft'."
      }
    ]
  }
];
