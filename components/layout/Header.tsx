// Arquivo: components/layout/Header.tsx

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Menu, X, Film, LogOut, User } from 'lucide-react';
import { useAuth } from '@/app/context/AuthContext';
import LoginModal from '@/components/LoginModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path: string) => pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = encodeURIComponent(searchQuery.trim());
      router.push(`/search?query=${query}`);
      setSearchQuery('');
      if (isMenuOpen) setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="bg-black/80 backdrop-blur-md sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4">
          {/* Container principal para Desktop */}
          <div className="relative flex items-center justify-between h-16">
            
            {/* Lado Esquerdo: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Film className="h-8 w-8 text-amber-500" />
                <span className="text-2xl font-bold text-amber-500">CINE STAR</span>
              </Link>
            </div>

            {/* Centro: Navegação Desktop (CORRIGIDO) */}
            <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link href="/" className={`text-lg font-medium transition-colors hover:text-amber-400 ${isActive('/') ? 'text-amber-400' : 'text-white'}`}>Menu</Link>
              <Link href="/filmes" className={`text-lg font-medium transition-colors hover:text-amber-400 ${isActive('/filmes') ? 'text-amber-400' : 'text-white'}`}>Filmes</Link>
              <Link href="/avaliacoes" className={`text-lg font-medium transition-colors hover:text-amber-400 ${isActive('/avaliacoes') ? 'text-amber-400' : 'text-white'}`}>Avaliações</Link>
            </nav>

            {/* Lado Direito: Busca e Login/Logout */}
            <div className="hidden md:flex items-center justify-end gap-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-40 lg:w-56 py-2 pl-10 pr-4 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </form>
              
              {user ? (
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button onClick={logout} className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors text-sm">
                    <LogOut size={16} />
                    <span className="hidden lg:inline">Sair</span>
                  </button>
                </div>
              ) : (
                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black rounded-full font-medium hover:bg-amber-600 transition-colors text-sm flex-shrink-0">
                  <User size={16} /> Login
                </button>
              )}
            </div>

            {/* Botão do Menu Mobile (só aparece em telas pequenas) */}
            <div className="md:hidden">
              <button className="text-white focus:outline-none" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>

          {/* Menu Mobile Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {/* Links no mobile */}
              <nav className="flex flex-col items-center space-y-2">
                <Link href="/" onClick={toggleMenu} className={`block text-lg ${isActive('/') ? 'text-amber-400' : 'text-white'}`}>Menu</Link>
                <Link href="/filmes" onClick={toggleMenu} className={`block text-lg ${isActive('/filmes') ? 'text-amber-400' : 'text-white'}`}>Filmes</Link>
                <Link href="/avaliacoes" onClick={toggleMenu} className={`block text-lg ${isActive('/avaliacoes') ? 'text-amber-400' : 'text-white'}`}>Avaliações</Link>
              </nav>
              {/* Login/Logout no mobile */}
              <div className="px-4 border-t border-gray-700 pt-4">
                {user ? (
                  <div className="text-center">
                    <span className="text-white block mb-4">Bem-vindo, {user.name}!</span>
                    <button onClick={() => { logout(); setIsMenuOpen(false); }} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full font-medium">
                      <LogOut size={16} /> Sair
                    </button>
                  </div>
                ) : (
                  <button onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-amber-500 text-black rounded-full font-medium">
                    <User size={16} /> Login / Registro
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}