// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../context/LanguageContext';
// import { 
//   FaFacebookF, 
//   FaTwitter, 
//   FaInstagram, 
//   FaYoutube, 
//   FaLinkedinIn,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaArrowRight,
//   FaRss
// } from 'react-icons/fa';
// import NewsBharatLogo from '../common/NewsBharatLogo';


// const footerTranslations = {
//   en: {
//     categories: 'Categories',
//     moreCategories: 'More Categories',
//     connectWithUs: 'Connect With Us',
//     quickLinks: 'Quick Links',
//     contactUs: 'Contact Us',
//     newsletterTitle: 'Subscribe to Newsletter',
//     newsletterSubtitle: 'Get the latest updates first',
//     emailPlaceholder: 'Enter your email',
//     subscribeButton: 'Subscribe',
//     companyDescription: 'Your trusted source for the latest news and updates from India and around the world.',
//     allRightsReserved: 'All Rights Reserved.',
//     termsOfService: 'Terms of Service',
//     privacyPolicy: 'Privacy Policy',
//     aboutUs: 'About Us',
//     careers: 'Careers',
//     advertise: 'Advertise',
//     contact: 'Contact',
//     phone: '+91-11-2345-6789',
//     email: 'info@newsbharat.com',
//     address: 'New Delhi, India'
//   },
//   hi: {
//     categories: 'श्रेणियाँ',
//     moreCategories: 'अधिक श्रेणियाँ',
//     connectWithUs: 'हमसे जुड़ें',
//     quickLinks: 'त्वरित लिंक',
//     contactUs: 'संपर्क करें',
//     newsletterTitle: 'न्यूज़लेटर सब्सक्राइब करें',
//     newsletterSubtitle: 'सबसे पहले अपडेट प्राप्त करें',
//     emailPlaceholder: 'अपना ईमेल दर्ज करें',
//     subscribeButton: 'सब्सक्राइब',
//     companyDescription: 'भारत और दुनिया भर से नवीनतम समाचार और अपडेट के लिए आपका विश्वसनीय स्रोत।',
//     allRightsReserved: 'सर्वाधिकार सुरक्षित।',
//     termsOfService: 'सेवा की शर्तें',
//     privacyPolicy: 'गोपनीयता नीति',
//     aboutUs: 'हमारे बारे में',
//     careers: 'करियर',
//     advertise: 'विज्ञापन दें',
//     contact: 'संपर्क',
//     phone: '+91-11-2345-6789',
//     email: 'info@newsbharat.com',
//     address: 'नई दिल्ली, भारत'
//   }
// };

// const Footer = () => {
//   const { language, t } = useLanguage();
//   const [email, setEmail] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);
  
//   // Footer specific translation function
//   const ft = (key: string): string => {
//     return footerTranslations[language][key as keyof typeof footerTranslations.en] || t(key) || key;
//   };
  
//   const categories = [
//     { id: 'politics', label: 'politics' },
//     { id: 'national', label: 'national' },
//     { id: 'international', label: 'international' },
//     { id: 'business', label: 'business' },
//     { id: 'sports', label: 'sports' },
//     { id: 'entertainment', label: 'entertainment' },
//     { id: 'technology', label: 'technology' },
//     { id: 'lifestyle', label: 'lifestyle' },
//   ];

//   const quickLinks = [
//     { label: 'aboutUs', href: '/about' },
//     { label: 'careers', href: '/careers' },
//     { label: 'advertise', href: '/advertise' },
//     { label: 'contact', href: '/contact' },
//   ];

//   const socialLinks = [
//     { icon: FaFacebookF, href: '#', color: 'hover:text-blue-500', name: 'Facebook' },
//     { icon: FaTwitter, href: '#', color: 'hover:text-blue-400', name: 'Twitter' },
//     { icon: FaInstagram, href: '#', color: 'hover:text-pink-500', name: 'Instagram' },
//     { icon: FaYoutube, href: '#', color: 'hover:text-red-500', name: 'YouTube' },
//     { icon: FaLinkedinIn, href: '#', color: 'hover:text-blue-600', name: 'LinkedIn' },
//     { icon: FaRss, href: '#', color: 'hover:text-orange-500', name: 'RSS' },
//   ];

//   const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (email) {
//       setIsSubscribed(true);
//       setEmail('');
//       setTimeout(() => setIsSubscribed(false), 3000);
//     }
//   };

//   return (
//     <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10" />
//         <div className="absolute top-0 left-0 w-full h-full">
//           <div className="w-4 h-4 bg-white/10 rounded-full absolute top-8 left-12"></div>
//           <div className="w-2 h-2 bg-white/10 rounded-full absolute top-24 left-6"></div>
//           <div className="w-3 h-3 bg-white/10 rounded-full absolute top-40 right-20"></div>
//           <div className="w-2 h-2 bg-white/10 rounded-full absolute bottom-32 left-32"></div>
//           <div className="w-4 h-4 bg-white/10 rounded-full absolute bottom-16 right-12"></div>
//         </div>
//       </div>

