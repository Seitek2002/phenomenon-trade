import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.title': 'Phenomenon-Trade: Your Strategic Distribution Partner in Central Asia',
    'hero.subtitle': 'Leading distribution company connecting international brands with the rapidly growing Customs Union market',
    'hero.cta': 'Become a Partner',
    'advantage.title': 'Strategic Market Advantage',
    'advantage.subtitle': 'Why Kyrgyzstan is Your Gateway to Central Asia',
    'advantage.union.title': 'Customs Union Access',
    'advantage.union.desc': 'Direct access to 185 million consumers across the Eurasian Economic Union',
    'advantage.railway.title': 'China Railway Connection',
    'advantage.railway.desc': 'New railway infrastructure dramatically reduces global logistics costs',
    'advantage.growth.title': '8% Annual GDP Growth',
    'advantage.growth.desc': 'One of the fastest-growing economies in the region',
    'scale.title': 'Nationwide Infrastructure',
    'scale.subtitle': 'Built for Scale, Designed for Excellence',
    'scale.branches': 'Branches & Warehouses',
    'scale.reps': 'Professional Sales Representatives',
    'scale.cities': 'Major Cities Covered',
    'scale.cities.list': 'Bishkek (Head Office), Osh, Jalal-Abad, Karakol, Naryn, Talas',
    'portfolio.title': 'Premium Product Portfolio',
    'portfolio.subtitle': 'Representing Leading Snack Brands',
    'portfolio.growth': '10% Annual Market Growth',
    'portfolio.brands': 'Our Brands: Dzhinn, Babkiny, Master, Flint',
    'stability.title': 'Financial Stability & Social Responsibility',
    'stability.subtitle': 'Trusted Partner, Responsible Corporate Citizen',
    'stability.taxpayer.title': 'Top 100 Taxpayers',
    'stability.taxpayer.desc': '320 million soms contributed to national budget in 2024',
    'stability.team.title': 'Investment in People',
    'stability.team.desc': 'Regular professional training and international team-building events in Turkey, Egypt, and Vietnam',
    'stability.charity.title': 'Community Support',
    'stability.charity.desc': 'Active charity programs supporting orphanages and schools across Kyrgyzstan',
    'stability.excellence.title': 'Recognized Excellence',
    'stability.excellence.desc': 'Our commitment to financial stability, employee development, and social responsibility has earned us recognition as a Top 100 Taxpayer in Kyrgyzstan, demonstrating our role as a responsible corporate citizen and reliable business partner.',
    'partners.title': 'Trusted by Leading Companies',
    'partners.subtitle': 'Strategic partnerships with major market players across Kyrgyzstan',
    'contact.title': 'Become Our Partner',
    'contact.subtitle': 'Join Leading International Brands Working with Phenomenon-Trade',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.company': 'Company Name',
    'contact.message': 'Your Message',
    'contact.submit': 'Submit Partnership Inquiry',
    'contact.success': 'Thank you! We will contact you shortly.',
    'contact.journey.title': 'Start Your Partnership Journey',
    'contact.journey.subtitle': 'Fill out the form below and our team will contact you within 24 hours',
    'contact.success.desc': 'Our partnership team will review your inquiry and respond promptly.',
    'footer.rights': '© 2024 Phenomenon-Trade LLC. All rights reserved.',
    'footer.tagline': 'Your Strategic Partner in Central Asia',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.contact': 'Контакты',
    'hero.title': 'Феномен-Трейд: Ваш Стратегический Дистрибьюторский Партнёр в Центральной Азии',
    'hero.subtitle': 'Ведущая дистрибьюторская компания, соединяющая международные бренды с быстрорастущим рынком Таможенного Союза',
    'hero.cta': 'Стать Партнёром',
    'advantage.title': 'Стратегические Преимущества',
    'advantage.subtitle': 'Почему Кыргызстан — Ваши Ворота в Центральную Азию',
    'advantage.union.title': 'Доступ к Таможенному Союзу',
    'advantage.union.desc': 'Прямой доступ к 185 миллионам потребителей Евразийского Экономического Союза',
    'advantage.railway.title': 'Железная Дорога из Китая',
    'advantage.railway.desc': 'Новая железнодорожная инфраструктура значительно снижает глобальные логистические расходы',
    'advantage.growth.title': '8% Роста ВВП Ежегодно',
    'advantage.growth.desc': 'Одна из самых быстрорастущих экономик региона',
    'scale.title': 'Национальная Инфраструктура',
    'scale.subtitle': 'Создано для Масштаба, Разработано для Совершенства',
    'scale.branches': 'Филиалов и Складов',
    'scale.reps': 'Профессиональных Торговых Представителей',
    'scale.cities': 'Охват Крупных Городов',
    'scale.cities.list': 'Бишкек (Головной Офис), Ош, Джалал-Абад, Каракол, Нарын, Талас',
    'portfolio.title': 'Премиальный Продуктовый Портфель',
    'portfolio.subtitle': 'Представляем Ведущие Снековые Бренды',
    'portfolio.growth': '10% Годового Роста Рынка',
    'portfolio.brands': 'Наши Бренды: Джинн, Бабкины, Мастер, Флинт',
    'stability.title': 'Финансовая Стабильность и Социальная Ответственность',
    'stability.subtitle': 'Надёжный Партнёр, Ответственный Корпоративный Гражданин',
    'stability.taxpayer.title': 'Топ-100 Налогоплательщиков',
    'stability.taxpayer.desc': '320 миллионов сомов внесено в национальный бюджет в 2024 году',
    'stability.team.title': 'Инвестиции в Людей',
    'stability.team.desc': 'Регулярные профессиональные тренинги и международные тимбилдинги в Турции, Египте и Вьетнаме',
    'stability.charity.title': 'Поддержка Общества',
    'stability.charity.desc': 'Активные благотворительные программы в поддержку детских домов и школ по всему Кыргызстану',
    'stability.excellence.title': 'Признанное Совершенство',
    'stability.excellence.desc': 'Наша приверженность финансовой стабильности, развитию сотрудников и социальной ответственности принесла нам признание в качестве компании из Топ-100 Налогоплательщиков Кыргызстана, демонстрируя нашу роль ответственного корпоративного гражданина и надёжного делового партнёра.',
    'partners.title': 'Нам Доверяют',
    'partners.subtitle': 'Стратегическое партнёрство с ведущими компаниями Кыргызстана',
    'contact.title': 'Станьте Нашим Партнёром',
    'contact.subtitle': 'Присоединяйтесь к Ведущим Международным Брендам, Работающим с Феномен-Трейд',
    'contact.name': 'Полное Имя',
    'contact.email': 'Электронная Почта',
    'contact.company': 'Название Компании',
    'contact.message': 'Ваше Сообщение',
    'contact.submit': 'Отправить Запрос на Партнёрство',
    'contact.success': 'Спасибо! Мы свяжемся с вами в ближайшее время.',
    'contact.journey.title': 'Начните Ваш Путь к Партнёрству',
    'contact.journey.subtitle': 'Заполните форму ниже, и наша команда свяжется с вами в течение 24 часов',
    'contact.success.desc': 'Наша команда по партнёрству рассмотрит ваш запрос и оперативно ответит.',
    'footer.rights': '© 2024 ООО Феномен-Трейд. Все права защищены.',
    'footer.tagline': 'Ваш Стратегический Партнёр в Центральной Азии',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
