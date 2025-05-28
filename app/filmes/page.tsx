// Arquivo: app/filmes/page.tsx

"use client";

import { useState, useEffect } from 'react';
import { Filter, ChevronDown, Search } from 'lucide-react';
import MovieCard from '@/components/MovieCard';

// Mapa de Gêneros da TMDB para fazer a tradução de ID para Nome
const genreMap: { [key: number]: string } = {
  28: "Ação", 12: "Aventura", 16: "Animação", 35: "Comédia", 80: "Crime",
  99: "Documentário", 18: "Drama", 10751: "Família", 14: "Fantasia", 36: "História",
  27: "Terror", 10402: "Música", 9648: "Mistério", 10749: "Romance", 878: "Ficção Científica",
  10770: "Cinema TV", 53: "Thriller", 10752: "Guerra", 37: "Faroeste"
};
const genres = Object.values(genreMap); // Extrai apenas os nomes para os botões de filtro

export default function FilmesPage() {
  const [allMovies, setAllMovies] = useState<any[]>([]); // Guarda a lista original da API
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]); // Guarda a lista após aplicar filtros
  
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('popularity-desc');
  const [isLoading, setIsLoading] = useState(true);

  // 1. Efeito para buscar os dados iniciais da API
  useEffect(() => {
    const fetchInitialMovies = async () => {
      setIsLoading(true);
      try {
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        setAllMovies(data.results || []);
        setFilteredMovies(data.results || []);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialMovies();
  }, []);

  // 2. Efeito para aplicar filtros e ordenação quando o usuário interage
  useEffect(() => {
    let result = [...allMovies];
    
    // Filtrar por gênero
    if (selectedGenre !== 'Todos') {
      const genreId = Object.keys(genreMap).find(key => genreMap[parseInt(key)] === selectedGenre);
      if (genreId) {
        result = result.filter(movie => movie.genre_ids.includes(parseInt(genreId)));
      }
    }
    
    // Filtrar por termo de busca
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(movie => 
        movie.title.toLowerCase().includes(term) || 
        (movie.overview && movie.overview.toLowerCase().includes(term))
      );
    }
    
    // Ordenar resultados
    switch (sortOrder) {
      case 'title-asc':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'popularity-desc':
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'popularity-asc':
        result.sort((a, b) => a.popularity - b.popularity);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.vote_average - a.vote_average);
        break;
      case 'rating-asc':
        result.sort((a, b) => a.vote_average - b.vote_average);
        break;
      default:
        break;
    }
    
    setFilteredMovies(result);
  }, [selectedGenre, searchTerm, sortOrder, allMovies]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-amber-400">Catálogo de Filmes</h1>
        <p className="text-center text-xl mb-8 max-w-3xl mx-auto">
          Explore nossa coleção completa de filmes e encontre seu próximo favorito.
        </p>
        
        {/* Filtros */}
        <div className="bg-gray-900/80 rounded-lg p-6 mb-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Filtro por gênero */}
            <div>
              <h3 className="text-amber-400 font-medium mb-2">Gênero</h3>
              <select
                className="w-full py-2 px-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                <option value="Todos">Todos</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
            
            {/* Ordenação */}
            <div>
              <h3 className="text-amber-400 font-medium mb-2">Ordenar por</h3>
              <select
                className="w-full py-2 px-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="popularity-desc">Popularidade (Maior)</option>
                <option value="popularity-asc">Popularidade (Menor)</option>
                <option value="rating-desc">Avaliação (Maior)</option>
                <option value="rating-asc">Avaliação (Menor)</option>
                <option value="title-asc">Título (A-Z)</option>
                <option value="title-desc">Título (Z-A)</option>
              </select>
            </div>

             {/* Busca */}
             <div>
              <h3 className="text-amber-400 font-medium mb-2">Buscar no Catálogo</h3>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Nome do filme..."
                  className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Resultados */}
        {isLoading ? (
          <div className="text-center text-xl py-12">Carregando filmes...</div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-amber-300">
              {filteredMovies.length} {filteredMovies.length === 1 ? 'Filme encontrado' : 'Filmes encontrados'}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}