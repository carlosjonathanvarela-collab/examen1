function Navbar() {
  try {
    const [isOpen, setIsOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    };

    return (
      <nav className="fixed top-0 w-full bg-[var(--secondary-color)]/80 backdrop-blur-md z-50 shadow-lg" data-name="navbar" data-file="js/Navbar.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-white">CVJ</div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-[var(--accent-color)] transition-colors">Inicio</button>
              <button onClick={() => scrollToSection('sobre-mi')} className="text-white hover:text-[var(--accent-color)] transition-colors">Sobre mí</button>
              <button onClick={() => scrollToSection('carrera')} className="text-white hover:text-[var(--accent-color)] transition-colors">Mi carrera</button>
              <button onClick={() => scrollToSection('redes')} className="text-white hover:text-[var(--accent-color)] transition-colors">Redes sociales</button>
              <button onClick={() => scrollToSection('contacto')} className="text-white hover:text-[var(--accent-color)] transition-colors">Contacto</button>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-[var(--accent-color)] transition-colors text-left">Inicio</button>
                <button onClick={() => scrollToSection('sobre-mi')} className="text-white hover:text-[var(--accent-color)] transition-colors text-left">Sobre mí</button>
                <button onClick={() => scrollToSection('carrera')} className="text-white hover:text-[var(--accent-color)] transition-colors text-left">Mi carrera</button>
                <button onClick={() => scrollToSection('redes')} className="text-white hover:text-[var(--accent-color)] transition-colors text-left">Redes sociales</button>
                <button onClick={() => scrollToSection('contacto')} className="text-white hover:text-[var(--accent-color)] transition-colors text-left">Contacto</button>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}