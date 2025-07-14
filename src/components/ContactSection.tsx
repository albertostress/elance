
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contacto consigo em breve. Obrigado!",
    });

    // Reset form
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const whatsappNumber = "244922000000";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os gelados Muxima Gelato.");

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
            Fale Connosco
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Tem alguma pergunta sobre os nossos sabores? Quer fazer uma encomenda especial? 
            Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-ivory-50 to-white rounded-2xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-earth-900 mb-6 text-center">
                Envie-nos uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-earth-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="border-earth-200 focus:border-gold-500 focus:ring-gold-500/20 rounded-lg"
                      placeholder="O seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-earth-700 mb-2">
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="border-earth-200 focus:border-gold-500 focus:ring-gold-500/20 rounded-lg"
                      placeholder="+244 9XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-earth-200 focus:border-gold-500 focus:ring-gold-500/20 rounded-lg"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-earth-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-earth-200 focus:border-gold-500 focus:ring-gold-500/20 rounded-lg resize-none"
                    placeholder="Como podemos ajudá-lo? Conte-nos sobre os sabores que gostaria de experimentar..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gold-600 hover:bg-gold-700 text-white font-medium py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contacto direto */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-gold-50 to-ivory-50 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-earth-900 mb-3">
                  WhatsApp Business
                </h3>
                
                <p className="text-earth-600 mb-6 leading-relaxed">
                  Fale connosco diretamente pelo WhatsApp para encomendas, 
                  informações sobre sabores ou para agendar uma visita à loja.
                </p>
                
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-xl transition-all duration-300"
                >
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Informações adicionais */}
            <div className="bg-gradient-to-br from-moss-50 to-earth-50 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-earth-900 mb-4">
                Outras Formas de Contacto
              </h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-medium text-earth-800">Email:</span>
                  <span className="text-earth-600 ml-2">ola@muximagelato.ao</span>
                </div>
                
                <div>
                  <span className="font-medium text-earth-800">Instagram:</span>
                  <span className="text-earth-600 ml-2">@muxima.gelato</span>
                </div>
                
                <div>
                  <span className="font-medium text-earth-800">Horário de Atendimento:</span>
                  <span className="text-earth-600 ml-2">Segunda a Sábado, 9h-20h</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-earth-200">
                <p className="text-xs text-earth-500 leading-relaxed">
                  <strong>Newsletter:</strong> Subscreva a nossa newsletter para receber novidades 
                  sobre novos sabores, eventos especiais e promoções exclusivas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
