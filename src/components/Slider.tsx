import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Bienvenue au CEGM",
      subtitle: "Club des Entrepreneurs Gabonais au Maroc",
      description: "Votre passerelle vers le développement des affaires entre le Gabon et le Maroc",
      image: "./src/images/cegm_04.jpg"
    },
    {
      id: 2,
      title: "Services Professionnels",
      subtitle: "Accompagnement personnalisé",
      description: "De l'appel d'offres à la régularisation, nous vous accompagnons à chaque étape",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      id: 3,
      title: "Centrale d'Achats",
      subtitle: "Réseau de fournisseurs qualifiés",
      description: "Accédez à notre réseau étendu de fournisseurs marocains par secteur d'activité",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      id: 4,
      title: "Le CEGM un acteur incontournable",
      subtitle: "Club des Entrepreneurs Gabonais au Maroc",
      description: "Est un acteur qui vient promouvoir la vision du chef de l'Etat en matière de développement des affaires entre le Gabon et le Maroc",
      image: "./src/images/cegm_06.jpg"
    },
    {
      id: 5,
      title: "Le pont proféssionnel entre le Gabon et le Maroc",
      subtitle: "Club des Entrepreneurs Gabonais au Maroc",
      description: "Est un acteur qui vient promouvoir la vision du chef de l'Etat en matière de développement des affaires entre le Gabon et le Maroc",
      image: "./src/images/cegm_02.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-900 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl mb-6 text-green-400 animate-slide-up">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl mb-8 animate-slide-up-delay">
                  {slide.description}
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 animate-bounce-in">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-500"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-500"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;