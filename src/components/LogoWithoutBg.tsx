
import { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemover';

interface LogoWithoutBgProps {
  className?: string;
}

const LogoWithoutBg = ({ className = "" }: LogoWithoutBgProps) => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const processLogo = async () => {
      setIsProcessing(true);
      try {
        // Fetch the logo image
        const response = await fetch('/lovable-uploads/8f3ff22e-97df-444d-8b79-c8326ab85ce1.png');
        const blob = await response.blob();
        
        // Load image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(url);
      } catch (err) {
        console.error('Error processing logo:', err);
        setError('Erro ao processar logo');
        // Fallback to original logo
        setProcessedLogoUrl('/lovable-uploads/8f3ff22e-97df-444d-8b79-c8326ab85ce1.png');
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();

    // Cleanup function to revoke object URL
    return () => {
      if (processedLogoUrl) {
        URL.revokeObjectURL(processedLogoUrl);
      }
    };
  }, []);

  if (isProcessing) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gold-600"></div>
      </div>
    );
  }

  if (error && !processedLogoUrl) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-gold-600 text-sm">Logo ELANCE</div>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={processedLogoUrl || '/lovable-uploads/8f3ff22e-97df-444d-8b79-c8326ab85ce1.png'}
        alt="ELANCE Logo"
        className="w-full h-full object-contain filter drop-shadow-lg"
      />
    </div>
  );
};

export default LogoWithoutBg;
