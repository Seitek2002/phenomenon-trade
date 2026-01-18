import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#1e3a5f] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white flex items-center justify-center">
              <span className="text-[#1e3a5f] font-bold text-lg">ФТ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none">
                {language === 'en' ? 'Phenomenon' : 'Феномен'}
              </span>
              <span className="text-blue-200 text-sm leading-none">
                {language === 'en' ? 'Trade' : 'Трейд'}
              </span>
            </div>
          </div>

          <p className="text-blue-200 text-center">
            {t('footer.tagline')}
          </p>

          <div className="border-t border-white/20 w-full max-w-md"></div>

          <p className="text-blue-200 text-sm text-center">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
