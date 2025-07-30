
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useProducts, Product } from '@/hooks/useProducts';
import { Pencil, Trash2, Plus } from 'lucide-react';

const ProductManager = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    nameLocal: '',
    description: '',
    category: '',
    price: '',
    image: ''
  });

  const categories = [
    { value: 'frutado', label: 'Frutados' },
    { value: 'cremoso', label: 'Cremosos' },
    { value: 'exotico', label: 'Especiais' },
    { value: 'limitado', label: 'Edição Limitada' },
    { value: 'tradicional', label: 'Tradicionais' }
  ];

  const handleEdit = (product: Product) => {
    setIsEditing(product.id);
    setFormData({
      name: product.name,
      nameLocal: product.nameLocal,
      description: product.description,
      category: product.category,
      price: product.price,
      image: product.image
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
      image: ''
    });
  };

  const handleAdd = () => {
    setIsAdding(true);
    resetForm();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-earth-900">
          Gestor de Produtos
        </h1>
        <Button onClick={handleAdd} className="bg-gold-600 hover:bg-gold-700">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Produto
        </Button>
      </div>

      {(isAdding || isEditing) && (
        <Card className="mb-8">
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
                  placeholder="Ex: Múcua do Bié"
                />
              </div>
              <div>
                <Label htmlFor="nameLocal">Nome Local</Label>
                <Input
                  id="nameLocal"
                  value={formData.nameLocal}
                  onChange={(e) => setFormData({...formData, nameLocal: e.target.value})}
                  placeholder="Ex: Baobá Premium"
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      <SelectItem key={cat.value} value={cat.value}>
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
              <div>
                <Label htmlFor="image">URL da Imagem</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  placeholder="URL da imagem do produto"
                />
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
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
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
                  <p className="text-sm text-gold-600 font-medium">
                    {product.nameLocal}
                  </p>
                </div>
                <span className="text-lg font-bold text-primary">
                  {product.price}
                </span>
              </div>
              
              <p className="text-earth-600 text-sm mb-3">
                {product.description}
              </p>

              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                product.category === 'frutado' ? 'bg-moss-100 text-moss-700' :
                product.category === 'cremoso' ? 'bg-earth-100 text-earth-700' :
                product.category === 'exotico' ? 'bg-gold-100 text-gold-700' :
                product.category === 'tradicional' ? 'bg-amber-100 text-amber-700' :
                'bg-ivory-200 text-earth-800'
              }`}>
                {categories.find(cat => cat.value === product.category)?.label}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductManager;
