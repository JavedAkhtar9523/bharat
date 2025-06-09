// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useLanguage } from '../context/LanguageContext';
// import NewsCard from '../components/common/NewsCard';
// import Advertisement from '../components/common/Advertisement';
// import { newsData } from '../data/newsData';

// const CategoryPage: React.FC = () => {
//   const { categoryId } = useParams<{ categoryId: string }>();
//   const { t, language } = useLanguage();
  
//   // Category mapping to translated labels
//   const categoryMapping: Record<string, string> = {
//     'politics': 'politics',
//     'national': 'national',
//     'international': 'international',
//     'business': 'business',
//     'sports': 'sports',
//     'entertainment': 'entertainment',
//     'health': 'health',
//     'technology': 'technology',
//     'lifestyle': 'lifestyle',
//     'education': 'education',
//     'auto': 'auto',
//     'video': 'video',
//     'religion': 'religion',
//     'for-you': 'forYou',
//   };
  
//   // Get news for this category
//   const categoryNews = categoryId === 'for-you'
//     ? newsData.slice(0, 10) // For "For You" section, show mix of news
//     : newsData.filter(news => news.category === categoryId);
  
//   // Get featured news from this category
//   const featuredNews = categoryNews[0]; // Just use the first one as featured
  
//   // Get remaining news
//   const remainingNews = categoryNews.slice(1);
  
//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-3xl font-bold mb-6 text-gray-900">
//         {categoryId && categoryMapping[categoryId] ? t(categoryMapping[categoryId]) : t('latest')}
//       </h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Main content */}
//         <div className="md:col-span-2">
//           {/* Featured News */}
//           {featuredNews && (
//             <div className="mb-8">
//               <NewsCard
//                 id={featuredNews.id}
//                 titleEn={featuredNews.titleEn}
//                 titleHi={featuredNews.titleHi}
//                 descriptionEn={featuredNews.descriptionEn}
//                 descriptionHi={featuredNews.descriptionHi}
//                 image={featuredNews.image}
//                 category={featuredNews.category}
//                 date={featuredNews.date}
//                 large={true}
//               />
//             </div>
//           )}
          
//           {/* Advertisement */}
//           <div className="mb-8">
//             <Advertisement 
//               image="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               link="#"
//               size="banner"
//             />
//           </div>
          
//           {/* Category News Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {remainingNews.map((news) => (
//               <NewsCard
//                 key={news.id}
//                 id={news.id}
//                 titleEn={news.titleEn}
//                 titleHi={news.titleHi}
//                 descriptionEn={news.descriptionEn}
//                 descriptionHi={news.descriptionHi}
//                 image={news.image}
//                 category={news.category}
//                 date={news.date}
//               />
//             ))}
//           </div>
//         </div>
        
//         {/* Sidebar */}
//         <div className="md:col-span-1">
//           {/* Advertisement */}
//           <div className="mb-6">
//             <Advertisement 
//               image="https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               link="#"
//               size="sidebar"
//             />
//           </div>
          
//           {/* Trending News */}
//           <div className="mb-6 bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('trending')}
//             </h2>
//             <div className="space-y-4">
//               {newsData.slice(0, 3).map((news) => (
//                 <NewsCard
//                   key={news.id}
//                   id={news.id}
//                   titleEn={news.titleEn}
//                   titleHi={news.titleHi}
//                   image={news.image}
//                   category={news.category}
//                   date={news.date}
//                 />
//               ))}
//             </div>
//           </div>
          
//           {/* Advertisement */}
//           <div>
//             <Advertisement 
//               image="https://images.pexels.com/photos/5097305/pexels-photo-5097305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               link="#"
//               size="square"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;



// jjjjjjjjjjjjjjjjjjj

// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchNews, NewsItem } from '../redux/slices/newsSlice';
// import { useLanguage } from '../context/LanguageContext';
// import NewsCard from '../components/common/NewsCard';
// import Advertisement from '../components/common/Advertisement';

// const CategoryPage: React.FC = () => {
//   const { categoryId } = useParams<{ categoryId: string }>();
//   const { t, language } = useLanguage();
//   const dispatch = useDispatch();
//   const { news, loading, error } = useSelector((state: RootState) => state.news);

//   useEffect(() => {
//     dispatch(fetchNews());
//   }, [dispatch]);

//   const categoryMapping: Record<string, string> = {
//     politics: 'politics',
//     national: 'national',
//     international: 'international',
//     business: 'business',
//     sports: 'sports',
//     entertainment: 'entertainment',
//     health: 'health',
//     technology: 'technology',
//     lifestyle: 'lifestyle',
//     education: 'education',
//     auto: 'auto',
//     video: 'video',
//     religion: 'religion',
//     'for-you': 'forYou',
//   };

