// import React, { useState, useEffect } from 'react';
// import { useLanguage } from '../context/LanguageContext';
// import { newsData } from '../data/newsData';

// const LiveTVPage = () => {
//   const { language, t } = useLanguage();
//   const [selectedChannel, setSelectedChannel] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(new Date());
  
//   // Update time every minute
//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 60000);
//     return () => clearInterval(timer);
//   }, []);
  
//   // Get trending news
//   const trendingNews = newsData.slice(0, 5).map((news, index) => ({
//     id: news.id,
//     title: language === 'en' ? news.titleEn : news.titleHi,
//     views: 125000 - (index * 15000),
//     image: news.image,
//     category: news.category
//   }));

//   // Mock channels data
//   const channels = [
//     { id: 1, name: language === 'en' ? 'News 24/7' : 'न्यूज़ 24/7', logo: '📰', color: 'bg-red-600' },
//     { id: 2, name: language === 'en' ? 'Sports Live' : 'स्पोर्ट्स लाइव', logo: '🏆', color: 'bg-blue-600' },
//     { id: 3, name: language === 'en' ? 'Business Hub' : 'बिज़नेस हब', logo: '📊', color: 'bg-green-600' },
//     { id: 4, name: language === 'en' ? 'Entertainment Plus' : 'एंटरटेनमेंट प्लस', logo: '🎭', color: 'bg-purple-600' },
//     { id: 5, name: language === 'en' ? 'World News' : 'वर्ल्ड न्यूज़', logo: '🌎', color: 'bg-yellow-600' },
//   ];

//   // Mock program schedule
//   const schedule = [
//     { time: '09:00', title: language === 'en' ? 'Morning Headlines' : 'सुबह की सुर्खियां', live: true },
//     { time: '10:30', title: language === 'en' ? 'Expert Analysis' : 'विशेषज्ञ विश्लेषण', live: true },
//     { time: '12:00', title: language === 'en' ? 'Afternoon Bulletin' : 'दोपहर बुलेटिन', live: false },
//     { time: '14:30', title: language === 'en' ? 'Special Report' : 'विशेष रिपोर्ट', live: false },
//     { time: '16:00', title: language === 'en' ? 'World News Roundup' : 'विश्व समाचार राउंडअप', live: false },
//   ];

//   // const formatViewCount = (count) => {
//   //   if (count >= 100000) {
//   //     return `${(count / 100000).toFixed(1)}${language === 'en' ? 'L' : 'लाख'}`;
//   //   } else if (count >= 1000) {
//   //     return `${(count / 1000).toFixed(1)}K`;
//   //   }
//   //   return count;
//   // };

