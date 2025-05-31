// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../context/LanguageContext';

// const Navbar: React.FC = () => {
//   const { t } = useLanguage();
  
//   const categories = [
//     { id: 'home', label: 'home' },
//     { id: 'live', label: 'live' },
//     { id: 'politics', label: 'politics' },
//     { id: 'national', label: 'national' },
//     { id: 'international', label: 'international' },
//     { id: 'business', label: 'business' },
//     { id: 'sports', label: 'sports' },
//     { id: 'entertainment', label: 'entertainment' },
//     { id: 'religion', label: 'religion' },
//     { id: 'technology', label: 'technology' },
//     { id: 'lifestyle', label: 'lifestyle' },
//     { id: 'education', label: 'education' },
//     { id: 'auto', label: 'auto' },
//     { id: 'video', label: 'video' },
//   ];
  
//   return (
//     <nav className="bg-red-600 text-white overflow-x-auto">
//       <div className="container mx-auto">
//         <ul className="flex whitespace-nowrap">
//           {categories.map((category) => (
//             <li key={category.id}>
//               <Link
//                 to={category.id === 'home' ? '/' : category.id === 'live' ? '/live' : `/category/${category.id}`}
//                 className="block px-4 py-3 hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
//               >
//                 {category.id === 'live' ? 'LIVE TV' : t(category.label)}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// --------------------------------

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

const Navbar: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: string) => translations[language][key] || key;

  const categories = [
    { id: 'home', label: 'home' },
    { id: 'live', label: 'live' },
    { id: 'politics', label: 'politics' },
    { id: 'national', label: 'national' },
    { id: 'international', label: 'international' },
    { id: 'business', label: 'business' },
    { id: 'sports', label: 'sports' },
    { id: 'entertainment', label: 'entertainment' },
    { id: 'religion', label: 'religion' },
    { id: 'technology', label: 'technology' },
    { id: 'lifestyle', label: 'lifestyle' },
    { id: 'education', label: 'education' },
    { id: 'auto', label: 'auto' },
    { id: 'video', label: 'video' },
  ];

  return (
    <nav className="bg-red-600 text-white overflow-x-auto">
      <div className="container mx-auto">
        <ul className="flex whitespace-nowrap">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to={category.id === 'home' ? '/' : category.id === 'live' ? '/live' : `/category/${category.id}`}
                className="block px-4 py-3 hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
              >
                {category.id === 'live' ? 'LIVE TV' : t(category.label)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


// ===============================

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../redux/store';
// import { logout } from '../../redux/slices/authSlice';
// import { useLanguage } from '../../context/LanguageContext';
// import { translations } from '../../utils/translations';

// const Navbar: React.FC = () => {
//   const { language } = useLanguage();
//   const t = (key: string) => translations[language][key] || key;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state: RootState) => state.auth.user);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-gray-800 text-white py-4">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <ul className="flex space-x-4">
//             <li><Link to="/">{t('home')}</Link></li>
//             {user?.isAdmin && (
//               <li><Link to="/dashboard">{t('dashboard')}</Link></li>
//             )}
//             {user?.isSuperAdmin && (
//               <>
//                 <li><Link to="/admin/users">{t('manageUsers')}</Link></li>
//                 <li><Link to="/admin/audit">{t('auditLog')}</Link></li>
//               </>
//             )}
//             <li><Link to="/live">{t('liveTV')}</Link></li>
//           </ul>
//           <div>
//             {user ? (
//               <>
//                 <span className="mr-4">{user.name}</span>
//                 <button
//                   onClick={handleLogout}
//                   className="text-red-600 hover:underline"
//                 >
//                   {t('logout')}
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="mr-4">{t('login')}</Link>
//                 <Link to="/register">{t('register')}</Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;