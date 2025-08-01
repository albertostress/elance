
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StoreSection = () => {
  const storeInfo = {
    address: "Bairro BPC Camama / Luanda",
    hours: [
      { day: "Segunda a Sexta", time: "09h00 - 20h00" },
      { day: "Sábado", time: "09h00 - 21h00" },
      { day: "Domingo", time: "10h00 - 19h00" }
    ],
    phone: "+244 941 693 261",
    instagram: "@elance.100"
  };

  const storeFeatures = [
    {
      title: "Ambiente Cafeteria",
      description: "Espaço acolhedor com ambiente moderno e confortável"
    },
    {
      title: "Menu Completo", 
      description: "Cafés, gelados, chocolates quentes e muito mais"
    },
    {
      title: "Qualidade Premium",
      description: "Ingredientes selecionados e preparação artesanal"
    }
  ];

  return (
    <section id="loja" className="py-20 bg-gradient-to-br from-moss-50 to-earth-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
            Visite a ELANCE Cafeteria
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Um espaço único em Luanda onde pode saborear os melhores cafés, 
            gelados artesanais e especialidades numa atmosfera acolhedora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Informações da loja */}
          <div className="space-y-8">
            {/* Localização */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gold-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-earth-900 mb-2">Localização</h3>
                    <p className="text-earth-600 leading-relaxed">
                      {storeInfo.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Horários */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-moss-100 rounded-lg">
                    <Clock className="w-6 h-6 text-moss-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-earth-900 mb-3">Horários de Funcionamento</h3>
                    <div className="space-y-2">
                      {storeInfo.hours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-earth-600">{schedule.day}</span>
                          <span className="font-medium text-earth-800">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 p-3 bg-earth-100 rounded-lg">
                      <Phone className="w-6 h-6 text-earth-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-earth-900">Telefone</h3>
                      <p className="text-earth-600">{storeInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gold-100 rounded-lg">
                      <Instagram className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-earth-900">Instagram</h3>
                      <p className="text-earth-600">{storeInfo.instagram}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Imagens da loja */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Interior da ELANCE Cafeteria"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/30 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Exterior da cafeteria"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Produtos na vitrine"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>

            {/* Características da loja */}
            <div className="space-y-4">
              {storeFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-earth-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-earth-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
