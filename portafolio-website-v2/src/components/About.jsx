import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="sobre-mi" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">
          Sobre mí
        </h2>
        <p className="text-lg leading-relaxed text-gray-200 dark:text-gray-300">
          ¡Hola! Soy <span className="text-purple-300 font-semibold">Shim</span>, una desarrolladora frontend junior apasionada por la tecnología,
          el diseño elegante y la creación de experiencias web que brillen como las estrellas ✨.  
          Tengo conocimientos en <strong>HTML, CSS, JavaScript y React</strong>, y experiencia previa en desarrollo con <strong>Odoo y Python</strong>.  
          Estoy empezando mi carrera freelance y me encanta aprender constantemente.
        </p>
      </motion.div>
    </section>
  )
}
