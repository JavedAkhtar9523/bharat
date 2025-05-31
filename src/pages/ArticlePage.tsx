// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useLanguage } from '../context/LanguageContext';
// import NewsCard from '../components/common/NewsCard';
// import Advertisement from '../components/common/Advertisement';
// import { newsData } from '../data/newsData';

// const ArticlePage: React.FC = () => {
//   const { articleId } = useParams<{ articleId: string }>();
//   const { language, t } = useLanguage();
  
//   // Find the article
//   const article = newsData.find(news => news.id === articleId);
  
//   // Get related articles (same category)
//   const relatedArticles = article 
//     ? newsData
//         .filter(news => news.category === article.category && news.id !== article.id)
//         .slice(0, 3)
//     : [];
  
//   if (!article) {
//     return (
//       <div className="container mx-auto px-4 py-12 text-center">
//         <h1 className="text-3xl font-bold mb-4">
//           {language === 'en' ? 'Article not found' : 'लेख नहीं मिला'}
//         </h1>
//         <p className="mb-6">
//           {language === 'en' 
//             ? 'The article you are looking for does not exist or has been removed.' 
//             : 'आप जिस लेख की तलाश कर रहे हैं वह मौजूद नहीं है या हटा दिया गया है।'
//           }
//         </p>
//         <Link 
//           to="/"
//           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
//         >
//           {language === 'en' ? 'Return to Homepage' : 'होमपेज पर वापस जाएं'}
//         </Link>
//       </div>
//     );
//   }
  
//   const title = language === 'en' ? article.titleEn : article.titleHi;
//   const content = language === 'en' ? article.contentEn : article.contentHi;
  
//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Main content */}
//         <div className="md:col-span-2">
//           <h1 className="text-3xl font-bold mb-4 text-gray-900">{title}</h1>
          
//           <div className="flex items-center text-sm text-gray-500 mb-6">
//             <span className="mr-4">{article.date}</span>
//             <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">
//               {t(article.category)}
//             </span>
//           </div>
          
//           <div className="mb-6">
//             <img 
//               src={article.image} 
//               alt={title}
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
          
//           <div className="prose max-w-none mb-8">
//             {content.split('\n\n').map((paragraph, index) => (
//               <p key={index} className="mb-4 text-lg leading-relaxed text-gray-800">
//                 {paragraph}
//               </p>
//             ))}
//           </div>
          
//           {/* Mid-article Advertisement */}
//           <div className="mb-8">
//             <Advertisement 
//               image="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               link="#"
//               size="banner"
//             />
//           </div>
          
//           {/* Related Articles */}
//           <div>
//             <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {language === 'en' ? 'Related Articles' : 'संबंधित लेख'}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {relatedArticles.map((news) => (
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
          
//           {/* Latest News */}
//           <div className="mb-6 bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {t('latest')}
//             </h2>
//             <div className="space-y-4">
//               {newsData.slice(0, 4).map((news) => (
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

// export default ArticlePage;


// jjjjjjjjjjjjjjj

// import React, { useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchNews, NewsItem } from '../redux/slices/newsSlice';
// import { useLanguage } from '../context/LanguageContext';
// import NewsCard from '../components/common/NewsCard';
// import Advertisement from '../components/common/Advertisement';

// const ArticlePage: React.FC = () => {
//   const { articleId } = useParams<{ articleId: string }>();
//   const { language, t } = useLanguage();
//   const dispatch = useDispatch();
//   const { news, loading, error } = useSelector((state: RootState) => state.news);

//   useEffect(() => {
//     dispatch(fetchNews());
//   }, [dispatch]);

//   const article = news.find((item: NewsItem) => item._id === articleId);
//   const relatedArticles = article
//     ? news.filter((item: NewsItem) => item.category === article.category && item._id !== article._id).slice(0, 3)
//     : [];

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   if (!article) {
//     return (
//       <div className="container mx-auto px-4 py-12 text-center">
//         <h1 className="text-3xl font-bold mb-4">
//           {language === 'en' ? 'Article not found' : 'लेख नहीं मिला'}
//         </h1>
//         <p className="mb-6">
//           {language === 'en'
//             ? 'The article you are looking for does not exist or has been removed.'
//             : 'आप जिस लेख की तलाश कर रहे हैं वह मौजूद नहीं है या हटा दिया गया है।'}
//         </p>
//         <Link
//           to="/"
//           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
//         >
//           {language === 'en' ? 'Return to Homepage' : 'होमपेज पर वापस जाएं'}
//         </Link>
//       </div>
//     );
//   }

//   const title = language === 'en' ? article.titleEn : article.titleHi;
//   const content = language === 'en' ? article.contentEn : article.contentHi;

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="md:col-span-2">
//           <h1 className="text-3xl font-bold mb-4 text-gray-900">{title}</h1>
//           <div className="flex items-center text-sm text-gray-500 mb-6">
//             <span className="mr-4">{article.date}</span>
//             <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">
//               {t(article.category)}
//             </span>
//           </div>
//           <div className="mb-6">
//             <img src={article.image} alt={title} className="w-full h-auto rounded-lg" />
//           </div>
//           <div className="prose max-w-none mb-8">
//             {content.split('\n\n').map((paragraph, index) => (
//               <p key={index} className="mb-4 text-lg leading-relaxed text-gray-800">
//                 {paragraph}
//               </p>
//             ))}
//           </div>
//           <div className="mb-8">
//             <Advertisement
//               image="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               link="#"
//               size="banner"
//             />
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
//               {language === 'en' ? 'Related Articles' : 'संबंधित लेख'}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {relatedArticles.map((news: NewsItem) => (
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
//               {t('latest')}
//             </h2>
//             <div className="space-y-4">
//               {news.slice(0, 4).map((news: NewsItem) => (
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

// export default ArticlePage;

// ----------------------------------

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchNews, NewsItem } from '../redux/slices/newsSlice';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import NewsCard from '../components/common/NewsCard';
import Advertisement from '../components/common/Advertisement';

const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { language } = useLanguage();
  const t = (key: string) => translations[language][key] || key;
  const dispatch = useDispatch();
  const { news, loading, error } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const article = news.find((item: NewsItem) => item._id === articleId);
  const relatedArticles = article
    ? news.filter((item: NewsItem) => item.category === article.category && item._id !== article._id).slice(0, 3)
    : [];

  if (loading) return <div>{t('loading')}</div>;
  if (error) return <div>{t('error')}: {error}</div>;

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">{t('articleNotFound')}</h1>
        <p className="mb-6">{t('articleNotFoundMessage')}</p>
        <Link
          to="/"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
        >
          {t('returnToHomepage')}
        </Link>
      </div>
    );
  }

  const title = language === 'en' ? article.titleEn : article.titleHi;
  const content = language === 'en' ? article.contentEn : article.contentHi;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{title}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span className="mr-4">{article.date}</span>
            <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">
              {t(article.category)}
            </span>
          </div>
          <div className="mb-6">
            <img src={article.image} alt={title} className="w-full h-auto rounded-lg" />
          </div>
          <div className="prose max-w-none mb-8">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-lg leading-relaxed text-gray-800">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mb-8">
            <Advertisement
              image="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              link="#"
              size="banner"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b border-gray-200 pb-2">
              {t('relatedArticles')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedArticles.map((news: NewsItem) => (
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
              {t('latest')}
            </h2>
            <div className="space-y-4">
              {news.slice(0, 4).map((news: NewsItem) => (
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

export default ArticlePage;