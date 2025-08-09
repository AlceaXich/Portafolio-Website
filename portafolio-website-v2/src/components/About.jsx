import { motion } from "framer-motion"
import FlipAvatar from "./FlipAvatar"

/**
 * Componente About.
 *
 * Sección de presentación personal que incluye un avatar animado y una breve descripción.
 * Utiliza animaciones con Framer Motion y estilos con Tailwind CSS.
 *
 * @component
 * <About />
 *
 * @returns {JSX.Element} Sección "Sobre mí" con avatar y texto descriptivo.
 */

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10"
    >
      <motion.div
        className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Avatar con flip */}
        <FlipAvatar />

        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">
            Sobre mí
          </h2>
          <p className="text-lg leading-relaxed text-gray-200 dark:text-gray-300">
            ¡Hola! Soy <span className="text-purple-300 font-semibold">Shim</span>, una desarrolladora frontend junior apasionada por la tecnología,
            el diseño elegante y la creación de experiencias web que brillen como las estrellas ✨.
            <br /><br />
            Tengo conocimientos en <strong>HTML, CSS, JavaScript y React</strong>, y experiencia previa en desarrollo con <strong>Odoo y Python</strong>.
            <br /><br />
            Estoy empezando mi carrera freelance y me encanta aprender constantemente.
          </p>
        </div>
      </motion.div>
    </section>
  )
}