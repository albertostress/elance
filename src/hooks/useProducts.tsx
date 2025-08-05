import { useState, useEffect } from 'react';

export interface Product {
  id: number;
  name: string;
  nameLocal?: string;
  description: string;
  category: string;
  price: string;
  image: string;
  imagePosition?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  verticalPosition?: number;
  horizontalPosition?: number;
}

const defaultProducts: Product[] = [
  // Cafés Quentes
  {
    id: 1,
    name: "Café Expresso",
    description: "Café expresso encorpado com aroma intenso",
    category: "cafes_quentes",
    price: "800 Kz",
    image: "https://i.imgur.com/32e96a36.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 2,
    name: "Café Duplo",
    description: "Dose dupla de café expresso para mais energia",
    category: "cafes_quentes",
    price: "1.600 Kz",
    image: "https://i.imgur.com/36e65ac6.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 3,
    name: "Capuccino Cremoso",
    description: "Café expresso com espuma cremosa de leite vaporizado",
    category: "cafes_quentes",
    price: "2.000 Kz",
    image: "https://i.imgur.com/626bad5e.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 4,
    name: "Macchiato",
    description: "Café expresso com uma pitada de espuma de leite",
    category: "cafes_quentes",
    price: "2.000 Kz",
    image: "https://i.imgur.com/83f76c71.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 5,
    name: "Mocha",
    description: "Café com chocolate quente e espuma cremosa",
    category: "cafes_quentes",
    price: "3.000 Kz",
    image: "https://i.imgur.com/8f3ff22e.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 6,
    name: "Galão",
    description: "Café suave com muito leite cremoso",
    category: "cafes_quentes",
    price: "2.000 Kz",
    image: "https://i.imgur.com/c26ef467.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },

  // Cafés Gelados
  {
    id: 7,
    name: "Affogato",
    description: "Gelado de baunilha com café expresso quente por cima",
    category: "cafes_gelados",
    price: "3.500 Kz",
    image: "https://i.imgur.com/32e96a36.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 8,
    name: "Shakerato",
    description: "Café gelado agitado com gelo e açúcar",
    category: "cafes_gelados",
    price: "2.100 Kz",
    image: "https://i.imgur.com/36e65ac6.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 9,
    name: "Frappé Coffee",
    description: "Café gelado batido com gelo e leite cremoso",
    category: "cafes_gelados",
    price: "2.000 Kz",
    image: "https://i.imgur.com/626bad5e.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 10,
    name: "Latte Gelado",
    description: "Café com leite servido gelado com gelo",
    category: "cafes_gelados",
    price: "2.000 Kz",
    image: "https://i.imgur.com/83f76c71.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 11,
    name: "Expresso Tonic",
    description: "Café expresso com água tônica e limão",
    category: "cafes_gelados",
    price: "2.000 Kz",
    image: "https://i.imgur.com/8f3ff22e.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },

  // Chocolates Quentes
  {
    id: 12,
    name: "Chocolate Quentes Italiano",
    description: "Chocolate, leite, açúcar, cacau, baunilha",
    category: "chocolates",
    price: "3.500 Kz",
    image: "https://i.imgur.com/c26ef467.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 13,
    name: "Chocolate Quentes Mexicano",
    description: "Chocolate, leite, açúcar, cacau, baunilha, picante",
    category: "chocolates",
    price: "3.500 Kz",
    image: "https://i.imgur.com/32e96a36.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 14,
    name: "Chocolate Quentes Grego",
    description: "Chocolate, leite condensado, água, cacau, baunilha",
    category: "chocolates",
    price: "3.500 Kz",
    image: "https://i.imgur.com/36e65ac6.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 15,
    name: "Chocolate Quentes ELANCE",
    description: "Chocolate, leite creme, cacau, café, licor de café",
    category: "chocolates",
    price: "3.800 Kz",
    image: "https://i.imgur.com/626bad5e.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },

  // Gelados
  {
    id: 16,
    name: "Gelado de Manga",
    nameLocal: "Doçura Tropical",
    description: "Refrescante gelado natural de manga madura",
    category: "gelados",
    price: "2.500 Kz",
    image: "https://i.imgur.com/83f76c71.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 17,
    name: "Frutos Vermelho",
    description: "Mix de frutas vermelhas frescas em gelado cremoso",
    category: "gelados",
    price: "2.500 Kz",
    image: "https://i.imgur.com/8f3ff22e.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 18,
    name: "Gelado de Limão",
    description: "Refrescante gelado cítrico de limão natural",
    category: "gelados",
    price: "2.500 Kz",
    image: "https://i.imgur.com/c26ef467.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 19,
    name: "Gelado de Chocolate",
    description: "Rico gelado de chocolate belga premium",
    category: "gelados",
    price: "2.500 Kz",
    image: "https://i.imgur.com/32e96a36.png",
    verticalPosition: 50,
    horizontalPosition: 50
  },
  {
    id: 20,
    name: "Gelado de Múcua",
    nameLocal: "Baobá Premium",
    description: "Tradicional gelado de múcua com sabor único angolano",
    category: "gelados",
    price: "2.800 Kz",
    image: "https://i.imgur.com/36e65ac6.png",
    verticalPosition: 50,
    horizontalPosition: 50
  }
];

// Função auxiliar para tentar salvar no localStorage com tratamento de erro
const safeSetItem = (key: string, value: string): boolean => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn('Failed to save to localStorage:', error);
    // Se falhar, tenta limpar dados antigos e tentar novamente
    try {
      localStorage.removeItem(key);
      localStorage.setItem(key, value);
      return true;
    } catch (secondError) {
      console.error('localStorage completely full, using default data only:', secondError);
      return false;
    }
  }
};

// Função auxiliar para obter dados do localStorage
const safeGetItem = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn('Failed to read from localStorage:', error);
    return null;
  }
};

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    // Sempre usar os produtos padrão no site público
    console.log('Usando produtos padrão:', defaultProducts.length);
    return defaultProducts;
  });

  useEffect(() => {
    const dataToSave = JSON.stringify(products);
    const success = safeSetItem('elance-products', dataToSave);
    
    if (success) {
      console.log('Produtos salvos no localStorage:', products.length);
    } else {
      console.warn('Não foi possível salvar no localStorage, dados mantidos apenas na sessão');
    }
  }, [products]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Math.max(...products.map(p => p.id), 0) + 1
    };
    console.log('Adicionando produto:', newProduct.name);
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id: number, updatedProduct: Omit<Product, 'id'>) => {
    console.log('Atualizando produto ID:', id);
    setProducts(products.map(product => 
      product.id === id ? { ...updatedProduct, id } : product
    ));
  };

  const deleteProduct = (id: number) => {
    console.log('Deletando produto ID:', id);
    setProducts(products.filter(product => product.id !== id));
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct
  };
};
