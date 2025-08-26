import screenShott from "@/assets/Screenshot_2025-08-26_125843-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                   <img src={screenShott} alt="logo"/>
                </div>
                <h3 className="text-2xl font-bold font-display">
                  Sphere <span className="text-primary">Tec</span>
                </h3>
              </div>
              <p className="text-accent-foreground/80 mb-4 leading-relaxed max-w-md">
                Especialistas em landing pages e aplicações web que transformam 
                visitantes em clientes. Rápido, acessível, eficiente.
              </p>
              <p className="text-sm text-accent-foreground/60">
                © 2024 Sphere Tec. Todos os direitos reservados.
              </p>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-accent-foreground/80">
                <li><a href="#" className="hover:text-primary transition-colors">Landing Pages</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Aplicações Web</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">E-commerce</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Consultoria</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>sphere.tec.innovation@gmail.com</li>
                <li>(83) 98734-0857</li>
                <li>João Pessoa, PB</li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-accent-foreground/10 mt-8 pt-8 text-center">
            <p className="text-sm text-accent-foreground/60">
              Desenvolvido com ❤️ pela Sphere Tec - Transformando ideias em realidade digital
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;