//       <div className="relative z-10 container mx-auto px-4 pt-12 pb-8">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
//           {/* Company Info */}
//           <div className="lg:col-span-1">
//             <NewsBharatLogo/>
//             <p className="mt-6 text-gray-400 text-sm leading-relaxed">
//               {ft('companyDescription')}
//             </p>
            
//             {/* Contact Info */}
//             <div className="mt-6 space-y-3">
//               <div className="flex items-center space-x-3 text-sm">
//                 <FaPhone className="text-red-500" />
//                 <span className="text-gray-400">{ft('phone')}</span>
//               </div>
//               <div className="flex items-center space-x-3 text-sm">
//                 <FaEnvelope className="text-red-500" />
//                 <span className="text-gray-400">{ft('email')}</span>
//               </div>
//               <div className="flex items-center space-x-3 text-sm">
//                 <FaMapMarkerAlt className="text-red-500" />
//                 <span className="text-gray-400">{ft('address')}</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Categories */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
//               {ft('categories')}
//             </h3>
//             <ul className="space-y-3">
//               {categories.slice(0, 4).map((category) => (
//                 <li key={category.id}>
//                   <Link 
//                     to={`/category/${category.id}`}
//                     className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center group"
//                   >
//                     <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     {t(category.label)}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           {/* More Categories & Quick Links */}
//           {/* <div>
//             <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//               {ft('moreCategories')}
//             </h3>
//             <ul className="space-y-3 mb-6">
//               {categories.slice(4).map((category) => (
//                 <li key={category.id}>
//                   <Link 
//                     to={`/category/${category.id}`}
//                     className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center group"
//                   >
//                     <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     {t(category.label)}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
            
//             <h4 className="text-lg font-semibold mb-4 text-gray-300">{ft('quickLinks')}</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <Link 
//                     to={link.href}
//                     className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center group"
//                   >
//                     <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     {ft(link.label)}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div> */}
//           {/* Quick Links - Arrow Hover (Minimalist) */}
// <div className="mt-0">
//   <h4 className="text-lg font-semibold mb-6 text-gray-300 relative inline-block">
//     {ft('quickLinks')}
//     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
//   </h4>
  
//   <ul className="space-y-3">
//     {quickLinks.map((link) => (
//       <li key={link.label}>
//         <Link 
//           to={link.href}
//           className="text-gray-400 hover:text-white transition-all duration-300 
//           flex items-center group text-sm"
//         >
//           <FaArrowRight className="mr-2 w-3 h-3 opacity-0 group-hover:opacity-100 
//           transition-opacity duration-300 text-red-500" />
//           {ft(link.label)}
//         </Link>
//       </li>
//     ))}
//   </ul>
// </div>
          
//           {/* Newsletter & Social */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
//               {ft('newsletterTitle')}
//             </h3>
//             <p className="text-gray-400 text-sm mb-4">
//               {ft('newsletterSubtitle')}
//             </p>
            
//             {/* Newsletter Form */}
//             <form onSubmit={handleSubscribe} className="mb-8">
//               <div className="flex flex-col space-y-3">
//                 <div className="relative">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder={ft('emailPlaceholder')}
//                     className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   disabled={isSubscribed}
//                   className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
//                     isSubscribed
//                       ? 'bg-green-600 text-white cursor-default'
//                       : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:scale-105'
//                   }`}
//                 >
//                   {isSubscribed ? (
//                     <span>✓ Subscribed!</span>
//                   ) : (
//                     <>
//                       <span>{ft('subscribeButton')}</span>
//                       <FaArrowRight className="w-4 h-4" />
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
            
//             {/* Social Media */}
//             {/* <div>
//               <h4 className="text-lg font-semibold mb-4 text-gray-300">{ft('connectWithUs')}</h4>
//               <div className="grid grid-cols-3 gap-3">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     title={social.name}
//                     className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
//                   >
//                     <social.icon className="w-5 h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div> */}

//             {/* Social Media - Enhanced Design */}
// <div className="mt-8">
//   <h4 className="text-lg font-semibold mb-6 text-gray-300 relative inline-block">
//     {ft('connectWithUs')}
//     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent"></span>
//   </h4>
  
//   <div className="grid grid-cols-6 gap-3">
//     {socialLinks.map((social, index) => (
//       <a
//         key={index}
//         href={social.href}
//         title={social.name}
//         className={`
//           group relative w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center 
//           text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700
//           hover:shadow-lg transform hover:-translate-y-1
//         `}
//       >
//         <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
//         <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 
//           text-xs text-white bg-gray-900 px-2 py-1 rounded opacity-0 
//           group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
//           {social.name}
//         </span>
//       </a>
//     ))}
//   </div>
  
