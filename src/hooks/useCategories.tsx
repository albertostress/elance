import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface Category {
  id: string;
  name: string;
  created_at: string;
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
        .order('name', { ascending: true });

      if (error) {
        console.error('Error fetching categories:', error);
        return;
      }

      setCategories(data || []);
    } catch (error) {
      console.error('Error in fetchCategories:', error);
    } finally {
      setLoading(false);
    }
  };

  const addCategory = async (name: string) => {
    if (!user) {
      console.error('User not authenticated');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('categories')
        .insert({ name })
        .select()
        .single();

      if (error) {
        console.error('Error adding category:', error);
        return;
      }

      setCategories(prev => [...prev, data].sort((a, b) => a.name.localeCompare(b.name)));
    } catch (error) {
      console.error('Error in addCategory:', error);
    }
  };

  const updateCategory = async (id: string, name: string) => {
    if (!user) {
      console.error('User not authenticated');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('categories')
        .update({ name })
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating category:', error);
        return;
      }

      setCategories(prev => 
        prev.map(cat => cat.id === id ? data : cat)
          .sort((a, b) => a.name.localeCompare(b.name))
      );
    } catch (error) {
      console.error('Error in updateCategory:', error);
    }
  };

  const deleteCategory = async (id: string) => {
    if (!user) {
      console.error('User not authenticated');
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

      setCategories(prev => prev.filter(cat => cat.id !== id));
    } catch (error) {
      console.error('Error in deleteCategory:', error);
    }
  };

  return {
    categories,
    loading,
    addCategory,
    updateCategory,
    deleteCategory,
    refetch: fetchCategories
  };
};