//   const handlePlayClick = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="container mx-auto px-4 py-6 bg-gray-50">
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         {/* Left Sidebar - Channels */}
//         <div className="lg:col-span-1 order-2 lg:order-1">
//           <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//             <h2 className="text-lg font-bold mb-4 flex items-center">
//               <span className="text-xl mr-2">📺</span>
//               {language === 'en' ? 'Live Channels' : 'लाइव चैनल'}
//             </h2>
//             <div className="space-y-3">
//               {channels.map((channel, index) => (
//                 <div 
//                   key={channel.id}
//                   className={`p-3 rounded-lg cursor-pointer transition-all duration-200 flex items-center space-x-3 ${
//                     selectedChannel === index 
//                       ? `${channel.color} text-white shadow-md` 
//                       : 'bg-gray-100 hover:bg-gray-200'
//                   }`}
//                   onClick={() => setSelectedChannel(index)}
//                 >
//                   <span className="text-2xl">{channel.logo}</span>
//                   <span className="font-medium">{channel.name}</span>
//                   {index === 0 && (
//                     <span className="ml-auto flex items-center">
//                       <span className="relative flex h-2 w-2 mr-1">
//                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
//                         <span className={`relative inline-flex rounded-full h-2 w-2 ${selectedChannel === index ? 'bg-white' : 'bg-red-500'}`}></span>
//                       </span>
//                       <span className={`text-xs ${selectedChannel === index ? 'text-white' : 'text-red-500'} font-medium`}>LIVE</span>
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Today's Schedule */}
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-lg font-bold mb-4 flex items-center">
//               <span className="text-xl mr-2">📋</span>
//               {language === 'en' ? "Today's Schedule" : 'आज का शेड्यूल'}
//             </h2>
//             <div className="divide-y divide-gray-100">
//               {schedule.map((item, index) => (
//                 <div key={index} className="py-3 flex justify-between items-center">
//                   <div className="flex items-center">
//                     <span className="font-medium text-gray-800 w-14">{item.time}</span>
//                     <span className="text-gray-700">{item.title}</span>
//                   </div>
//                   {item.live && (
//                     <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
//                       {language === 'en' ? 'LIVE' : 'लाइव'}
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Live TV Player Section */}
//         <div className="lg:col-span-2 order-1 lg:order-2">
//           <div className="bg-gray-900 aspect-video relative rounded-lg overflow-hidden shadow-xl mb-4">
//             {isPlaying ? (
//               <div className="absolute inset-0 bg-black flex items-center justify-center">
//                 <div className="text-center text-white">
//                   <div className={`text-xl font-bold ${channels[selectedChannel].color} px-4 py-2 rounded-lg mb-2`}>
//                     {channels[selectedChannel].logo} {channels[selectedChannel].name}
//                   </div>
//                   <div className="mt-4 animate-pulse">{language === 'en' ? 'Live Stream Playing...' : 'लाइव स्ट्रीम चल रहा है...'}</div>
//                   <button 
//                     onClick={handlePlayClick}
//                     className="mt-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
//                   >
//                     {language === 'en' ? 'Stop' : 'रोकें'}
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-white text-xl mb-4 font-bold">
//                     {channels[selectedChannel].name}
//                   </div>
//                   <button 
//                     onClick={handlePlayClick}
//                     className={`${channels[selectedChannel].color} text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:opacity-90 transition-colors duration-200 shadow-lg mx-auto`}
//                   >
//                     <span className="relative flex h-3 w-3 mr-2">
//                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
//                       <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
//                     </span>
//                     {language === 'en' ? 'Watch Live' : 'लाइव देखें'}
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
          
//           {/* Live TV Info and Stats */}
//           <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//             <div className="flex items-center justify-between mb-3">
//               <div className="flex items-center space-x-2">
//                 <span className={`${channels[selectedChannel].color} text-white px-2 py-1 text-sm rounded-full flex items-center`}>
//                   <span className="relative flex h-2 w-2 mr-1">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
//                   </span>
//                   {t('liveTV')}
//                 </span>
//                 <span className="text-gray-600">
//                   {language === 'en' ? 'Streaming 24x7' : '24x7 प्रसारण'}
//                 </span>
//               </div>
//               <div className="text-sm text-gray-500">
//                 {currentTime.toLocaleTimeString(language === 'en' ? 'en-US' : 'hi-IN', { 
//                   hour: '2-digit', 
//                   minute: '2-digit',
//                   hour12: language === 'en'
//                 })}
//               </div>
//             </div>
            
//             <h2 className="text-xl font-bold mb-2">
//               {language === 'en' ? 'Now Showing: Morning Headlines' : 'अभी दिखा रहा है: सुबह की सुर्खियां'}
//             </h2>
            
//             <div className="flex justify-between text-sm text-gray-600 mt-3">
//               <div className="flex items-center space-x-1">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//                 {/* <span>{formatViewCount(285750)} {language === 'en' ? 'watching' : 'देख रहे हैं'}</span> */}
//               </div>
              
//               <div className="flex space-x-3">
//                 <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//                   </svg>
//                   <span>{language === 'en' ? 'Share' : 'शेयर'}</span>
//                 </button>
//                 <button className="flex items-center space-x-1 hover:text-red-600 transition-colors">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                   </svg>
//                   <span>{language === 'en' ? 'Favorite' : 'पसंदीदा'}</span>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {/* Breaking News Ticker */}
//           <div className="bg-red-600 text-white p-2 rounded-lg shadow-md overflow-hidden mb-6">
//             <div className="flex items-center">
//               <span className="font-bold px-2 whitespace-nowrap">
//                 {t('breakingNews')}
//               </span>
//               <div className="overflow-hidden relative flex-grow">
//                 <div className="animate-marquee whitespace-nowrap">
//                   {trendingNews.map((news, idx) => (
//                     <span key={idx} className="mx-4">• {news.title}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar - Trending News */}
//         <div className="lg:col-span-1 order-3">
//           <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//             <div className="flex items-center space-x-2 mb-4">
//               <svg
//                 className="w-5 h-5 text-red-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//                 />
//               </svg>
//               <h2 className="text-lg font-bold">
//                 {t('trending')}
//               </h2>
//             </div>

