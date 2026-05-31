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
        explanation: "Đoạn văn chủ yếu bàn luận về cách các bạn thanh thiếu niên thời nay chi tiêu thời gian rảnh rỗi (leisure time) của họ vào các hoạt động trực tuyến và ngoại tuyến."
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
          "They should give up studies and play game",
          "They should avoid hanging out in local parks",
          "They should limit screen time and balance hobbies with study",
          "They should only do origami at home"
        ],
        correctAnswer: "They should limit screen time and balance hobbies with study",
        explanation: "Đoạn cuối khuyên học sinh nên cân bằng sở thích với học tập và giới hạn thời gian lướt màn hình điện thoại/máy tính."
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
        explanation: "Đoạn văn đầu chỉ rõ 'Among all festivals, Tet is the most important traditional celebration' (Tết là ngày tết truyền thống quan trọng nhất)."
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
        explanation: "Đoạn cuối viết: Phong tục kỷ niệm dạy con cháu tôn kính nguồn cội tổ tiên và bảo tồn văn hóa truyền thống tốt đẹp."
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
        explanation: "Đoạn 2 chỉ ra: mâm cơm Việt Nam gồm các món chung ở giữa bàn ăn tập thể, còn người phương Tây phục vụ suất ăn đơn lẻ trên từng đĩa riêng."
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
        explanation: "Đoạn 3 viết: học sinh vẫn chuộng lớp học trực tiếp vì trân trọng và nhớ sự tương tác xã hội mặt đối mặt (face-to-face social interaction) với giáo viên và bè bạn."
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
        explanation: "Đoạn cuối cảnh báo người mua hàng qua mạng nên đọc kỹ đánh giá cũ của khách mua trước (customer reviews) để né tránh sập bẫy quảng cáo ảo."
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
        explanation: "Đoạn 1 nêu dải duyên hải việt nam thường hứng chịu các trận bão nhiệt đới mạnh mẽ (typhoons) dữ dội."
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
        explanation: "Đoạn 2 giới thiệu sự bùng nổ của ảnh ba chiều 3D holograms tạo lập thực tế ảo làm biến mất sự phụ thuộc vào màn hình máy tính dẹt."
      },
      {
        id: "u10_r2",
        question: "What is telepathy?",
        options: [
          "Sending paper mails twice a day on bikes",
          "Exchanging thought and mindwaves directly between brains",
          "Shouting loudly across a large green mountain valley",
          "Talking to classmates using sign language"
        ],
        correctAnswer: "Exchanging thought and mindwaves directly between brains",
        explanation: "Khoản 3 viết về thần giao cách cảm (telepathy): truyền dẫn ý nghĩ trực tiếp giữa bộ não con người không cần phát ngôn."
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
        explanation: "Đoạn 3 đưa tin: nhà khoa học đang thí sinh học nghiên cứu đồng hồ thông minh (smartwatch) siêu việt để biến dịch sóng não thành văn bản thoại."
      }
    ]
  },
  {
    unitId: 11,
    unitTitle: "Unit 11: Science and Technology",
    title: "Robots and Artificial Intelligence in Our Classrooms",
    passage: `Science and technology are changing the way we live and study at a rapid pace. Breakthroughs in nanotechnology and biotechnology have led to materials that are lighter than paper but stronger than iron, as well as high-yield rice seeds that helps farmers avoid poor crop harvests.

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
        explanation: "Đoạn 3 viết: mặc dù hiện tại chưa phát hiện bằng chứng xác đáng về người ngoài hành tinh nhưng loài người vẫn bền bỉ tiếp tục thăm dò vũ trụ."
      }
    ]
  }
];
