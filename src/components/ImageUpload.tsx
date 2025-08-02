
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

  const extractImgurId = (url: string): string | null => {
    // Remove any trailing fragments or query parameters
    const cleanUrl = url.split('#')[0].split('?')[0];
    
    // Gallery URL: https://imgur.com/gallery/love-zMvnMwN
    const galleryMatch = cleanUrl.match(/imgur\.com\/gallery\/([a-zA-Z0-9]+)/);
    if (galleryMatch) {
      return galleryMatch[1];
    }
    
    // Simple URL: https://imgur.com/zMvnMwN
    const simpleMatch = cleanUrl.match(/imgur\.com\/([a-zA-Z0-9]+)$/);
    if (simpleMatch) {
      return simpleMatch[1];
    }
    
    // Direct URL: https://i.imgur.com/zMvnMwN.jpg
    const directMatch = cleanUrl.match(/i\.imgur\.com\/([a-zA-Z0-9]+)/);
    if (directMatch) {
      return directMatch[1];
    }
    
    return null;
  };

  const buildDirectUrl = (imgurId: string, extension: string = 'jpg'): string => {
    return `https://i.imgur.com/${imgurId}.${extension}`;
  };

  const testImageUrl = (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  const validateImgurUrl = async (url: string): Promise<string | null> => {
    if (!url) return null;
    
    // Check if it's a valid URL format
    try {
      new URL(url);
    } catch {
      setUrlError('URL inválida');
      return null;
    }

    // Check if it contains imgur.com
    if (!url.includes('imgur.com')) {
      setUrlError('URL deve ser do Imgur (imgur.com)');
      return null;
    }

    // If it's already a direct link, test it
    if (url.includes('i.imgur.com')) {
      const isValid = await testImageUrl(url);
      if (isValid) {
        return url;
      }
    }

    // Try to extract Imgur ID and build direct URLs
    const imgurId = extractImgurId(url);
    if (!imgurId) {
      setUrlError('Não foi possível extrair o ID da imagem do Imgur');
      return null;
    }

    // Try different image extensions
    const extensions = ['jpg', 'png', 'gif', 'webp'];
    
    for (const ext of extensions) {
      const directUrl = buildDirectUrl(imgurId, ext);
      const isValid = await testImageUrl(directUrl);
      if (isValid) {
        return directUrl;
      }
    }

    setUrlError('Não foi possível carregar a imagem do link fornecido');
    return null;
  };

  const handleUrlChange = async (newUrl: string) => {
    setUrlInput(newUrl);
    setUrlError('');
    
    if (!newUrl) {
      onChange('');
      return;
    }

    setIsValidating(true);
    
    const validUrl = await validateImgurUrl(newUrl);
    
    if (validUrl) {
      onChange(validUrl);
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
            Cole qualquer link do Imgur
          </p>
          <p className="text-xs text-gray-500">
            Aceita links de galeria, diretos ou simples
          </p>
        </div>
      )}

      <div className="space-y-2">
        <div className="flex gap-2">
          <Input
            type="url"
            placeholder="Cole qualquer link do Imgur aqui..."
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
          <p className="text-sm text-gray-500">Processando link do Imgur...</p>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
        <p className="text-xs text-blue-700 font-medium mb-2">Links aceitos do Imgur:</p>
        <ul className="text-xs text-blue-600 space-y-1">
          <li>• Link de galeria: https://imgur.com/gallery/exemplo</li>
          <li>• Link direto: https://i.imgur.com/exemplo.jpg</li>
          <li>• Link simples: https://imgur.com/exemplo</li>
        </ul>
        <p className="text-xs text-blue-600 mt-2">
          O sistema irá converter automaticamente para o link direto da imagem.
        </p>
      </div>
    </div>
  );
};

export default ImageUpload;
