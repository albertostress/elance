import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import { useCategories } from '@/hooks/useCategories';

const CategoryManager = () => {
  const { categories, loading, addCategory, updateCategory, deleteCategory } = useCategories();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [editCategoryName, setEditCategoryName] = useState('');

  const handleAdd = async () => {
    if (newCategoryName.trim()) {
      await addCategory(newCategoryName.trim());
      setNewCategoryName('');
      setIsAdding(false);
    }
  };

  const handleEdit = (category: any) => {
    setEditingId(category.id);
    setEditCategoryName(category.name);
  };

  const handleUpdate = async () => {
    if (editingId && editCategoryName.trim()) {
      await updateCategory(editingId, editCategoryName.trim());
      setEditingId(null);
      setEditCategoryName('');
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta categoria?')) {
      await deleteCategory(id);
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setNewCategoryName('');
    setEditCategoryName('');
  };

  if (loading) {
    return <div>Carregando categorias...</div>;
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Gestão de Categorias
          {!isAdding && (
            <Button onClick={() => setIsAdding(true)} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Categoria
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isAdding && (
          <div className="mb-4 p-4 border rounded-lg bg-muted/50">
            <div className="flex gap-2 items-end">
              <div className="flex-1">
                <Label htmlFor="new-category">Nova Categoria</Label>
                <Input
                  id="new-category"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="Nome da categoria"
                  onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                />
              </div>
              <Button onClick={handleAdd} size="sm">
                Adicionar
              </Button>
              <Button onClick={handleCancel} variant="outline" size="sm">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between p-3 border rounded-lg">
              {editingId === category.id ? (
                <div className="flex gap-2 items-center flex-1">
                  <Input
                    value={editCategoryName}
                    onChange={(e) => setEditCategoryName(e.target.value)}
                    className="flex-1"
                    onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
                  />
                  <Button onClick={handleUpdate} size="sm">
                    Salvar
                  </Button>
                  <Button onClick={handleCancel} variant="outline" size="sm">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <span className="font-medium">{category.name}</span>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEdit(category)}
                      variant="outline"
                      size="sm"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => handleDelete(category.id)}
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {categories.length === 0 && (
          <p className="text-center text-muted-foreground py-4">
            Nenhuma categoria encontrada. Adicione a primeira categoria.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default CategoryManager;