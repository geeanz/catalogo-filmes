// Arquivo: app/layout.tsx (modificado)

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AuthProvider } from '@/app/context/AuthContext'; // <-- Linha CORRETA
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cine Star - Catálogo de Filmes',
  description: 'Seu guia completo para o mundo do cinema. Descubra, avalie e compartilhe sua paixão pelos filmes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* 2. ENVOLVA TUDO COM O AUTHPROVIDER */}
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}