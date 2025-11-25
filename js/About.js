function About() {
  try {
    return (
      <section id="sobre-mi" className="min-h-screen flex items-center py-20 px-4" data-name="about" data-file="components/About.js">
        <div className="max-w-6xl mx-auto">
          <div className="card fade-in-left">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full p-1 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img src="img/mi-foto.jpg" alt="Foto de Carlos Jonathan" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Me llamo Varela de la Vega Carlos Jonathan, soy estudiante de sistemas con interés en programación web, 
                  bases de datos y desarrollo de aplicaciones. Me gusta aprender constantemente y aplicar lo aprendido en 
                  proyectos reales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}