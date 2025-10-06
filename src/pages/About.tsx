import React from 'react';
import { Target, Users, Globe, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: '2015', event: 'Création du CEGM', description: 'Fondation du club par un groupe d\'entrepreneurs visionnaires' },
    { year: '2017', event: 'Premier forum d\'affaires', description: 'Organisation du premier forum Gabon-Maroc' },
    { year: '2020', event: 'Expansion digitale', description: 'Lancement de la plateforme numérique' },
    { year: '2023', event: 'Centrale d\'achats', description: 'Création de la centrale d\'achats en ligne' },
  ];

  return (
    <div className="dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Qui sommes-nous ?
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Le Club des Entrepreneurs Gabonais au Maroc est une organisation dynamique 
            dédiée au développement des relations d'affaires entre les deux pays.
          </p>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Notre Histoire
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Fondé en 2015 par des entrepreneurs gabonais établis au Maroc, le CEGM est né 
                de la volonté de créer un pont durable entre les écosystèmes entrepreneuriaux 
                des deux pays. Notre mission est de faciliter les échanges commerciaux et de 
                promouvoir la coopération économique.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Depuis notre création, nous avons accompagné plus de 500 entrepreneurs dans 
                leurs démarches de développement international, créé des partenariats durables 
                et facilité des millions de dirhams d'échanges commerciaux.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Entrepreneurs au travail"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Une vision commune
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Construire des ponts entrepreneuriaux entre l'Afrique centrale et du Nord
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Nos Étapes Clés
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              L'évolution du CEGM au fil des années
            </p>
          </div>
          <div className="relative">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8 group">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-green-600 rounded-full mr-8 group-hover:scale-125 transition-transform"></div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {milestone.event}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Nos Objectifs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ce que nous visons pour nos membres et la communauté
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Faciliter les échanges
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Créer des opportunités d'affaires durables entre entrepreneurs gabonais et marocains
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mb-6 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                <Users className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Accompagner
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fournir un accompagnement personnalisé dans les démarches administratives et commerciales
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-6 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/50 transition-colors">
                <Globe className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Développer
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Promouvoir le développement économique et l'innovation dans les deux pays
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;