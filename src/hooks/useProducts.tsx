
import { useState, useEffect } from 'react';

export interface Product {
  id: number;
  name: string;
  nameLocal: string;
  description: string;
  category: string;
  price: string;
  image: string;
}

const defaultProducts: Product[] = [
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
  },
  {
    id: 11,
    name: "Gelado de Manga",
    nameLocal: "Manga Tropical",
    description: "Refrescante. Natural. Tropical. Experimente o nosso delicioso gelado de manga",
    category: "frutado",
    price: "2.300 Kz",
    image: "/lovable-uploads/626bad5e-9f4a-48cc-afff-74f6c2b51c5d.png"
  }
];

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem('gelados-products');
    return savedProducts ? JSON.parse(savedProducts) : defaultProducts;
  });

  useEffect(() => {
    localStorage.setItem('gelados-products', JSON.stringify(products));
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
