
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, X, Image } from 'lucide-react';

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange, label = "Imagem" }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string>(value);
  
  // Generate a stable ID for this component instance
  const inputId = React.useId();

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione apenas arquivos de imagem');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('A imagem deve ter no máximo 5MB');
      return;
    }

    setIsUploading(true);

    try {
      // Create file reader to get base64 data
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        
        // Use the base64 data directly as both preview and value
        setPreview(result);
        onChange(result);
        setIsUploading(false);
      };
      
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Erro no upload:', error);
      alert('Erro ao fazer upload da imagem');
      setIsUploading(false);
    }
  };

  const handleRemove = () => {
    setPreview('');
    onChange('');
  };

  const handleAreaClick = () => {
    document.getElementById(inputId)?.click();
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      
      {preview ? (
        <div className="relative w-full">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-32 object-cover rounded-md border"
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
      ) : (
        <div 
          className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-gray-400 transition-colors cursor-pointer"
          onClick={handleAreaClick}
        >
          <Image className="w-8 h-8 mx-auto text-gray-400 mb-2" />
          <p className="text-sm text-gray-600 mb-2">
            Clique para selecionar uma imagem
          </p>
          <p className="text-xs text-gray-500">
            PNG, JPG, WEBP até 5MB
          </p>
        </div>
      )}

      <Input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        disabled={isUploading}
        className="hidden"
        id={inputId}
      />
      
      <Button
        type="button"
        variant="outline"
        disabled={isUploading}
        className="w-full"
        onClick={handleAreaClick}
      >
        <Upload className="w-4 h-4 mr-2" />
        {isUploading ? 'Enviando...' : 'Selecionar Imagem'}
      </Button>
    </div>
  );
};

export default ImageUpload;
