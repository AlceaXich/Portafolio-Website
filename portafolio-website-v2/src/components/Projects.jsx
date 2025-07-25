export default function Projects() {
  const projectsList = [
    {
      title: "Mi Portafolio Personal",
      description: "Un sitio web con temática del universo para mostrar mis habilidades y proyectos.",
      technologies: ["React", "TailwindCSS", "Vite"],
      link: "#", // Cambia esto por tu enlace real si lo subes
    },
    {
      title: "Aplicación del clima",
      description: "Desarrollé una aplicación que muestra el clima diario de una ciudad, consultando información en tiempo real desde una API externa",
      technologies: ["Android", "Koltlin", "OpenWeather"],
      link: "#",
    },
    // Agrega más proyectos si tienes
  ]

  return (
    <section id="proyectos" className="px-4 py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">🚀 Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsList.map((project, index) => (
          <div key={index} className="bg-white/10 backdrop-blur p-6 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tec, i) => (
                <span key={i} className="bg-purple-700/40 text-xs px-2 py-1 rounded">
                  {tec}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:underline"
              >
                Ver proyecto →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
