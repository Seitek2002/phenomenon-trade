import { Building2, Warehouse, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LocationMap() {
  const { language } = useLanguage();

  const locations = [
    { name: 'Bishkek', lat: 42.8746, lng: 74.5698, type: 'headquarters' },
    { name: 'Osh', lat: 40.5283, lng: 72.7985, type: 'branch' },
    { name: 'Jalal-Abad', lat: 40.9336, lng: 72.8967, type: 'branch' },
    { name: 'Karakol', lat: 42.4906, lng: 78.3947, type: 'branch' },
    { name: 'Talas', lat: 42.5228, lng: 72.2428, type: 'warehouse' },
    { name: 'Naryn', lat: 41.4289, lng: 75.9911, type: 'warehouse' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">
            {language === 'en'
              ? 'Our Nationwide Network'
              : 'Наша Национальная Сеть'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Strategic locations across Kyrgyzstan ensuring comprehensive market coverage'
              : 'Стратегические локации по всему Кыргызстану, обеспечивающие полное покрытие рынка'}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-8">
            <div className="relative w-full h-[600px] bg-white rounded-2xl shadow-inner overflow-hidden border-2 border-[#1e3a5f]/20">
              <iframe
                src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=42.0,74.0&zoom=7&maptype=roadmap`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title={language === 'en' ? 'Kyrgyzstan Map' : 'Карта Кыргызстана'}
              ></iframe>

              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-200 max-w-xs">
                <div className="text-xs text-gray-600 mb-2 font-semibold">
                  {language === 'en' ? 'Key Locations:' : 'Ключевые Локации:'}
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">
                      {language === 'en' ? 'Bishkek (HQ)' : 'Бишкек (Головной офис)'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">
                      {language === 'en' ? 'Osh, Jalal-Abad, Karakol' : 'Ош, Джалал-Абад, Каракол'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">
                      {language === 'en' ? 'Talas, Naryn' : 'Талас, Нарын'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a70] p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full border-3 border-red-500 flex items-center justify-center">
                  <Star className="w-6 h-6 text-red-500" fill="currentColor" />
                </div>
                <div>
                  <div className="font-bold text-white text-lg">
                    {language === 'en' ? 'Head Office' : 'Головной Офис'}
                  </div>
                  <div className="text-blue-100 text-sm">
                    {language === 'en' ? 'Bishkek' : 'Бишкек'}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full border-3 border-blue-500 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-500" fill="currentColor" />
                </div>
                <div>
                  <div className="font-bold text-white text-lg">
                    {language === 'en' ? 'Branches' : 'Филиалы'}
                  </div>
                  <div className="text-blue-100 text-sm">
                    {language === 'en' ? '5 locations' : '5 локаций'}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full border-3 border-green-500 flex items-center justify-center">
                  <Warehouse className="w-6 h-6 text-green-500" fill="currentColor" />
                </div>
                <div>
                  <div className="font-bold text-white text-lg">
                    {language === 'en' ? 'Warehouses' : 'Склады'}
                  </div>
                  <div className="text-blue-100 text-sm">
                    {language === 'en' ? '5 locations' : '5 локаций'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-[#1e3a5f] mb-2">100%</div>
            <div className="text-gray-600 text-sm">
              {language === 'en' ? 'Regional Coverage' : 'Покрытие Регионов'}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-[#1e3a5f] mb-2">10+</div>
            <div className="text-gray-600 text-sm">
              {language === 'en' ? 'Cities Served' : 'Городов Охвачено'}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-[#1e3a5f] mb-2">23</div>
            <div className="text-gray-600 text-sm">
              {language === 'en' ? 'Total Facilities' : 'Всего Объектов'}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-[#1e3a5f] mb-2">24/7</div>
            <div className="text-gray-600 text-sm">
              {language === 'en' ? 'Operations' : 'Операции'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
