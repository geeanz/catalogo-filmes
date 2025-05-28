export interface Movie {
  id: string;
  title: string;
  poster: string;
  backdrop?: string;
  rating: number;
  year: number;
  genres: string[];
  synopsis: string;
  duration: number;
  director: string;
  cast: string[];
}

export interface Review {
  id: string;
  author: string;
  authorAvatar: string;
  movieTitle: string;
  movieId: string;
  rating: number;
  content: string;
  date: string;
  likes: number;
}