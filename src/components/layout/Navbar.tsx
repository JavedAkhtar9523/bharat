



// jjjjjjjjjjjjjjjjjjjjj66666666666666666666
// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// // import { RootState } from '../store';
// import { RootState } from '../../redux/store';

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();
//   const { role } = useSelector((state: RootState) => state.auth);
  
//   const menuRef = useRef<HTMLDivElement>(null);
//   const searchRef = useRef<HTMLDivElement>(null);

//   const categories = [
//     { id: 'home', label: 'Home', icon: '🏠' },
//     { id: 'live', label: 'Live TV', icon: '📺' },
//     { id: 'politics', label: 'Politics', icon: '🏛️' },
//     { id: 'national', label: 'National', icon: '🇮🇳' },
//     { id: 'international', label: 'International', icon: '🌍' },
//     { id: 'business', label: 'Business', icon: '💼' },
//     { id: 'sports', label: 'Sports', icon: '⚽' },
//     { id: 'entertainment', label: 'Entertainment', icon: '🎬' },
//     { id: 'religion', label: 'Religion', icon: '🕉️' },
//     { id: 'technology', label: 'Technology', icon: '💻' },
//     { id: 'lifestyle', label: 'Lifestyle', icon: '🌟' },
//     { id: 'education', label: 'Education', icon: '📚' },
//     { id: 'auto', label: 'Auto', icon: '🚗' },
//     { id: 'video', label: 'Video', icon: '🎥' },
//   ];

//   const menuItems = [
//     { label: 'Profile', icon: '👤', link: '/profile' },
//     { label: 'Bookmarks', icon: '🔖', link: '/bookmarks' },
//     { label: 'Notifications', icon: '🔔', link: '/notifications' },
//     { label: 'Settings', icon: '⚙️', link: '/settings' },
//     { label: 'Help & Support', icon: '❓', link: '/help' },
//   ];

//   if (role === 'admin') {
//     categories.unshift({ id: 'dashboard', label: 'Dashboard', icon: '📊' });
//   }

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setIsMenuOpen(false);
//       }
//       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
//         setIsSearchOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       console.log('Searching for:', searchQuery);
//       alert(`Searching for: ${searchQuery}`);
//       setIsSearchOpen(false);
//       setSearchQuery('');
//     }
//   };

//   const handleNavigation = (path: string) => {
//     navigate(path);
//     setIsMenuOpen(false);
//   };

//   const handleLogin = () => {
//     navigate('/login');
//     setIsMenuOpen(false);
//   };

//   const handleRegister = () => {
//     navigate('/register');
//     setIsMenuOpen(false);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login');
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <nav className="bg-red-600 text-white overflow-x-auto relative">
//         <div className="container mx-auto">
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center">
//             {/* Desktop Hamburger Menu (Left side) */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-3 hover:bg-red-700 rounded transition-colors duration-200 mr-4"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
            
//             {/* Categories - Desktop Horizontal Display */}
//             <ul className="flex whitespace-nowrap flex-1">
//               {categories.map((category) => (
//                 <li key={category.id}>
//                   <button
//                     onClick={() => {
//                       if (category.id === 'home') {
//                         navigate('/');
//                       } else if (category.id === 'live') {
//                         navigate('/live');
//                       } else if (category.id === 'dashboard' && role === 'admin') {
//                         navigate('/dashboard');
//                       } else {
//                         navigate(`/category/${category.id}`);
//                       }
//                     }}
//                     className="block px-4 py-3 hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
//                   >
//                     {category.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             {/* Desktop Search Button */}
//             <button
//               onClick={() => setIsSearchOpen(!isSearchOpen)}
//               className="p-3 hover:bg-red-700 rounded transition-colors duration-200 ml-2"
//               aria-label="Toggle search"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           <div className="md:hidden flex items-center justify-between px-4 py-3">
//             {/* Hamburger Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 hover:bg-red-700 rounded transition-colors duration-200"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>

//             {/* Logo/Title */}
//             <button onClick={() => navigate('/')} className="text-lg font-bold">
//               News Portal
//             </button>

//             {/* Search Button - Only in mobile */}
//             <button
//               onClick={() => setIsSearchOpen(!isSearchOpen)}
//               className="p-2 hover:bg-red-700 rounded transition-colors duration-200"
//               aria-label="Toggle search"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hamburger Sidebar Menu */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 z-50 flex">
//           {/* Overlay */}
//           <div 
//             className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
//             onClick={() => setIsMenuOpen(false)}
//           />
          
