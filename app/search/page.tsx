// Arquivo: app/search/page.tsx

"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import MovieCard from '@/components/MovieCard';
import { Search } from 'lucide-react';

// Componente principal da página
function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query'); // Pega o termo de busca da URL

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Roda o efeito apenas se a query existir
    if (query) {
      setIsLoading(true); // Começa o carregamento

      const fetchSearchResults = async () => {
        try {
          const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
          const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=pt-BR`;
          
          const response = await fetch(url);
          const data = await response.json();
          
          setMovies(data.results || []); // Define os filmes ou um array vazio
        } catch (error) {
          console.error("Erro ao buscar filmes:", error);
          setMovies([]); // Em caso de erro, zera os resultados
        } finally {
          setIsLoading(false); // Termina o carregamento
        }
      };

      fetchSearchResults();
    } else {
      setIsLoading(false);
      setMovies([]);
    }
  }, [query]); // Roda novamente sempre que a 'query' na URL mudar

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-amber-400">
          Resultados para: <span className="text-white">{query}</span>
        </h1>

        {isLoading ? (
          <div className="text-center text-xl">Carregando...</div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map((movie: any) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-900/80 rounded-lg">
            <Search size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-lg text-gray-300">Nenhum filme encontrado para "{query}".</p>
            <p className="text-sm text-gray-500 mt-2">Tente buscar por outro termo.</p>
          </div>
        )}
      </section>
    </main>
  );
}

// Componente wrapper para usar o Suspense
export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center text-xl p-8">Carregando...</div>}>
      <SearchResults />
    </Suspense>
  )
}