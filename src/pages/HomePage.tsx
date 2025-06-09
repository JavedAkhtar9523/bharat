// import React from 'react';
// import { useLanguage } from '../context/LanguageContext';
// import NewsCard from '../components/common/NewsCard';
// import Advertisement from '../components/common/Advertisement';
// import { newsData } from '../data/newsData';
// import Newsletter from '../components/common/NewsLetter';

// const HomePage: React.FC = () => {
//   const { t, language } = useLanguage();
  
//   // Get featured news
//   const featuredNews = newsData.find(news => news.featured);
  
//   // Get recent news (excluding featured)
//   const recentNews = newsData
//     .filter(news => !news.featured)
//     .slice(0, 6);
  
//   // Get news by category
//   const getPoliticsNews = () => newsData.filter(item => item.category === 'politics').slice(0, 3);
//   const getSportsNews = () => newsData.filter(item => item.category === 'sports').slice(0, 3);
//   const getHealthNews = () => newsData.filter(item => item.category === 'health').slice(0, 3);
//   const getInternationalNews = () => newsData.filter(item => item.category === 'international').slice(0, 3);
  
//   return (
//     <div className="container mx-auto px-4 py-6">
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
          
//           {/* Recent News */}
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('latest')}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {recentNews.slice(0, 4).map((news) => (
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
          
//           {/* Politics News */}
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('politics')}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {getPoliticsNews().map((news) => (
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
//           <Newsletter/>
          
//           {/* Sports News */}
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('sports')}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {getSportsNews().map((news) => (
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
          
//           {/* International News */}
//           <div className="mb-6 bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('international')}
//             </h2>
//             <div className="space-y-4">
//               {getInternationalNews().map((news) => (
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
          
//           {/* Health News */}
//           <div className="mb-6 bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('health')}
//             </h2>
//             <div className="space-y-4">
//               {getHealthNews().map((news) => (
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

// export default HomePage;


// jjjjjjjjjjjjjjj

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchNews, NewsItem } from '../redux/slices/newsSlice';
// import { useLanguage } from '../context/LanguageContext';
// import NewsCard from '../components/common/NewsCard';
// import Advertisement from '../components/common/Advertisement';
// // import Newsletter from '../components/common/Newsletter';
// import Newsletter from '../components/common/NewsLetter';

// const HomePage: React.FC = () => {
//   const { t, language } = useLanguage();
//   const dispatch = useDispatch();
//   const { news, loading, error } = useSelector((state: RootState) => state.news);

//   useEffect(() => {
//     dispatch(fetchNews());
//   }, [dispatch]);

//   const featuredNews = news.find((item: NewsItem) => item.featured);
//   const recentNews = news.filter((item: NewsItem) => !item.featured).slice(0, 6);
//   const getPoliticsNews = () => news.filter((item: NewsItem) => item.category === 'politics').slice(0, 3);
//   const getSportsNews = () => news.filter((item: NewsItem) => item.category === 'sports').slice(0, 3);
//   const getHealthNews = () => news.filter((item: NewsItem) => item.category === 'health').slice(0, 3);
//   const getInternationalNews = () => news.filter((item: NewsItem) => item.category === 'international').slice(0, 3);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-6">
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
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('latest')}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {recentNews.slice(0, 4).map((news: NewsItem) => (
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
//           <Newsletter />
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('politics')}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {getPoliticsNews().map((news: NewsItem) => (
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
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('sports')}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {getSportsNews().map((news: NewsItem) => (
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
//               {t('international')}
//             </h2>
//             <div className="space-y-4">
//               {getInternationalNews().map((news: NewsItem) => (
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
//           <div className="mb-6 bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('health')}
//             </h2>
//             <div className="space-y-4">
//               {getHealthNews().map((news: NewsItem) => (
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

// export default HomePage;


// ----------------------------

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchNews, NewsItem } from '../redux/slices/newsSlice';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';
// import NewsCard from '../components/common/NewsCard';
// import Advertisement from '../components/common/Advertisement';
// import Newsletter from '../components/common/Newsletter';

// const HomePage: React.FC = () => {
//   const { language } = useLanguage();
//   const t = (key: string) => translations[language][key] || key;
//   const dispatch = useDispatch();
//   const { news, loading, error } = useSelector((state: RootState) => state.news);

//   useEffect(() => {
//     dispatch(fetchNews());
//   }, [dispatch]);

//   const featuredNews = news.find((item: NewsItem) => item.featured);
//   const recentNews = news.filter((item: NewsItem) => !item.featured).slice(0, 6);
//   const getPoliticsNews = () => news.filter((item: NewsItem) => item.category === 'politics').slice(0, 3);
//   const getSportsNews = () => news.filter((item: NewsItem) => item.category === 'sports').slice(0, 3);
//   const getHealthNews = () => news.filter((item: NewsItem) => item.category === 'health').slice(0, 3);
//   const getInternationalNews = () => news.filter((item: NewsItem) => item.category === 'international').slice(0, 3);

//   if (loading) return <div>{t('loading')}</div>;
//   if (error) return <div>{t('error')}: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-6">
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
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('latest')}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {recentNews.slice(0, 4).map((news: NewsItem) => (
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
//           <Newsletter />
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('politics')}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {getPoliticsNews().map((news: NewsItem) => (
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
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('sports')}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {getSportsNews().map((news: NewsItem) => (
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
//               {t('international')}
//             </h2>
//             <div className="space-y-4">
//               {getInternationalNews().map((news: NewsItem) => (
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
//           <div className="mb-6 bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('health')}
//             </h2>
//             <div className="space-y-4">
//               {getHealthNews().map((news: NewsItem) => (
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

// export default HomePage;

// jjjjj1111

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchNews, NewsItem } from '../redux/slices/newsSlice';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';
// import NewsCard from '../components/common/NewsCard';
// import Advertisement from '../components/common/Advertisement';
// import Newsletter from '../components/common/Newsletter';

// const HomePage: React.FC = () => {
//   const { language } = useLanguage();
//   const t = (key: string) => translations[language][key] || key;
//   const dispatch = useDispatch();
//   const { news, loading, error } = useSelector((state: RootState) => state.news);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     dispatch(fetchNews());
//   }, [dispatch]);

//   // Auto-slide carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % Math.min(featuredNews.length, 4));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [news]);

//   const featuredNews = news.filter((item: NewsItem) => item.featured || news.indexOf(item) < 4).slice(0, 4);
//   const recentNews = news.filter((item: NewsItem) => !item.featured).slice(0, 8);
//   const getPoliticsNews = () => news.filter((item: NewsItem) => item.category === 'politics').slice(0, 3);
//   const getSportsNews = () => news.filter((item: NewsItem) => item.category === 'sports').slice(0, 3);
//   const getHealthNews = () => news.filter((item: NewsItem) => item.category === 'health').slice(0, 3);
//   const getInternationalNews = () => news.filter((item: NewsItem) => item.category === 'international').slice(0, 3);
//   const getLatestNews = () => news.slice(0, 6);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
//   };

//   if (loading) return <div className="flex justify-center items-center h-64">{t('loading')}</div>;
//   if (error) return <div className="text-red-500 text-center">{t('error')}: {error}</div>;

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4 py-6">
//         {/* Hero Carousel and Sidebar */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
//           {/* Main Carousel */}
//           <div className="lg:col-span-3">
//             <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
//               {featuredNews.length > 0 && (
//                 <>
//                   <div className="relative h-96 overflow-hidden">
//                     {featuredNews.map((item, index) => (
//                       <div
//                         key={item._id}
//                         className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
//                           index === currentSlide ? 'translate-x-0' : 
//                           index < currentSlide ? '-translate-x-full' : 'translate-x-full'
//                         }`}
//                       >
//                         <img
//                           src={item.image}
//                           alt={language === 'hi' ? item.titleHi : item.titleEn}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
//                         <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                           <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 capitalize">
//                             {item.category}
//                           </span>
//                           <h1 className="text-2xl md:text-3xl font-bold mb-2 line-clamp-2">
//                             {language === 'hi' ? item.titleHi : item.titleEn}
//                           </h1>
//                           <p className="text-gray-200 line-clamp-2 mb-2">
//                             {language === 'hi' ? item.descriptionHi : item.descriptionEn}
//                           </p>
//                           <p className="text-sm text-gray-300">
//                             {new Date(item.date).toLocaleDateString()}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   {/* Carousel Controls */}
//                   <button
//                     onClick={prevSlide}
//                     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={nextSlide}
//                     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
                  
//                   {/* Carousel Indicators */}
//                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                     {featuredNews.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setCurrentSlide(index)}
//                         className={`w-3 h-3 rounded-full transition-all ${
//                           index === currentSlide ? 'bg-white' : 'bg-white/50'
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="lg:col-span-1 space-y-6">
//             {/* Latest News Sidebar */}
//             <div className="bg-white rounded-lg shadow-lg p-4">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-lg font-bold text-gray-900 flex items-center">
//                   <span className="w-1 h-6 bg-red-600 mr-2"></span>
//                   {t('latest')}
//                 </h2>
//                 <button className="text-red-600 text-sm hover:underline">
//                   {t('viewAll') || 'viewAll'}
//                 </button>
//               </div>
//               <div className="space-y-4">
//                 {getLatestNews().slice(0, 3).map((item, index) => (
//                   <div key={item._id} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-b-0">
//                     <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
//                       {index + 1}
//                     </span>
//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
//                         {language === 'hi' ? item.titleHi : item.titleEn}
//                       </h3>
//                       <p className="text-xs text-gray-500 mb-1 capitalize">
//                         {item.category}
//                       </p>
//                       <p className="text-xs text-gray-400">
//                         {new Date(item.date).toLocaleDateString()}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Advertisement Sidebar */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <Advertisement
//                 image="https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
//                 link="#"
//                 size="sidebar"
//               />
//             </div>

//             {/* International News Sidebar */}
//             <div className="bg-white rounded-lg shadow-lg p-4">
//               <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                 <span className="w-1 h-6 bg-blue-600 mr-2"></span>
//                 {t('international')}
//               </h2>
//               <div className="space-y-4">
//                 {getInternationalNews().map((item) => (
//                   <div key={item._id} className="flex space-x-3 pb-4 border-b border-gray-100 last:border-b-0">
//                     <img
//                       src={item.image}
//                       alt={language === 'hi' ? item.titleHi : item.titleEn}
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
//                         {language === 'hi' ? item.titleHi : item.titleEn}
//                       </h3>
//                       <p className="text-xs text-gray-400">
//                         {new Date(item.date).toLocaleDateString()}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content Area */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//           <div className="lg:col-span-3 space-y-8">
//             {/* Banner Advertisement */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <Advertisement
//                 image="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200&h=300&dpr=1"
//                 link="#"
//                 size="banner"
//               />
//             </div>

//             {/* Politics Section */}
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
//                 <span className="w-1 h-8 bg-red-600 mr-3"></span>
//                 {t('politics')}
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {getPoliticsNews().map((item) => (
//                   <NewsCard
//                     key={item._id}
//                     id={item._id}
//                     titleEn={item.titleEn}
//                     titleHi={item.titleHi}
//                     image={item.image}
//                     category={item.category}
//                     date={item.date}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Sports Section */}
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
//                 <span className="w-1 h-8 bg-green-600 mr-3"></span>
//                 {t('sports')}
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {getSportsNews().map((item) => (
//                   <NewsCard
//                     key={item._id}
//                     id={item._id}
//                     titleEn={item.titleEn}
//                     titleHi={item.titleHi}
//                     image={item.image}
//                     category={item.category}
//                     date={item.date}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Latest News Section */}
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
//                 <span className="w-1 h-8 bg-purple-600 mr-3"></span>
//                 {t('latest')} {t('news') || 'News'}
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {recentNews.slice(0, 6).map((item) => (
//                   <NewsCard
//                     key={item._id}
//                     id={item._id}
//                     titleEn={item.titleEn}
//                     titleHi={item.titleHi}
//                     descriptionEn={item.descriptionEn}
//                     descriptionHi={item.descriptionHi}
//                     image={item.image}
//                     category={item.category}
//                     date={item.date}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Newsletter */}
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <Newsletter />
//             </div>
//           </div>

//           {/* Right Sidebar for Main Content */}
//           <div className="lg:col-span-1 space-y-6">
//             {/* Health News Sidebar */}
//             <div className="bg-white rounded-lg shadow-lg p-4">
//               <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                 <span className="w-1 h-6 bg-green-600 mr-2"></span>
//                 {t('health')}
//               </h2>
//               <div className="space-y-4">
//                 {getHealthNews().map((item) => (
//                   <div key={item._id} className="flex space-x-3 pb-4 border-b border-gray-100 last:border-b-0">
//                     <img
//                       src={item.image}
//                       alt={language === 'hi' ? item.titleHi : item.titleEn}
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
//                         {language === 'hi' ? item.titleHi : item.titleEn}
//                       </h3>
//                       <p className="text-xs text-gray-400">
//                         {new Date(item.date).toLocaleDateString()}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Square Advertisement */}
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <Advertisement
//                 image="https://images.pexels.com/photos/5097305/pexels-photo-5097305.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
//                 link="#"
//                 size="square"
//               />
//             </div>

//             {/* More Latest News Sidebar */}
//             <div className="bg-white rounded-lg shadow-lg p-4">
//               <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                 <span className="w-1 h-6 bg-orange-600 mr-2"></span>
//                 More {t('latest')}
//               </h2>
//               <div className="space-y-4">
//                 {getLatestNews().slice(3, 6).map((item, index) => (
//                   <div key={item._id} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-b-0">
//                     <span className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
//                       {index + 4}
//                     </span>
//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
//                         {language === 'hi' ? item.titleHi : item.titleEn}
//                       </h3>
//                       <p className="text-xs text-gray-500 mb-1 capitalize">
//                         {item.category}
//                       </p>
//                       <p className="text-xs text-gray-400">
//                         {new Date(item.date).toLocaleDateString()}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// jjjjjjjjj2222222

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { fetchNews, NewsItem } from '../redux/slices/newsSlice';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import NewsCard from '../components/common/NewsCard';
import Advertisement from '../components/common/Advertisement';
import Newsletter from '../components/common/Newsletter';

const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: string) => translations[language][key] || key;
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state: RootState) => state.news);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate=useNavigate();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.min(featuredNews.length, 4));
    }, 5000);
    return () => clearInterval(interval);
  }, [news]);

  const featuredNews = news.filter((item: NewsItem) => item.featured || news.indexOf(item) < 4).slice(0, 4);
  const recentNews = news.filter((item: NewsItem) => !item.featured).slice(0, 12);
  const getPoliticsNews = () => news.filter((item: NewsItem) => item.category === 'politics').slice(0, 4);
  const getSportsNews = () => news.filter((item: NewsItem) => item.category === 'sports').slice(0, 4);
  const getHealthNews = () => news.filter((item: NewsItem) => item.category === 'health').slice(0, 4);
  const getInternationalNews = () => news.filter((item: NewsItem) => item.category === 'international').slice(0, 4);
  const getLatestNews = () => news.slice(0, 8);
  const getTechnologyNews = () => news.filter((item: NewsItem) => item.category === 'technology').slice(0, 3);
  const getBusinessNews = () => news.filter((item: NewsItem) => item.category === 'business').slice(0, 3);

  // Mock video data - replace with your actual video data
  const videoNews = news.slice(0, 6).map(item => ({
    ...item,
    videoThumbnail: item.image,
    duration: '2:34' // Mock duration
  }));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
  };
  const handleReadMore = (newsId: string) => {
    navigate(`/article/${newsId}`); // Navigate to news detail page
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
    </div>
  );
  if (error) return <div className="text-red-500 text-center bg-red-50 p-4 rounded-lg">{t('error')}: {error}</div>;

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
        {/* Breaking News Ticker */}
        <div className="bg-red-600 text-white rounded-lg mb-6 overflow-hidden">
          <div className="flex items-center">
            <div className="bg-red-700 px-4 py-2 font-bold text-sm">BREAKING</div>
            <div className="flex-1 py-2 px-4">
              <div className="animate-pulse">
                <span className="text-sm font-medium">
                  {getLatestNews()[0] && (language === 'hi' ? getLatestNews()[0].titleHi : getLatestNews()[0].titleEn)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Hero Carousel */}
          <div className="lg:col-span-3">
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
              {featuredNews.length > 0 && (
                <>
                  <div className="relative h-96 lg:h-[500px] overflow-hidden">
                    {featuredNews.map((item, index) => (
                      <div
                        key={item._id}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                          index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={language === 'hi' ? item.titleHi : item.titleEn}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <div className="flex items-center mb-4">
                            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                              {item.category}
                            </span>
                            <span className="ml-4 text-sm text-gray-300">
                              {new Date(item.date).toLocaleDateString()}
                            </span>
                          </div>
                          <h1 className="text-2xl lg:text-4xl font-bold mb-4 line-clamp-2 leading-tight">
                            {language === 'hi' ? item.titleHi : item.titleEn}
                          </h1>
                          <p className="text-gray-200 text-lg line-clamp-2 mb-4 max-w-3xl">
                            {language === 'hi' ? item.descriptionHi : item.descriptionEn}
                          </p>
                          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors" onClick={() => handleReadMore(item._id)}>
                            
                            Read More →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced Carousel Controls */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 border border-white/20"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 border border-white/20"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Enhanced Indicators */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {featuredNews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Trending News */}
            <div className="bg-white rounded-xl shadow-lg p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 mr-3 rounded-full"></span>
                  🔥 Trending
                </h2>
                <button className="text-red-600 text-sm hover:underline font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {getLatestNews().slice(0, 4).map((item, index) => (
                  <div key={item._id} className="group cursor-pointer">
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-red-500 to-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-red-600 transition-colors">
                          {language === 'hi' ? item.titleHi : item.titleEn}
                        </h3>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="capitalize bg-gray-100 px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advertisement 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4">
                <Advertisement
                  image="https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                  link="#"
                  size="sidebar"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Categories */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {['Politics', 'Sports', 'Health', 'Technology', 'Business', 'International'].map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-red-500 hover:to-red-600 hover:text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-md"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-3 space-y-10">
            
            {/* Videos Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <span className="w-1 h-8 bg-gradient-to-b from-red-500 to-pink-500 mr-4 rounded-full"></span>
                  📺 Video News
                </h2>
                <button className="text-red-600 hover:text-red-700 font-semibold">View All Videos →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoNews.slice(0, 3).map((video) => (
                  <div key={video._id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-3">
                      <img
                        src={video.videoThumbnail}
                        alt={language === 'hi' ? video.titleHi : video.titleEn}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                        {video.duration}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                      {language === 'hi' ? video.titleHi : video.titleEn}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{new Date(video.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Politics Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 mr-4 rounded-full"></span>
                🏛️ {t('politics')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getPoliticsNews().map((item, index) => (
                  <div key={item._id} className={index === 0 ? "md:col-span-2" : ""}>
                    <NewsCard
                      id={item._id}
                      titleEn={item.titleEn}
                      titleHi={item.titleHi}
                      descriptionEn={item.descriptionEn}
                      descriptionHi={item.descriptionHi}
                      image={item.image}
                      category={item.category}
                      date={item.date}
                      large={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sports Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-green-600 mr-4 rounded-full"></span>
                ⚽ {t('sports')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getSportsNews().map((item, index) => (
                  <div key={item._id} className={index === 0 ? "md:col-span-2" : ""}>
                    <NewsCard
                      id={item._id}
                      titleEn={item.titleEn}
                      titleHi={item.titleHi}
                      descriptionEn={item.descriptionEn}
                      descriptionHi={item.descriptionHi}
                      image={item.image}
                      category={item.category}
                      date={item.date}
                      large={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Latest News Grid */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 mr-4 rounded-full"></span>
                📰 Latest News
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentNews.slice(0, 9).map((item) => (
                  <NewsCard
                    key={item._id}
                    id={item._id}
                    titleEn={item.titleEn}
                    titleHi={item.titleHi}
                    image={item.image}
                    category={item.category}
                    date={item.date}
                  />
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6">
              <Newsletter />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Advertisement 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 p-4">
                <Advertisement
                  image="https://images.pexels.com/photos/5097305/pexels-photo-5097305.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
                  link="#"
                  size="square"
                />
              </div>
            </div>

            {/* International News */}
            <div className="bg-white rounded-xl shadow-lg p-5">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 mr-3 rounded-full"></span>
                🌍 {t('international')}
              </h2>
              <div className="space-y-4">
                {getInternationalNews().slice(0, 4).map((item) => (
                  <div key={item._id} className="group cursor-pointer">
                    <div className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <img
                        src={item.image}
                        alt={language === 'hi' ? item.titleHi : item.titleEn}
                        className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                          {language === 'hi' ? item.titleHi : item.titleEn}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {new Date(item.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health News */}
            <div className="bg-white rounded-xl shadow-lg p-5">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-teal-600 mr-3 rounded-full"></span>
                🏥 {t('health')}
              </h2>
              <div className="space-y-4">
                {getHealthNews().slice(0, 4).map((item) => (
                  <div key={item._id} className="group cursor-pointer">
                    <div className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <img
                        src={item.image}
                        alt={language === 'hi' ? item.titleHi : item.titleEn}
                        className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-green-600 transition-colors">
                          {language === 'hi' ? item.titleHi : item.titleEn}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {new Date(item.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology News */}
            <div className="bg-white rounded-xl shadow-lg p-5">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-600 mr-3 rounded-full"></span>
                💻 Technology
              </h2>
              <div className="space-y-4">
                {getTechnologyNews().map((item) => (
                  <div key={item._id} className="group cursor-pointer">
                    <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-purple-600 transition-colors">
                        {language === 'hi' ? item.titleHi : item.titleEn}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="capitalize bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business News */}
            <div className="bg-white rounded-xl shadow-lg p-5">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-600 mr-3 rounded-full"></span>
                💼 Business
              </h2>
              <div className="space-y-4">
                {getBusinessNews().map((item) => (
                  <div key={item._id} className="group cursor-pointer">
                    <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-yellow-600 transition-colors">
                        {language === 'hi' ? item.titleHi : item.titleEn}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="capitalize bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// jjjjjjjjjjjjjjjjj33333

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom'; // Add this import
// import { RootState } from '../redux/store';
// import { fetchNews, NewsItem } from '../redux/slices/newsSlice';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../utils/translations';
// import NewsCard from '../components/common/NewsCard';
// import Advertisement from '../components/common/Advertisement';
// import Newsletter from '../components/common/Newsletter';

// const HomePage: React.FC = () => {
//   const { language } = useLanguage();
//   const t = (key: string) => translations[language][key] || key;
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Add navigate hook
//   const { news, loading, error } = useSelector((state: RootState) => state.news);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     dispatch(fetchNews());
//   }, [dispatch]);

//   // Auto-slide carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % Math.min(featuredNews.length, 4));
//     }, 6000); // Increased interval for better UX
//     return () => clearInterval(interval);
//   }, [news]);

//   const featuredNews = news.filter((item: NewsItem) => item.featured || news.indexOf(item) < 4).slice(0, 4);
//   const recentNews = news.filter((item: NewsItem) => !item.featured).slice(0, 12);
//   const getPoliticsNews = () => news.filter((item: NewsItem) => item.category === 'politics').slice(0, 4);
//   const getSportsNews = () => news.filter((item: NewsItem) => item.category === 'sports').slice(0, 4);
//   const getHealthNews = () => news.filter((item: NewsItem) => item.category === 'health').slice(0, 4);
//   const getInternationalNews = () => news.filter((item: NewsItem) => item.category === 'international').slice(0, 4);
//   const getLatestNews = () => news.slice(0, 8);
//   const getTechnologyNews = () => news.filter((item: NewsItem) => item.category === 'technology').slice(0, 3);
//   const getBusinessNews = () => news.filter((item: NewsItem) => item.category === 'business').slice(0, 3);

//   // Mock video data - replace with your actual video data
//   const videoNews = news.slice(0, 6).map(item => ({
//     ...item,
//     videoThumbnail: item.image,
//     duration: '2:34' // Mock duration
//   }));

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
//   };

//   // Function to handle Read More click
//   const handleReadMore = (newsId: string) => {
//     navigate(`/article/${newsId}`); // Navigate to news detail page
//   };

//   // Function to handle category navigation
//   const handleCategoryClick = (category: string) => {
//     navigate(`/category/${category.toLowerCase()}`);
//   };

//   if (loading) return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-purple-50">
//       <div className="relative">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <div className="w-6 h-6 bg-red-600 rounded-full animate-pulse"></div>
//         </div>
//       </div>
//     </div>
//   );
  
//   if (error) return (
//     <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border border-red-100">
//         <div className="text-center">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('error')}</h3>
//           <p className="text-gray-600">{error}</p>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 min-h-screen">
//       {/* Animated Top Banner Advertisement */}
//       <div className="bg-white shadow-lg mb-6 overflow-hidden">
//         <div className="container mx-auto px-4 py-4">
//           <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
//             <Advertisement
//               image="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200&h=120&dpr=1"
//               link="#"
//               size="banner"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-6">
//         {/* Enhanced Breaking News Ticker */}
//         <div className="bg-gradient-to-r from-red-600 via-red-500 to-pink-600 text-white rounded-2xl mb-8 overflow-hidden shadow-xl">
//           <div className="flex items-center">
//             <div className="bg-gradient-to-r from-red-700 to-red-800 px-6 py-3 font-bold text-sm tracking-wider shadow-lg">
//               🚨 BREAKING
//             </div>
//             <div className="flex-1 py-3 px-6">
//               <div className="animate-pulse">
//                 <span className="text-sm font-medium">
//                   {getLatestNews()[0] && (language === 'hi' ? getLatestNews()[0].titleHi : getLatestNews()[0].titleEn)}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Main Hero Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
//           {/* Enhanced Hero Carousel */}
//           <div className="lg:col-span-3">
//             <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group">
//               {featuredNews.length > 0 && (
//                 <>
//                   <div className="relative h-96 lg:h-[520px] overflow-hidden">
//                     {featuredNews.map((item, index) => (
//                       <div
//                         key={item._id}
//                         className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//                           index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
//                         }`}
//                       >
//                         <img
//                           src={item.image}
//                           alt={language === 'hi' ? item.titleHi : item.titleEn}
//                           className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
//                         <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
//                           <div className="flex items-center mb-6">
//                             <span className="inline-block bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg transform hover:scale-105 transition-transform">
//                               {item.category}
//                             </span>
//                             <span className="ml-6 text-sm text-gray-300 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
//                               {new Date(item.date).toLocaleDateString()}
//                             </span>
//                           </div>
//                           <h1 className="text-3xl lg:text-5xl font-bold mb-6 line-clamp-2 leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text">
//                             {language === 'hi' ? item.titleHi : item.titleEn}
//                           </h1>
//                           <p className="text-gray-200 text-lg line-clamp-2 mb-6 max-w-4xl">
//                             {language === 'hi' ? item.descriptionHi : item.descriptionEn}
//                           </p>
//                           <button 
//                             onClick={() => handleReadMore(item._id)}
//                             className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
//                           >
//                             Read More →
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   {/* Enhanced Carousel Controls */}
//                   <button
//                     onClick={prevSlide}
//                     className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-md transition-all hover:scale-110 border border-white/30 shadow-lg"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={nextSlide}
//                     className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-md transition-all hover:scale-110 border border-white/30 shadow-lg"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
                  
//                   {/* Enhanced Indicators */}
//                   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
//                     {featuredNews.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setCurrentSlide(index)}
//                         className={`w-4 h-4 rounded-full transition-all duration-300 ${
//                           index === currentSlide 
//                             ? 'bg-white scale-125 shadow-lg' 
//                             : 'bg-white/50 hover:bg-white/70 hover:scale-110'
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Enhanced Right Sidebar */}
//           <div className="lg:col-span-1 space-y-8">
//             {/* Enhanced Trending News */}
//             <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-bold text-gray-900 flex items-center">
//                   <span className="w-2 h-8 bg-gradient-to-b from-red-500 to-pink-600 mr-4 rounded-full shadow-sm"></span>
//                   🔥 Trending
//                 </h2>
//                 <button className="text-red-600 text-sm hover:text-red-700 font-medium hover:underline transition-colors">
//                   View All
//                 </button>
//               </div>
//               <div className="space-y-5">
//                 {getLatestNews().slice(0, 4).map((item, index) => (
//                   <div key={item._id} className="group cursor-pointer">
//                     <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all transform hover:scale-[1.02]">
//                       <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
//                         {index + 1}
//                       </span>
//                       <div className="flex-1 min-w-0">
//                         <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-3 group-hover:text-red-600 transition-colors">
//                           {language === 'hi' ? item.titleHi : item.titleEn}
//                         </h3>
//                         <div className="flex items-center justify-between text-xs text-gray-500">
//                           <span className="capitalize bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 rounded-full font-medium">
//                             {item.category}
//                           </span>
//                           <span>{new Date(item.date).toLocaleDateString()}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Advertisement */}
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform">
//               <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 p-6">
//                 <Advertisement
//                   image="https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
//                   link="#"
//                   size="sidebar"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Quick Categories */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 border border-gray-100">
//           <div className="flex flex-wrap gap-6 justify-center">
//             {['Politics', 'Sports', 'Health', 'Technology', 'Business', 'International'].map((category) => (
//               <button
//                 key={category}
//                 onClick={() => handleCategoryClick(category)}
//                 className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-red-500 hover:to-pink-600 hover:text-white rounded-2xl font-semibold transition-all transform hover:scale-110 shadow-lg hover:shadow-xl border border-gray-200 hover:border-transparent"
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Enhanced Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
//           {/* Main Content Column */}
//           <div className="lg:col-span-3 space-y-12">
            
//             {/* Enhanced Videos Section */}
//             <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//               <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-3xl font-bold text-gray-900 flex items-center">
//                   <span className="w-2 h-10 bg-gradient-to-b from-red-500 to-pink-500 mr-6 rounded-full shadow-sm"></span>
//                   📺 Video News
//                 </h2>
//                 <button className="text-red-600 hover:text-red-700 font-semibold text-lg hover:underline transition-colors">
//                   View All Videos →
//                 </button>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {videoNews.slice(0, 3).map((video) => (
//                   <div key={video._id} className="group cursor-pointer">
//                     <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg">
//                       <img
//                         src={video.videoThumbnail}
//                         alt={language === 'hi' ? video.titleHi : video.titleEn}
//                         className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-colors"></div>
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-18 h-18 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform duration-300">
//                           <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M8 5v14l11-7z"/>
//                           </svg>
//                         </div>
//                       </div>
//                       <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
//                         {video.duration}
//                       </div>
//                     </div>
//                     <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors text-lg">
//                       {language === 'hi' ? video.titleHi : video.titleEn}
//                     </h3>
//                     <p className="text-sm text-gray-500 mt-2">{new Date(video.date).toLocaleDateString()}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Politics Section */}
//             <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//               <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
//                 <span className="w-2 h-10 bg-gradient-to-b from-blue-500 to-blue-600 mr-6 rounded-full shadow-sm"></span>
//                 🏛️ {t('politics')}
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {getPoliticsNews().map((item, index) => (
//                   <div key={item._id} className={index === 0 ? "md:col-span-2" : ""}>
//                     <NewsCard
//                       id={item._id}
//                       titleEn={item.titleEn}
//                       titleHi={item.titleHi}
//                       descriptionEn={item.descriptionEn}
//                       descriptionHi={item.descriptionHi}
//                       image={item.image}
//                       category={item.category}
//                       date={item.date}
//                       large={index === 0}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Sports Section */}
//             <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//               <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
//                 <span className="w-2 h-10 bg-gradient-to-b from-green-500 to-green-600 mr-6 rounded-full shadow-sm"></span>
//                 ⚽ {t('sports')}
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {getSportsNews().map((item, index) => (
//                   <div key={item._id} className={index === 0 ? "md:col-span-2" : ""}>
//                     <NewsCard
//                       id={item._id}
//                       titleEn={item.titleEn}
//                       titleHi={item.titleHi}
//                       descriptionEn={item.descriptionEn}
//                       descriptionHi={item.descriptionHi}
//                       image={item.image}
//                       category={item.category}
//                       date={item.date}
//                       large={index === 0}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Latest News Grid */}
//             <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//               <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
//                 <span className="w-2 h-10 bg-gradient-to-b from-purple-500 to-purple-600 mr-6 rounded-full shadow-sm"></span>
//                 📰 Latest News
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {recentNews.slice(0, 9).map((item) => (
//                   <NewsCard
//                     key={item._id}
//                     id={item._id}
//                     titleEn={item.titleEn}
//                     titleHi={item.titleHi}
//                     image={item.image}
//                     category={item.category}
//                     date={item.date}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Newsletter */}
//             <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8">
//               <Newsletter />
//             </div>
//           </div>

//           {/* Enhanced Right Sidebar */}
//           <div className="lg:col-span-1 space-y-8">
//             {/* Enhanced Advertisement 2 */}
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform">
//               <div className="bg-gradient-to-br from-green-500 to-blue-600 p-6">
//                 <Advertisement
//                   image="https://images.pexels.com/photos/5097305/pexels-photo-5097305.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
//                   link="#"
//                   size="square"
//                 />
//               </div>
//             </div>

//             {/* Enhanced International News */}
//             <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//               <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                 <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 mr-4 rounded-full shadow-sm"></span>
//                 🌍 {t('international')}
//               </h2>
//               <div className="space-y-5">
//                 {getInternationalNews().slice(0, 4).map((item) => (
//                   <div key={item._id} className="group cursor-pointer">
//                     <div className="flex space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all transform hover:scale-[1.02]">
//                       <img
//                         src={item.image}
//                         alt={language === 'hi' ? item.titleHi : item.titleEn}
//                         className="w-24 h-20 object-cover rounded-xl flex-shrink-0 shadow-md"
//                       />
//                       <div className="flex-1 min-w-0">
//                         <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-3 group-hover:text-blue-600 transition-colors">
//                           {language === 'hi' ? item.titleHi : item.titleEn}
//                         </h3>
//                         <p className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline-block">
//                           {new Date(item.date).toLocaleDateString()}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Health News */}
//             <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//               <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                 <span className="w-2 h-8 bg-gradient-to-b from-green-500 to-teal-600 mr-4 rounded-full shadow-sm"></span>
//                 🏥 {t('health')}
//               </h2>
//               <div className="space-y-5">
//                 {getHealthNews().slice(0, 4).map((item) => (
//                   <div key={item._id} className="group cursor-pointer">
//                     <div className="flex space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-green-50 transition-all transform hover:scale-[1.02]">
//                       <img
//                         src={item.image}
//                         alt={language === 'hi' ? item.titleHi : item.titleEn}
//                         className="w-24 h-20 object-cover rounded-xl flex-shrink-0 shadow-md"
//                       />
//                       <div className="flex-1 min-w-0">
//                         <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-3 group-hover:text-green-600 transition-colors">
//                           {language === 'hi' ? item.titleHi : item.titleEn}
//                         </h3>
//                         <p className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline-block">
//                           {new Date(item.date).toLocaleDateString()}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Technology News */}
//             <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//               <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                 <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 mr-4 rounded-full shadow-sm"></span>
//                 💻 Technology
//               </h2>
//               <div className="space-y-5">
//                 {getTechnologyNews().map((item) => (
//                   <div key={item._id} className="group cursor-pointer">
//                     <div className="p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-purple-50 transition-all transform hover:scale-[1.02]">
//                       <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-3 group-hover:text-purple-600 transition-colors">
//                         {language === 'hi' ? item.titleHi : item.titleEn}
//                       </h3>
//                       <div className="flex items-center justify-between text-xs text-gray-500">
//                         <span className="capitalize bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full font-medium">
//                           {item.category}
//                         </span>
//                         <span className="bg-gray-100 px-2 py-1 rounded-full">
//                           {new Date(item.date).toLocaleDateString()}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Business News */}
//             <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//               <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
//                 <span className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-orange-600 mr-4 rounded-full shadow-sm"></span>
//                 💼 Business
//               </h2>
//               <div className="space-y-5">
//                 {getBusinessNews().map((item) => (
//                   <div key={item._id} className="group cursor-pointer">
//                     <div className="p-4 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-yellow-50 transition-all transform hover:scale-[1.02]">
//                       <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-3 group-hover:text-yellow-600 transition-colors">
//                         {language === 'hi' ? item.titleHi : item.titleEn}
//                       </h3>
//                       <div className="flex items-center justify-between text-xs text-gray-500">
//                         <span className="capitalize bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 px-3 py-1 rounded-full font-medium">
//                           {item.category}
//                         </span>
//                         <span className="bg-gray-100 px-2 py-1 rounded-full">
//                           {new Date(item.date).toLocaleDateString()}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;