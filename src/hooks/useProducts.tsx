import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface Product {
  id: string;
  name: string;
  nameLocal?: string;
  description: string;
  category: string;
  price: string;
  image_url: string | null;
  image_position_vertical?: number;
  image_position_horizontal?: number;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Fetch products from Supabase
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching products:', error);
        return;
      }

      // Transform database data to match Product interface
      const transformedProducts = data?.map(item => ({
        id: item.id,
        name: item.name,
        nameLocal: undefined,
        description: item.description,
        category: item.category,
        price: `${item.price} Kz`,
        image_url: item.image_url,
        image_position_vertical: item.image_position_vertical,
        image_position_horizontal: item.image_position_horizontal
      })) || [];

      setProducts(transformedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product: Omit<Product, 'id'>) => {
    if (!user) {
      console.error('User must be authenticated to add products');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('products')
        .insert([{
          name: product.name,
          description: product.description,
          category: product.category,
          price: parseFloat(product.price.replace(/[^\d.,]/g, '').replace(',', '.')),
          image_url: product.image_url,
          image_position_vertical: product.image_position_vertical || 50,
          image_position_horizontal: product.image_position_horizontal || 50
        }])
        .select()
        .single();

      if (error) {
        console.error('Error adding product:', error);
        return;
      }

      if (data) {
        const transformedProduct = {
          id: data.id,
          name: data.name,
          nameLocal: undefined,
          description: data.description,
          category: data.category,
          price: `${data.price} Kz`,
          image_url: data.image_url,
          image_position_vertical: data.image_position_vertical,
          image_position_horizontal: data.image_position_horizontal
        };
        setProducts([...products, transformedProduct]);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const updateProduct = async (id: string, updatedProduct: Omit<Product, 'id'>) => {
    if (!user) {
      console.error('User must be authenticated to update products');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('products')
        .update({
          name: updatedProduct.name,
          description: updatedProduct.description,
          category: updatedProduct.category,
          price: parseFloat(updatedProduct.price.replace(/[^\d.,]/g, '').replace(',', '.')),
          image_url: updatedProduct.image_url,
          image_position_vertical: updatedProduct.image_position_vertical || 50,
          image_position_horizontal: updatedProduct.image_position_horizontal || 50
        })
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating product:', error);
        return;
      }

      if (data) {
        const transformedProduct = {
          id: data.id,
          name: data.name,
          nameLocal: undefined,
          description: data.description,
          category: data.category,
          price: `${data.price} Kz`,
          image_url: data.image_url,
          image_position_vertical: data.image_position_vertical,
          image_position_horizontal: data.image_position_horizontal
        };
        setProducts(products.map(product => 
          product.id === id ? transformedProduct : product
        ));
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduct = async (id: string) => {
    if (!user) {
      console.error('User must be authenticated to delete products');
      return;
    }

    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting product:', error);
        return;
      }

      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    if (!user) {
      console.error('User must be authenticated to upload images');
      return null;
    }

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        return null;
      }

      const { data } = supabase.storage
        .from('product-images')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  return {
    products,
    loading,
    addProduct,
    updateProduct,
    deleteProduct,
    uploadImage
  };
};