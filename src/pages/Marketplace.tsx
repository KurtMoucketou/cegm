import React, { useState } from 'react';
import { Search, MapPin, Phone, Mail, Building } from 'lucide-react';
import type { Supplier } from '../types';

const Marketplace: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const sectors = [
    { id: 'all', name: 'Tous les secteurs' },
    { id: 'construction', name: 'BTP & Construction' },
    { id: 'agriculture', name: 'Agriculture & Agroalimentaire' },
    { id: 'textile', name: 'Textile & Habillement' },
    { id: 'technology', name: 'Technologie & Digital' },
    { id: 'mining', name: 'Mines & Énergie' },
    { id: 'services', name: 'Services aux entreprises' },
    { id: 'transport', name: 'Transport & Logistique' },
    { id: 'tourism', name: 'Tourisme & Hôtellerie' },
  ];

  const suppliers: Supplier[] = [
    {
      id: '1',
      name: 'Atlas Construction',
      sector: 'construction',
      description: 'Spécialiste en travaux publics et bâtiments industriels',
      contact: '+212 522 XXX XXX',
      location: 'Casablanca'
    },
    {
      id: '2',
      name: 'Maroc Agri Export',
      sector: 'agriculture',
      description: 'Export de produits agricoles et agroalimentaires de qualité',
      contact: '+212 537 XXX XXX',
      location: 'Rabat'
    },
    {
      id: '3',
      name: 'TechMa Solutions',
      sector: 'technology',
      description: 'Solutions digitales et développement logiciel sur mesure',
      contact: '+212 524 XXX XXX',
      location: 'Marrakech'
    },
    {
      id: '4',
      name: 'Textile du Sud',
      sector: 'textile',
      description: 'Fabrication textile et confection de vêtements',
      contact: '+212 528 XXX XXX',
      location: 'Agadir'
    },
    {
      id: '5',
      name: 'Energy Maroc',
      sector: 'mining',
      description: 'Équipements et services pour l\'industrie minière',
      contact: '+212 522 XXX XXX',
      location: 'Casablanca'
    },
    {
      id: '6',
      name: 'ConseilPro Maroc',
      sector: 'services',
      description: 'Conseil en management et développement d\'entreprise',
      contact: '+212 537 XXX XXX',
      location: 'Rabat'
    },
    {
      id: '7',
      name: 'Logistique Express',
      sector: 'transport',
      description: 'Transport international et solutions logistiques',
      contact: '+212 522 XXX XXX',
      location: 'Casablanca'
    },
    {
      id: '8',
      name: 'Riad Hospitality',
      sector: 'tourism',
      description: 'Gestion hôtelière et services touristiques',
      contact: '+212 524 XXX XXX',
      location: 'Marrakech'
    }
  ];

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSector = selectedSector === 'all' || supplier.sector === selectedSector;
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSector && matchesSearch;
  });

  return (
    <div className="dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Centrale d'Achats
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Découvrez notre réseau de fournisseurs marocains qualifiés, 
            organisés par secteur d'activité pour faciliter vos recherches
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un fournisseur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Sector Filter */}
            <div className="flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => setSelectedSector(sector.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedSector === sector.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {sector.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suppliers Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSuppliers.map((supplier) => (
              <div
                key={supplier.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                    <Building className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                    {sectors.find(s => s.id === supplier.sector)?.name}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {supplier.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {supplier.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{supplier.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>{supplier.contact}</span>
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors transform hover:scale-105">
                  Contacter
                </button>
              </div>
            ))}
          </div>

          {filteredSuppliers.length === 0 && (
            <div className="text-center py-12">
              <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Aucun fournisseur trouvé
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Vous êtes fournisseur ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Rejoignez notre centrale d'achats et développez votre activité 
            vers le marché gabonais
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105">
            Devenir fournisseur partenaire
          </button>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;