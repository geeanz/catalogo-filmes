import Link from 'next/link';
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/90 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-400">CINE STAR</h3>
            <p className="text-gray-300">
              Seu guia completo para o mundo do cinema. Descubra, avalie e compartilhe sua paixão pelos filmes.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Menu Principal
                </Link>
              </li>
              <li>
                <Link href="/filmes" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Filmes
                </Link>
              </li>
              <li>
                <Link href="/avaliacoes" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Avaliações
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Quem Somos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Parcerias
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-400" />
                <a href="mailto:contato@cinestar.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                  contato@cinestar.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-400" />
                <a href="tel:+551199999999" className="text-gray-300 hover:text-amber-400 transition-colors">
                  (11) 9999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Cine Star. Todos os direitos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-amber-400 transition-colors">Política de Privacidade</a>
            {' | '}
            <a href="#" className="hover:text-amber-400 transition-colors">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
}