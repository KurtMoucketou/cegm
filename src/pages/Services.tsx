import React from 'react';
import { FileText, Building2, Users, CheckCircle } from 'lucide-react';
import type { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 'appels-offres-gabon',
      title: 'Accompagnement Appels d\'Offres Gabon',
      description: 'Support complet pour les entreprises marocaines souhaitant répondre aux appels d\'offres gabonais',
      features: [
        'Analyse des opportunités d\'affaires',
        'Assistance administrative et légale',
        'Mise en relation avec partenaires locaux',
        'Suivi des procédures d\'adjudication',
        'Formation aux spécificités du marché gabonais'
      ],
      targetAudience: 'moroccan'
    },
    {
      id: 'regularisation-maroc',
      title: 'Régularisation et Conformité Maroc',
      description: 'Services de régularisation pour professionnels gabonais établis au Maroc',
      features: [
        'Régularisation des statuts d\'entreprise',
        'Mise en conformité fiscale et sociale',
        'Obtention des licences professionnelles',
        'Accompagnement juridique personnalisé',
        'Formation aux réglementations marocaines'
      ],
      targetAudience: 'gabonese'
    },
    {
      id: 'consulting-business',
      title: 'Conseil en Développement d\'Affaires',
      description: 'Stratégies personnalisées pour le développement international',
      features: [
        'Études de marché ciblées',
        'Stratégies d\'implantation',
        'Identification d\'opportunités',
        'Négociation de partenariats',
        'Suivi de performance'
      ],
      targetAudience: 'both'
    },
    {
      id: 'networking',
      title: 'Réseau et Networking',
      description: 'Événements et rencontres pour développer votre réseau professionnel',
      features: [
        'Forums d\'affaires trimestriels',
        'Rencontres sectorielles',
        'Missions commerciales',
        'Ateliers de formation',
        'Plateforme de networking en ligne'
      ],
      targetAudience: 'both'
    }
  ];

  const getAudienceColor = (audience: string) => {
    switch (audience) {
      case 'moroccan':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'gabonese':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'both':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getAudienceLabel = (audience: string) => {
    switch (audience) {
      case 'moroccan':
        return 'Professionnels marocains';
      case 'gabonese':
        return 'Professionnels gabonais';
      case 'both':
        return 'Tous professionnels';
      default:
        return '';
    }
  };

  return (
    <div className="dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Des solutions complètes pour développer vos affaires entre le Gabon et le Maroc
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                      <Building2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAudienceColor(service.targetAudience)}`}>
                    {getAudienceLabel(service.targetAudience)}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors transform hover:scale-105">
                  En savoir plus
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Notre Processus
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comment nous vous accompagnons étape par étape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Consultation', description: 'Analyse de vos besoins et objectifs' },
              { icon: FileText, title: 'Planification', description: 'Élaboration d\'une stratégie personnalisée' },
              { icon: Building2, title: 'Exécution', description: 'Mise en œuvre des solutions adaptées' },
              { icon: CheckCircle, title: 'Suivi', description: 'Accompagnement continu et optimisation' },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                  <step.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;