//   {/* Social Proof */}
//   <div className="mt-6 flex items-center space-x-2 text-sm text-gray-400">
//     <span className="font-medium text-white">1M+</span>
//     <span>{language === 'en' ? 'Followers' : 'फॉलोअर्स'}</span>
//     <span className="text-gray-600">|</span>
//     <span className="font-medium text-white">500K+</span>
//     <span>{language === 'en' ? 'Subscribers' : 'सब्सक्राइबर्स'}</span>
//   </div>
// </div>
//           </div>
//         </div>
        
//         {/* Bottom Footer */}
//         <div className="border-t border-gray-800 pt-8">
//           <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-4 lg:space-y-0">
//             <div className="text-center lg:text-left">
//               <p className="text-gray-400 text-sm">
//                 &copy; 2025 News Bharat. {ft('allRightsReserved')}
//               </p>
//             </div>
//             <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
//               <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
//                 {ft('termsOfService')}
//               </Link>
//               <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
//                 {ft('privacyPolicy')}
//               </Link>
//               <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
//                 {ft('contactUs')}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// --------------------------


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaRss
} from 'react-icons/fa';
import NewsBharatLogo from '../common/NewsBharatLogo';
import { translations } from '../../utils/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: string) => translations[language][key] || key;
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = [
    { id: 'politics', label: 'politics' },
    { id: 'national', label: 'national' },
    { id: 'international', label: 'international' },
    { id: 'business', label: 'business' },
    { id: 'sports', label: 'sports' },
    { id: 'entertainment', label: 'entertainment' },
    { id: 'technology', label: 'technology' },
    { id: 'lifestyle', label: 'lifestyle' },
  ];

  const quickLinks = [
    { label: 'aboutUs', href: '/about' },
    { label: 'careers', href: '/careers' },
    { label: 'advertise', href: '/advertise' },
    { label: 'contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', color: 'hover:text-blue-500', name: 'Facebook' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-400', name: 'Twitter' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-500', name: 'Instagram' },
    { icon: FaYoutube, href: '#', color: 'hover:text-red-500', name: 'YouTube' },
    { icon: FaLinkedinIn, href: '#', color: 'hover:text-blue-600', name: 'LinkedIn' },
    { icon: FaRss, href: '#', color: 'hover:text-orange-500', name: 'RSS' },
  ];

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-4 h-4 bg-white/10 rounded-full absolute top-8 left-12"></div>
          <div className="w-2 h-2 bg-white/10 rounded-full absolute top-24 left-6"></div>
          <div className="w-3 h-3 bg-white/10 rounded-full absolute top-40 right-20"></div>
          <div className="w-2 h-2 bg-white/10 rounded-full absolute bottom-32 left-32"></div>
          <div className="w-4 h-4 bg-white/10 rounded-full absolute bottom-16 right-12"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <NewsBharatLogo />
            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
              {t('companyDescription')}
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <FaPhone className="text-red-500" />
                <span className="text-gray-400">{t('phone')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <FaEnvelope className="text-red-500" />
                <span className="text-gray-400">{t('email')}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="text-gray-400">{t('address')}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              {t('categories')}
            </h3>
            <ul className="space-y-3">
              {categories.slice(0, 4).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.id}`}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center group"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {t(category.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {t('moreCategories')}
            </h3>
            <ul className="space-y-3 mb-6">
              {categories.slice(0, 4).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.id}`}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center group"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {t(category.label)}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 text-gray-500">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center group"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          
          {/* Quick Links - Arrow Hover (Minimalist) */}
<div className="mt-0">
  <h4 className="text-lg font-semibold mb-6 text-gray-300 relative inline-block">
    {t('quickLinks')}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
  </h4>
  
  <ul className="space-y-3">
    {quickLinks.map((link) => (
      <li key={link.label}>
        <Link 
          to={link.href}
          className="text-gray-400 hover:text-white transition-all duration-300 
          flex items-center group text-sm"
        >
          <FaArrowRight className="mr-2 w-3 h-3 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 text-red-500" />
          {t(link.label)}
        </Link>
      </li>
    ))}
  </ul>
</div>

          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              {t('newsletterTitle')}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {t('newsletterSubtitle')}
            </p>
            <form onSubmit={handleSubscribe} className="mb-8">
              <div className="flex flex-col space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('emailPlaceholder')}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubscribed
                      ? 'bg-green-600 text-white cursor-default'
                      : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {isSubscribed ? (
                    <span>✓ {t('subscribed')}</span>
                  ) : (
                    <>
                      <span>{t('subscribeButton')}</span>
                      <FaArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-300">{t('connectWithUs')}</h4>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    title={social.name}
                    className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 News Bharat. {t('allRightsReserved')}
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                {t('termsOfService')}
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                {t('privacyPolicy')}
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                {t('contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;