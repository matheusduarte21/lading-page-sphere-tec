import { Card } from "@/components/ui/card";
import { Globe, Smartphone, Zap, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Landing Pages",
      description: "Páginas otimizadas para conversão que transformam visitantes em clientes. Design responsivo e carregamento ultrarrápido.",
      features: ["Design Responsivo", "SEO Otimizado", "Alta Conversão", "Carregamento Rápido"]
    },
    {
      icon: Smartphone,
      title: "Aplicações Web",
      description: "Aplicações web modernas e escaláveis. Experiência do usuário excepcional em todos os dispositivos.",
      features: ["Interface Moderna", "Performance Otimizada", "Escalabilidade", "Cross-platform"]
    },
    {
      icon: Zap,
      title: "Desenvolvimento Rápido",
      description: "Entrega ágil sem comprometer a qualidade. Metodologias modernas para resultados excepcionais.",
      features: ["Entrega Rápida", "Metodologia Ágil", "Qualidade Garantida", "Suporte Contínuo"]
    },
    {
      icon: Users,
      title: "Consultoria Digital",
      description: "Estratégias personalizadas para seu negócio digital. Análise completa e plano de ação eficiente.",
      features: ["Análise Estratégica", "Plano Personalizado", "Acompanhamento", "ROI Otimizado"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para transformar sua presença digital e impulsionar seus resultados
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-elegant transition-all duration-300 border-border/50 group hover:border-primary/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3 font-display">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;