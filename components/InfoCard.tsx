"use client";

import { 
  Layout, Film, Users, Star, Trophy, Heart, Globe 
} from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function InfoCard({ title, description, icon }: InfoCardProps) {
  const IconComponent = () => {
    switch (icon) {
      case 'Layout':
        return <Layout className="w-12 h-12 text-amber-400" />;
      case 'Film':
        return <Film className="w-12 h-12 text-amber-400" />;
      case 'Users':
        return <Users className="w-12 h-12 text-amber-400" />;
      case 'Star':
        return <Star className="w-12 h-12 text-amber-400" />;
      case 'Trophy':
        return <Trophy className="w-12 h-12 text-amber-400" />;
      case 'Heart':
        return <Heart className="w-12 h-12 text-amber-400" />;
      case 'Globe':
        return <Globe className="w-12 h-12 text-amber-400" />;
      default:
        return <Film className="w-12 h-12 text-amber-400" />;
    }
  };

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105 border border-gray-800">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-gray-900/50 rounded-full">
          <IconComponent />
        </div>
        <h3 className="text-xl font-bold mb-3 text-amber-300">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}