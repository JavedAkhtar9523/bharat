// import React from 'react';
// import { useLanguage } from '../../context/LanguageContext';

// interface LiveButtonProps {
//   compact?: boolean;
// }

// const LiveButton: React.FC<LiveButtonProps> = ({ compact = false }) => {
//   const { t } = useLanguage();
  
//   return (
//     <button 
//       className={`${
//         compact ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm'
//       } bg-red-600 text-white font-medium rounded flex items-center space-x-1.5 hover:bg-red-700 transition-colors duration-200`}
//     >
//       <span className="relative flex h-2 w-2">
//         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
//         <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
//       </span>
//       <span>{t('live')}</span>
//     </button>
//   );
// };

// export default LiveButton;

// ----------------------------

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

interface LiveButtonProps {
  compact?: boolean;
}

const LiveButton: React.FC<LiveButtonProps> = ({ compact = false }) => {
  const { language } = useLanguage();
  const t = (key: string) => translations[language][key] || key;

  return (
    <button
      className={`${
        compact ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm'
      } bg-red-600 text-white font-medium rounded flex items-center space-x-1.5 hover:bg-red-700 transition-colors duration-200`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
      </span>
      <span>{t('live')}</span>
    </button>
  );
};

export default LiveButton;