//   const categoryNews = categoryId === 'for-you' ? news.slice(0, 10) : news.filter((item: NewsItem) => item.category === categoryId);
//   const featuredNews = categoryNews[0];
//   const remainingNews = categoryNews.slice(1);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-3xl font-bold mb-6 text-gray-900">
//         {categoryId && categoryMapping[categoryId] ? t(categoryMapping[categoryId]) : t('latest')}
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="md:col-span-2">
//           {featuredNews && (
//             <div className="mb-8">
//               <NewsCard
//                 id={featuredNews._id}
//                 titleEn={featuredNews.titleEn}
//                 titleHi={featuredNews.titleHi}
//                 descriptionEn={featuredNews.descriptionEn}
//                 descriptionHi={featuredNews.descriptionHi}
//                 image={featuredNews.image}
//                 category={featuredNews.category}
//                 date={featuredNews.date}
//                 large={true}
//               />
//             </div>
//           )}
//           <div className="mb-8">
//             <Advertisement
//               image="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               link="#"
//               size="banner"
//             />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {remainingNews.map((news: NewsItem) => (
//               <NewsCard
//                 key={news._id}
//                 id={news._id}
//                 titleEn={news.titleEn}
//                 titleHi={news.titleHi}
//                 descriptionEn={news.descriptionEn}
//                 descriptionHi={news.descriptionHi}
//                 image={news.image}
//                 category={news.category}
//                 date={news.date}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="md:col-span-1">
//           <div className="mb-6">
//             <Advertisement
//               image="https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               link="#"
//               size="sidebar"
//             />
//           </div>
//           <div className="mb-6 bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('trending')}
//             </h2>
//             <div className="space-y-4">
//               {news.slice(0, 3).map((news: NewsItem) => (
//                 <NewsCard
//                   key={news._id}
//                   id={news._id}
//                   titleEn={news.titleEn}
//                   titleHi={news.titleHi}
//                   image={news.image}
//                   category={news.category}
//                   date={news.date}
//                 />
//               ))}
//             </div>
//           </div>
//           <div>
//             <Advertisement
//               image="https://images.pexels.com/photos/5097305/pexels-photo-5097305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               link="#"
//               size="square"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;


// -------------------------------

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { RootState } from '../redux/store';
// import { translations } from '../utils/translations';

// interface NewsItem {
//   _id: string;
//   titleEn: string;
//   titleHi: string;
//   contentEn: string;
//   contentHi: string;
//   image: string;
//   category: string;
//   featured: boolean;
//   createdAt: string;
// }

// const CategoryPage: React.FC = () => {
//   const { categoryId } = useParams<{ categoryId: string }>();
//   const { language } = useSelector((state: RootState) => state.language);
//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const t = translations[language];

//   useEffect(() => {
//     const fetchNews = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`http://localhost:5000/api/news?category=${categoryId}`);
//         setNews(response.data);
//       } catch (err) {
//         setError('Failed to load news');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNews();
//   }, [categoryId]);

//   return (
//     <div className="container mx-auto px-4 py-6 bg-gray-50">
//       <h1 className="text-3xl font-bold mb-6 capitalize">{t[categoryId || ''] || categoryId}</h1>
//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//           {error}
//         </div>
//       )}
//       {loading ? (
//         <div className="text-center">Loading...</div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {news.map((item) => (
//             <div key={item._id} className="bg-white p-4 rounded-lg shadow-md">
//               <img
//                 src={item.image}
//                 alt={language === 'en' ? item.titleEn : item.titleHi}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2">
//                 {language === 'en' ? item.titleEn : item.titleHi}
//               </h3>
//               <p className="text-gray-600 mb-2">
//                 {language === 'en' ? item.contentEn.slice(0, 100) : item.contentHi.slice(0, 100)}...
//               </p>
//               <p className="text-sm text-gray-500">{new Date(item.createdAt).toLocaleDateString()}</p>
//               {item.featured && (
//                 <span className="inline-block mt-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
//                   Featured
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;


// jjjjjjjjjjjjjjjjjjjjjjjjj11111

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { RootState } from '../redux/store';
// import { translations } from '../utils/translations';
// import { useLanguage } from '../context/LanguageContext';
// import Advertisement from '../components/common/Advertisement';
// import NewsCard from '../components/common/NewsCard';

// interface NewsItem {
//   _id: string;
//   titleEn: string;
//   titleHi: string;
//   contentEn: string;
//   contentHi: string;
//   descriptionEn: string;
//   descriptionHi: string;
//   image: string;
//   category: string;
//   featured: boolean;
//   date: string;
//   createdAt: string;
// }

// const CategoryPage: React.FC = () => {
//   const { categoryId } = useParams<{ categoryId: string }>();
//   const navigate = useNavigate();
//   const { language } = useLanguage();
//   const t = (key: string) => translations[language][key] || key;
  
