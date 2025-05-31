export interface NewsItem {
  id: string;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  contentEn: string;
  contentHi: string;
  image: string;
  category: string;
  date: string;
  featured?: boolean;
}

export const newsData: NewsItem[] = [
  {
    id: "budget-2023",
    titleEn: "Budget 2023: Modi Government's Final Full Budget, Middle Class to Get Major Relief",
    titleHi: "बजट 2023: मोदी सरकार का अंतिम पूर्ण बजट, मिडिल क्लास को मिल सकती है बड़ी राहत",
    descriptionEn: "Finance Minister Nirmala Sitharaman will present the Union Budget in Parliament on February 1, 2023, with an expected focus on economic growth amid global challenges.",
    descriptionHi: "वित्त मंत्री निर्मला सीतारमण 1 फरवरी 2023 को लोकसभा में पेश करेंगी केंद्रीय बजट, टैक्स स्लैब में बदलाव की उम्मीद",
    contentEn: "Finance Minister Nirmala Sitharaman will present the Union Budget for the fiscal year 2023-24 in Parliament on February 1, 2023. This will be the last full budget of the Modi government before the 2024 general elections. Economic experts are anticipating significant relief for the middle class, possibly through changes in income tax slabs or increased deductions.\n\nThe budget is expected to focus on boosting economic growth amidst global challenges, with particular emphasis on infrastructure development, manufacturing, and job creation. The government is likely to continue its capex push to stimulate growth while managing fiscal consolidation.\n\nIndustry bodies have sought increased allocations for key sectors like healthcare, education, manufacturing, and renewable energy. The budget may also address concerns related to rural distress, with possible allocations to MGNREGA and other rural schemes.",
    contentHi: "वित्त मंत्री निर्मला सीतारमण 1 फरवरी 2023 को लोकसभा में वित्त वर्ष 2023-24 के लिए केंद्रीय बजट पेश करेंगी। 2024 के आम चुनावों से पहले यह मोदी सरकार का आखिरी पूर्ण बजट होगा। आर्थिक विशेषज्ञों को मध्यम वर्ग के लिए महत्वपूर्ण राहत की उम्मीद है, संभवतः आयकर स्लैब में बदलाव या बढ़ी हुई कटौती के माध्यम से।\n\nबजट में वैश्विक चुनौतियों के बीच आर्थिक विकास को बढ़ावा देने पर ध्यान केंद्रित करने की उम्मीद है, विशेष रूप से बुनियादी ढांचे के विकास, विनिर्माण और रोजगार सृजन पर जोर दिया जाएगा। सरकार वित्तीय समेकन को प्रबंधित करते हुए विकास को प्रोत्साहित करने के लिए अपने पूंजीगत व्यय को जारी रखने की संभावना है।\n\nउद्योग संगठनों ने स्वास्थ्य सेवा, शिक्षा, विनिर्माण और नवीकरणीय ऊर्जा जैसे प्रमुख क्षेत्रों के लिए आवंटन में वृद्धि की मांग की है। बजट ग्रामीण संकट से संबंधित चिंताओं को भी संबोधित कर सकता है, जिसमें MGNREGA और अन्य ग्रामीण योजनाओं के लिए संभावित आवंटन शामिल हैं।",
    image: "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg",
    category: "politics",
    date: "January 29, 2025",
    featured: true
  },
  
  {
    id: "us-india-visit",
    titleEn: "US First Lady to Visit India, Meeting Scheduled Next Month",
    titleHi: "अमेरिकी राष्ट्रपति ने भारत की यात्रा की पुष्टि की, अगले महीने होगी मुलाकात",
    descriptionEn: "The US First Lady has confirmed her visit to India next month for strengthening bilateral ties between the two nations.",
    descriptionHi: "अमेरिकी राष्ट्रपति ने भारत की यात्रा की पुष्टि की, दोनों देशों के बीच द्विपक्षीय संबंधों को मजबूत करने के लिए अगले महीने होगी मुलाकात।",
    contentEn: "The US First Lady has officially confirmed her upcoming visit to India next month, aimed at strengthening the bilateral relationship between the two democratic nations. The visit is scheduled to include stops in New Delhi and Mumbai, with a focus on educational initiatives, women's empowerment, and cultural exchanges.\n\nDuring the visit, the First Lady is expected to meet with her Indian counterpart, senior government officials, and representatives from various civil society organizations. The visit comes at a time when both countries are looking to deepen their strategic partnership in areas like technology, defense, and climate action.\n\nThe US Embassy in New Delhi released a statement highlighting that this visit underscores the importance of the US-India comprehensive global strategic partnership and the deep bonds of friendship between the American and Indian people.",
    contentHi: "अमेरिकी राष्ट्रपति ने आधिकारिक तौर पर अगले महीने भारत की अपनी आगामी यात्रा की पुष्टि की है, जिसका उद्देश्य दोनों लोकतांत्रिक देशों के बीच द्विपक्षीय संबंधों को मजबूत करना है। यात्रा में नई दिल्ली और मुंबई में ठहराव शामिल होने की योजना है, जिसमें शैक्षिक पहल, महिला सशक्तिकरण और सांस्कृतिक आदान-प्रदान पर ध्यान केंद्रित किया गया है।\n\nयात्रा के दौरान, राष्ट्रपति की अपने भारतीय समकक्ष, वरिष्ठ सरकारी अधिकारियों और विभिन्न नागरिक समाज संगठनों के प्रतिनिधियों से मुलाकात करने की उम्मीद है। यह यात्रा ऐसे समय में हो रही है जब दोनों देश प्रौद्योगिकी, रक्षा और जलवायु कार्रवाई जैसे क्षेत्रों में अपनी रणनीतिक साझेदारी को गहरा करने की कोशिश कर रहे हैं।\n\nनई दिल्ली में अमेरिकी दूतावास ने एक बयान जारी करते हुए कहा कि यह यात्रा अमेरिका-भारत व्यापक वैश्विक रणनीतिक साझेदारी के महत्व और अमेरिकी और भारतीय लोगों के बीच गहरे दोस्ती के बंधन को रेखांकित करती है।",
    image: "https://images.pexels.com/photos/4386419/pexels-photo-4386419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "international",
    date: "January 28, 2025"
  },
  {
    id: "ipl-2023-auction",
    titleEn: "IPL 2023: Teams Could Spend Big on These 5 Players",
    titleHi: "IPL 2023: टीमों में इन 5 खिलाड़ियों पर लग सकती है सबसे बड़ी बोली",
    descriptionEn: "With the IPL 2023 auction approaching, franchises are eyeing these five star players who could trigger bidding wars.",
    descriptionHi: "IPL 2023 की नीलामी आने वाली है, और फ्रेंचाइजी इन पांच स्टार खिलाड़ियों पर नज़र गड़ाए हुए हैं जो बोली लगाने की लड़ाई को ट्रिगर कर सकते हैं।",
    contentEn: "As the IPL 2023 auction approaches, cricket experts and fans are speculating about which players might trigger intense bidding wars among franchises. Based on recent performances and team requirements, here are five players who could command the highest bids:\n\n1. Ben Stokes: The English all-rounder's match-winning abilities make him a prime target for teams looking to strengthen their middle order and bowling options.\n\n2. Sam Curran: After his impressive T20 World Cup performance, Curran's stocks have risen tremendously. His left-arm pace and lower-order batting make him a valuable asset.\n\n3. Cameron Green: The young Australian all-rounder has impressed with his batting prowess and medium-pace bowling, making him an attractive option for many teams.\n\n4. Nicholas Pooran: Despite recent form concerns, the destructive West Indian wicketkeeper-batsman is likely to attract significant interest due to his explosive batting ability.\n\n5. Mayank Agarwal: After being released by Punjab Kings, the Indian opener with leadership experience could be on the radar for multiple franchises looking for a top-order batsman.",
    contentHi: "IPL 2023 की नीलामी के नजदीक आने के साथ, क्रिकेट विशेषज्ञ और प्रशंसक अनुमान लगा रहे हैं कि कौन से खिलाड़ी फ्रैंचाइज़ी के बीच तीव्र बोली लगाने की लड़ाई को ट्रिगर कर सकते हैं। हाल के प्रदर्शन और टीम की आवश्यकताओं के आधार पर, यहां पांच खिलाड़ी हैं जो सबसे अधिक बोली का आदेश दे सकते हैं:\n\n1. बेन स्टोक्स: अंग्रेजी ऑलराउंडर की मैच जीतने की क्षमताएं उन्हें अपने मध्य क्रम और गेंदबाजी विकल्पों को मजबूत करने वाली टीमों के लिए एक प्रमुख लक्ष्य बनाती हैं।\n\n2. सैम कुरेन: अपने प्रभावशाली टी20 विश्व कप प्रदर्शन के बाद, कुरेन के स्टॉक में जबरदस्त वृद्धि हुई है। उनकी लेफ्ट-आर्म तेज गेंदबाजी और लोअर-ऑर्डर बल्लेबाजी उन्हें एक मूल्यवान संपत्ति बनाती है।\n\n3. कैमरन ग्रीन: युवा ऑस्ट्रेलियाई ऑलराउंडर ने अपनी बल्लेबाजी क्षमता और मध्यम गति की गेंदबाजी से प्रभावित किया है, जिससे वह कई टीमों के लिए एक आकर्षक विकल्प बन गए हैं।\n\n4. निकोलस पूरन: हालिया फॉर्म की चिंताओं के बावजूद, विनाशकारी वेस्ट इंडियन विकेटकीपर-बल्लेबाज को उनकी विस्फोटक बल्लेबाजी क्षमता के कारण महत्वपूर्ण रुचि आकर्षित करने की संभावना है।\n\n5. मयंक अग्रवाल: पंजाब किंग्स द्वारा रिलीज किए जाने के बाद, नेतृत्व के अनुभव वाले भारतीय ओपनर टॉप-ऑर्डर बल्लेबाज की तलाश कर रही कई फ्रैंचाइजी के रडार पर हो सकते हैं।",
    image: "https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "sports",
    date: "January 27, 2025"
  },
  {
    id: "corona-new-variant",
    titleEn: "Corona's New Variant Found, Experts Say - Caution Necessary",
    titleHi: "कोरोना का नए वेरिएंट से बढ़ी चिंता, विशेषज्ञों ने कहा - सावधानी जरूरी",
    descriptionEn: "A new variant of coronavirus has been detected, raising concerns among health experts about possible increased transmissibility.",
    descriptionHi: "कोरोनावायरस का एक नया वेरिएंट मिला है, जिससे स्वास्थ्य विशेषज्ञों के बीच संभावित बढ़े हुए संक्रमणशीलता के बारे में चिंताएं बढ़ गई हैं।",
    contentEn: "Health authorities have identified a new variant of the coronavirus, currently designated as XBB.1.5, which is quickly becoming dominant in several regions. Preliminary data suggests this variant may be more transmissible than previous strains, though there is no evidence yet of increased severity of illness.\n\nScientists are closely monitoring the variant's spread and studying its characteristics to better understand potential implications for public health. While vaccines are expected to continue providing protection against severe disease, researchers are assessing if there might be any reduction in effectiveness against this particular variant.\n\nHealth experts emphasize that standard preventive measures remain crucial: wearing masks in crowded indoor settings, maintaining good hand hygiene, ensuring adequate ventilation, and staying up to date with vaccine boosters when eligible. They also stress the importance of testing when symptomatic and isolating if infected to prevent further spread.",
    contentHi: "स्वास्थ्य अधिकारियों ने कोरोनावायरस के एक नए वेरिएंट की पहचान की है, जिसे वर्तमान में XBB.1.5 के रूप में नामित किया गया है, जो कई क्षेत्रों में तेजी से प्रमुख हो रहा है। प्रारंभिक डेटा से पता चलता है कि यह वेरिएंट पिछले स्ट्रेन की तुलना में अधिक संक्रामक हो सकता है, हालांकि अभी तक बीमारी की बढ़ी हुई गंभीरता का कोई प्रमाण नहीं है।\n\nवैज्ञानिक वेरिएंट के प्रसार की बारीकी से निगरानी कर रहे हैं और सार्वजनिक स्वास्थ्य के लिए संभावित प्रभावों को बेहतर ढंग से समझने के लिए इसकी विशेषताओं का अध्ययन कर रहे हैं। हालांकि टीकों से गंभीर बीमारी के खिलाफ सुरक्षा प्रदान करना जारी रहने की उम्मीद है, शोधकर्ता यह आकलन कर रहे हैं कि क्या इस विशेष वेरिएंट के खिलाफ प्रभावशीलता में कोई कमी हो सकती है।\n\nस्वास्थ्य विशेषज्ञ जोर देते हैं कि मानक निवारक उपाय महत्वपूर्ण बने हुए हैं: भीड़-भाड़ वाली इनडोर सेटिंग्स में मास्क पहनना, अच्छी हाथ की स्वच्छता बनाए रखना, पर्याप्त वेंटिलेशन सुनिश्चित करना, और पात्र होने पर वैक्सीन बूस्टर के साथ अप टू डेट रहना। वे लक्षण होने पर परीक्षण और संक्रमित होने पर आइसोलेशन के महत्व पर भी जोर देते हैं ताकि आगे के प्रसार को रोका जा सके।",
    image: "https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "health",
    date: "January 26, 2025"
  },
  {
    id: "pm-metro-inauguration",
    titleEn: "PM Modi Inaugurates New Metro Project in Rajasthan",
    titleHi: "पीएम मोदी ने किया राजस्थान में नए मेट्रो प्रोजेक्ट का उद्घाटन",
    descriptionEn: "Prime Minister Narendra Modi inaugurated the first phase of a new metro project in Rajasthan, enhancing urban mobility in the region.",
    descriptionHi: "प्रधानमंत्री नरेंद्र मोदी ने राजस्थान में नए मेट्रो प्रोजेक्ट के पहले चरण का उद्घाटन किया, जिससे क्षेत्र में शहरी गतिशीलता बढ़ेगी।",
    contentEn: "Prime Minister Narendra Modi inaugurated the first phase of a new metro rail project in Rajasthan on Thursday, marking a significant step in enhancing urban mobility in the region. The project, built at a cost of approximately Rs 8,000 crore, spans 24 kilometers and connects key areas of the city with 21 stations.\n\nDuring the inauguration ceremony, PM Modi emphasized the government's commitment to modern, sustainable urban infrastructure and highlighted how the metro would benefit over 400,000 daily commuters by reducing travel time, easing traffic congestion, and lowering pollution levels in the city.\n\n\"This metro project is not just about transportation; it's about transforming lives, creating employment opportunities, and building a cleaner, greener urban future,\" said the Prime Minister. He also announced that work on the second phase of the project would begin soon, extending the network by an additional 27 kilometers.",
    contentHi: "प्रधानमंत्री नरेंद्र मोदी ने गुरुवार को राजस्थान में एक नए मेट्रो रेल प्रोजेक्ट के पहले चरण का उद्घाटन किया, जो क्षेत्र में शहरी गतिशीलता को बढ़ाने की दिशा में एक महत्वपूर्ण कदम है। लगभग 8,000 करोड़ रुपये की लागत से निर्मित यह प्रोजेक्ट 24 किलोमीटर का है और 21 स्टेशनों के साथ शहर के प्रमुख क्षेत्रों को जोड़ता है।\n\nउद्घाटन समारोह के दौरान, पीएम मोदी ने आधुनिक, टिकाऊ शहरी बुनियादी ढांचे के प्रति सरकार की प्रतिबद्धता पर जोर दिया और बताया कि मेट्रो से यात्रा समय कम करके, यातायात भीड़ को कम करके और शहर में प्रदूषण के स्तर को कम करके 400,000 से अधिक दैनिक यात्रियों को कैसे लाभ होगा।\n\n\"यह मेट्रो प्रोजेक्ट सिर्फ परिवहन के बारे में नहीं है; यह जीवन को बदलने, रोजगार के अवसर पैदा करने और एक स्वच्छ, हरित शहरी भविष्य बनाने के बारे में है,\" प्रधानमंत्री ने कहा। उन्होंने यह भी घोषणा की कि प्रोजेक्ट के दूसरे चरण का काम जल्द ही शुरू होगा, जिससे नेटवर्क 27 किलोमीटर और बढ़ जाएगा।",
    image: "https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "national",
    date: "January 25, 2025"
  },
  {
    id: "supreme-court-ruling",
    titleEn: "Supreme Court Makes Landmark Decision, Says Every Citizen Has Rights",
    titleHi: "सुप्रीम कोर्ट ने दिया बड़ा फैसला, कहा - हर नागरिक का अधिकार है",
    descriptionEn: "In a landmark judgment, the Supreme Court emphasized that fundamental rights are guaranteed to all citizens regardless of status or background.",
    descriptionHi: "एक ऐतिहासिक फैसले में, सुप्रीम कोर्ट ने जोर देकर कहा कि स्थिति या पृष्ठभूमि के बावजूद सभी नागरिकों को मौलिक अधिकारों की गारंटी है।",
    contentEn: "In a landmark judgment delivered on Wednesday, the Supreme Court of India emphatically declared that fundamental rights guaranteed by the Constitution must be available to all citizens without discrimination. The five-judge Constitution bench, headed by the Chief Justice, emphasized that these rights cannot be curtailed based on social, economic, or political status.\n\nThe Court's decision came in response to a batch of petitions challenging certain provisions that allegedly created inequalities in the application of fundamental rights. The judgment is expected to have far-reaching implications for various ongoing cases related to civil liberties and equality before the law.\n\n\"The Constitution recognizes the inherent dignity of every individual. The right to equality, freedom of expression, and personal liberty are the cornerstone of our democratic republic and must be protected for all citizens,\" the Court observed in its unanimous judgment. Legal experts have hailed the decision as a significant step in reinforcing constitutional values.",
    contentHi: "बुधवार को दिए गए एक ऐतिहासिक फैसले में, भारत के सुप्रीम कोर्ट ने जोर देकर कहा कि संविधान द्वारा गारंटीकृत मौलिक अधिकार बिना किसी भेदभाव के सभी नागरिकों के लिए उपलब्ध होने चाहिए। मुख्य न्यायाधीश की अध्यक्षता वाली पांच न्यायाधीशों की संविधान पीठ ने जोर देकर कहा कि इन अधिकारों को सामाजिक, आर्थिक या राजनीतिक स्थिति के आधार पर सीमित नहीं किया जा सकता है।\n\nअदालत का फैसला कुछ प्रावधानों को चुनौती देने वाली याचिकाओं के एक समूह के जवाब में आया, जिनसे कथित तौर पर मौलिक अधिकारों के आवेदन में असमानताएं पैदा होती थीं। फैसले के नागरिक स्वतंत्रता और कानून के समक्ष समानता से संबंधित विभिन्न चल रहे मामलों पर दूरगामी प्रभाव पड़ने की उम्मीद है।\n\n\"संविधान हर व्यक्ति की अंतर्निहित गरिमा को मान्यता देता है। समानता का अधिकार, अभिव्यक्ति की स्वतंत्रता और व्यक्तिगत स्वतंत्रता हमारे लोकतांत्रिक गणराज्य का आधार हैं और सभी नागरिकों के लिए संरक्षित होने चाहिए,\" अदालत ने अपने सर्वसम्मत फैसले में कहा। कानूनी विशेषज्ञों ने इस फैसले को संवैधानिक मूल्यों को मजबूत करने की दिशा में एक महत्वपूर्ण कदम के रूप में सराहा है।",
    image: "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "national",
    date: "January 24, 2025"
  },
  {
    id: "cricket-test-win",
    titleEn: "Indian Cricket Team Wins the Final Test, Series 3-0",
    titleHi: "भारतीय क्रिकेट टीम ने जीता आखिरी टेस्ट, सीरीज 3-0",
    descriptionEn: "The Indian cricket team completed a clean sweep in the Test series, winning the final match convincingly to seal a 3-0 victory.",
    descriptionHi: "भारतीय क्रिकेट टीम ने टेस्ट सीरीज में क्लीन स्वीप पूरा किया, अंतिम मैच को आश्वस्त तरीके से जीतकर 3-0 से जीत दर्ज की।",
    contentEn: "The Indian cricket team secured a comprehensive victory in the final Test match, completing a clean sweep in the three-match series. Led by an exceptional bowling performance on the final day, India dismissed the opposition for just 203 runs, winning the match by an impressive margin of 187 runs.\n\nJasprit Bumrah was the star performer, claiming 5 wickets for just 28 runs, while Ravichandran Ashwin provided excellent support with 3 wickets. The batting foundation had been laid earlier by Rohit Sharma's brilliant century in the first innings and vital contributions from Virat Kohli and Rishabh Pant in the second.\n\nThis series victory further consolidates India's position at the top of the World Test Championship standings. Captain Rohit Sharma praised the team's all-round performance and highlighted the contributions of young players who stepped up throughout the series. \"The hunger to perform consistently and the fighting spirit shown by the team was remarkable,\" he said during the post-match presentation.",
    contentHi: "भारतीय क्रिकेट टीम ने अंतिम टेस्ट मैच में व्यापक जीत हासिल की, तीन मैचों की सीरीज में क्लीन स्वीप पूरा किया। अंतिम दिन असाधारण गेंदबाजी प्रदर्शन के नेतृत्व में, भारत ने विपक्ष को केवल 203 रनों पर समेट दिया, मैच को 187 रनों के प्रभावशाली अंतर से जीता।\n\nजसप्रीत बुमराह सबसे प्रमुख प्रदर्शनकर्ता थे, जिन्होंने केवल 28 रनों पर 5 विकेट लिए, जबकि रविचंद्रन अश्विन ने 3 विकेट के साथ उत्कृष्ट समर्थन प्रदान किया। बल्लेबाजी की नींव पहले ही पहली पारी में रोहित शर्मा के शानदार शतक और दूसरी पारी में विराट कोहली और ऋषभ पंत के महत्वपूर्ण योगदान से रखी गई थी।\n\nइस श्रृंखला की जीत ने विश्व टेस्ट चैम्पियनशिप स्टैंडिंग्स में भारत की स्थिति को और मजबूत किया है। कप्तान रोहित शर्मा ने टीम के सर्वांगीण प्रदर्शन की प्रशंसा की और पूरी श्रृंखला में आगे बढ़ने वाले युवा खिलाड़ियों के योगदान पर प्रकाश डाला। \"लगातार प्रदर्शन करने की भूख और टीम द्वारा दिखाई गई लड़ाकू भावना उल्लेखनीय थी,\" उन्होंने मैच के बाद प्रस्तुति के दौरान कहा।",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "sports",
    date: "January 23, 2025"
  },
  {
    id: "corona-new-variant",
    titleEn: "Corona's New Variant Found, Experts Say - Caution Necessary",
    titleHi: "कोरोना का नए वेरिएंट से बढ़ी चिंता, विशेषज्ञों ने कहा - सावधानी जरूरी",
    descriptionEn: "A new variant of coronavirus has been detected, raising concerns among health experts about possible increased transmissibility.",
    descriptionHi: "कोरोनावायरस का एक नया वेरिएंट मिला है, जिससे स्वास्थ्य विशेषज्ञों के बीच संभावित बढ़े हुए संक्रमणशीलता के बारे में चिंताएं बढ़ गई हैं।",
    contentEn: "Health authorities have identified a new variant of the coronavirus, currently designated as XBB.1.5, which is quickly becoming dominant in several regions. Preliminary data suggests this variant may be more transmissible than previous strains, though there is no evidence yet of increased severity of illness.\n\nScientists are closely monitoring the variant's spread and studying its characteristics to better understand potential implications for public health. While vaccines are expected to continue providing protection against severe disease, researchers are assessing if there might be any reduction in effectiveness against this particular variant.\n\nHealth experts emphasize that standard preventive measures remain crucial: wearing masks in crowded indoor settings, maintaining good hand hygiene, ensuring adequate ventilation, and staying up to date with vaccine boosters when eligible. They also stress the importance of testing when symptomatic and isolating if infected to prevent further spread.",
    contentHi: "स्वास्थ्य अधिकारियों ने कोरोनावायरस के एक नए वेरिएंट की पहचान की है, जिसे वर्तमान में XBB.1.5 के रूप में नामित किया गया है, जो कई क्षेत्रों में तेजी से प्रमुख हो रहा है। प्रारंभिक डेटा से पता चलता है कि यह वेरिएंट पिछले स्ट्रेन की तुलना में अधिक संक्रामक हो सकता है, हालांकि अभी तक बीमारी की बढ़ी हुई गंभीरता का कोई प्रमाण नहीं है।\n\nवैज्ञानिक वेरिएंट के प्रसार की बारीकी से निगरानी कर रहे हैं और सार्वजनिक स्वास्थ्य के लिए संभावित प्रभावों को बेहतर ढंग से समझने के लिए इसकी विशेषताओं का अध्ययन कर रहे हैं। हालांकि टीकों से गंभीर बीमारी के खिलाफ सुरक्षा प्रदान करना जारी रहने की उम्मीद है, शोधकर्ता यह आकलन कर रहे हैं कि क्या इस विशेष वेरिएंट के खिलाफ प्रभावशीलता में कोई कमी हो सकती है।\n\nस्वास्थ्य विशेषज्ञ जोर देते हैं कि मानक निवारक उपाय महत्वपूर्ण बने हुए हैं: भीड़-भाड़ वाली इनडोर सेटिंग्स में मास्क पहनना, अच्छी हाथ की स्वच्छता बनाए रखना, पर्याप्त वेंटिलेशन सुनिश्चित करना, और पात्र होने पर वैक्सीन बूस्टर के साथ अप टू डेट रहना। वे लक्षण होने पर परीक्षण और संक्रमित होने पर आइसोलेशन के महत्व पर भी जोर देते हैं ताकि आगे के प्रसार को रोका जा सके।",
    image: "https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "religion",
    date: "January 26, 2025"
  },
  {
    id: "corona-new-variant",
    titleEn: "Corona's New Variant Found, Experts Say - Caution Necessary",
    titleHi: "कोरोना का नए वेरिएंट से बढ़ी चिंता, विशेषज्ञों ने कहा - सावधानी जरूरी",
    descriptionEn: "A new variant of coronavirus has been detected, raising concerns among health experts about possible increased transmissibility.",
    descriptionHi: "कोरोनावायरस का एक नया वेरिएंट मिला है, जिससे स्वास्थ्य विशेषज्ञों के बीच संभावित बढ़े हुए संक्रमणशीलता के बारे में चिंताएं बढ़ गई हैं।",
    contentEn: "Health authorities have identified a new variant of the coronavirus, currently designated as XBB.1.5, which is quickly becoming dominant in several regions. Preliminary data suggests this variant may be more transmissible than previous strains, though there is no evidence yet of increased severity of illness.\n\nScientists are closely monitoring the variant's spread and studying its characteristics to better understand potential implications for public health. While vaccines are expected to continue providing protection against severe disease, researchers are assessing if there might be any reduction in effectiveness against this particular variant.\n\nHealth experts emphasize that standard preventive measures remain crucial: wearing masks in crowded indoor settings, maintaining good hand hygiene, ensuring adequate ventilation, and staying up to date with vaccine boosters when eligible. They also stress the importance of testing when symptomatic and isolating if infected to prevent further spread.",
    contentHi: "स्वास्थ्य अधिकारियों ने कोरोनावायरस के एक नए वेरिएंट की पहचान की है, जिसे वर्तमान में XBB.1.5 के रूप में नामित किया गया है, जो कई क्षेत्रों में तेजी से प्रमुख हो रहा है। प्रारंभिक डेटा से पता चलता है कि यह वेरिएंट पिछले स्ट्रेन की तुलना में अधिक संक्रामक हो सकता है, हालांकि अभी तक बीमारी की बढ़ी हुई गंभीरता का कोई प्रमाण नहीं है।\n\nवैज्ञानिक वेरिएंट के प्रसार की बारीकी से निगरानी कर रहे हैं और सार्वजनिक स्वास्थ्य के लिए संभावित प्रभावों को बेहतर ढंग से समझने के लिए इसकी विशेषताओं का अध्ययन कर रहे हैं। हालांकि टीकों से गंभीर बीमारी के खिलाफ सुरक्षा प्रदान करना जारी रहने की उम्मीद है, शोधकर्ता यह आकलन कर रहे हैं कि क्या इस विशेष वेरिएंट के खिलाफ प्रभावशीलता में कोई कमी हो सकती है।\n\nस्वास्थ्य विशेषज्ञ जोर देते हैं कि मानक निवारक उपाय महत्वपूर्ण बने हुए हैं: भीड़-भाड़ वाली इनडोर सेटिंग्स में मास्क पहनना, अच्छी हाथ की स्वच्छता बनाए रखना, पर्याप्त वेंटिलेशन सुनिश्चित करना, और पात्र होने पर वैक्सीन बूस्टर के साथ अप टू डेट रहना। वे लक्षण होने पर परीक्षण और संक्रमित होने पर आइसोलेशन के महत्व पर भी जोर देते हैं ताकि आगे के प्रसार को रोका जा सके।",
    image: "https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "religion",
    date: "January 26, 2025"
  },
];