//           {/* Sidebar */}
//           <div 
//             ref={menuRef}
//             className="relative bg-white w-80 max-w-sm h-full shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto"
//           >
//             {/* Sidebar Header */}
//             <div className="bg-red-600 text-white p-4 flex items-center justify-between sticky top-0">
//               <h2 className="text-xl font-bold">News Portal</h2>
//               <button
//                 onClick={() => setIsMenuOpen(false)}
//                 className="p-2 hover:bg-red-700 rounded transition-colors duration-200"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {/* Sidebar Content */}
//             <div className="p-4">
//               {/* Login/Register Section */}
//               <div className="mb-6">
//                 <div className="flex space-x-3">
//                   <button
//                     onClick={handleLogin}
//                     className="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors duration-200"
//                   >
//                     Login
//                   </button>
//                   <button
//                     onClick={handleRegister}
//                     className="flex-1 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200"
//                   >
//                     Register
//                   </button>
//                 </div>
//               </div>

//               {/* Categories Section - Only for Mobile */}
//               <div className="md:hidden mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">Categories</h3>
//                 <div className="space-y-1">
//                   {categories.map((category) => (
//                     <button
//                       key={category.id}
//                       onClick={() => {
//                         if (category.id === 'home') {
//                           navigate('/');
//                         } else if (category.id === 'live') {
//                           navigate('/live');
//                         } else if (category.id === 'dashboard' && role === 'admin') {
//                           navigate('/dashboard');
//                         } else {
//                           navigate(`/category/${category.id}`);
//                         }
//                         setIsMenuOpen(false);
//                       }}
//                       className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-left"
//                     >
//                       <span className="text-lg">{category.icon}</span>
//                       <span className="text-gray-700 font-medium">{category.label}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Menu Items Section */}
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">Account</h3>
//                 <div className="space-y-1">
//                   {menuItems.map((item, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handleNavigation(item.link)}
//                       className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-left"
//                     >
//                       <span className="text-lg">{item.icon}</span>
//                       <span className="text-gray-700">{item.label}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Quick Actions */}
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">Preferences</h3>
//                 <div className="space-y-1">
//                   <button
//                     onClick={() => {
//                       alert('Dark mode toggle');
//                       setIsMenuOpen(false);
//                     }}
//                     className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-left"
//                   >
//                     <span className="text-lg">🌙</span>
//                     <span className="text-gray-700">Dark Mode</span>
//                   </button>
//                   <button
//                     onClick={() => {
//                       alert('Language selector');
//                       setIsMenuOpen(false);
//                     }}
//                     className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-left"
//                   >
//                     <span className="text-lg">🌐</span>
//                     <span className="text-gray-700">Language</span>
//                   </button>
//                 </div>
//               </div>

//               {/* Logout Button */}
//               <div className="pt-4 border-t border-gray-200">
//                 <button
//                   onClick={handleLogout}
//                   className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center justify-center space-x-2"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
//                   </svg>
//                   <span>Logout</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Search Modal */}
//       {isSearchOpen && (
//         <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
//           {/* Overlay */}
//           <div 
//             className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
//             onClick={() => setIsSearchOpen(false)}
//           />
          
//           {/* Search Box */}
//           <div 
//             ref={searchRef}
//             className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 transform transition-transform duration-300 ease-in-out"
//           >
//             <div className="p-4">
//               <div className="flex items-center space-x-4">
//                 <div className="flex-1 relative">
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search news, articles, topics..."
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter') {
//                         handleSearch(e);
//                       }
//                     }}
//                   />
//                   <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
//                     <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                   </div>
//                 </div>
//                 <button
//                   onClick={handleSearch}
//                   className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
//                 >
//                   Search
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setIsSearchOpen(false)}
//                   className="p-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
              
//               {/* Search Suggestions */}
//               <div className="mt-4 border-t border-gray-200 pt-4">
//                 <h3 className="text-sm font-semibold text-gray-600 mb-2">Popular Searches</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['Politics', 'Sports', 'Technology', 'Business', 'Entertainment'].map((term) => (
//                     <button
//                       key={term}
//                       onClick={() => {
//                         setSearchQuery(term);
//                         handleSearch({ preventDefault: () => {} } as React.FormEvent);
//                       }}
//                       className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
//                     >
//                       {term}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;


