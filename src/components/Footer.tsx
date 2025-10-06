import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img className="w-12 h-12 text-green-600 group-hover:text-green-700 transition-colors" src="./src/images/Logo_Web_CEGM.png" />
              <div>
                <h3 className="text-xl font-bold">CEGM</h3>
                <p className="text-gray-400 text-sm">Club des Entrepreneurs Gabonais au Maroc</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Facilitons les échanges commerciaux et le développement des affaires entre le Gabon et le Maroc.
              Ensemble, construisons des ponts entrepreneuriaux durables.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Qui sommes-nous</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/marketplace" className="text-gray-300 hover:text-white transition-colors">Centrale d'achats</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">+212 6XX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">contact@cegm.ma</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Casablanca, Maroc</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2025 CEGM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;