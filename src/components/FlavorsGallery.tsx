
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AngolanPattern2 } from './AngolanPatterns';

const FlavorsGallery = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos os Sabores' },
    { id: 'frutado', name: 'Frutados' },
    { id: 'cremoso', name: 'Cremosos' },
    { id: 'exotico', name: 'Especiais' },
    { id: 'limitado', name: 'Edição Limitada' },
    { id: 'tradicional', name: 'Tradicionais' }
  ];

  const flavors = [
    {
      id: 1,
      name: "Múcua do Bié",
      nameLocal: "Baobá Premium", 
      description: "Cremoso gelado de baobá com notas cítricas naturais da região do Bié",
      category: "frutado",
      price: "2.500 Kz",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Gengibre do Uíge",
      nameLocal: "Gengibre das Montanhas",
      description: "Refrescante gelado com gengibre fresco das montanhas do Uíge",
      category: "exotico",
      price: "2.800 Kz",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Baunilha do Namibe",
      nameLocal: "Baunilha do Deserto",
      description: "Luxuosa baunilha com toque de flor de sal do deserto do Namibe",
      category: "cremoso",
      price: "2.200 Kz",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Goiaba de Malanje",
      nameLocal: "Doçura Tropical",
      description: "Gelado artesanal com goiabas maduras de Malanje, rico e perfumado",
      category: "frutado",
      price: "2.400 Kz",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      name: "Café do Kwanza Sul", 
      nameLocal: "Robusta Premium",
      description: "Intenso gelado de café com grãos selecionados do planalto central",
      category: "cremoso",
      price: "2.600 Kz",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      name: "Mel Silvestre da Lunda",
      nameLocal: "Ouro Doce",
      description: "Edição especial com mel silvestre coletado nas florestas da Lunda Norte",
      category: "limitado",
      price: "3.200 Kz",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 7,
      name: "Açaí Energético",
      nameLocal: "Vamos de Açaí",
      description: "Cremoso açaí energético com frutas tropicais e granola crocante",
      category: "frutado",
      price: "2.800 Kz",
      image: "/lovable-uploads/c26ef467-7e18-4cb5-91f6-88447aa4f7eb.png"
    },
    {
      id: 8,
      name: "Borcelle Tradicional",
      nameLocal: "Doçura Ancestral",
      description: "Tradicional borcelle angolano com receita familiar passada de geração em geração",
      category: "tradicional",
      price: "1.800 Kz",
      image: "/lovable-uploads/32e96a36-2049-4c5e-9424-e3c0beb8e999.png"
    },
    {
      id: 9,
      name: "Polpa de Manga",
      nameLocal: "Manga Glace",
      description: "Polpa natural de manga 100% pura, gelada e refrescante",
      category: "frutado",
      price: "2.000 Kz",
      image: "/lovable-uploads/32e96a36-2049-4c5e-9424-e3c0beb8e999.png"
    },
    {
      id: 10,
      name: "Que tal um açaí hoje?",
      nameLocal: "Açaí Especial",
      description: "Açaí premium com cobertura especial e frutas frescas selecionadas",
      category: "exotico",
      price: "3.000 Kz",
      image: "/lovable-uploads/c26ef467-7e18-4cb5-91f6-88447aa4f7eb.png"
    }
  ];

  const filteredFlavors = activeFilter === 'todos' 
    ? flavors 
    : flavors.filter(flavor => flavor.category === activeFilter);

  return (
    <section id="sabores" className="py-20 bg-white relative overflow-hidden">
      {/* Padrão angolano de fundo */}
      <AngolanPattern2 className="opacity-4" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
            Nossos Sabores Premium
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto mb-8">
            Gelados artesanais feitos com os melhores ingredientes angolanos. 
            Sabores únicos que celebram a nossa cultura e tradição.
          </p>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`rounded-full transition-all duration-300 ${
                  activeFilter === category.id 
                    ? 'bg-gold-600 hover:bg-gold-700 text-white shadow-lg' 
                    : 'border-earth-300 text-earth-700 hover:bg-earth-50'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Grade de sabores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFlavors.map((flavor, index) => (
            <Card 
              key={flavor.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-b from-ivory-50 to-white rounded-2xl overflow-hidden animate-fade-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-earth-700">
                    {flavor.price}
                  </span>
                  {flavor.category === 'limitado' && (
                    <span className="bg-gold-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                      Edição Limitada
                    </span>
                  )}
                  {flavor.category === 'tradicional' && (
                    <span className="bg-earth-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                      Tradicional
                    </span>
                  )}
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6 space-y-3 relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-earth-900 mb-1">
                      {flavor.name}
                    </h3>
                    <p className="text-sm text-gold-600 font-medium">
                      {flavor.nameLocal}
                    </p>
                  </div>
                  <span className="text-lg font-bold text-primary">
                    {flavor.price}
                  </span>
                </div>
                
                <p className="text-earth-600 text-sm leading-relaxed">
                  {flavor.description}
                </p>

                {/* Categoria */}
                <div className="pt-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    flavor.category === 'frutado' ? 'bg-moss-100 text-moss-700' :
                    flavor.category === 'cremoso' ? 'bg-earth-100 text-earth-700' :
                    flavor.category === 'exotico' ? 'bg-gold-100 text-gold-700' :
                    flavor.category === 'tradicional' ? 'bg-amber-100 text-amber-700' :
                    'bg-ivory-200 text-earth-800'
                  }`}>
                    {categories.find(cat => cat.id === flavor.category)?.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFlavors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-earth-500 text-lg">
              Nenhum sabor encontrado para esta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FlavorsGallery;
