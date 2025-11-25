function Footer() {
  try {
    const currentYear = 2025;

    return (
      <footer id="contacto" className="bg-[var(--secondary-color)] py-12 px-4" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Varela de la Vega Carlos Jonathan</h2>
            <p className="text-xl text-[var(--accent-color)] mb-6">Creando soluciones con código y pasión</p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="text-2xl hover:text-[var(--accent-color)] transition-colors">
                <div className="icon-facebook"></div>
              </a>
              <a href="#" className="text-2xl hover:text-[var(--accent-color)] transition-colors">
                <div className="icon-instagram"></div>
              </a>
              <a href="#" className="text-2xl hover:text-[var(--accent-color)] transition-colors">
                <div className="icon-github"></div>
              </a>
              <a href="#" className="text-2xl hover:text-[var(--accent-color)] transition-colors">
                <div className="icon-linkedin"></div>
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-gray-400">
            <p>© {currentYear} Varela de la Vega Carlos Jonathan. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}