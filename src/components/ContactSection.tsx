
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
            Fale Connosco
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Venha visitar-nos e experimentar os nossos gelados artesanais únicos!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-ivory-50 to-white rounded-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Localização */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-earth-900 mb-2">Localização</h3>
                    <p className="text-earth-600">Bairro BPC Camama / Luanda</p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-earth-900 mb-2">Telefone</h3>
                    <p className="text-earth-600">+244 941 693 261</p>
                  </div>
                </div>

                {/* Horários */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-earth-900 mb-2">Horários de Funcionamento</h3>
                    <div className="text-earth-600 space-y-1">
                      <p>Segunda a Sexta: 09h00 - 20h00</p>
                      <p>Sábado: 09h00 - 21h00</p>
                      <p>Domingo: 10h00 - 19h00</p>
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-earth-900 mb-2">Instagram</h3>
                    <Button
                      asChild
                      variant="link"
                      className="p-0 h-auto text-earth-600 hover:text-gold-600 transition-colors"
                    >
                      <a 
                        href="https://instagram.com/elance.100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @elance.100
                      </a>
                    </Button>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
