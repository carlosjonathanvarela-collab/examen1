function Career() {
  try {
    const skills = [
      { 
        name: 'HTML', 
        level: 90,
        description: 'Lenguaje de marcado para estructurar páginas web. Domino la creación de estructuras semánticas, formularios y contenido multimedia.'
      },
      { 
        name: 'CSS', 
        level: 85,
        description: 'Hojas de estilo para diseñar interfaces atractivas. Experiencia en responsive design, flexbox, grid y animaciones.'
      },
      { 
        name: 'JavaScript', 
        level: 80,
        description: 'Lenguaje de programación para interactividad web. Manejo de DOM, eventos, promesas y desarrollo con frameworks modernos.'
      },
      { 
        name: 'Java', 
        level: 75,
        description: 'Lenguaje orientado a objetos para aplicaciones robustas. Conocimientos en POO, estructuras de datos y desarrollo de aplicaciones.'
      },
      { 
        name: 'Bases de datos', 
        level: 70,
        description: 'Diseño y gestión de datos. Experiencia con SQL, modelado de datos, consultas y optimización de bases de datos relacionales.'
      },
      { 
        name: 'Git y GitHub', 
        level: 85,
        description: 'Control de versiones y colaboración. Manejo de repositorios, branches, commits y trabajo en equipo mediante plataformas colaborativas.'
      }
    ];

    return (
      <section id="carrera" className="min-h-screen flex items-center py-20 px-4" data-name="career" data-file="components/Career.js">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Mi Carrera</h2>
          <div className="card zoom-in mb-8">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2 text-[var(--accent-color)]">Ingeniería en Sistemas Computacionales</h3>
              <p className="text-gray-400">Institución: [Tu Institución]</p>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-8 text-center">Habilidades Técnicas</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/10 flex-shrink-0">
                      <div className="icon-code text-xl text-[var(--accent-color)]"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="text-lg font-semibold text-white">{skill.name}</h5>
                        <span className="text-sm text-[var(--accent-color)] font-semibold">{skill.level}%</span>
                      </div>
                      <div className="skill-bar mb-3">
                        <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Career component error:', error);
    return null;
  }
}
