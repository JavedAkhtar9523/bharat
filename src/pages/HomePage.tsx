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

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const featuredNews = news.find((item: NewsItem) => item.featured);
  const recentNews = news.filter((item: NewsItem) => !item.featured).slice(0, 6);
  const getPoliticsNews = () => news.filter((item: NewsItem) => item.category === 'politics').slice(0, 3);
  const getSportsNews = () => news.filter((item: NewsItem) => item.category === 'sports').slice(0, 3);
  const getHealthNews = () => news.filter((item: NewsItem) => item.category === 'health').slice(0, 3);
  const getInternationalNews = () => news.filter((item: NewsItem) => item.category === 'international').slice(0, 3);

  if (loading) return <div>{t('loading')}</div>;
  if (error) return <div>{t('error')}: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {featuredNews && (
            <div className="mb-8">
              <NewsCard
                id={featuredNews._id}
                titleEn={featuredNews.titleEn}
                titleHi={featuredNews.titleHi}
                descriptionEn={featuredNews.descriptionEn}
                descriptionHi={featuredNews.descriptionHi}
                image={featuredNews.image}
                category={featuredNews.category}
                date={featuredNews.date}
                large={true}
              />
            </div>
          )}
          <div className="mb-8">
            <Advertisement
              image="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="#"
              size="banner"
            />
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
              {t('latest')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentNews.slice(0, 4).map((news: NewsItem) => (
                <NewsCard
                  key={news._id}
                  id={news._id}
                  titleEn={news.titleEn}
                  titleHi={news.titleHi}
                  image={news.image}
                  category={news.category}
                  date={news.date}
                />
              ))}
            </div>
          </div>
          <Newsletter />
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
              {t('politics')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {getPoliticsNews().map((news: NewsItem) => (
                <NewsCard
                  key={news._id}
                  id={news._id}
                  titleEn={news.titleEn}
                  titleHi={news.titleHi}
                  image={news.image}
                  category={news.category}
                  date={news.date}
                />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
              {t('sports')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {getSportsNews().map((news: NewsItem) => (
                <NewsCard
                  key={news._id}
                  id={news._id}
                  titleEn={news.titleEn}
                  titleHi={news.titleHi}
                  image={news.image}
                  category={news.category}
                  date={news.date}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="mb-6">
            <Advertisement
              image="https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="#"
              size="sidebar"
            />
          </div>
          <div className="mb-6 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
              {t('international')}
            </h2>
            <div className="space-y-4">
              {getInternationalNews().map((news: NewsItem) => (
                <NewsCard
                  key={news._id}
                  id={news._id}
                  titleEn={news.titleEn}
                  titleHi={news.titleHi}
                  image={news.image}
                  category={news.category}
                  date={news.date}
                />
              ))}
            </div>
          </div>
          <div className="mb-6 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
              {t('health')}
            </h2>
            <div className="space-y-4">
              {getHealthNews().map((news: NewsItem) => (
                <NewsCard
                  key={news._id}
                  id={news._id}
                  titleEn={news.titleEn}
                  titleHi={news.titleHi}
                  image={news.image}
                  category={news.category}
                  date={news.date}
                />
              ))}
            </div>
          </div>
          <div>
            <Advertisement
              image="https://images.pexels.com/photos/5097305/pexels-photo-5097305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="#"
              size="square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;