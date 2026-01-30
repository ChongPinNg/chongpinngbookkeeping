const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-narrow section-padding !py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a 
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
              className="font-display text-xl font-semibold"
            >
              Chong Pin <span className="text-gold">Bookkeeping</span>
            </a>
            <p className="text-primary-foreground/70 text-sm mt-2">
              Professional bookkeeping services for small businesses
            </p>
          </div>

          <div className="flex items-center gap-8">
            {["Home", "Services", "Pricing", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(`#${item.toLowerCase()}`); }}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Chong Pin Bookkeeping. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
