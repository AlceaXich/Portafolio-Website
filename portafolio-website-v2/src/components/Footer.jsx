export default function Footer() {
  return (
    <footer className="bg-black/80 text-white py-6 mt-20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>
          © {new Date().getFullYear()} AlceaXich - Hecho con 💜 desde mi universo de conocimientos
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#inicio" className="hover:text-purple-400 transition-colors">Inicio</a>
          <a href="#proyectos" className="hover:text-purple-400 transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-purple-400 transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