//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 12;

//   useEffect(() => {
//     const fetchNews = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(`http://localhost:5000/api/news?category=${categoryId}`);
//         setNews(response.data);
//       } catch (err) {
//         setError('Failed to load news');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (categoryId) {
//       fetchNews();
//     }
//   }, [categoryId]);

//   const handleNewsClick = (newsId: string) => {
//     navigate(`/news/${newsId}`);
//   };

//   const getCategoryIcon = (category: string) => {
//     const icons: { [key: string]: string } = {
//       politics: '🏛️',
//       sports: '⚽',
//       health: '🏥',
//       technology: '💻',
//       business: '💼',
//       international: '🌍',
//       entertainment: '🎬',
//       lifestyle: '🌟'
//     };
//     return icons[category] || '📰';
//   };

//   const getCategoryColor = (category: string) => {
//     const colors: { [key: string]: string } = {
//       politics: 'from-blue-500 to-blue-600',
//       sports: 'from-green-500 to-green-600',
//       health: 'from-green-500 to-teal-600',
//       technology: 'from-purple-500 to-pink-600',
//       business: 'from-yellow-500 to-orange-600',
//       international: 'from-blue-500 to-indigo-600',
//       entertainment: 'from-pink-500 to-purple-600',
//       lifestyle: 'from-indigo-500 to-purple-600'
//     };
//     return colors[category] || 'from-gray-500 to-gray-600';
//   };

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(news.length / itemsPerPage);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   if (loading) return (
//     <div className="flex justify-center items-center h-64">
//       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
//     </div>
//   );

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Top Banner Advertisement */}
//       <div className="bg-white shadow-sm mb-4">
//         <div className="container mx-auto px-4 py-3">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden">
//             <Advertisement
//               image="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200&h=120&dpr=1"
//               link="#"
//               size="banner"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-6">
//         {/* Category Header */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <span className={`w-2 h-12 bg-gradient-to-b ${getCategoryColor(categoryId || '')} mr-4 rounded-full`}></span>
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-900 flex items-center">
//                   {getCategoryIcon(categoryId || '')} {t(categoryId || '') || categoryId}
//                 </h1>
//                 <p className="text-gray-600 mt-2">
//                   {news.length} {news.length === 1 ? 'article' : 'articles'} found
//                 </p>
//               </div>
//             </div>
            
//             {/* Breadcrumb */}
//             <nav className="text-sm text-gray-500">
//               <span 
//                 onClick={() => navigate('/')}
//                 className="hover:text-red-600 cursor-pointer"
//               >
//                 Home
//               </span>
//               <span className="mx-2">/</span>
//               <span className="text-gray-900 font-medium">
//                 {t(categoryId || '') || categoryId}
//               </span>
//             </nav>
//           </div>
//         </div>

