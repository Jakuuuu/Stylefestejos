import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
             <div className="flex items-center gap-2 mb-4">
                <div className="text-brand-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                </div>
                <span className="font-bold text-lg text-slate-900">StyleFestejos</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Creando momentos inolvidables para tus celebraciones más importantes. Pasión por los detalles y excelencia en cada evento.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Empresa</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Prensa</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="text-brand-500 font-medium">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Política de Cookies</a></li>
            </ul>
          </div>

          {/* Contacto - UPDATED AS REQUESTED */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Contacto</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-400 mt-0.5" />
                <span>info@stylefestejos.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-slate-400 mt-0.5" />
                <span>04241063888</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
                <span>CARACAS</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© 2023 Style Festejos. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;