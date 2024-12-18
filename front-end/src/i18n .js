// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation JSONs
const enTranslation = {
  home: "Home",
  about_us: "About Us",
  contact_us: "Contact Us",
  services: "Services",
  it_and_design: "IT & Design",
  chraft: "Chraft",
  log_in: "Log In",
  register: "Register",
  "bain_aydik": "Bain Aydik",
  "work_made_easy": "Work MADE EASY!",
  "hire_or_be_an_expert": "Hire an Expert or Be an Expert.",
  "ever_evolving_skills": "In the ever-evolving landscape of skills and knowledge, the choice between hiring an expert or becoming",
  "pivotal_decision": "one yourself is a pivotal decision.",
  "most_popular_service": "Most Popular Service",
  "join_us": "Join us",
  "btn": "Download App",
  "full":"full name",
  "plceholder" : "search about something here...",
  "about_us": "About Us",
  "heading_1": "Heading 1",
  "description_1": "Lorem ipsum dolor sit amet, interdum a suscipit et, consequat nec nibh.",
  "heading_2": "Heading 2",
  "description_2": "Lorem ipsum dolor sit amet, interdum a suscipit et, consequat nec nibh.",
  "heading_3": "Heading 3",
  "description_3": "Lorem ipsum dolor sit amet, interdum a suscipit et, consequat nec nibh.",
  "card": {
    "category": "Category",
    "heading": "Heading",
    "author": "Author Name"
  },
  "featureAndContact": {
    "title": "Our New Featured",
    "readyToStartTitle": "Ready to Get Started?",
    "readyToStartDescription": "Sign Up or Login to Explore Various Features, It’s Just Free",
    "getStartedButton": "Get Started, It’s Free",
    "contactAlt": "Contact Us Image",
    "doubtsTitle": "Have Some Doubts?",
    "contactUs": "Contact Us"
  },
  "footer": {
    "company": "Company",
    "home": "Home",
    "post": "Post",
    "aboutUs": "About Us",
    "downloadApp": "Download App",
    "features": "Features",
    "painting": "Painting",
    "plumbing": "Plumbing",
    "carpentry": "Carpentry",
    "blacksmiths": "Blacksmiths",
    "homeApplianceRepair": "Home Appliance Repair",
    "freelancing": "Freelancing",
    "motionDesign": "Motion Design",
    "videoEditing": "Video Editing",
    "graphicDesign": "Graphic Design",
    "ai": "AI",
    "programming": "Programming",
    "contact": "Contact",
    "email": "Email: lkuuth@gmail.com",
    "phone": "Phone: +963 9651 258 000",
    "facebook": "Facebook page",
    "instagram": "Instagram page",
    "allRightsReserved": "All Rights Reserved",
    "twitter": "Twitter page",
    "github": "GitHub account"
  },
  "contact_us": "Contact Us",
  "fill_up_form": "Fill up the form below to send us a message",
  "name": "Name",
  "name_placeholder": "Enter your name",
  "email": "Email Address",
  "email_placeholder": "Enter your email",
  "message": "Message",
  "message_placeholder": "Type your message here",
  "submit": "Submit",
  "message_received": "We have received your message.",
  "contact_us_failed": "Contact Us failed. Please check your email and name.",
  "login": "Login",
  "email": "Email Address",
  "password": "Password",
  "submit": "Submit",
  "create_account": "Create an Account",
  "email_placeholder": "Enter your email",
  "password_placeholder": "Enter your password",
  "login_failed": "Login failed. Please check your email and password.",
  "login_failed_connection": "Login failed. Please check your internet connection."

  
  
  
};







