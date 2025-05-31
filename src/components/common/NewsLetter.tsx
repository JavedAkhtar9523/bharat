import React, { useState, FormEvent } from 'react';
import { 
  FaEnvelope, 
  FaUniversity, 
  FaStar, 
  FaBullseye,
  FaArrowRight,
  FaCheck,
  FaSpinner
} from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { useLanguage } from '../../context/LanguageContext';

// Types for better type safety
interface NewsletterLink {
  icon: React.ReactNode;
  text: string;
  href: string;
  gradient?: string;
}


export const newsletterTranslations = {
  en: {
    examPrep: "View Exam Preparation",
    collegeInfo: "College Admission Information",
    successStories: "Read Success Stories",
    newsletterTitle: "Get News Updates",
    newsletterSubtitle: "Be the first to receive latest news and updates",
    emailPlaceholder: "Enter your email",
    subscribeButton: "Subscribe",
    subscribing: "Subscribing...",
    subscribed: "Subscribed!",
    invalidEmail: "Please enter a valid email address",
    successMessage: "Successfully subscribed!",
    errorMessage: "Something went wrong, please try again"
  },
  hi: {
    examPrep: "देखें परीक्षा की तैयारी",
    collegeInfo: "कॉलेज एडमिशन जानकारी",
    successStories: "पढ़ें सक्सेस स्टोरीज़",
    newsletterTitle: "न्यूज़ अपडेट प्राप्त करें",
    newsletterSubtitle: "सबसे पहले ताज़ा खबरें और अपडेट पाएं",
    emailPlaceholder: "अपना ईमेल दर्ज करें",
    subscribeButton: "सब्सक्राइब",
    subscribing: "सब्सक्राइब हो रहा है...",
    subscribed: "सब्सक्राइब हो गया!",
    invalidEmail: "वैध ईमेल पता दर्ज करें",
    successMessage: "सफलतापूर्वक सब्सक्राइब हो गया!",
    errorMessage: "कुछ गलत हुआ है, कृपया पुनः प्रयास करें"
  }
};

// InputBox component with TypeScript
interface InputBoxProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  className?: string;
  type?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  name,
  value,
  onChange,
  placeholder,
  error,
  className = "",
  type = "email"
}) => {
  return (
    <div className="relative flex-1">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full h-11 px-4 rounded-l-lg border-2 border-gray-200 
          focus:border-blue-500 focus:outline-none transition-all duration-300
          text-gray-800 placeholder-gray-400 bg-white
          ${error ? 'border-red-500 focus:border-red-500' : ''}
          ${className}
        `}
      />
      {error && (
        <p className="absolute -bottom-6 left-0 text-xs text-red-400 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

// Newsletter Links Section
interface NewsletterSectionProps {
  newsletterLinks?: NewsletterLink[];
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ 
  newsletterLinks
}) => {
  const { language } = useLanguage();
  const t = newsletterTranslations[language as keyof typeof newsletterTranslations];
  
  const defaultLinks: NewsletterLink[] = [
    { 
      icon: <FaBullseye className="text-xl" />, 
      text: t.examPrep, 
      href: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: <FaUniversity className="text-xl" />, 
      text: t.collegeInfo, 
      href: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <FaStar className="text-xl" />, 
      text: t.successStories, 
      href: "#",
      gradient: "from-yellow-500 to-orange-500"
    },
  ];

  const links = newsletterLinks || defaultLinks;

  return (
    <section className="py-8 space-y-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            title={item.text}
            className={`
              group relative overflow-hidden
              bg-gradient-to-r ${item.gradient || 'from-red-500 to-red-600'}
              text-white rounded-xl p-6 
              hover:scale-105 hover:shadow-2xl 
              transition-all duration-300 ease-out
              cursor-pointer
            `}
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative flex items-center gap-4">
              <div className="p-3 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
                {item.icon}
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold tracking-wide">
                  {item.text}
                </span>
                <FaArrowRight className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};


interface NewsletterSectionFormProps {
  onSubscribe?: (email: string) => Promise<boolean>;
}

export const NewsletterSectionForm: React.FC<NewsletterSectionFormProps> = ({ 
  onSubscribe
}) => {
  const { language } = useLanguage();
  const t = newsletterTranslations[language as keyof typeof newsletterTranslations];
  
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<{ email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    // Reset errors
    setErrors({});
    
    
    if (!validateEmail(email)) {
      setErrors({ email: t.invalidEmail });
      return;
    }

    setIsSubmitting(true);

    try {
      // If onSubscribe prop is provided, use it; otherwise simulate API call
      const success = onSubscribe 
        ? await onSubscribe(email)
        : await simulateAPICall();

      if (success) {
        setIsSubscribed(true);
        setEmail("");
        // Reset success state after 3 seconds
        setTimeout(() => setIsSubscribed(false), 3000);
      } else {
        setErrors({ email: t.errorMessage });
      }
    } catch (error) {
      setErrors({ email: t.errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  
  const simulateAPICall = (): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.random() > 0.1); 
      }, 1500);
    });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 rounded-2xl shadow-2xl">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
      
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        {/* Info section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <GoMail className="text-3xl text-white" />
            </div>
          </div>
          <div className="text-white">
            <h3 className="font-bold text-xl lg:text-2xl mb-2">
              {t.newsletterTitle}
            </h3>
            <p className="text-white/90 text-sm lg:text-base">
              {t.newsletterSubtitle}
            </p>
          </div>
        </div>

        {/* Form section */}
        <div className="w-full lg:w-auto lg:min-w-[400px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-1 sm:flex-auto sm:w-64">
              <InputBox
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                error={errors.email}
                className="rounded-l-lg sm:rounded-r-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || isSubscribed}
              className={`
                px-6 h-11 font-semibold rounded-lg sm:rounded-l-none sm:rounded-r-lg
                transition-all duration-300 flex items-center justify-center gap-2
                ${isSubscribed 
                  ? 'bg-green-500 text-white cursor-default' 
                  : isSubmitting
                    ? 'bg-gray-600 text-white cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800 hover:scale-105 active:scale-95'
                }
              `}
            >
              {isSubscribed ? (
                <>
                  <FaCheck className="text-lg" />
                  {t.subscribed}
                </>
              ) : isSubmitting ? (
                <>
                  <FaSpinner className="text-lg animate-spin" />
                  {t.subscribing}
                </>
              ) : (
                <>
                  {t.subscribeButton}
                  <FaArrowRight className="text-sm" />
                </>
              )}
            </button>
          </form>
          
          {isSubscribed && (
            <div className="mt-4 p-3 bg-green-500/20 border border-green-400/30 rounded-lg">
              <p className="text-green-100 text-sm font-medium">
                {t.successMessage}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Combined Newsletter Component
interface NewsletterProps {
  newsletterLinks?: NewsletterLink[];
  onSubscribe?: (email: string) => Promise<boolean>;
}

export const Newsletter: React.FC<NewsletterProps> = ({
  newsletterLinks,
  onSubscribe
}) => {
  return (
    <div className="space-y-8">
      <NewsletterSection 
        newsletterLinks={newsletterLinks}
      />
      <NewsletterSectionForm 
        onSubscribe={onSubscribe}
      />
    </div>
  );
};

export default Newsletter;