// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../context/LanguageContext';

// const QuickCategories: React.FC = () => {
//   const { t } = useLanguage();
  
//   const quickCategories = [
//     { id: 'for-you', label: 'forYou' },
//     { id: 'politics', label: 'politics' },
//     { id: 'business', label: 'business' },
//     { id: 'sports', label: 'sports' },
//     { id: 'entertainment', label: 'entertainment' },
//     { id: 'technology', label: 'technology' },
//     { id: 'health', label: 'health' },
//     { id: 'education', label: 'education' },
//     { id: 'auto', label: 'auto' },
//     { id: 'national', label: 'country' },
//     { id: 'international', label: 'world' },
//   ];
  
//   return (
//     <div className="bg-white py-2 border-b border-gray-200 overflow-x-auto">
//       <div className="container mx-auto px-4">
//         <ul className="flex space-x-2 whitespace-nowrap">
//           {quickCategories.map((category) => (
//             <li key={category.id}>
//               <Link
//                 to={`/category/${category.id}`}
//                 className="block px-4 py-1.5 text-sm rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
//               >
//                 {t(category.label)}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default QuickCategories;

// -----------------------

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

const QuickCategories: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: string) => translations[language][key] || key;

  const quickCategories = [
    { id: 'for-you', label: 'forYou' },
    { id: 'politics', label: 'politics' },
    { id: 'business', label: 'business' },
    { id: 'sports', label: 'sports' },
    { id: 'entertainment', label: 'entertainment' },
    { id: 'technology', label: 'technology' },
    { id: 'health', label: 'health' },
    { id: 'education', label: 'education' },
    { id: 'auto', label: 'auto' },
    { id: 'national', label: 'country' },
    { id: 'international', label: 'world' },
  ];

  return (
    <div className="bg-white py-2 border-b border-gray-200 overflow-x-auto">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-2 whitespace-nowrap">
          {quickCategories.map((category) => (
            <li key={category.id}>
              <Link
                to={`/category/${category.id}`}
                className="block px-4 py-1.5 text-sm rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
              >
                {t(category.label)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuickCategories;