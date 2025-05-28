// Arquivo: app/page.tsx

import Link from 'next/link';
import MovieCard from '@/components/MovieCard';
import InfoCard from '@/components/InfoCard';

// Função para buscar os dados na API
async function getPopularMovies() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    return data.results || []; // Retorna os filmes ou um array vazio
  } catch (error) {
    console.error("Erro ao buscar filmes populares:", error);
    return []; // Retorna um array vazio em caso de erro
  }
}

// A página agora é uma função 'async'
export default async function Home() {
  // Chamamos a função e aguardamos os filmes
  const popularMovies = await getPopularMovies();

  return (
    <main className="min-h-screen bg-stars text-white">
      <section className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-400">Bem-vindo ao Cine Star</h1>
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Seu guia completo para o mundo do cinema. Descubra novos filmes, avalie seus favoritos e compartilhe suas opiniões.
        </p>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-300">Filmes Populares</h2>
          {/* Renderiza os filmes que vieram da API */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {popularMovies.slice(0, 10).map((movie: any) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/filmes" className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-6 rounded-full transition-all duration-300">
              Ver Todos os Filmes
            </Link>
          </div>
        </div>

        <div className="py-8">
          <h2 className="text-3xl font-bold mb-8 text-amber-300">Por que o Cine Star?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard 
              title="Experiência Fluida" 
              description="Navegue por nosso catálogo com uma interface intuitiva e responsiva, projetada para oferecer a melhor experiência ao usuário."
              icon="Layout"
            />
            <InfoCard 
              title="Melhores Cinemas" 
              description="Descubra os cinemas mais bem avaliados em sua região e aproveite ao máximo sua experiência cinematográfica."
              icon="Film"
            />
            <InfoCard 
              title="Comunidade Cinéfila" 
              description="Conecte-se com outros amantes de cinema, compartilhe suas opiniões e descubra novas recomendações."
              icon="Users"
            />
          </div>
        </div>
      </section>
    </main>
  );
}