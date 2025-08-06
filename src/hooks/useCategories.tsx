import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface Category {
  id: string;
  name: string;
  label: string;
}

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching categories:', error);
        return;
      }

      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const addCategory = async (category: Omit<Category, 'id'>) => {
    if (!user) {
      console.error('User must be authenticated to add categories');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('categories')
        .insert([{
          name: category.name,
          label: category.label
        }])
        .select()
        .single();

      if (error) {
        console.error('Error adding category:', error);
        return;
      }

      if (data) {
        setCategories([...categories, data]);
      }
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const updateCategory = async (id: string, updatedCategory: Omit<Category, 'id'>) => {
    if (!user) {
      console.error('User must be authenticated to update categories');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('categories')
        .update({
          name: updatedCategory.name,
          label: updatedCategory.label
        })
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating category:', error);
        return;
      }

      if (data) {
        setCategories(categories.map(category => 
          category.id === id ? data : category
        ));
      }
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const deleteCategory = async (id: string) => {
    if (!user) {
      console.error('User must be authenticated to delete categories');
      return;
    }

    try {
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting category:', error);
        return;
      }

      setCategories(categories.filter(category => category.id !== id));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return {
    categories,
    loading,
    addCategory,
    updateCategory,
    deleteCategory,
    fetchCategories
  };
};