//             <div className="space-y-4">
//               {trendingNews.map((news, index) => (
//                 <div key={news.id} className="flex items-start space-x-3 group cursor-pointer">
//                   <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                     <span className="text-gray-600 font-semibold">{index + 1}</span>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-gray-900 font-medium line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
//                       {news.title}
//                     </h3>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <span className="capitalize mr-2">
//                         {language === 'en' ? news.category : 
//                           news.category === 'politics' ? 'राजनीति' :
//                           news.category === 'sports' ? 'खेल' :
//                           news.category === 'international' ? 'अंतरराष्ट्रीय' :
//                           news.category === 'national' ? 'राष्ट्रीय' :
//                           news.category === 'health' ? 'स्वास्थ्य' : news.category
//                         }
//                       </span>
//                       <span>•</span>
//                       {/* <span className="ml-2">{formatViewCount(news.views)} {language === 'en' ? 'views' : 'व्यूज'}</span> */}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <button className="w-full mt-4 text-center py-2 text-blue-600 hover:text-blue-800 font-medium">
//               {language === 'en' ? 'View All Trending News' : 'सभी ट्रेंडिंग समाचार देखें'}
//             </button>
//           </div>
          
//           {/* Subscribe Box */}
//           <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-md p-4 text-white">
//             <h3 className="font-bold text-lg mb-2">
//               {language === 'en' ? 'Never Miss Updates' : 'अपडेट्स न चूकें'}
//             </h3>
//             <p className="text-sm mb-3 text-white/90">
//               {language === 'en' 
//                 ? 'Subscribe to our notifications for breaking news alerts and important updates.' 
//                 : 'ब्रेकिंग न्यूज़ अलर्ट और महत्वपूर्ण अपडेट के लिए हमारे नोटिफिकेशन सब्सक्राइब करें।'
//               }
//             </p>
//             <button className="bg-white text-red-600 hover:bg-gray-100 transition-colors w-full py-2 rounded-lg font-medium">
//               {language === 'en' ? 'Subscribe Now' : 'अभी सब्सक्राइब करें'}
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Add proper marquee styling */}
//       <style >{`
//         @keyframes marquee {
//           0% { transform: translateX(100%); }
//           100% { transform: translateX(-100%); }
//         }
//         .animate-marquee {
//           display: inline-block;
//           animation: marquee 30s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LiveTVPage;


// jjjjjjjjjjjjjjjj

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { fetchChannels, Channel } from '../redux/slices/channelsSlice';
// import { useLanguage } from '../context/LanguageContext';
// // import { useSelector } from 'react-redux';
// // import { RootState } from '../redux/store';
// import { NewsItem, fetchNews } from '../redux/slices/newsSlice';

// const LiveTVPage: React.FC = () => {
//   const { language, t } = useLanguage();
//   const dispatch = useDispatch();
//   const { channels, loading, error } = useSelector((state: RootState) => state.channels);
//   const { news } = useSelector((state: RootState) => state.news);
//   const [selectedChannel, setSelectedChannel] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     dispatch(fetchChannels());
//     dispatch(fetchNews());
//     const timer = setInterval(() => setCurrentTime(new Date()), 60000);
//     return () => clearInterval(timer);
//   }, [dispatch]);

//   const trendingNews = news.slice(0, 5).map((news: NewsItem, index: number) => ({
//     id: news._id,
//     title: language === 'en' ? news.titleEn : news.titleHi,
//     views: 125000 - index * 15000,
//     image: news.image,
//     category: news.category,
//   }));

