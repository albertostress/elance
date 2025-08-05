import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { useProducts } from '@/hooks/useProducts';

interface ImageUploadSupabaseProps {
  value?: string | null;
  onChange?: (url: string | null) => void;
  className?: string;
}

const ImageUploadSupabase: React.FC<ImageUploadSupabaseProps> = ({
  value,
  onChange,
  className = ""
}) => {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const { uploadImage } = useProducts();

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione apenas arquivos de imagem.');
      return;
    }

    setUploading(true);
    try {
      const url = await uploadImage(file);
      if (url && onChange) {
        onChange(url);
      }
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
      alert('Erro ao fazer upload da imagem. Tente novamente.');
    } finally {
      setUploading(false);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleRemove = () => {
    if (onChange) {
      onChange(null);
    }
  };

  return (
    <div className={className}>
      <Label className="text-sm font-medium">Imagem do Produto</Label>
      
      {value ? (
        <Card className="relative mt-2">
          <div className="relative">
            <img
              src={value}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            <Button
              type="button"
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2"
              onClick={handleRemove}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      ) : (
        <Card 
          className={`mt-2 border-2 border-dashed transition-colors ${
            dragActive 
              ? 'border-gold-400 bg-gold-50' 
              : 'border-gray-300 hover:border-gold-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <ImageIcon className="w-8 h-8 text-gray-400" />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">
                Arraste uma imagem aqui ou clique para selecionar
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF até 10MB
              </p>
            </div>

            <div className="mt-4">
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                disabled={uploading}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button
                  type="button"
                  variant="outline"
                  disabled={uploading}
                  className="cursor-pointer"
                  asChild
                >
                  <span>
                    <Upload className="w-4 h-4 mr-2" />
                    {uploading ? 'Enviando...' : 'Selecionar Arquivo'}
                  </span>
                </Button>
              </label>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ImageUploadSupabase;