const arTranslation = {
  home: "الصفحة الرئيسية",
  about_us: "من نحن",
  contact_us: "اتصل بنا",
  services: "الخدمات",
  it_and_design: "تكنولوجيا وتصاميم",
  chraft: "حرف يدوية",
  log_in: "تسجيل الدخول",
  register: "التسجيل",
 "bain_aydik": "بين أيديك",
  "work_made_easy": "العمل أصبح أسهل!",
  "hire_or_be_an_expert": "وظف خبيرًا أو كن خبيرًا.",
  "ever_evolving_skills": "في عالم المعرفة المتغير باستمرار، الاختيار بين توظيف خبير أو أن تصبح",
  "pivotal_decision": "أنت نفسك هو قرار حاسم.",
  "most_popular_service": "أكثر الخدمات شعبية",
  "join_us": "انضم إلينا",
  "btn": "حمل التطبيق",
  "full":"الاسم الكامل",
  "plceholder" : "... ابحث عن ما تبحث هنا",
  "about_us": "من نحن",
  "heading_1": "العنوان 1",
  "description_1": "لوريم إيبسوم دولار سيت أميت، إنتيردوم أ سوسيبسيت إت، كوانسوات نيك نيبه.",
  "heading_2": "العنوان 2",
  "description_2": "لوريم إيبسوم دولار سيت أميت، إنتيردوم أ سوسيبسيت إت، كوانسوات نيك نيبه.",
  "heading_3": "العنوان 3",
  "description_3": "لوريم إيبسوم دولار سيت أميت، إنتيردوم أ سوسيبسيت إت، كوانسوات نيك نيبه.",
  "card": {
    "category": "الفئة",
    "heading": "العنوان",
    "author": "اسم المؤلف"
  },
  "featureAndContact": {
    "title": "الميزات الجديدة",
    "readyToStartTitle": "هل أنت مستعد للبدء؟",
    "readyToStartDescription": "اشترك أو قم بتسجيل الدخول لاستكشاف الميزات المتنوعة، إنه مجاني",
    "getStartedButton": "ابدأ الآن، إنه مجاني",
    "contactAlt": "صورة الاتصال بنا",
    "doubtsTitle": "هل لديك أي شكوك؟",
    "contactUs": "اتصل بنا"
  },
  "footer": {
    "company": "الشركة",
    "home": "الرئيسية",
    "post": "المنشورات",
    "aboutUs": "معلومات عنا",
    "downloadApp": "تنزيل التطبيق",
    "features": "الميزات",
    "painting": "الرسم",
    "plumbing": "السباكة",
    "carpentry": "النجارة",
    "blacksmiths": "الحدادة",
    "homeApplianceRepair": "إصلاح الأجهزة المنزلية",
    "freelancing": "العمل الحر",
    "motionDesign": "تصميم الحركة",
    "videoEditing": "تحرير الفيديو",
    "graphicDesign": "تصميم جرافيك",
    "ai": "الذكاء الاصطناعي",
    "programming": "البرمجة",
    "contact": "تواصل",
    "email": "البريد الإلكتروني: lkuuth@gmail.com",
    "phone": "الهاتف: +963 9651 258 000",
    "facebook": "صفحة الفيسبوك",
    "instagram": "صفحة الإنستجرام",
    "allRightsReserved": "جميع الحقوق محفوظة",
    "twitter": "صفحة تويتر",
    "github": "حساب جيت هاب"
  },
  "contact_us": "اتصل بنا",
  "fill_up_form": "املأ النموذج أدناه لإرسال رسالة",
  "name": "الاسم",
  "name_placeholder": "أدخل اسمك",
  "email": "عنوان البريد الإلكتروني",
  "email_placeholder": "أدخل بريدك الإلكتروني",
  "message": "الرسالة",
  "message_placeholder": "اكتب رسالتك هنا",
  "submit": "إرسال",
  "message_received": "لقد تلقينا رسالتك.",
  "contact_us_failed": "فشل الاتصال بنا. يرجى التحقق من بريدك الإلكتروني واسمك.",
  "login": "تسجيل الدخول",
  "email": "عنوان البريد الإلكتروني",
  "password": "كلمة المرور",
  "submit": "إرسال",
  "create_account": "إنشاء حساب",
  "email_placeholder": "أدخل بريدك الإلكتروني",
  "password_placeholder": "أدخل كلمة المرور",
  "login_failed": "فشل تسجيل الدخول. يرجى التحقق من بريدك الإلكتروني وكلمة المرور.",
  "login_failed_connection": "فشل تسجيل الدخول. يرجى التحقق من اتصالك بالإنترنت."



  

  
  
};

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if translation is not available
  interpolation: {
    escapeValue: false, // React escapes values by default
  },
});

export default i18n;
