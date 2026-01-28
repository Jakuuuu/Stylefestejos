import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
             {/* 
                IMPORTANTE: Reemplaza la URL del src a continuación con la URL directa de tu imagen logo.png 
                Por ejemplo: src="https://tu-servidor.com/logo.png" o importa la imagen localmente.
             */}
             <img 
               src="https://placehold.co/200x80/transparent/f97316?text=Style+Festejos" 
               alt="Style Festejos" 
               className="h-16 w-auto object-contain"
             />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Inicio</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Servicios</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Nosotros</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Contacto</a>
            <button className="bg-brand-400 hover:bg-brand-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg">
              Planificar Evento
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-500 hover:text-slate-700 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md">Inicio</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md">Servicios</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md">Nosotros</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50 rounded-md">Contacto</a>
            <div className="pt-2">
                <button className="w-full bg-brand-400 text-white px-5 py-3 rounded-lg text-center font-semibold">
                Planificar Evento
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;