import { Building2, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CompanyScale() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a70]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('scale.title')}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('scale.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <div className="text-5xl font-bold text-white mb-2">23</div>
            <div className="text-xl text-blue-100">{t('scale.branches')}</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <div className="text-5xl font-bold text-white mb-2">6</div>
            <div className="text-xl text-blue-100">{t('scale.cities')}</div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t('scale.cities')}
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                {t('scale.cities.list')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