//   const handlePlayClick = () => {
//     setIsPlaying(!isPlaying);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-6 bg-gray-50">
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         <div className="lg:col-span-1 order-2 lg:order-1">
//           <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//             <h2 className="text-lg font-bold mb-4 flex items-center">
//               <span className="text-xl mr-2">📺</span>
//               {t('liveTV')}
//             </h2>
//             <div className="space-y-3">
//               {channels.map((channel: Channel, index: number) => (
//                 <div
//                   key={channel._id}
//                   className={`p-3 rounded-lg cursor-pointer transition-all duration-200 flex items-center space-x-3 ${
//                     selectedChannel === index ? `${channel.color} text-white shadow-md` : 'bg-gray-100 hover:bg-gray-200'
//                   }`}
//                   onClick={() => setSelectedChannel(index)}
//                 >
//                   <span className="text-2xl">{channel.logo}</span>
//                   <span className="font-medium">{language === 'en' ? channel.nameEn : channel.nameHi}</span>
//                   {index === 0 && (
//                     <span className="ml-auto flex items-center">
//                       <span className="relative flex h-2 w-2 mr-1">
//                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
//                         <span className={`relative inline-flex rounded-full h-2 w-2 ${selectedChannel === index ? 'bg-white' : 'bg-red-500'}`}></span>
//                       </span>
//                       <span className={`text-xs ${selectedChannel === index ? 'text-white' : 'text-red-500'} font-medium`}>LIVE</span>
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-lg font-bold mb-4 flex items-center">
//               <span className="text-xl mr-2">📋</span>
//               {language === 'en' ? "Today's Schedule" : 'आज का शेड्यूल'}
//             </h2>
//             <div className="divide-y divide-gray-100">
//               {channels[selectedChannel]?.schedule.map((item, index) => (
//                 <div key={index} className="py-3 flex justify-between items-center">
//                   <div className="flex items-center">
//                     <span className="font-medium text-gray-800 w-14">{item.time}</span>
//                     <span className="text-gray-700">{language === 'en' ? item.titleEn : item.titleHi}</span>
//                   </div>
//                   {item.live && (
//                     <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
//                       {t('live')}
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="lg:col-span-2 order-1 lg:order-2">
//           <div className="bg-gray-900 aspect-video relative rounded-lg overflow-hidden shadow-xl mb-4">
//             {isPlaying ? (
//               <div className="absolute inset-0 bg-black flex items-center justify-center">
//                 <div className="text-center text-white">
//                   <div className={`text-xl font-bold ${channels[selectedChannel]?.color} px-4 py-2 rounded-lg mb-2`}>
//                     {channels[selectedChannel]?.logo} {language === 'en' ? channels[selectedChannel]?.nameEn : channels[selectedChannel]?.nameHi}
//                   </div>
//                   <div className="mt-4 animate-pulse">{language === 'en' ? 'Live Stream Playing...' : 'लाइव स्ट्रीम चल रहा है...'}</div>
//                   <button
//                     onClick={handlePlayClick}
//                     className="mt-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
//                   >
//                     {language === 'en' ? 'Stop' : 'रोकें'}
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-white text-xl mb-4 font-bold">
//                     {language === 'en' ? channels[selectedChannel]?.nameEn : channels[selectedChannel]?.nameHi}
//                   </div>
//                   <button
//                     onClick={handlePlayClick}
//                     className={`${channels[selectedChannel]?.color} text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:opacity-90 transition-colors duration-200 shadow-lg mx-auto`}
//                   >
//                     <span className="relative flex h-3 w-3 mr-2">
//                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
//                       <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
//                     </span>
//                     {language === 'en' ? 'Watch Live' : 'लाइव देखें'}
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//             <div className="flex items-center justify-between mb-3">
//               <div className="flex items-center space-x-2">
//                 <span className={`${channels[selectedChannel]?.color} text-white px-2 py-1 text-sm rounded-full flex items-center`}>
//                   <span className="relative flex h-2 w-2 mr-1">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
//                   </span>
//                   {t('liveTV')}
//                 </span>
//                 <span className="text-gray-600">
//                   {language === 'en' ? 'Streaming 24x7' : '24x7 प्रसारण'}
//                 </span>
//               </div>
//               <div className="text-sm text-gray-500">
//                 {currentTime.toLocaleTimeString(language === 'en' ? 'en-US' : 'hi-IN', {
//                   hour: '2-digit',
//                   minute: '2-digit',
//                   hour12: language === 'en',
//                 })}
//               </div>
//             </div>
//             <h2 className="text-xl font-bold mb-2">
//               {language === 'en' ? 'Now Showing: Morning Headlines' : 'अभी दिखा रहा है: सुबह की सुर्खियां'}
//             </h2>
//             <div className="flex justify-between text-sm text-gray-600 mt-3">
//               <div className="flex items-center space-x-1">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//               </div>
//               <div className="flex space-x-3">
//                 <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//                   </svg>
//                   <span>{language === 'en' ? 'Share' : 'शेयर'}</span>
//                 </button>
//                 <button className="flex items-center space-x-1 hover:text-red-600 transition-colors">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                   </svg>
//                   <span>{language === 'en' ? 'Favorite' : 'पसंदीदा'}</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="bg-red-600 text-white p-2 rounded-lg shadow-md overflow-hidden mb-6">
//             <div className="flex items-center">
//               <span className="font-bold px-2 whitespace-nowrap">
//                 {t('breakingNews')}
//               </span>
//               <div className="overflow-hidden relative flex-grow">
//                 <div className="animate-marquee whitespace-nowrap">
//                   {trendingNews.map((news, idx) => (
//                     <span key={idx} className="mx-4">• {news.title}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="lg:col-span-1 order-3">
//           <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//             <div className="flex items-center space-x-2 mb-4">
//               <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//               </svg>
//               <h2 className="text-lg font-bold">{t('trending')}</h2>
//             </div>
//             <div className="space-y-4">
//               {trendingNews.map((news, index) => (
//                 <div key={news.id} className="flex items-start space-x-3 group cursor-pointer">
//                   <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                     <span className="text-gray-600 font-semibold">{index + 1}</span>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-gray-900 font-medium line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
//                       {news.title}
//                     </h3>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <span className="capitalize mr-2">
//                         {language === 'en'
//                           ? news.category
//                           : news.category === 'politics'
//                           ? 'राजनीति'
//                           : news.category === 'sports'
//                           ? 'खेल'
//                           : news.category === 'international'
//                           ? 'अंतरराष्ट्रीय'
//                           : news.category === 'national'
//                           ? 'राष्ट्रीय'
//                           : news.category === 'health'
//                           ? 'स्वास्थ्य'
//                           : news.category}
//                       </span>
//                       <span>•</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button className="w-full mt-4 text-center py-2 text-blue-600 hover:text-blue-800 font-medium">
//               {language === 'en' ? 'View All Trending News' : 'सभी ट्रेंडिंग समाचार देखें'}
//             </button>
//           </div>
//           <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-md p-4 text-white">
//             <h3 className="font-bold text-lg mb-2">{language === 'en' ? 'Never Miss Updates' : 'अपडेट्स न चूकें'}</h3>
//             <p className="text-sm mb-3 text-white/90">
//               {language === 'en'
//                 ? 'Subscribe to our notifications for breaking news alerts and important updates.'
//                 : 'ब्रेकिंग न्यूज़ अलर्ट और महत्वपूर्ण अपडेट के लिए हमारे नोटिफिकेशन सब्सक्राइब करें।'}
//             </p>
//             <button className="bg-white text-red-600 hover:bg-gray-100 transition-colors w-full py-2 rounded-lg font-medium">
//               {language === 'en' ? 'Subscribe Now' : 'अभी सब्सक्राइब करें'}
//             </button>
//           </div>
//         </div>
//       </div>
//       <style>{`
//         @keyframes marquee {
//           0% { transform: translateX(100%); }
//           100% { transform: translateX(-100%); }
//         }
//         .animate-marquee {
//           display: inline-block;
//           animation: marquee 30s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LiveTVPage;