// 775727584127481481729
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { logout } from '../../redux/slices/authSlice';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user, role } = useSelector((state: RootState) => state.auth);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'live', label: 'Live TV', icon: '📺' },
    { id: 'politics', label: 'Politics', icon: '🏛️' },
    { id: 'national', label: 'National', icon: '🇮🇳' },
    { id: 'international', label: 'International', icon: '🌍' },
    { id: 'business', label: 'Business', icon: '💼' },
    { id: 'sports', label: 'Sports', icon: '⚽' },
    { id: 'entertainment', label: 'Entertainment', icon: '🎬' },
    { id: 'religion', label: 'Religion', icon: '🕉️' },
    { id: 'technology', label: 'Technology', icon: '💻' },
    { id: 'lifestyle', label: 'Lifestyle', icon: '🌟' },
    { id: 'education', label: 'Education', icon: '📚' },
    { id: 'auto', label: 'Auto', icon: '🚗' },
    { id: 'video', label: 'Video', icon: '🎥' },
  ];

  const menuItems = [
    { label: 'Profile', icon: '👤', link: '/profile' },
    { label: 'Bookmarks', icon: '🔖', link: '/bookmarks' },
    { label: 'Notifications', icon: '🔔', link: '/notifications' },
    { label: 'Settings', icon: '⚙️', link: '/settings' },
    { label: 'Help & Support', icon: '❓', link: '/help' },
  ];

  if (role === 'admin') {
    categories.unshift({ id: 'dashboard', label: 'Dashboard', icon: '📊' });
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      alert(`Searching for: ${searchQuery}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    navigate('/login');
    setIsMenuOpen(false);
  };

  const handleRegister = () => {
    navigate('/register');
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-red-600 text-white overflow-x-auto relative">
        <div className="container mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {/* Desktop Hamburger Menu (Left side) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 hover:bg-red-700 rounded transition-colors duration-200 mr-4"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24">
                  <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            
            {/* Categories - Desktop Horizontal Display */}
            <ul className="flex whitespace-nowrap flex-1">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => {
                      if (category.id === 'home') {
                        navigate('/');
                      } else if (category.id === 'live') {
                        navigate('/live');
                      } else if (category.id === 'dashboard' && role === 'admin') {
                        navigate('/dashboard');
                      } else {
                        navigate(`/category/${category.id}`);
                      }
                    }}
                    className="block px-4 py-3 hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-3 hover:bg-red-700 rounded transition-colors duration-200 ml-2"
              aria-label="Toggle search"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between px-4 py-3">
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-red-700 rounded transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24">
                  <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Logo/Title */}
            <button onClick={() => navigate('/')} className="text-lg font-bold">
              News Portal
            </button>

            {/* Search Button - Only in mobile */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-red-700 rounded transition-colors duration-200"
              aria-label="Toggle search"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hamburger Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div 
            ref={menuRef}
            className="relative bg-white w-80 max-w-sm h-full shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto"
          >
            {/* Sidebar Header */}
            <div className="bg-red-600 text-white p-4 flex items-center justify-between sticky top-0">
              <h2 className="text-xl font-bold">News Portal</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-red-700 rounded transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="p-4">
              {/* Login/Register Section */}
              {!user && (
                <div className="mb-6">
                  <div className="flex space-x-3">
                    <button
                      onClick={handleLogin}
                      className="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors duration-200"
                    >
                      Login
                    </button>
                    <button
                      onClick={handleRegister}
                      className="flex-1 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-200"
                    >
                      Register
                    </button>
                  </div>
                </div>
              )}

              {/* User Info */}
              {user && (
                <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-600">Welcome back,</p>
                  <p className="font-semibold text-gray-800">{user.username}</p>
                  <p className="text-xs text-gray-500">Role: {role}</p>
                </div>
              )}

              {/* Categories Section - Only for Mobile */}
              <div className="md:hidden mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">Categories</h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        if (category.id === 'home') {
                          navigate('/');
                        } else if (category.id === 'live') {
                          navigate('/live');
                        } else if (category.id === 'dashboard' && role === 'admin') {
                          navigate('/dashboard');
                        } else {
                          navigate(`/category/${category.id}`);
                        }
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-left"
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span className="text-gray-700 font-medium">{category.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Menu Items Section */}
              {user && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">Account</h3>
                  <div className="space-y-1">
                    {menuItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavigation(item.link)}
                        className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-left"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-gray-700">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">Preferences</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      alert('Dark mode toggle');
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-left"
                  >
                    <span className="text-lg">🌙</span>
                    <span className="text-gray-700">Dark Mode</span>
                  </button>
                  <button
                    onClick={() => {
                      alert('Language selector');
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-left"
                  >
                    <span className="text-lg">🌐</span>
                    <span className="text-gray-700">Language</span>
                  </button>
                </div>
              </div>

              {/* Logout Button */}
              {user && (
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsSearchOpen(false)}
          />
          
          {/* Search Box */}
          <div 
            ref={searchRef}
            className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 transform transition-transform duration-300 ease-in-out"
          >
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search news, articles, topics..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch(e);
                      }
                    }}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <button
                  onClick={handleSearch}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Search Suggestions */}
              <div className="mt-4 border-t border-gray-200 pt-4">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {['Politics', 'Sports', 'Technology', 'Business', 'Entertainment'].map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setSearchQuery(term);
                        handleSearch({ preventDefault: () => {} } as React.FormEvent);
                      }}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
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