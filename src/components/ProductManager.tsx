import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useProducts, Product } from '@/hooks/useProducts';
import { useCategories } from '@/hooks/useCategories';
import { Pencil, Trash2, Plus, Upload } from 'lucide-react';

const ProductManager = () => {
  const { products, addProduct, updateProduct, deleteProduct, uploadImage, loading } = useProducts();
  const { categories, loading: categoriesLoading } = useCategories();
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    nameLocal: '',
    description: '',
    category: '',
    price: '',
    image_url: null as string | null,
    image_position_vertical: 50,
    image_position_horizontal: 50
  });


  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
  };

  const getImageStyle = (product: Product) => {
    if (product.image_position_vertical !== undefined && product.image_position_horizontal !== undefined) {
      return {
        objectPosition: `${product.image_position_horizontal}% ${product.image_position_vertical}%`
      };
    }
    return { objectPosition: 'center' };
  };

  const handleEdit = (product: Product) => {
    setIsEditing(product.id);
    setFormData({
      name: product.name,
      nameLocal: product.nameLocal || '',
      description: product.description,
      category: product.category,
      price: product.price,
      image_url: product.image_url,
      image_position_vertical: product.image_position_vertical || 50,
      image_position_horizontal: product.image_position_horizontal || 50
    });
  };

  const handleSave = () => {
    if (isAdding) {
      addProduct(formData);
      setIsAdding(false);
    } else if (isEditing) {
      updateProduct(isEditing, formData);
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
      nameLocal: '',
      description: '',
      category: '',
      price: '',
      image_url: null,
      image_position_vertical: 50,
      image_position_horizontal: 50
    });
  };

  const handleAdd = () => {
    setIsAdding(true);
    resetForm();
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = await uploadImage(file);
    if (imageUrl) {
      setFormData({ ...formData, image_url: imageUrl });
    }
  };

  if (loading || categoriesLoading) {
    return (
      <div className="text-center">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-serif font-bold text-earth-900">
          Gestor de Menu
        </h2>
        <Button onClick={handleAdd} className="bg-gold-600 hover:bg-gold-700">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Produto
        </Button>
      </div>

      {(isAdding || isEditing) && (
        <Card>
          <CardHeader>
            <CardTitle>
              {isAdding ? 'Adicionar Novo Produto' : 'Editar Produto'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome do Produto</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ex: Café Expresso"
                />
              </div>
              <div>
                <Label htmlFor="nameLocal">Nome Local (opcional)</Label>
                <Input
                  id="nameLocal"
                  value={formData.nameLocal}
                  onChange={(e) => setFormData({...formData, nameLocal: e.target.value})}
                  placeholder="Ex: Café Tradicional"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Descrição detalhada do produto"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category">Categoria</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => setFormData({...formData, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecionar categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.name}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="price">Preço</Label>
                <Input
                  id="price"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  placeholder="Ex: 2.500 Kz"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="image">Imagem do Produto</Label>
              <div className="mt-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="block w-full text-sm text-earth-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gold-50 file:text-gold-700 hover:file:bg-gold-100"
                />
                {formData.image_url && (
                  <div className="mt-4">
                    <img
                      src={formData.image_url}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-lg"
                      style={getImageStyle({ 
                        image_position_vertical: formData.image_position_vertical, 
                        image_position_horizontal: formData.image_position_horizontal 
                      } as Product)}
                    />
                  </div>
                )}
              </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={product.image_url || "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
                style={getImageStyle(product)}
                onError={handleImageError}
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleEdit(product)}
                  className="bg-white/90 hover:bg-white"
                >
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500/90 hover:bg-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-serif font-semibold text-earth-900">
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
              
              <p className="text-earth-600 text-sm mb-3">
                {product.description}
              </p>

              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                product.category === 'gelados' ? 'bg-moss-100 text-moss-700' :
                product.category === 'cafes_quentes' ? 'bg-earth-100 text-earth-700' :
                product.category === 'cafes_gelados' ? 'bg-gold-100 text-gold-700' :
                product.category === 'chocolates' ? 'bg-amber-100 text-amber-700' :
                'bg-ivory-200 text-earth-800'
              }`}>
                {categories.find(cat => cat.name === product.category)?.label || product.category}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductManager;