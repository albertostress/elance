
import React from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { MoveVertical, MoveHorizontal } from 'lucide-react';

interface ImagePositionProps {
  value: 'center' | 'top' | 'bottom' | 'left' | 'right';
  onChange: (position: 'center' | 'top' | 'bottom' | 'left' | 'right') => void;
  imageUrl?: string;
  verticalPosition?: number;
  horizontalPosition?: number;
  onVerticalChange?: (value: number) => void;
  onHorizontalChange?: (value: number) => void;
}

const ImagePosition: React.FC<ImagePositionProps> = ({ 
  imageUrl,
  verticalPosition = 50,
  horizontalPosition = 50,
  onVerticalChange,
  onHorizontalChange
}) => {
  const getObjectPositionStyle = () => {
    return {
      objectPosition: `${horizontalPosition}% ${verticalPosition}%`
    };
  };

  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Ajustar Posição da Imagem</Label>
      
      {imageUrl && (
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-xs text-gray-600 mb-2">Preview:</p>
          <div className="w-full h-24 border border-gray-200 rounded overflow-hidden">
            <img
              src={imageUrl}
              alt="Preview"
              className="w-full h-full object-cover"
              style={getObjectPositionStyle()}
            />
          </div>
        </div>
      )}
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MoveVertical className="w-4 h-4 text-gray-600" />
            <Label className="text-sm">Posição Vertical</Label>
            <span className="text-xs text-gray-500">{verticalPosition}%</span>
          </div>
          <Slider
            value={[verticalPosition]}
            onValueChange={(value) => onVerticalChange?.(value[0])}
            max={100}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>Topo</span>
            <span>Centro</span>
            <span>Embaixo</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MoveHorizontal className="w-4 h-4 text-gray-600" />
            <Label className="text-sm">Posição Horizontal</Label>
            <span className="text-xs text-gray-500">{horizontalPosition}%</span>
          </div>
          <Slider
            value={[horizontalPosition]}
            onValueChange={(value) => onHorizontalChange?.(value[0])}
            max={100}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>Esquerda</span>
            <span>Centro</span>
            <span>Direita</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePosition;
