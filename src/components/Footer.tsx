
import { Heart, Instagram, Facebook, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              ELANCE Cafeteria
            </h3>
            <p className="text-earth-300 leading-relaxed mb-6 max-w-md">
              A melhor cafeteria de Luanda com gelados artesanais, cafés premium, 
              chocolates especiais e muito mais. Qualidade e sabor únicos.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-earth-800 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-earth-800 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-earth-300 hover:text-gold-400 transition-colors duration-200">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-earth-300 hover:text-gold-400 transition-colors duration-200">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#menu" className="text-earth-300 hover:text-gold-400 transition-colors duration-200">
                  Menu
                </a>
              </li>
              <li>
                <a href="#loja" className="text-earth-300 hover:text-gold-400 transition-colors duration-200">
                  Nossa Loja
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-earth-300 hover:text-gold-400 transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3 text-earth-300 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Bairro BPC Camama<br />
                  Luanda, Angola
                </span>
              </div>
              
              <div>
                <span className="block">+244 941 693 261</span>
                <span className="block">elance.100@cafeteria.ao</span>
              </div>
              
              <div>
                <span className="block font-medium text-white">Horários:</span>
                <span className="block">Seg-Sex: 9h-20h</span>
                <span className="block">Sáb: 9h-21h | Dom: 10h-19h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-earth-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-earth-300 text-sm">
              <span>© {currentYear} ELANCE Cafeteria. Feito com</span>
              <Heart className="w-4 h-4 text-gold-500 fill-current" />
              <span>em Angola.</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-earth-300">
              <a href="#" className="hover:text-gold-400 transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
