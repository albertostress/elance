
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AngolanPattern1 } from './AngolanPatterns';
import LogoWithoutBg from './LogoWithoutBg';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-accent/10"></div>
      
      {/* Padrão angolano de fundo */}
      <AngolanPattern1 className="opacity-8" />
      
      {/* Padrão decorativo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-gold-400/30 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-earth-400/30 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-moss-400/40 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border-2 border-gold-300/20 transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo ELANCE integrado */}
          <div className="animate-fade-in mb-8">
            <LogoWithoutBg className="w-48 h-48 mx-auto mb-6 opacity-90" />
          </div>
          
          {/* Conteúdo textual centralizado */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 leading-tight">
              ELANCE
              <span className="text-primary block">Cafeteria</span>
              Premium
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              A melhor cafeteria de Luanda com gelados artesanais, cafés quentes, 
              chocolates especiais e muito mais. Qualidade premium, sabores únicos.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Menu
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
