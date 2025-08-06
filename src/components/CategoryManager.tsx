import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCategories, Category } from '@/hooks/useCategories';
import { Pencil, Trash2, Plus } from 'lucide-react';

const CategoryManager = () => {
  const { categories, addCategory, updateCategory, deleteCategory, loading } = useCategories();
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    label: ''
  });

  const handleEdit = (category: Category) => {
    setIsEditing(category.id);
    setFormData({
      name: category.name,
      label: category.label
    });
  };

  const handleSave = () => {
    if (isAdding) {
      addCategory(formData);
      setIsAdding(false);
    } else if (isEditing) {
      updateCategory(isEditing, formData);
      setIsEditing(null);
    }
    resetForm();
  };

  const handleCancel = () => {
    setIsEditing(null);
    setIsAdding(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      label: ''
    });
  };

  const handleAdd = () => {
    setIsAdding(true);
    resetForm();
  };

  if (loading) {
    return (
      <div className="text-center">
        <p>Carregando categorias...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-serif font-bold text-earth-900">
          Gestor de Categorias
        </h2>
        <Button onClick={handleAdd} className="bg-gold-600 hover:bg-gold-700">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Categoria
        </Button>
      </div>

      {(isAdding || isEditing) && (
        <Card>
          <CardHeader>
            <CardTitle>
              {isAdding ? 'Adicionar Nova Categoria' : 'Editar Categoria'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Nome da Categoria (ID)</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Ex: bebidas_quentes"
              />
              <p className="text-sm text-earth-500 mt-1">
                Use apenas letras minúsculas, números e underscores
              </p>
            </div>
            
            <div>
              <Label htmlFor="label">Nome de Exibição</Label>
              <Input
                id="label"
                value={formData.label}
                onChange={(e) => setFormData({...formData, label: e.target.value})}
                placeholder="Ex: Bebidas Quentes"
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button onClick={handleSave} className="bg-gold-600 hover:bg-gold-700">
                Salvar
              </Button>
              <Button onClick={handleCancel} variant="outline">
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Card key={category.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-serif font-semibold text-earth-900">
                    {category.label}
                  </h3>
                  <p className="text-sm text-earth-600">
                    ID: {category.name}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleEdit(category)}
                    className="bg-white/90 hover:bg-white"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteCategory(category.id)}
                    className="bg-red-500/90 hover:bg-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryManager;