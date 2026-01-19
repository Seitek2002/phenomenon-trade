import { useState } from 'react';
import { TrendingUp, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Импорт существующих картинок
import giantClassic from '../assets/ProductPortfolio/семечки_джин_великан.webp';
import giantSalt from '../assets/ProductPortfolio/семечки_джин_великан_соль.webp';
import giantExtraSalt from '../assets/ProductPortfolio/великан_джин_особо_соленые.webp';
import pumpkin from '../assets/ProductPortfolio/джин_семечки_тыква.webp';
import cornBbq from '../assets/ProductPortfolio/кукуруза_со_вкусом_bbq.jpg';
import cornCheese from '../assets/ProductPortfolio/кукуруза_со_вкусом_двойной_сыр.jpg';

// Импорт НОВЫХ картинок
import dzhinnSeaSalt from '../assets/ProductPortfolio/джин_с_морской_солью.jpg';
import dzhinnPremium from '../assets/ProductPortfolio/премиум_джин.jpg';
import dzhinnKernels from '../assets/ProductPortfolio/очищенные_джин.jpg';
import masterZharki from '../assets/ProductPortfolio/мастер_жарки_ароматно_обжаренные_семечки.jpg';
import peanutsPremium from '../assets/ProductPortfolio/arakhis_zharenyy_solyeniy_karavan_orekhov_premium.jpg';
import peanutsStandard from '../assets/ProductPortfolio/arakhis_zharenyy_solyenyy_karavan_orekhov_standart.jpg';

export default function ProductPortfolio() {
  const { t, language } = useLanguage();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const dzhinnProducts = [
    // --- Существующие продукты ---
    {
      id: 1,
      name: language === 'en' ? 'Giant Classic' : 'Великан',
      flavor: language === 'en' ? 'Classic' : 'Классика',
      image: giantClassic,
      color: 'from-gray-700 to-gray-900',
    },
    {
      id: 2,
      name: language === 'en' ? 'Giant Salt' : 'Великан Соленые',
      flavor: language === 'en' ? 'Salted' : 'Соленые',
      image: giantSalt,
      color: 'from-blue-600 to-blue-800',
    },
    {
      id: 3,
      name: language === 'en' ? 'Giant Extra Salt' : 'Особо Соленые',
      flavor: language === 'en' ? 'Extra Salt' : 'Экстра Соль',
      image: giantExtraSalt,
      color: 'from-red-600 to-red-800',
    },
    {
      id: 4,
      name: language === 'en' ? 'Pumpkin Seeds' : 'Тыквенные',
      flavor: language === 'en' ? 'Salted' : 'Соленые',
      image: pumpkin,
      color: 'from-green-600 to-emerald-800',
    },
    {
      id: 5,
      name: language === 'en' ? 'Corn BBQ' : 'Кукуруза BBQ',
      flavor: language === 'en' ? 'BBQ' : 'Барбекю',
      image: cornBbq,
      color: 'from-purple-600 to-purple-800',
    },
    {
      id: 6,
      name: language === 'en' ? 'Corn Cheese' : 'Кукуруза Сыр',
      flavor: language === 'en' ? 'Cheese' : 'Сыр',
      image: cornCheese,
      color: 'from-yellow-500 to-orange-600',
    },

    // --- НОВЫЕ продукты ---
    {
      id: 7,
      name: language === 'en' ? 'Dzhinn Sea Salt' : 'Джин Морская Соль',
      flavor: language === 'en' ? 'Sea Salt' : 'Морская Соль',
      image: dzhinnSeaSalt,
      color: 'from-cyan-600 to-teal-700', // Бирюзовый для морской соли
    },
    {
      id: 8,
      name: language === 'en' ? 'Dzhinn Premium' : 'Джин Премиум',
      flavor: language === 'en' ? 'Premium' : 'Премиум',
      image: dzhinnPremium,
      color: 'from-slate-800 to-black', // Строгий черный/серый
    },
    {
      id: 9,
      name: language === 'en' ? 'Dzhinn Kernels' : 'Джин Ядра',
      flavor: language === 'en' ? 'Peeled' : 'Очищенные',
      image: dzhinnKernels,
      color: 'from-lime-600 to-green-700', // Ярко-зеленый
    },
    {
      id: 10,
      name: language === 'en' ? 'Master Zharki' : 'Мастер Жарки',
      flavor: language === 'en' ? 'Roasted' : 'Обжаренные',
      image: masterZharki,
      color: 'from-amber-600 to-red-700', // Теплый красно-оранжевый
    },
    {
      id: 12,
      name: language === 'en' ? 'Caravan Peanuts' : 'Караван Арахис',
      flavor: language === 'en' ? 'Premium' : 'Премиум',
      image: peanutsPremium,
      color: 'from-amber-700 to-yellow-800', // Коричнево-золотой
    },
    {
      id: 13,
      name: language === 'en' ? 'Caravan Peanuts' : 'Караван Арахис',
      flavor: language === 'en' ? 'Standard' : 'Стандарт',
      image: peanutsStandard,
      color: 'from-orange-600 to-amber-700', // Оранжево-коричневый
    },
  ];

  return (
    <section id='portfolio' className='py-24 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4'>
            {t('portfolio.title')}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className='bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12'>
          <div className='flex items-center justify-center mb-8'>
            <div className='inline-flex items-center space-x-3 bg-green-50 px-6 py-3 rounded-full'>
              <TrendingUp className='w-6 h-6 text-green-600' />
              <span className='text-2xl font-bold text-green-700'>
                {t('portfolio.growth')}
              </span>
            </div>
          </div>

          <div className='flex justify-center mb-8'>
            <button
              onClick={() => setIsGalleryOpen(true)}
              className='group bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl border-2 border-orange-300 hover:border-orange-500 transition-all hover:shadow-2xl transform hover:scale-105 duration-300 w-full max-w-md relative overflow-hidden'
            >
              {/* Используем картинку Dzhinn Classic для обложки */}
              <div className='flex items-center justify-center h-48 mb-6 relative z-10'>
                <img
                  src={giantClassic}
                  alt='Dzhinn Main'
                  className='h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <h3 className='text-center font-bold text-3xl text-gray-900 mb-2 relative z-10'>
                Dzhinn
              </h3>
              <p className='text-center text-gray-600 text-sm relative z-10'>
                {language === 'en'
                  ? 'Click to view all products'
                  : 'Нажмите, чтобы посмотреть все продукты'}
              </p>
            </button>
          </div>

          <div className='text-center'>
            <p className='text-gray-600 text-lg'>
              {language === 'en'
                ? 'Premium sunflower seeds - Market leader in Kyrgyzstan'
                : 'Премиальные семечки - Лидер рынка в Кыргызстане'}
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-[#1e3a5f] rounded-2xl p-8 text-white'>
            <h3 className='text-2xl font-bold mb-4'>
              {language === 'en' ? 'Market Leadership' : 'Лидерство на Рынке'}
            </h3>
            <p className='text-blue-100 leading-relaxed'>
              {language === 'en'
                ? 'As a trusted distributor of premium snack brands, we maintain strong relationships with both suppliers and retailers across the Customs Union market.'
                : 'Как надежный дистрибьютор премиальных снековых брендов, мы поддерживаем прочные отношения с поставщиками и ритейлерами по всему рынку Таможенного Союза.'}
            </p>
          </div>

          <div className='bg-gradient-to-br from-blue-600 to-[#1e3a5f] rounded-2xl p-8 text-white'>
            <h3 className='text-2xl font-bold mb-4'>
              {language === 'en'
                ? 'Growth Partnership'
                : 'Партнерство для Роста'}
            </h3>
            <p className='text-blue-100 leading-relaxed'>
              {language === 'en'
                ? "With consistent 10% annual market growth, we offer international brands a proven platform for expansion into one of the world's fastest-growing consumer markets."
                : 'С последовательным ежегодным ростом рынка на 10%, мы предлагаем международным брендам проверенную платформу для экспансии на один из самых быстрорастущих потребительских рынков мира.'}
            </p>
          </div>
        </div>
      </div>

      {isGalleryOpen && (
        <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn'>
          <div className='bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative'>
            <div className='sticky top-0 bg-gradient-to-r from-orange-500 to-yellow-500 p-6 flex items-center justify-between z-10 rounded-t-3xl'>
              <h3 className='text-3xl font-bold text-white'>
                {language === 'en'
                  ? 'Product Portfolio Gallery'
                  : 'Галерея Продуктового Портфеля'}
              </h3>
              <button
                onClick={() => setIsGalleryOpen(false)}
                className='bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all'
              >
                <X className='w-8 h-8 text-white' />
              </button>
            </div>

            <div className='p-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {dzhinnProducts.map((product) => (
                  <div
                    key={product.id}
                    className='bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 overflow-hidden border-2 border-gray-200'
                  >
                    <div
                      className={`bg-gradient-to-br ${product.color} h-64 flex items-center justify-center relative p-6`}
                    >
                      {/* Картинка продукта */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className='w-full h-full object-contain drop-shadow-xl hover:scale-110 transition-transform duration-500'
                      />
                    </div>
                    <div className='p-6'>
                      <h4 className='font-bold text-xl text-gray-900 mb-2'>
                        {product.name}
                      </h4>
                      <div className='inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium'>
                        {product.flavor}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border-2 border-orange-200'>
                <p className='text-center text-gray-700 text-lg'>
                  {language === 'en'
                    ? 'Our diverse portfolio covers all major snack categories'
                    : 'Наш разнообразный портфель охватывает все основные категории снеков'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