// -------------------------------

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchChannels, Channel } from '../redux/slices/channelsSlice';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { NewsItem, fetchNews } from '../redux/slices/newsSlice';

const LiveTVPage: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: string) => translations[language][key] || key;
  const dispatch = useDispatch();
  const { channels, loading, error } = useSelector((state: RootState) => state.channels);
  const { news } = useSelector((state: RootState) => state.news);
  const [selectedChannel, setSelectedChannel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    dispatch(fetchChannels());
    dispatch(fetchNews());
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, [dispatch]);

  const trendingNews = news.slice(0, 5).map((news: NewsItem, index: number) => ({
    id: news._id,
    title: language === 'en' ? news.titleEn : news.titleHi,
    views: 125000 - index * 15000,
    image: news.image,
    category: news.category,
  }));

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  if (loading) return <div>{t('loading')}</div>;
  if (error) return <div>{t('error')}: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-6 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <span className="text-xl mr-2">📺</span>
              {t('liveTV')}
            </h2>
            <div className="space-y-3">
              {channels.map((channel: Channel, index: number) => (
                <div
                  key={channel._id}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 flex items-center space-x-3 ${
                    selectedChannel === index ? `${channel.color} text-white shadow-md` : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedChannel(index)}
                >
                  <span className="text-2xl">{channel.logo}</span>
                  <span className="font-medium">{language === 'en' ? channel.nameEn : channel.nameHi}</span>
                  {index === 0 && (
                    <span className="ml-auto flex items-center">
                      <span className="relative flex h-2 w-2 mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${selectedChannel === index ? 'bg-white' : 'bg-red-500'}`}></span>
                      </span>
                      <span className={`text-xs ${selectedChannel === index ? 'text-white' : 'text-red-500'} font-medium`}>{t('live')}</span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <span className="text-xl mr-2">📋</span>
              {t('todaysSchedule')}
            </h2>
            <div className="divide-y divide-gray-100">
              {channels[selectedChannel]?.schedule.map((item, index) => (
                <div key={index} className="py-3 flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-800 w-14">{item.time}</span>
                    <span className="text-gray-700">{language === 'en' ? item.titleEn : item.titleHi}</span>
                  </div>
                  {item.live && (
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                      {t('live')}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="bg-gray-900 aspect-video relative rounded-lg overflow-hidden shadow-xl mb-4">
            {isPlaying ? (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <div className="text-center text-white">
                  <div className={`text-xl font-bold ${channels[selectedChannel]?.color} px-4 py-2 rounded-lg mb-2`}>
                    {channels[selectedChannel]?.logo} {language === 'en' ? channels[selectedChannel]?.nameEn : channels[selectedChannel]?.nameHi}
                  </div>
                  <div className="mt-4 animate-pulse">{t('liveStreamPlaying')}</div>
                  <button
                    onClick={handlePlayClick}
                    className="mt-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
                  >
                    {t('stop')}
                  </button>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-xl mb-4 font-bold">
                    {language === 'en' ? channels[selectedChannel]?.nameEn : channels[selectedChannel]?.nameHi}
                  </div>
                  <button
                    onClick={handlePlayClick}
                    className={`${channels[selectedChannel]?.color} text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:opacity-90 transition-colors duration-200 shadow-lg mx-auto`}
                  >
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    {t('watchLive')}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className={`${channels[selectedChannel]?.color} text-white px-2 py-1 text-sm rounded-full flex items-center`}>
                  <span className="relative flex h-2 w-2 mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  {t('liveTV')}
                </span>
                <span className="text-gray-600">{t('streaming24x7')}</span>
              </div>
              <div className="text-sm text-gray-500">
                {currentTime.toLocaleTimeString(language === 'en' ? 'en-US' : 'hi-IN', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: language === 'en',
                })}
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2">{t('nowShowing')}</h2>
            <div className="flex justify-between text-sm text-gray-600 mt-3">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>{t('share')}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-red-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{t('favorite')}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-red-600 text-white p-2 rounded-lg shadow-md overflow-hidden mb-6">
            <div className="flex items-center">
              <span className="font-bold px-2 whitespace-nowrap">
                {t('breakingNews')}
              </span>
              <div className="overflow-hidden relative flex-grow">
                <div className="animate-marquee whitespace-nowrap">
                  {trendingNews.map((news, idx) => (
                    <span key={idx} className="mx-4">• {news.title}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 order-3">
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h2 className="text-lg font-bold">{t('trending')}</h2>
            </div>
            <div className="space-y-4">
              {trendingNews.map((news, index) => (
                <div key={news.id} className="flex items-start space-x-3 group cursor-pointer">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-medium line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
                      {news.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="capitalize mr-2">{t(news.category)}</span>
                      <span>•</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-center py-2 text-blue-600 hover:text-blue-800 font-medium">
              {t('viewAllTrending')}
            </button>
          </div>
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-md p-4 text-white">
            <h3 className="font-bold text-lg mb-2">{t('neverMissUpdates')}</h3>
            <p className="text-sm mb-3 text-white/90">
              {t('subscribeToNotifications')}
            </p>
            <button className="bg-white text-red-600 hover:bg-gray-100 transition-colors w-full py-2 rounded-lg font-medium">
              {t('subscribeNow')}
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LiveTVPage;