// import React, { useEffect, useState } from 'react';
// import { useLanguage } from '../../context/LanguageContext';

// interface News {
//   id: number;
//   textEn: string;
//   textHi: string;
// }

// const BreakingNews: React.FC = () => {
//   const { t, language } = useLanguage();
//   const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  
//   const breakingNews: News[] = [
//     { 
//       id: 1, 
//       textEn: "PM Modi inaugurates new metro project in Rajasthan", 
//       textHi: "पीएम मोदी ने किया राजस्थान में नए मेट्रो प्रोजेक्ट का उद्घाटन"
//     },
//     { 
//       id: 2, 
//       textEn: "Supreme Court makes landmark decision, says - every citizen has rights", 
//       textHi: "सुप्रीम कोर्ट ने दिया बड़ा फैसला, कहा - हर नागरिक का अधिकार है"
//     },
//     { 
//       id: 3, 
//       textEn: "Indian cricket team wins the final test, series 3-0", 
//       textHi: "भारतीय क्रिकेट टीम ने जीता आखिरी टेस्ट, सीरीज 3-0"
//     },
//     { 
//       id: 4, 
//       textEn: "US President to visit India next month", 
//       textHi: "अमेरिकी राष्ट्रपति ने भारत की यात्रा की पुष्टि की, अगले महीने होगी मुलाकात"
//     },
//   ];
  
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % breakingNews.length);
//     }, 5000);
    
//     return () => clearInterval(timer);
//   }, [breakingNews.length]);
  
//   const currentNews = breakingNews[currentNewsIndex];
  
//   return (
//     <div className="bg-gray-100 py-2 overflow-hidden border-b border-gray-200">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center">
//           <span className="font-bold text-red-600 whitespace-nowrap mr-2">
//             {t('breakingNews')}
//           </span>
//           <div className="overflow-hidden relative w-full">
//             <p className="animate-marquee whitespace-nowrap">
//               {language === 'en' ? currentNews.textEn : currentNews.textHi}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BreakingNews;


// ------------------------

import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

interface News {
  id: number;
  textEn: string;
  textHi: string;
}

const BreakingNews: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: string) => translations[language][key] || key;
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const breakingNews: News[] = [
    {
      id: 1,
      textEn: "PM Modi inaugurates new metro project in Rajasthan",
      textHi: "पीएम मोदी ने किया राजस्थान में नए मेट्रो प्रोजेक्ट का उद्घाटन"
    },
    {
      id: 2,
      textEn: "Supreme Court makes landmark decision, says - every citizen has rights",
      textHi: "सुप्रीम कोर्ट ने दिया बड़ा फैसला, कहा - हर नागरिक का अधिकार है"
    },
    {
      id: 3,
      textEn: "Indian cricket team wins the final test, series 3-0",
      textHi: "भारतीय क्रिकेट टीम ने जीता आखिरी टेस्ट, सीरीज 3-0"
    },
    {
      id: 4,
      textEn: "US President to visit India next month",
      textHi: "अमेरिकी राष्ट्रपति ने भारत की यात्रा की पुष्टि की, अगले महीने होगी मुलाकात"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % breakingNews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [breakingNews.length]);

  const currentNews = breakingNews[currentNewsIndex];

  return (
    <div className="bg-gray-100 py-2 overflow-hidden border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <span className="font-bold text-red-600 whitespace-nowrap mr-2">
            {t('breakingNews')}
          </span>
          <div className="overflow-hidden relative w-full">
            <p className="animate-marquee whitespace-nowrap">
              {language === 'en' ? currentNews.textEn : currentNews.textHi}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;