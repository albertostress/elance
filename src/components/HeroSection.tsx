
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-accent/10"></div>
      
      {/* Padrão decorativo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/20 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-accent/30 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-secondary/40 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Conteúdo textual centralizado */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 leading-tight">
              Gelados Artesanais
              <span className="text-primary block">Premium</span>
              em Luanda
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Descubra sabores únicos criados especialmente para o paladar angolano. 
              Ingredientes locais, qualidade internacional, sabor incomparável.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                onClick={() => document.getElementById('sabores')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Sabores
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 rounded-full font-medium transition-all duration-300 text-lg"
                onClick={() => document.getElementById('loja')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Visitar Loja
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
