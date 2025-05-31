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

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../redux/store';
import { translations } from '../utils/translations';

interface NewsItem {
  _id: string;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
  image: string;
  category: string;
  featured: boolean;
  createdAt: string;
}

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { language } = useSelector((state: RootState) => state.language);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const t = translations[language];

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/news?category=${categoryId}`);
        setNews(response.data);
      } catch (err) {
        setError('Failed to load news');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [categoryId]);

  return (
    <div className="container mx-auto px-4 py-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 capitalize">{t[categoryId || ''] || categoryId}</h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={item.image}
                alt={language === 'en' ? item.titleEn : item.titleHi}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en' ? item.titleEn : item.titleHi}
              </h3>
              <p className="text-gray-600 mb-2">
                {language === 'en' ? item.contentEn.slice(0, 100) : item.contentHi.slice(0, 100)}...
              </p>
              <p className="text-sm text-gray-500">{new Date(item.createdAt).toLocaleDateString()}</p>
              {item.featured && (
                <span className="inline-block mt-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;