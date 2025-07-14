
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory-100 via-earth-50 to-gold-50"></div>
      
      {/* Padrão decorativo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-earth-400 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-gold-400 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-moss-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo textual */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-earth-900 mb-6 leading-tight">
              O sabor da nossa
              <span className="text-gold-600 block">terra refinado</span>
              para o mundo
            </h1>
            
            <p className="text-lg md:text-xl text-earth-700 mb-8 max-w-lg">
              Gelados artesanais de luxo que celebram a rica cultura angolana, 
              criados com ingredientes locais e amor pela tradição.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gold-600 hover:bg-gold-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('sabores')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Sabores
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-earth-400 text-earth-700 hover:bg-earth-50 px-8 py-3 rounded-full font-medium transition-all duration-300"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossa História
              </Button>
            </div>
          </div>

          {/* Imagem hero */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Gelado artesanal Muxima"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/20 to-transparent"></div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-200 rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-moss-200 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-earth-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-earth-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
