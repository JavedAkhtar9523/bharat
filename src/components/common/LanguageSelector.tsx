// import React from 'react';
// import { useLanguage } from '../../context/LanguageContext';

// const LanguageSelector: React.FC = () => {
//   const { language, setLanguage } = useLanguage();
  
//   return (
//     <div className="flex items-center space-x-2">
//       <button
//         onClick={() => setLanguage('en')}
//         className={`px-2 py-1 text-sm font-medium rounded ${
//           language === 'en' 
//             ? 'bg-red-600 text-white' 
//             : 'text-gray-700 hover:bg-gray-100'
//         } transition-colors duration-200`}
//       >
//         English
//       </button>
//       <button
//         onClick={() => setLanguage('hi')}
//         className={`px-2 py-1 text-sm font-medium rounded ${
//           language === 'hi' 
//             ? 'bg-red-600 text-white' 
//             : 'text-gray-700 hover:bg-gray-100'
//         } transition-colors duration-200`}
//       >
//         हिंदी
//       </button>
//     </div>
//   );
// };

// export default LanguageSelector;



// import React from 'react';
// import { useLanguage } from '../../context/LanguageContext';

// const LanguageSelector: React.FC = () => {
//   const { language, setLanguage } = useLanguage();
  
//   const toggleLanguage = () => {
//     setLanguage(language === 'en' ? 'hi' : 'en');
//   };

//   return (
//     <button
//       onClick={toggleLanguage}
//       className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 hover:bg-red-200 text-white-700 dark:bg-red-700 dark:hover:bg-red-600 dark:text-white transition-all duration-200 flex items-center"
//     >
//       {language === 'en' ? (
//         <>
//           <span className="mr-2">हिंदी</span>
//           {/* <span className="text-xs opacity-70">→ हिंदी</span> */}
//         </>
//       ) : (
//         <>
//           <span className="mr-2">English</span>
//           {/* <span className="text-xs opacity-70">→ English</span> */}
//         </>
//       )}
//     </button>
//   );
// };

// export default LanguageSelector;


// --------------------

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'en' | 'hi');
  };

  return (
    <select
      value={language}
      onChange={handleChange}
      className="border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
    </select>
  );
};

export default LanguageSelector;