function Hero() {
  try {
    return (
      <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 px-4" data-name="hero" data-file="components/Hero.js">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
            Varela de la Vega Carlos Jonathan
          </h1>
          <h2 className="text-2xl md:text-3xl text-[var(--accent-color)] mb-8 font-light">
            Estudiante de Ingeniería en Sistemas / Desarrollo de Software
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Soy estudiante enfocado en el desarrollo de software, interesado en el diseño web, programación y tecnologías modernas. 
            Me apasiona crear soluciones digitales eficientes y visualmente atractivas.
          </p>
          <button onClick={() => document.getElementById('sobre-mi').scrollIntoView({ behavior: 'smooth' })} className="btn-primary pulse-glow">
            Conóceme más
          </button>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}