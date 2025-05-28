// Arquivo: app/avaliacoes/page.tsx

"use client";

import { useState } from 'react';
import { Search, Filter, Star, Send, User } from 'lucide-react';
import ReviewCard from '@/components/ReviewCard';
import { reviewData as initialReviewData } from '@/lib/data';
import { useAuth } from '@/app/context/AuthContext'; // <-- CAMINHO CORRIGIDO

// --- Componente do Formulário de Nova Avaliação ---
function NewReviewForm({ onPostReview }: { onPostReview: (newReview: any) => void }) {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
  const [movieTitle, setMovieTitle] = useState('');
  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content || rating === 0 || !movieTitle.trim()) {
      alert('Por favor, preencha todos os campos para postar sua avaliação.');
      return;
    }
    const newReview = {
      id: Date.now(),
      author: user!.name,
      authorAvatar: `https://api.dicebear.com/8.x/initials/svg?seed=${user!.name}`,
      movieTitle,
      content,
      rating,
      date: new Date().toISOString(),
      likes: 0,
    };
    onPostReview(newReview);
    setContent('');
    setRating(0);
    setMovieTitle('');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Postar uma Avaliação</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Qual filme você quer avaliar?"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
            className="w-full py-2 px-4 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escreva sua avaliação aqui... (máx 300 caracteres)"
          maxLength={300}
          rows={4}
          className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">Sua nota:</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={24}
                  className={`cursor-pointer ${rating >= star ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
          <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black rounded-full font-medium hover:bg-amber-600 transition-colors">
            <Send size={16} /> Postar
          </button>
        </div>
      </form>
    </div>
  );
}


// --- Componente Principal da Página de Avaliações ---
export default function AvaliacoesPage() {
  const [reviews, setReviews] = useState(initialReviewData);
  const [filterBy, setFilterBy] = useState('recentes');
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();

  const handlePostReview = (newReview: any) => {
    setReviews([newReview, ...reviews]);
  };
  
  const filteredReviews = reviews
    .filter(review => 
      review.movieTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (filterBy === 'recentes') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (filterBy === 'antigas') return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (filterBy === 'rating-high') return b.rating - a.rating;
      if (filterBy === 'rating-low') return a.rating - b.rating;
      return 0;
    });

  return (
    <main className="min-h-screen bg-dots text-gray-900">
      <section className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Avaliações</h1>
        <p className="text-center text-xl mb-8 max-w-3xl mx-auto">
          Confira o que nossa comunidade está falando sobre os filmes mais recentes.
        </p>

        {user ? (
          <NewReviewForm onPostReview={handlePostReview} />
        ) : (
          <div className="text-center py-8 px-4 bg-white rounded-lg shadow-lg mb-8">
            <User size={32} className="mx-auto text-amber-500 mb-2" />
            <p className="font-medium text-lg">Faça login para postar sua própria avaliação!</p>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Buscar avaliações..."
                className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Filter size={20} className="text-amber-500" />
              <select
                className="py-2 px-4 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
              >
                <option value="recentes">Mais Recentes</option>
                <option value="antigas">Mais Antigas</option>
                <option value="rating-high">Melhor Avaliadas</option>
                <option value="rating-low">Pior Avaliadas</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <Star size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-lg text-gray-500">Nenhuma avaliação encontrada.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}