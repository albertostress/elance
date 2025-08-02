
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, X, Image, AlertCircle } from 'lucide-react';

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange, label = "Imagem" }) => {
  const [urlInput, setUrlInput] = useState<string>(value);
  const [isValidating, setIsValidating] = useState(false);
  const [urlError, setUrlError] = useState<string>('');

  const validateImageUrl = async (url: string): Promise<boolean> => {
    if (!url) return false;
    
    // Check if it's a valid URL format
    try {
      new URL(url);
    } catch {
      setUrlError('URL inválida');
      return false;
    }

    // Check if it's an image URL (basic check)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const hasImageExtension = imageExtensions.some(ext => 
      url.toLowerCase().includes(ext)
    );
    
    if (!hasImageExtension) {
      setUrlError('URL deve ser de uma imagem (.jpg, .png, .gif, .webp)');
      return false;
    }

    return true;
  };

  const handleUrlChange = async (newUrl: string) => {
    setUrlInput(newUrl);
    setUrlError('');
    
    if (!newUrl) {
      onChange('');
      return;
    }

    setIsValidating(true);
    
    const isValid = await validateImageUrl(newUrl);
    
    if (isValid) {
      onChange(newUrl);
    }
    
    setIsValidating(false);
  };

  const handleRemove = () => {
    setUrlInput('');
    onChange('');
    setUrlError('');
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      
      {value ? (
        <div className="relative w-full">
          <img
            src={value}
            alt="Preview"
            className="w-full h-32 object-cover rounded-md border"
            onError={() => setUrlError('Erro ao carregar imagem')}
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
        <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
          <Image className="w-8 h-8 mx-auto text-gray-400 mb-2" />
          <p className="text-sm text-gray-600 mb-2">
            Cole o link da imagem do Imgur
          </p>
          <p className="text-xs text-gray-500">
            Exemplo: https://i.imgur.com/exemplo.jpg
          </p>
        </div>
      )}

      <div className="space-y-2">
        <div className="flex gap-2">
          <Input
            type="url"
            placeholder="Cole o link do Imgur aqui..."
            value={urlInput}
            onChange={(e) => handleUrlChange(e.target.value)}
            disabled={isValidating}
          />
          <Button
            type="button"
            variant="outline"
            disabled={isValidating || !urlInput}
            onClick={() => handleUrlChange(urlInput)}
          >
            <Link className="w-4 h-4" />
          </Button>
        </div>
        
        {urlError && (
          <div className="flex items-center gap-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            {urlError}
          </div>
        )}
        
        {isValidating && (
          <p className="text-sm text-gray-500">Validando imagem...</p>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
        <p className="text-xs text-blue-700 font-medium mb-2">Como usar:</p>
        <ol className="text-xs text-blue-600 space-y-1">
          <li>1. Faça upload da imagem no <a href="https://imgur.com" target="_blank" rel="noopener noreferrer" className="underline">imgur.com</a></li>
          <li>2. Clique com botão direito na imagem</li>
          <li>3. Selecione "Copiar endereço da imagem"</li>
          <li>4. Cole o link aqui</li>
        </ol>
      </div>
    </div>
  );
};

export default ImageUpload;
