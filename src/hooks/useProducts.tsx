
import { useState, useEffect } from 'react';

export interface Product {
  id: number;
  name: string;
  nameLocal?: string;
  description: string;
  category: string;
  price: string;
  image: string;
}

const defaultProducts: Product[] = [
  // Cafés Quentes
  {
    id: 1,
    name: "Café Expresso",
    description: "Café expresso encorpado com aroma intenso",
    category: "cafes_quentes",
    price: "800 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Café Duplo",
    description: "Dose dupla de café expresso para mais energia",
    category: "cafes_quentes",
    price: "1.600 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Capuccino Cremoso",
    description: "Café expresso com espuma cremosa de leite vaporizado",
    category: "cafes_quentes",
    price: "2.000 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Macchiato",
    description: "Café expresso com uma pitada de espuma de leite",
    category: "cafes_quentes",
    price: "2.000 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Mocha",
    description: "Café com chocolate quente e espuma cremosa",
    category: "cafes_quentes",
    price: "3.000 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    name: "Galão",
    description: "Café suave com muito leite cremoso",
    category: "cafes_quentes",
    price: "2.000 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },

  // Cafés Gelados
  {
    id: 7,
    name: "Affogato",
    description: "Gelado de baunilha com café expresso quente por cima",
    category: "cafes_gelados",
    price: "3.500 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    name: "Shakerato",
    description: "Café gelado agitado com gelo e açúcar",
    category: "cafes_gelados",
    price: "2.100 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 9,
    name: "Frappé Coffee",
    description: "Café gelado batido com gelo e leite cremoso",
    category: "cafes_gelados",
    price: "2.000 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 10,
    name: "Latte Gelado",
    description: "Café com leite servido gelado com gelo",
    category: "cafes_gelados",
    price: "2.000 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 11,
    name: "Expresso Tonic",
    description: "Café expresso com água tônica e limão",
    category: "cafes_gelados",
    price: "2.000 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },

  // Chocolates Quentes
  {
    id: 12,
    name: "Chocolate Quentes Italiano",
    description: "Chocolate, leite, açúcar, cacau, baunilha",
    category: "chocolates",
    price: "3.500 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 13,
    name: "Chocolate Quentes Mexicano",
    description: "Chocolate, leite, açúcar, cacau, baunilha, picante",
    category: "chocolates",
    price: "3.500 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 14,
    name: "Chocolate Quentes Grego",
    description: "Chocolate, leite condensado, água, cacau, baunilha",
    category: "chocolates",
    price: "3.500 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 15,
    name: "Chocolate Quentes ELANCE",
    description: "Chocolate, leite creme, cacau, café, licor de café",
    category: "chocolates",
    price: "3.800 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },

  // Gelados
  {
    id: 16,
    name: "Gelado de Manga",
    nameLocal: "Doçura Tropical",
    description: "Refrescante gelado natural de manga madura",
    category: "gelados",
    price: "2.500 Kz",
    image: "/lovable-uploads/36e65ac6-eb88-4165-9f22-28fdd7ae3fab.png"
  },
  {
    id: 17,
    name: "Frutos Vermelho",
    description: "Mix de frutas vermelhas frescas em gelado cremoso",
    category: "gelados",
    price: "2.500 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 18,
    name: "Gelado de Limão",
    description: "Refrescante gelado cítrico de limão natural",
    category: "gelados",
    price: "2.500 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 19,
    name: "Gelado de Chocolate",
    description: "Rico gelado de chocolate belga premium",
    category: "gelados",
    price: "2.500 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 20,
    name: "Gelado de Múcua",
    nameLocal: "Baobá Premium",
    description: "Tradicional gelado de múcua com sabor único angolano",
    category: "gelados",
    price: "2.800 Kz",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem('elance-products');
    return savedProducts ? JSON.parse(savedProducts) : defaultProducts;
  });

  useEffect(() => {
    localStorage.setItem('elance-products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Math.max(...products.map(p => p.id), 0) + 1
    };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id: number, updatedProduct: Omit<Product, 'id'>) => {
    setProducts(products.map(product => 
      product.id === id ? { ...updatedProduct, id } : product
    ));
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct
  };
};
