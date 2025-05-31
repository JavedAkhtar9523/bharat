// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../context/LanguageContext';

// interface NewsCardProps {
//   id: string;
//   titleEn: string;
//   titleHi: string;
//   descriptionEn?: string;
//   descriptionHi?: string;
//   image: string;
//   category: string;
//   date: string;
//   large?: boolean;
// }

// const NewsCard: React.FC<NewsCardProps> = ({
//   id,
//   titleEn,
//   titleHi,
//   descriptionEn,
//   descriptionHi,
//   image,
//   category,
//   date,
//   large = false,
// }) => {
//   const { language, t } = useLanguage();
//   const title = language === 'en' ? titleEn : titleHi;
//   const description = language === 'en' ? descriptionEn : descriptionHi;
  
//   return (
//     <div className={`bg-white rounded-lg shadow-md overflow-hidden ${large ? 'flex md:flex-row flex-col' : ''}`}>
//       <div className={`${large ? 'md:w-2/3' : 'w-full'} relative`}>
//         <Link to={`/article/${id}`}>
//           <img 
//             src={image} 
//             alt={title}
//             className={`w-full h-full object-cover ${large ? 'md:h-80 h-48' : 'h-48'}`}
//           />
//           <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1">
//             {t(category)}
//           </div>
//         </Link>
//       </div>
      
//       <div className={`p-4 ${large ? 'md:w-1/3' : ''}`}>
//         <Link to={`/article/${id}`}>
//           <h2 className={`font-bold text-gray-900 ${large ? 'text-2xl' : 'text-lg'} mb-2 hover:text-red-600 transition-colors duration-200`}>
//             {title}
//           </h2>
//         </Link>
        
//         {description && (
//           <p className="text-gray-700 text-sm mb-3 line-clamp-3">
//             {description}
//           </p>
//         )}
        
//         <div className="flex justify-between items-center text-xs text-gray-500">
//           <span>{date}</span>
//           <Link 
//             to={`/article/${id}`} 
//             className="text-red-600 font-medium hover:underline"
//           >
//             {t('readMore')}
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;


// --------------------

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

interface NewsCardProps {
  id: string;
  titleEn: string;
  titleHi: string;
  descriptionEn?: string;
  descriptionHi?: string;
  image: string;
  category: string;
  date: string;
  large?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  titleEn,
  titleHi,
  descriptionEn,
  descriptionHi,
  image,
  category,
  date,
  large = false,
}) => {
  const { language } = useLanguage();
  const t = (key: string) => translations[language][key] || key;
  const title = language === 'en' ? titleEn : titleHi;
  const description = language === 'en' ? descriptionEn : descriptionHi;
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${large ? 'flex md:flex-row flex-col' : ''}`}>
      <div className={`${large ? 'md:w-2/3' : 'w-full'} relative`}>
        <Link to={`/article/${id}`}>
          <img 
            src={image} 
            alt={title}
            className={`w-full h-full object-cover ${large ? 'md:h-80 h-48' : 'h-48'}`}
          />
          <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1">
            {t(category)}
          </div>
        </Link>
      </div>
      
      <div className={`p-4 ${large ? 'md:w-1/3' : ''}`}>
        <Link to={`/article/${id}`}>
          <h2 className={`font-bold text-gray-900 ${large ? 'text-2xl' : 'text-lg'} mb-2 hover:text-red-600 transition-colors duration-200`}>
            {title}
          </h2>
        </Link>
        
        {description && (
          <p className="text-gray-700 text-sm mb-3 line-clamp-3">
            {description}
          </p>
        )}
        
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{date}</span>
          <Link 
            to={`/article/${id}`} 
            className="text-red-600 font-medium hover:underline"
          >
            {t('readMore')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;