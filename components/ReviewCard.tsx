"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Star, ThumbsUp, MessageSquare, Flag } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { Review } from '@/lib/types';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(review.likes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const dateFormatted = formatDistanceToNow(new Date(review.date), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={review.authorAvatar}
                alt={review.author}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">{review.author}</h3>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                  />
                ))}
                <span className="ml-1 text-amber-600 font-medium">{review.rating}/5</span>
              </div>
            </div>
            
            <div className="flex items-center text-gray-500 text-sm mt-1 mb-3">
              <Calendar size={14} className="mr-1" />
              <span>{dateFormatted}</span>
              <span className="mx-2">•</span>
              <span>Avaliação para: <span className="font-medium text-amber-600">{review.movieTitle}</span></span>
            </div>
            
            <div className="mt-2">
              <p className={cn(
                "text-gray-700 leading-relaxed",
                !isExpanded && review.content.length > 300 ? "line-clamp-4" : ""
              )}>
                {review.content}
              </p>
              {review.content.length > 300 && (
                <button 
                  className="text-amber-600 hover:text-amber-700 text-sm font-medium mt-2"
                  onClick={toggleExpand}
                >
                  {isExpanded ? "Mostrar menos" : "Ler mais"}
                </button>
              )}
            </div>
            
            <div className="mt-4 flex items-center space-x-4">
              <button 
                className={`flex items-center space-x-1 text-sm ${hasLiked ? 'text-amber-600' : 'text-gray-500 hover:text-amber-600'}`}
                onClick={handleLike}
              >
                <ThumbsUp size={16} className={hasLiked ? "fill-amber-600" : ""} />
                <span>{likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-amber-600">
                <MessageSquare size={16} />
                <span>Responder</span>
              </button>
              <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-600">
                <Flag size={16} />
                <span>Reportar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}