// Arquivo: components/LoginModal.tsx

"use client";

import { useState } from 'react';
import { useAuth } from '@/app/context/AuthContext'; // <-- CAMINHO CORRIGIDO
import { X } from 'lucide-react';

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [name, setName] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      login(name.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-sm relative text-gray-900">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">Login / Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Seu Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Digite seu nome de usuário"
              required
            />
          </div>
          <button type="submit" className="w-full bg-amber-500 text-black font-bold py-2 px-6 rounded-full hover:bg-amber-600 transition-all duration-300">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}