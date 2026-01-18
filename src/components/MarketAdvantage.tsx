import { Globe2, Train, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function MarketAdvantage() {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: Globe2,
      title: t('advantage.union.title'),
      description: t('advantage.union.desc'),
      stat: '185M',
      statLabel: 'consumers',
    },
    {
      icon: Train,
      title: t('advantage.railway.title'),
      description: t('advantage.railway.desc'),
      stat: 'NEW',
      statLabel: 'infrastructure',
    },
    {
      icon: TrendingUp,
      title: t('advantage.growth.title'),
      description: t('advantage.growth.desc'),
      stat: '8%',
      statLabel: 'annual growth',
    },
  ];

  return (
    <section id="advantage" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">
            {t('advantage.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('advantage.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#1e3a5f] transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1e3a5f]/5 to-transparent rounded-bl-full"></div>

              <div className="relative">
                <div className="w-16 h-16 bg-[#1e3a5f] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#1e3a5f] mb-1">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">
                    {advantage.statLabel}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
