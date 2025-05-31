// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Search, Menu } from 'lucide-react';
// import { useLanguage } from '../../context/LanguageContext';
// import LanguageSelector from '../common/LanguageSelector';
// import LiveButton from '../common/LiveButton';
// import NewsBharatLogo from '../common/NewsBharatLogo';

// const Header: React.FC = () => {
//   const { t } = useLanguage();
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <button 
//             className="md:hidden text-gray-700" 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             <Menu size={24} />
//           </button>
//           <Link to="/" className="flex items-center">
//             <NewsBharatLogo />
//           </Link>
//         </div>
        
//         <div className="hidden md:flex items-center space-x-6">
//           <LanguageSelector />
//           <div className="relative">
//             <input
//               type="text"
//               placeholder={t('search')}
//               className="pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
//             />
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//           </div>
//           <LiveButton />
//         </div>
        
//         <div className="md:hidden flex items-center space-x-3">
//           <LanguageSelector />
//           <button className="text-gray-700" aria-label="Search">
//             <Search size={20} />
//           </button>
//           <LiveButton compact />
//         </div>
//       </div>
      
//       {isMenuOpen && (
//         <div className="md:hidden bg-white shadow-lg p-4 absolute z-10 w-full">
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder={t('search')}
//               className="pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
//             />
//             <Search className="absolute left-7 top-24 transform -translate-y-1/2 text-gray-400" size={18} />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


// -----------------------

import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import LanguageSelector from '../common/LanguageSelector';
import LiveButton from '../common/LiveButton';
import NewsBharatLogo from '../common/NewsBharatLogo';
import { translations } from '../../utils/translations';

const Header: React.FC = () => {
  const { language } = useLanguage(); // Get language from context
  // Alternatively, use Redux: const language = useSelector((state: RootState) => state.language.language);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Get translation for 'search'
  const t = (key: string) => translations[language][key] || key;

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          <Link to="/" className="flex items-center">
            <NewsBharatLogo />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <LanguageSelector />
          <div className="relative">
            <input
              type="text"
              placeholder={t('search')}
              className="pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <LiveButton />
        </div>

        <div className="md:hidden flex items-center space-x-3">
          <LanguageSelector />
          <button className="text-gray-700" aria-label="Search">
            <Search size={20} />
          </button>
          <LiveButton compact />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute z-10 w-full">
          <div className="mb-4">
            <input
              type="text"
              placeholder={t('search')}
              className="pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
            />
            <Search className="absolute left-7 top-24 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;