//         {/* Error Message */}
//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
//             <div className="flex items-center">
//               <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//               </svg>
//               {error}
//             </div>
//           </div>
//         )}

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Featured News */}
//             {news.filter(item => item.featured).length > 0 && (
//               <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                   <span className={`w-1 h-6 bg-gradient-to-b ${getCategoryColor(categoryId || '')} mr-3 rounded-full`}></span>
//                   ⭐ Featured {t(categoryId || '') || categoryId}
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {news.filter(item => item.featured).slice(0, 4).map((item, index) => (
//                     <div key={item._id} className={index === 0 ? "md:col-span-2" : ""}>
//                       <div 
//                         onClick={() => handleNewsClick(item._id)}
//                         className="cursor-pointer transform hover:scale-105 transition-all duration-300"
//                       >
//                         <NewsCard
//                           id={item._id}
//                           titleEn={item.titleEn}
//                           titleHi={item.titleHi}
//                           descriptionEn={item.descriptionEn || item.contentEn?.slice(0, 150)}
//                           descriptionHi={item.descriptionHi || item.contentHi?.slice(0, 150)}
//                           image={item.image}
//                           category={item.category}
//                           date={item.date || item.createdAt}
//                           large={index === 0}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* All News Grid */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                 <span className={`w-1 h-6 bg-gradient-to-b ${getCategoryColor(categoryId || '')} mr-3 rounded-full`}></span>
//                 All {t(categoryId || '') || categoryId} News
//               </h2>
              
//               {currentNews.length === 0 ? (
//                 <div className="text-center py-12">
//                   <div className="text-gray-400 text-6xl mb-4">📰</div>
//                   <h3 className="text-xl font-semibold text-gray-600 mb-2">No news found</h3>
//                   <p className="text-gray-500">There are no articles in this category yet.</p>
//                 </div>
//               ) : (
//                 <>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {currentNews.map((item) => (
//                       <div 
//                         key={item._id}
//                         onClick={() => handleNewsClick(item._id)}
//                         className="cursor-pointer transform hover:scale-105 transition-all duration-300"
//                       >
//                         <NewsCard
//                           id={item._id}
//                           titleEn={item.titleEn}
//                           titleHi={item.titleHi}
//                           descriptionEn={item.descriptionEn || item.contentEn?.slice(0, 100)}
//                           descriptionHi={item.descriptionHi || item.contentHi?.slice(0, 100)}
//                           image={item.image}
//                           category={item.category}
//                           date={item.date || item.createdAt}
//                         />
//                       </div>
//                     ))}
//                   </div>

//                   {/* Pagination */}
//                   {totalPages > 1 && (
//                     <div className="flex justify-center mt-8">
//                       <nav className="flex space-x-2">
//                         <button
//                           onClick={() => paginate(currentPage - 1)}
//                           disabled={currentPage === 1}
//                           className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                         >
//                           Previous
//                         </button>
                        
//                         {[...Array(totalPages)].map((_, index) => (
//                           <button
//                             key={index + 1}
//                             onClick={() => paginate(index + 1)}
//                             className={`px-4 py-2 text-sm font-medium rounded-lg ${
//                               currentPage === index + 1
//                                 ? 'text-white bg-red-600 border border-red-600'
//                                 : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
//                             }`}
//                           >
//                             {index + 1}
//                           </button>
//                         ))}
                        
//                         <button
//                           onClick={() => paginate(currentPage + 1)}
//                           disabled={currentPage === totalPages}
//                           className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                         >
//                           Next
//                         </button>
//                       </nav>
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="lg:col-span-1 space-y-6">
//             {/* Advertisement 1 */}
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               <div className="bg-gradient-to-br from-green-500 to-blue-600 p-4">
//                 <Advertisement
//                   image="https://images.pexels.com/photos/5097305/pexels-photo-5097305.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
//                   link="#"
//                   size="square"
//                 />
//               </div>
//             </div>

//             {/* Related Categories */}
//             <div className="bg-white rounded-xl shadow-lg p-5">
//               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                 <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 mr-3 rounded-full"></span>
//                 📂 Other Categories
//               </h3>
//               <div className="space-y-2">
//                 {['politics', 'sports', 'health', 'technology', 'business', 'international'].map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => navigate(`/category/${cat}`)}
//                     className={`w-full text-left p-3 rounded-lg transition-colors ${
//                       categoryId === cat 
//                         ? 'bg-red-50 text-red-600 border border-red-200' 
//                         : 'hover:bg-gray-50 text-gray-700'
//                     }`}
//                   >
//                     <span className="flex items-center">
//                       {getCategoryIcon(cat)}
//                       <span className="ml-2 font-medium">{t(cat)}</span>
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Advertisement 2 */}
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4">
//                 <Advertisement
//                   image="https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
//                   link="#"
//                   size="sidebar"
//                 />
//               </div>
//             </div>

//             {/* Popular Tags */}
//             <div className="bg-white rounded-xl shadow-lg p-5">
//               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                 <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 mr-3 rounded-full"></span>
//                 🏷️ Popular Tags
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {['Breaking', 'Latest', 'Trending', 'Analysis', 'Interview', 'Report'].map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Advertisement 3 */}
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               <div className="bg-gradient-to-br from-yellow-500 to-red-600 p-4">
//                 <Advertisement
//                   image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
//                   link="#"
//                   size="sidebar"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;

// jjjjjjjjjjjjjjjjjjjjjjjjj2222222

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { RootState } from '../redux/store';
// import { translations } from '../utils/translations';
// import { useLanguage } from '../context/LanguageContext';
// import Advertisement from '../components/common/Advertisement';
// import NewsCard from '../components/common/NewsCard';

// interface NewsItem {
//   _id: string;
//   titleEn: string;
//   titleHi: string;
//   contentEn: string;
//   contentHi: string;
//   descriptionEn: string;
//   descriptionHi: string;
//   image: string;
//   category: string;
//   featured: boolean;
//   date: string;
//   createdAt: string;
// }

// const CategoryPage: React.FC = () => {
//   const { categoryId } = useParams<{ categoryId: string }>();
//   const navigate = useNavigate();
//   const { language } = useLanguage();
//   const t = (key: string) => translations[language][key] || key;
  
//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [allCategories, setAllCategories] = useState<string[]>([]);
//   const [categoryCounts, setCategoryCounts] = useState<{[key: string]: number}>({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 12;

//   useEffect(() => {
//     const fetchNews = async () => {
//       setLoading(true);
//       setError('');
//       try {
//         // Fetch news for specific category
//         const response = await axios.get(`http://localhost:5000/api/news?category=${categoryId}`);
//         setNews(response.data);
        
//         // Fetch all categories and their counts
//         const allNewsResponse = await axios.get(`http://localhost:5000/api/news`);
//         const allNews = allNewsResponse.data;
        
//         // Get unique categories
//         const categories = [...new Set(allNews.map((item: NewsItem) => item.category))];
//         setAllCategories(categories);
        
//         // Count news per category
//         const counts: {[key: string]: number} = {};
//         categories.forEach((cat: string) => {
//           counts[cat] = allNews.filter((item: NewsItem) => item.category === cat).length;
//         });
//         setCategoryCounts(counts);
        
//       } catch (err) {
//         setError('Failed to load news');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (categoryId) {
//       fetchNews();
//       setCurrentPage(1); // Reset to first page when category changes
//     }
//   }, [categoryId]);

//   const handleNewsClick = (newsId: string) => {
//     navigate(`/article/${newsId}`);
//   };

//   const getCategoryIcon = (category: string) => {
//     const icons: { [key: string]: string } = {
//       politics: '🏛️',
//       sports: '⚽',
//       health: '🏥',
//       technology: '💻',
//       business: '💼',
//       international: '🌍',
//       entertainment: '🎬',
//       lifestyle: '🌟'
//     };
//     return icons[category] || '📰';
//   };

//   const getCategoryColor = (category: string) => {
//     const colors: { [key: string]: string } = {
//       politics: 'from-blue-500 to-blue-600',
//       sports: 'from-green-500 to-green-600',
//       health: 'from-green-500 to-teal-600',
//       technology: 'from-purple-500 to-pink-600',
//       business: 'from-yellow-500 to-orange-600',
//       international: 'from-blue-500 to-indigo-600',
//       entertainment: 'from-pink-500 to-purple-600',
//       lifestyle: 'from-indigo-500 to-purple-600'
//     };
//     return colors[category] || 'from-gray-500 to-gray-600';
//   };

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(news.length / itemsPerPage);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   if (loading) return (
//     <div className="flex justify-center items-center h-64">
//       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
//     </div>
//   );

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Top Banner Advertisement */}
//       <div className="bg-white shadow-sm mb-4">
//         <div className="container mx-auto px-4 py-3">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden">
//             <Advertisement
//               image="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200&h=120&dpr=1"
//               link="#"
//               size="banner"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-6">
//         {/* Category Header */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <span className={`w-2 h-12 bg-gradient-to-b ${getCategoryColor(categoryId || '')} mr-4 rounded-full`}></span>
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-900 flex items-center">
//                   {getCategoryIcon(categoryId || '')} {t(categoryId || '') || categoryId}
//                 </h1>
//                 <p className="text-gray-600 mt-2">
//                   {news.length} {news.length === 1 ? 'article' : 'articles'} found in {t(categoryId || '') || categoryId}
//                 </p>
//               </div>
//             </div>
            
//             {/* Breadcrumb */}
//             <nav className="text-sm text-gray-500">
//               <span 
//                 onClick={() => navigate('/')}
//                 className="hover:text-red-600 cursor-pointer"
//               >
//                 Home
//               </span>
//               <span className="mx-2">/</span>
//               <span className="text-gray-900 font-medium">
//                 {t(categoryId || '') || categoryId}
//               </span>
//             </nav>
//           </div>
//         </div>

//         {/* Error Message */}
//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
//             <div className="flex items-center">
//               <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//               </svg>
//               {error}
//             </div>
//           </div>
//         )}

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Featured News - Only show if category has featured news */}
//             {news.filter(item => item.featured).length > 0 && (
//               <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                   <span className={`w-1 h-6 bg-gradient-to-b ${getCategoryColor(categoryId || '')} mr-3 rounded-full`}></span>
//                   ⭐ Featured {t(categoryId || '') || categoryId}
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {news.filter(item => item.featured).slice(0, 4).map((item, index) => (
//                     <div key={item._id} className={index === 0 ? "md:col-span-2" : ""}>
//                       <div 
//                         onClick={() => handleNewsClick(item._id)}
//                         className="cursor-pointer transform hover:scale-105 transition-all duration-300"
//                       >
//                         <NewsCard
//                           id={item._id}
//                           titleEn={item.titleEn}
//                           titleHi={item.titleHi}
//                           descriptionEn={item.descriptionEn || item.contentEn?.slice(0, 150)}
//                           descriptionHi={item.descriptionHi || item.contentHi?.slice(0, 150)}
//                           image={item.image}
//                           category={item.category}
//                           date={item.date || item.createdAt}
//                           large={index === 0}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Category News Grid */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                 <span className={`w-1 h-6 bg-gradient-to-b ${getCategoryColor(categoryId || '')} mr-3 rounded-full`}></span>
//                 {t(categoryId || '') || categoryId} News ({news.length})
//               </h2>
              
//               {news.length === 0 ? (
//                 <div className="text-center py-16">
//                   <div className="text-gray-300 text-8xl mb-6">📰</div>
//                   <h3 className="text-2xl font-semibold text-gray-600 mb-4">No Records Found</h3>
//                   <p className="text-gray-500 text-lg mb-6">
//                     There are no articles available in <span className="font-semibold">{t(categoryId || '') || categoryId}</span> category at the moment.
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <button
//                       onClick={() => navigate('/')}
//                       className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
//                     >
//                       Go to Homepage
//                     </button>
//                     <button
//                       onClick={() => window.location.reload()}
//                       className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
//                     >
//                       Refresh Page
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {currentNews.map((item) => (
//                       <div 
//                         key={item._id}
//                         onClick={() => handleNewsClick(item._id)}
//                         className="cursor-pointer transform hover:scale-105 transition-all duration-300"
//                       >
//                         <NewsCard
//                           id={item._id}
//                           titleEn={item.titleEn}
//                           titleHi={item.titleHi}
//                           descriptionEn={item.descriptionEn || item.contentEn?.slice(0, 100)}
//                           descriptionHi={item.descriptionHi || item.contentHi?.slice(0, 100)}
//                           image={item.image}
//                           category={item.category}
//                           date={item.date || item.createdAt}
//                         />
//                       </div>
//                     ))}
//                   </div>

//                   {/* Pagination - Only show if there are multiple pages */}
//                   {totalPages > 1 && (
//                     <div className="flex justify-center mt-8">
//                       <nav className="flex space-x-2">
//                         <button
//                           onClick={() => paginate(currentPage - 1)}
//                           disabled={currentPage === 1}
//                           className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                         >
//                           Previous
//                         </button>
                        
//                         {[...Array(totalPages)].map((_, index) => (
//                           <button
//                             key={index + 1}
//                             onClick={() => paginate(index + 1)}
//                             className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
//                               currentPage === index + 1
//                                 ? 'text-white bg-red-600 border border-red-600'
//                                 : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
//                             }`}
//                           >
//                             {index + 1}
//                           </button>
//                         ))}
                        
//                         <button
//                           onClick={() => paginate(currentPage + 1)}
//                           disabled={currentPage === totalPages}
//                           className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                         >
//                           Next
//                         </button>
//                       </nav>
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="lg:col-span-1 space-y-6">
//             {/* Advertisement 1 */}
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               <div className="bg-gradient-to-br from-green-500 to-blue-600 p-4">
//                 <Advertisement
//                   image="https://images.pexels.com/photos/5097305/pexels-photo-5097305.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
//                   link="#"
//                   size="square"
//                 />
//               </div>
//             </div>

//             {/* All Categories with Dynamic Counts */}
//             <div className="bg-white rounded-xl shadow-lg p-5">
//               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                 <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 mr-3 rounded-full"></span>
//                 📂 All Categories
//               </h3>
//               <div className="space-y-2">
//                 {allCategories.length > 0 ? (
//                   allCategories.map((cat) => (
//                     <button
//                       key={cat}
//                       onClick={() => navigate(`/category/${cat}`)}
//                       className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
//                         categoryId === cat 
//                           ? 'bg-red-50 text-red-600 border border-red-200 shadow-sm' 
//                           : 'hover:bg-gray-50 text-gray-700 hover:shadow-sm'
//                       }`}
//                     >
//                       <div className="flex items-center justify-between">
//                         <span className="flex items-center">
//                           {getCategoryIcon(cat)}
//                           <span className="ml-2 font-medium capitalize">{t(cat) || cat}</span>
//                         </span>
//                         <span className={`text-xs px-2 py-1 rounded-full font-medium ${
//                           categoryId === cat 
//                             ? 'bg-red-100 text-red-600' 
//                             : 'bg-gray-100 text-gray-600'
//                         }`}>
//                           {categoryCounts[cat] || 0}
//                         </span>
//                       </div>
//                     </button>
//                   ))
//                 ) : (
//                   <div className="text-center py-4 text-gray-500">
//                     <div className="text-2xl mb-2">📂</div>
//                     <p className="text-sm">Loading categories...</p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Advertisement 2 */}
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4">
//                 <Advertisement
//                   image="https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
//                   link="#"
//                   size="sidebar"
//                 />
//               </div>
//             </div>

//             {/* Popular Tags */}
//             <div className="bg-white rounded-xl shadow-lg p-5">
//               <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                 <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 mr-3 rounded-full"></span>
//                 🏷️ Popular Tags
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {['Breaking', 'Latest', 'Trending', 'Analysis', 'Interview', 'Report'].map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Advertisement 3 */}
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               <div className="bg-gradient-to-br from-yellow-500 to-red-600 p-4">
//                 <Advertisement
//                   image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
//                   link="#"
//                   size="sidebar"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;


// jjjjjjjjjjjjjjjjjjjjj3333333333333333

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../redux/store';
import { translations } from '../utils/translations';
import { useLanguage } from '../context/LanguageContext';
import Advertisement from '../components/common/Advertisement';
import NewsCard from '../components/common/NewsCard';

interface NewsItem {
  _id: string;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
  descriptionEn: string;
  descriptionHi: string;
  image: string;
  category: string;
  featured: boolean;
  date: string;
  createdAt: string;
}

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = (key: string) => translations[language][key] || key;
  
  const [news, setNews] = useState<NewsItem[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [categoryCounts, setCategoryCounts] = useState<{[key: string]: number}>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Define available categories (categories that have data)
  const availableCategories = ['national', 'sports', 'politics'];

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError('');
      try {
        // First, fetch all news to get categories and counts
        const allNewsResponse = await axios.get(`http://localhost:5000/api/news`);
        const allNews = allNewsResponse.data;
        
        // Filter news for current category - strict filtering
        const categoryNews = allNews.filter((item: NewsItem) => 
          item.category && item.category.toLowerCase() === categoryId?.toLowerCase()
        );
        
        // Check if category exists in available categories
        if (categoryId && !availableCategories.includes(categoryId.toLowerCase())) {
          setNews([]);
          setError(`Category "${categoryId}" is not available yet. Available categories: ${availableCategories.join(', ')}`);
        } else {
          setNews(categoryNews);
        }
        
        // Get unique categories from all news (only show categories that have data)
        const categoriesWithData = [...new Set(allNews.map((item: NewsItem) => item.category))];
        setAllCategories(categoriesWithData);
        
        // Count news per category
        const counts: {[key: string]: number} = {};
        categoriesWithData.forEach((cat: string) => {
          counts[cat] = allNews.filter((item: NewsItem) => item.category === cat).length;
        });
        setCategoryCounts(counts);
        
      } catch (err) {
        setError('Failed to load news');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchNews();
      setCurrentPage(1); // Reset to first page when category changes
    }
  }, [categoryId]);

  const handleNewsClick = (newsId: string) => {
    navigate(`/article/${newsId}`);
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      politics: '🏛️',
      sports: '⚽',
      health: '🏥',
      technology: '💻',
      business: '💼',
      international: '🌍',
      entertainment: '🎬',
      lifestyle: '🌟',
      national: '🇮🇳', // Added national category icon
    };
    return icons[category?.toLowerCase()] || '📰';
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      politics: 'from-blue-500 to-blue-600',
      sports: 'from-green-500 to-green-600',
      health: 'from-green-500 to-teal-600',
      technology: 'from-purple-500 to-pink-600',
      business: 'from-yellow-500 to-orange-600',
      international: 'from-blue-500 to-indigo-600',
      entertainment: 'from-pink-500 to-purple-600',
      lifestyle: 'from-indigo-500 to-purple-600',
      national: 'from-orange-500 to-red-600', // Added national category color
    };
    return colors[category?.toLowerCase()] || 'from-gray-500 to-gray-600';
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Banner Advertisement */}
      <div className="bg-white shadow-sm mb-4">
        <div className="container mx-auto px-4 py-3">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden">
            <Advertisement
              image="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200&h=120&dpr=1"
              link="#"
              size="banner"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Category Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className={`w-2 h-12 bg-gradient-to-b ${getCategoryColor(categoryId || '')} mr-4 rounded-full`}></span>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                  {getCategoryIcon(categoryId || '')} {t(categoryId || '') || categoryId}
                </h1>
                <p className="text-gray-600 mt-2">
                  {news.length} {news.length === 1 ? 'article' : 'articles'} found in {t(categoryId || '') || categoryId}
                </p>
              </div>
            </div>
            
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500">
              <span 
                onClick={() => navigate('/')}
                className="hover:text-red-600 cursor-pointer"
              >
                Home
              </span>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">
                {t(categoryId || '') || categoryId}
              </span>
            </nav>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg mb-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News - Only show if category has featured news */}
            {news.filter(item => item.featured).length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className={`w-1 h-6 bg-gradient-to-b ${getCategoryColor(categoryId || '')} mr-3 rounded-full`}></span>
                  ⭐ Featured {t(categoryId || '') || categoryId}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {news.filter(item => item.featured).slice(0, 4).map((item, index) => (
                    <div key={item._id} className={index === 0 ? "md:col-span-2" : ""}>
                      <div 
                        onClick={() => handleNewsClick(item._id)}
                        className="cursor-pointer transform hover:scale-105 transition-all duration-300"
                      >
                        <NewsCard
                          id={item._id}
                          titleEn={item.titleEn}
                          titleHi={item.titleHi}
                          descriptionEn={item.descriptionEn || item.contentEn?.slice(0, 150)}
                          descriptionHi={item.descriptionHi || item.contentHi?.slice(0, 150)}
                          image={item.image}
                          category={item.category}
                          date={item.date || item.createdAt}
                          large={index === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Category News Grid */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className={`w-1 h-6 bg-gradient-to-b ${getCategoryColor(categoryId || '')} mr-3 rounded-full`}></span>
                {t(categoryId || '') || categoryId} News ({news.length})
              </h2>
              
              {news.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-gray-300 text-8xl mb-6">📰</div>
                  <h3 className="text-2xl font-semibold text-gray-600 mb-4">No Articles Available</h3>
                  <p className="text-gray-500 text-lg mb-6">
                    {categoryId && !availableCategories.includes(categoryId.toLowerCase()) ? (
                      <>
                        <span className="font-semibold text-orange-600">{categoryId}</span> category is coming soon! <br/>
                        Currently available categories: <span className="font-semibold">{availableCategories.join(', ')}</span>
                      </>
                    ) : (
                      <>
                        There are no articles available in <span className="font-semibold">{t(categoryId || '') || categoryId}</span> category at the moment.
                      </>
                    )}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => navigate('/')}
                      className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                    >
                      Go to Homepage
                    </button>
                    <button
                      onClick={() => navigate('/category/national')}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Browse National News
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentNews.map((item) => (
                      <div 
                        key={item._id}
                        onClick={() => handleNewsClick(item._id)}
                        className="cursor-pointer transform hover:scale-105 transition-all duration-300"
                      >
                        <NewsCard
                          id={item._id}
                          titleEn={item.titleEn}
                          titleHi={item.titleHi}
                          descriptionEn={item.descriptionEn || item.contentEn?.slice(0, 100)}
                          descriptionHi={item.descriptionHi || item.contentHi?.slice(0, 100)}
                          image={item.image}
                          category={item.category}
                          date={item.date || item.createdAt}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Pagination - Only show if there are multiple pages */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-8">
                      <nav className="flex space-x-2">
                        <button
                          onClick={() => paginate(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          Previous
                        </button>
                        
                        {[...Array(totalPages)].map((_, index) => (
                          <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                              currentPage === index + 1
                                ? 'text-white bg-red-600 border border-red-600'
                                : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {index + 1}
                          </button>
                        ))}
                        
                        <button
                          onClick={() => paginate(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          Next
                        </button>
                      </nav>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Advertisement 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 p-4">
                <Advertisement
                  image="https://images.pexels.com/photos/5097305/pexels-photo-5097305.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
                  link="#"
                  size="square"
                />
              </div>
            </div>

            {/* Available Categories with Dynamic Counts */}
            <div className="bg-white rounded-xl shadow-lg p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 mr-3 rounded-full"></span>
                📂 Available Categories
              </h3>
              <div className="space-y-2">
                {allCategories.length > 0 ? (
                  // Only show categories that actually have data
                  allCategories.filter(cat => categoryCounts[cat] > 0).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => navigate(`/category/${cat}`)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                        categoryId?.toLowerCase() === cat.toLowerCase() 
                          ? 'bg-red-50 text-red-600 border border-red-200 shadow-sm' 
                          : 'hover:bg-gray-50 text-gray-700 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center">
                          {getCategoryIcon(cat)}
                          <span className="ml-2 font-medium capitalize">{t(cat) || cat}</span>
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          categoryId?.toLowerCase() === cat.toLowerCase() 
                            ? 'bg-red-100 text-red-600' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {categoryCounts[cat] || 0}
                        </span>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500">
                    <div className="text-2xl mb-2">📂</div>
                    <p className="text-sm">Loading categories...</p>
                  </div>
                )}
              </div>
              
              {/* Coming Soon Categories */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-600 mb-2">Coming Soon:</h4>
                <div className="flex flex-wrap gap-2">
                  {['health', 'technology', 'business', 'international', 'entertainment', 'lifestyle'].map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full capitalize cursor-not-allowed"
                      title={`${cat} category will be available soon`}
                    >
                      {getCategoryIcon(cat)} {t(cat) || cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Advertisement 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4">
                <Advertisement
                  image="https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                  link="#"
                  size="sidebar"
                />
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-lg p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 mr-3 rounded-full"></span>
                🏷️ Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Breaking', 'Latest', 'Trending', 'Analysis', 'Interview', 'Report'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Advertisement 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-yellow-500 to-red-600 p-4">
                <Advertisement
                  image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                  link="#"
                  size="sidebar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;