import React from 'react';
import Slider from '../components/Slider';
import { Users, Globe, TrendingUp, Award } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Entrepreneurs' },
    { icon: Globe, value: '2', label: 'Pays connectés' },
    { icon: TrendingUp, value: '150+', label: 'Projets réalisés' },
    { icon: Award, value: '10+', label: 'Années d\'expérience' },
  ];

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      {/* Slider */}
      <Slider />

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              CEGM en chiffres
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Notre impact sur la communauté entrepreneuriale
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                  <stat.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Rejoignez notre communauté
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Développez vos affaires entre le Gabon et le Maroc avec le soutien d'entrepreneurs expérimentés
          </p>
          <div className="space-x-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Devenir membre
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors transform hover:scale-105">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;