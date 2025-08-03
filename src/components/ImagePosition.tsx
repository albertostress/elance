
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MoveVertical, MoveHorizontal, Circle, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

interface ImagePositionProps {
  value: 'center' | 'top' | 'bottom' | 'left' | 'right';
  onChange: (position: 'center' | 'top' | 'bottom' | 'left' | 'right') => void;
  imageUrl?: string;
}

const ImagePosition: React.FC<ImagePositionProps> = ({ value, onChange, imageUrl }) => {
  const positions = [
    { key: 'center', label: 'Centro', icon: Circle, class: 'object-center' },
    { key: 'top', label: 'Topo', icon: ArrowUp, class: 'object-top' },
    { key: 'bottom', label: 'Embaixo', icon: ArrowDown, class: 'object-bottom' },
    { key: 'left', label: 'Esquerda', icon: ArrowLeft, class: 'object-left' },
    { key: 'right', label: 'Direita', icon: ArrowRight, class: 'object-right' },
  ] as const;

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Posição da Imagem</Label>
      
      {imageUrl && (
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-xs text-gray-600 mb-2">Preview:</p>
          <div className="w-full h-24 border border-gray-200 rounded overflow-hidden">
            <img
              src={imageUrl}
              alt="Preview"
              className={`w-full h-full object-cover ${positions.find(p => p.key === value)?.class || 'object-center'}`}
            />
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-5 gap-2">
        {positions.map((position) => {
          const IconComponent = position.icon;
          return (
            <Button
              key={position.key}
              type="button"
              variant={value === position.key ? "default" : "outline"}
              size="sm"
              onClick={() => onChange(position.key)}
              className="flex flex-col items-center gap-1 h-auto py-2"
            >
              <IconComponent className="w-4 h-4" />
              <span className="text-xs">{position.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ImagePosition;
