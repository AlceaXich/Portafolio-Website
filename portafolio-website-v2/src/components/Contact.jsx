import { FaGithub, FaLinkedin, FaGitlab, FaDiscord } from 'react-icons/fa'

/**
 * Componente Contact.
 *
 * Sección de Contacto que incluye un formulario y redes sociales.
 * Utiliza animaciones con Formspree y componentes para las redes sociales.
 *
 * @component
 * <Contact />
 *
 * @returns {JSX.Element} Sección "Contacto" con formulario y redes sociales.
 */
export default function Contact() {
  return (
    <section id="contacto" className="px-4 py-16 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">📩 Contáctame</h2>
      <p className="mb-6 text-gray-300">
        ¿Tienes una idea, proyecto o simplemente quieres decir hola?
        ¡Estoy lista para colaborar contigo!
      </p>

      <form
        action="https://formspree.io/f/movldjdj"
        method="POST"
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          className="p-3 rounded bg-white/10 border border-white/20 placeholder-white text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          required
          className="p-3 rounded bg-white/10 border border-white/20 placeholder-white text-white"
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          required
          rows="5"
          className="p-3 rounded bg-white/10 border border-white/20 placeholder-white text-white"
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-800 transition-colors py-3 rounded font-semibold"
        >
          Enviar mensaje
        </button>
      </form>

      <div className="flex justify-center mt-8 gap-6 text-3xl text-white">
        <a href="https://github.com/AlceaXich" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-purple-400 transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/shirley-oxa-dev/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-purple-400 transition-colors" />
        </a>
        <a href="https://gitlab.com/XichShim" target="_blank" rel="noopener noreferrer">
          <FaGitlab className="hover:text-purple-400 transition-colors" />
        </a>
        <a href="https://discord.com/users/alceaxich5" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="hover:text-purple-400 transition-colors" />
        </a>
      </div>
    </section>
  )
}
