import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import screenShott from "@/assets/Screenshot_2025-08-26_125843-removebg-preview.png";

const Hero = () => {
  return (
    <section 
      className="min-h-screen bg-gradient-hero relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.8), rgba(17, 17, 17, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-accent opacity-50"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-hero-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-hero-accent/20 rounded-full blur-2xl"></div>
      
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex items-center justify-center space-x-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-glow">
              <img src={screenShott} alt="logo"/>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-hero-text font-display">
              Sphere <span className="text-hero-accent">Tec</span>
            </h1>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-hero-text mb-6 font-display leading-tight">
            Construindo o <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Futuro Digital
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-hero-text/80 mb-8 font-medium">
            Rápido, acessível, eficiente
          </p>
          
          <p className="text-lg md:text-xl text-hero-text/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Especialistas em landing pages e aplicações web que convertem visitantes em clientes. 
            Transformamos suas ideias em realidade digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
            >
             <a 
                href="https://wa.me/5583987340857?text=Olá,%20vim%20pelo%20seu%20portfólio!" 
                target="_blank"
                rel="noopener noreferrer"
              >
                 Iniciar projeto
              </a>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-hero-text/20 hover:bg-hero-text/10"
            >
              <a 
                href="https://www.instagram.com/sphere.tec/"
                target="_blank"
                rel="noopener noreferrer"
              >
                 Ver Portfolio
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-hero-text/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-hero-accent mb-2">5+</div>
              <div className="text-hero-text/60">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-hero-accent mb-2">100%</div>
              <div className="text-hero-text/60">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-hero-accent mb-2">24h</div>
              <div className="text-hero-text/60">Resposta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;