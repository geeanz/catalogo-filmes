// components/MovieCard.tsx

"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
// Não precisamos mais da interface Movie de lib/types, pois a estrutura da API é diferente
// import { Movie } from '@/lib/types'; 

// Um mapa simples para traduzir IDs de gênero para nomes.
const genreMap: { [key: number]: string } = {
  28: "Ação", 12: "Aventura", 16: "Animação", 35: "Comédia", 80: "Crime",
  99: "Documentário", 18: "Drama", 10751: "Família", 14: "Fantasia", 36: "História",
  27: "Terror", 10402: "Música", 9648: "Mistério", 10749: "Romance", 878: "Ficção Científica",
  10770: "Cinema TV", 53: "Thriller", 10752: "Guerra", 37: "Faroeste"
};

interface MovieCardProps {
  movie: any; // Usamos 'any' por simplicidade para aceitar a estrutura da API
  large?: boolean;
}

export default function MovieCard({ movie, large = false }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  // A API pode retornar a nota em 'vote_average'
  const rating = movie.vote_average / 2; // Convertendo a nota de 10 para 5

  return (
    <div 
      className={cn(
        "relative rounded-lg overflow-hidden transition-all duration-300 bg-black/60 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
        large ? "h-[500px]" : "h-[350px]"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full">
        {/* CORREÇÃO 1: Construindo a URL da imagem */}
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 flex flex-col justify-end transition-opacity",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">{movie.title}</h3>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < rating ? "fill-amber-400 text-amber-400" : "text-gray-400"}
                />
              ))}
              <span className="ml-2 text-amber-400 font-medium">{rating.toFixed(1)}/5</span>
            </div>
            {/* CORREÇÃO 2: Usando a propriedade 'overview' para a sinopse */}
            <p className="text-sm text-gray-200 line-clamp-3">{movie.overview}</p>
            {/* CORREÇÃO 3: Usando 'genre_ids' e o mapa de gêneros */}
              <div className="flex flex-wrap gap-2 mt-2">
  {/* SE o filme tem 'genre_ids' (veio da API), use o mapa para traduzir. */}
  {movie.genre_ids && movie.genre_ids.slice(0, 2).map((id: number) => (
    <span key={id} className="text-xs bg-amber-600/80 px-2 py-1 rounded-full">
      {genreMap[id] || 'Gênero'}
    </span>
  ))}

  {/* SENÃO, SE o filme tem 'genres' (veio dos dados estáticos), use os nomes diretamente. */}
  {movie.genres && movie.genres.slice(0, 2).map((genreName: string) => (
    <span key={genreName} className="text-xs bg-amber-600/80 px-2 py-1 rounded-full">
      {genreName}
    </span>
  ))}
</div>
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-full">
        <Star size={14} className="fill-amber-400 text-amber-400" />
        <span className="text-sm font-bold text-white">{rating.toFixed(1)}</span>
      </div>
    </div>
  );
}