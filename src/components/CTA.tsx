import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-accent opacity-30"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-hero-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-hero-accent/20 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-hero-text mb-6 font-display">
            Pronto para <span className="text-hero-accent">decolar</span>?
          </h2>
          <p className="text-xl md:text-2xl text-hero-text/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforme sua ideia em uma presença digital poderosa. 
            Vamos construir algo incrível juntos.
          </p>
          
          {/* Main CTA */}
          <div className="mb-16">
            <Button 
              variant="gradient" 
              size="xl"
            >
               <a 
                href="https://wa.me/5583987340857?text=Olá,%20vim%20pelo%20seu%20portfólio!" 
                target="_blank"
                rel="noopener noreferrer"
              >
                 Começar agora!
              </a>
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          
          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 rounded-xl bg-hero-text/5 backdrop-blur-sm border border-hero-text/10 hover:bg-hero-text/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-hero-text mb-2">Email</h3>
              <p className="text-hero-text/60">sphere.tec.innovation@gmail.com</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-hero-text/5 backdrop-blur-sm border border-hero-text/10 hover:bg-hero-text/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-hero-text mb-2">Telefone</h3>
              <p className="text-hero-text/60">(83) 98734-0857</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-hero-text/5 backdrop-blur-sm border border-hero-text/10 hover:bg-hero-text/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-hero-text mb-2">WhatsApp</h3>
              <p className="text-hero-text/60">Chat Direto</p>
            </div>
          </div>
          
          {/* Guarantee */}
          <div className="text-center p-6 rounded-xl bg-hero-accent/10 border border-hero-accent/20">
            <p className="text-hero-text/80 font-medium">
              ✅ <strong>Garantia de Satisfação:</strong> 30 dias para revisões gratuitas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;