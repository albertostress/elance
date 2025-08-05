
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AngolanPattern2 } from './AngolanPatterns';
import { useProducts } from '@/hooks/useProducts';

const MenuGallery = () => {
  const [activeFilter, setActiveFilter] = useState('gelados');
  const { products } = useProducts();

  console.log('Total produtos carregados:', products.length);
  console.log('Produtos:', products);

  const categories = [
    { id: 'gelados', name: 'Gelados' },
    { id: 'cafes_quentes', name: 'Cafés Quentes' },
    { id: 'cafes_gelados', name: 'Cafés Gelados' },
    { id: 'chocolates', name: 'Chocolates Quentes' },
    { id: 'especiais', name: 'Especialidades' }
  ];

  const filteredProducts = products.filter(product => product.category === activeFilter);

  console.log('Filtro ativo:', activeFilter);
  console.log('Produtos filtrados:', filteredProducts.length);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
  };

  return (
    <section id="menu" className="py-20 bg-white relative overflow-hidden">
      {/* Padrão angolano de fundo */}
      <AngolanPattern2 className="opacity-4" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
            Nosso Menu Premium
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto mb-8">
            Desde gelados artesanais até cafés aromáticos, chocolates especiais e chás únicos. 
            Uma experiência gastronómica única na ELANCE Geladaria e Casa de Chá.
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

        {/* Grade de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-b from-ivory-50 to-white rounded-2xl overflow-hidden animate-fade-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image_url || "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{
                    objectPosition: `${product.image_position_horizontal || 50}% ${product.image_position_vertical || 50}%`
                  }}
                  onError={handleImageError}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-earth-700">
                    {product.price}
                  </span>
                  {product.category === 'especiais' && (
                    <span className="bg-gold-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                      Especialidade
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
                      {product.name}
                    </h3>
                    {product.nameLocal && (
                      <p className="text-sm text-gold-600 font-medium">
                        {product.nameLocal}
                      </p>
                    )}
                  </div>
                  <span className="text-lg font-bold text-primary">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-earth-600 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Categoria */}
                <div className="pt-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    product.category === 'gelados' ? 'bg-moss-100 text-moss-700' :
                    product.category === 'cafes_quentes' ? 'bg-earth-100 text-earth-700' :
                    product.category === 'cafes_gelados' ? 'bg-gold-100 text-gold-700' :
                    product.category === 'chocolates' ? 'bg-amber-100 text-amber-700' :
                    'bg-ivory-200 text-earth-800'
                  }`}>
                    {categories.find(cat => cat.id === product.category)?.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-earth-500 text-lg">
              Nenhum produto encontrado para esta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuGallery;
