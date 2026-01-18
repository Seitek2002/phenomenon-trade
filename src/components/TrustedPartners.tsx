import { Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Импорт логотипов партнеров
import umaiLogo from '../assets/Partners/umai_grup.avif';
import asiaLogo from '../assets/Partners/asia.png';
import redPetroleumLogo from '../assets/Partners/red-petrolium.png';
import dostorLogo from '../assets/Partners/dostor.png';
import gazpromLogo from '../assets/Partners/газпром_нефть.jpg';
import bishkekPetroleumLogo from '../assets/Partners/бишкек_петролиум.png';
import partnerNeftLogo from '../assets/Partners/партнер_нефть.jpg';
import almaLogo from '../assets/Partners/алма.png';

export default function TrustedPartners() {
  const { t } = useLanguage();

  const partners = [
    {
      name: 'Умай Групп',
      logo: umaiLogo,
      color: 'from-blue-600 to-[#1e3a5f]',
    },
    {
      name: 'Азия',
      logo: asiaLogo,
      color: 'from-emerald-600 to-teal-700',
    },
    {
      name: 'Ред Петролеум',
      logo: redPetroleumLogo,
      color: 'from-red-600 to-rose-700',
    },
    {
      name: 'Достор',
      logo: dostorLogo,
      color: 'from-amber-600 to-orange-700',
    },
    {
      name: 'Газпром Нефть',
      logo: gazpromLogo,
      color: 'from-sky-600 to-blue-700',
    },
    {
      name: 'Бишкек Петролеум',
      logo: bishkekPetroleumLogo,
      color: 'from-slate-700 to-gray-800',
    },
    {
      name: 'Партнер Нефть',
      logo: partnerNeftLogo,
      color: 'from-[#1e3a5f] to-[#2d4a70]',
    },
    {
      name: 'У Дома',
      logo: null, // Логотипа нет, будет иконка
      color: 'from-lime-600 to-green-700',
    },
    {
      name: 'Кампа',
      logo: null, // Логотипа нет, будет иконка
      color: 'from-violet-600 to-purple-700',
    },
    {
      name: 'Алма',
      logo: almaLogo,
      color: 'from-rose-600 to-pink-700',
    },
  ];

  return (
    <section className='py-24 bg-gradient-to-br from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a70] rounded-xl mb-6 shadow-lg'>
            <Building2 className='w-8 h-8 text-white' />
          </div>
          <h2 className='text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4'>
            {t('partners.title')}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('partners.subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {partners.map((partner, index) => (
            <div
              key={index}
              className='group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col'
            >
              {/* Фоновый градиент при наведении (еле заметный) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className='relative p-6 flex flex-col items-center justify-center min-h-[160px] h-full'>
                <div className='flex-grow flex items-center justify-center w-full mb-4'>
                  {partner.logo ? (
                    // Если есть логотип - показываем его
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className='max-h-16 w-auto max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300'
                    />
                  ) : (
                    // Если логотипа нет - показываем красивую иконку
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${partner.color} rounded-lg shadow-md`}
                    >
                      <Building2 className='w-7 h-7 text-white' />
                    </div>
                  )}
                </div>

                <h3 className='text-sm font-bold text-gray-900 leading-tight text-center'>
                  {partner.name}
                </h3>
              </div>

              {/* Цветная полоска снизу */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${partner.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
              ></div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <p className='text-gray-500 italic'>{t('partners.subtitle')}</p>
        </div>
      </div>
    </section>
  );
}
