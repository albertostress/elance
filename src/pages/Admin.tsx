import ProductManager from '@/components/ProductManager';
import CategoryManager from '@/components/CategoryManager';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut } from 'lucide-react';

const Admin = () => {
  const { signOut, user } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-earth-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-serif">Painel Administrativo</h1>
        <div className="flex items-center gap-4">
          <span className="text-earth-200">
            {user?.email}
          </span>
          <Button 
            onClick={handleLogout} 
            variant="outline" 
            size="sm"
            className="text-earth-900 border-white hover:bg-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="products">Produtos</TabsTrigger>
            <TabsTrigger value="categories">Categorias</TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="mt-6">
            <ProductManager />
          </TabsContent>
          <TabsContent value="categories" className="mt-6">
            <CategoryManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;