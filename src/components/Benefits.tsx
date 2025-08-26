import { CheckCircle, Clock, DollarSign, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Rápido",
      description: "Desenvolvimento ágil com entrega em tempo recorde",
      detail: "Metodologias modernas garantem projetos entregues rapidamente sem comprometer a qualidade."
    },
    {
      icon: DollarSign,
      title: "Acessível",
      description: "Preços justos para todas as necessidades",
      detail: "Soluções personalizadas que cabem no seu orçamento, do básico ao mais avançado."
    },
    {
      icon: CheckCircle,
      title: "Eficiente",
      description: "Resultados que realmente importam",
      detail: "Foco total na performance e conversão para maximizar o retorno do seu investimento."
    }
  ];

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
              Por que escolher a <span className="text-primary">Sphere Tec</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Três pilares que garantem o sucesso do seu projeto digital
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow mx-auto mb-6 group-hover:shadow-xl transition-shadow duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4 font-display">
                  {benefit.title}
                </h3>
                <p className="text-lg text-primary font-semibold mb-4">
                  {benefit.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.detail}
                </p>
              </div>
            ))}
          </div>
          
          {/* Process Timeline */}
          <div className="mt-20 pt-16 border-t border-border/20">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12 font-display">
              Nosso Processo
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Briefing", desc: "Entendemos suas necessidades" },
                { step: "02", title: "Planejamento", desc: "Definimos estratégia e cronograma" },
                { step: "03", title: "Desenvolvimento", desc: "Criamos sua solução digital" },
                { step: "04", title: "Entrega", desc: "Testamos e colocamos no ar" }
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-elegant">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;