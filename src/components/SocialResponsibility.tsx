import { Award, GraduationCap, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function SocialResponsibility() {
  const { t } = useLanguage();

  const initiatives = [
    {
      icon: Award,
      title: t('stability.taxpayer.title'),
      description: t('stability.taxpayer.desc'),
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Heart,
      title: t('stability.charity.title'),
      description: t('stability.charity.desc'),
      color: 'from-rose-500 to-pink-600',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">
            {t('stability.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('stability.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>

              <div className="relative p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${initiative.color} rounded-xl mb-6 shadow-lg`}>
                  <initiative.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {initiative.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {initiative.description}
                </p>
              </div>

              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-gray-100 to-transparent opacity-50"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a70] rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            {t('stability.excellence.title')}
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t('stability.excellence.desc')}
          </p>
        </div>
      </div>
    </section>
  );
}
