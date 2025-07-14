
import { Card, CardContent } from '@/components/ui/card';

const FeaturedFlavors = () => {
  const flavors = [
    {
      name: "Múcua do Bié",
      description: "Cremoso gelado de baobá com notas cítricas naturais",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      language: "Umbundu"
    },
    {
      name: "Gengibre do Uíge", 
      description: "Refrescante gelado com gengibre fresco das montanhas",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      language: "Kimbundu"
    },
    {
      name: "Baunilha do Namibe",
      description: "Luxuosa baunilha com toque de flor de sal do deserto",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
      language: "Tchokwe"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
            Sabores que Contam Histórias
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Cada gelado é uma viagem pelos sabores autênticos de Angola, 
            criados com ingredientes locais de qualidade superior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <Card 
              key={flavor.name} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-b from-ivory-50 to-white rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-earth-700">
                  {flavor.language}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-earth-900 mb-2">
                  {flavor.name}
                </h3>
                <p className="text-earth-600 leading-relaxed">
                  {flavor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFlavors;
