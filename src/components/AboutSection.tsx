
import { Heart, Leaf, Award } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-gold-600" />,
      title: "Paixão pela Tradição",
      description: "Celebramos a rica herança cultural angolana em cada criação"
    },
    {
      icon: <Leaf className="w-8 h-8 text-moss-600" />,
      title: "Ingredientes Locais",
      description: "Selecionamos os melhores produtos de todas as províncias de Angola"
    },
    {
      icon: <Award className="w-8 h-8 text-earth-600" />,
      title: "Qualidade Premium",
      description: "Técnicas artesanais européias encontram sabores africanos autênticos"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-earth-50 to-moss-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Imagem */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Interior da loja Muxima Gelato"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Elementos decorativos */}
            <div className="absolute -z-10 -top-4 -left-4 w-full h-full bg-gold-200 rounded-3xl opacity-20"></div>
          </div>

          {/* Conteúdo */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-6">
              Uma História de 
              <span className="text-gold-600 block">Sabor e Identidade</span>
            </h2>
            
            <p className="text-lg text-earth-700 mb-8 leading-relaxed">
              A Muxima Gelato nasceu do desejo de criar algo verdadeiramente especial: 
              gelados artesanais que honram a diversidade e riqueza dos sabores angolanos, 
              elevados a um padrão internacional de qualidade.
            </p>

            <p className="text-earth-600 mb-10 leading-relaxed">
              Cada sabor conta uma história, cada ingrediente representa uma região, 
              cada gelado é uma celebração da nossa identidade cultural. 
              Do múcua do interior às especiarias da costa, criamos experiências únicas 
              que conectam tradição e inovação.
            </p>

            {/* Valores */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={value.title} 
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-earth-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
