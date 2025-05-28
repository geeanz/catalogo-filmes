"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { featuredMovies } from '@/lib/data';

export default function MovieCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    stopAutoplay();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    startAutoplay();
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredMovies.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % featuredMovies.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carrossel */}
      <div 
        className="h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex', width: `${featuredMovies.length * 100}%` }}
      >
        {featuredMovies.map((movie, index) => (
          <div 
            key={movie.id} 
            className="relative w-full h-full flex-shrink-0"
          >
            <Image
              src={movie.backdrop}
              alt={movie.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{movie.title}</h2>
              <p className="text-lg text-gray-200 mb-4 max-w-2xl line-clamp-2 md:line-clamp-3">{movie.synopsis}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres.map((genre, idx) => (
                  <span key={idx} className="bg-amber-500/80 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegação */}
      <button 
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        onClick={goToPrevious}
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        onClick={goToNext}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? 'bg-amber-500 w-6' : 'bg-gray-400/50 hover:bg-gray-300/70'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}