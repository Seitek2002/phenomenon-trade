import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center space-x-3'>
            <Logo className='w-12 h-12 shadow-sm hover:scale-105 transition-transform duration-300' />
            <div className='flex flex-col'>
              <span className='text-[#1e3a5f] font-bold text-lg leading-none'>
                {language === 'en' ? 'Phenomenon' : 'Феномен'}
              </span>
              <span className='text-gray-600 text-sm leading-none'>
                {language === 'en' ? 'Trade' : 'Трейд'}
              </span>
            </div>
          </div>

          <nav className='hidden md:flex items-center space-x-8'>
            <button
              onClick={() => scrollToSection('home')}
              className='text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium'
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('advantage')}
              className='text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium'
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className='text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium'
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className='text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium'
            >
              {t('nav.contact')}
            </button>
          </nav>

          <button
            onClick={toggleLanguage}
            className='flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#1e3a5f] text-white hover:bg-[#2d4a70] transition-colors'
          >
            <Globe className='w-4 h-4' />
            <span className='font-medium'>
              {language === 'en' ? 'RU' : 'EN'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
