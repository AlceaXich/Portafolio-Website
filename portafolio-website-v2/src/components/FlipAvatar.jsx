import { useState } from "react"
import "../FlipAvatar.css"

/**
 * Componente FlipAvatar.
 *
 * Muestra un avatar con un efecto de volteo (flip) que alterna entre
 * una imagen ilustrada y una imagen real. El efecto se logra mediante CSS
 * y puede utilizarse como parte de una sección de presentación personal.
 *
 * Incluye una capa invisible para prevenir el menú contextual del clic derecho.
 *
 * @component
 * @example
 * // Uso básico:
 * <FlipAvatar />
 *
 * @returns {JSX.Element} Avatar animado con efecto de volteo.
 */
export default function FlipAvatar() {
  return (
    <div className="avatar-flip">
      <div className="avatar-flip-inner">
        <img src="/profile-avatar.png" alt="Avatar dibujo" className="avatar-front" />
        <img src="/profile.jpeg" alt="Avatar real" className="avatar-back" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10" onContextMenu={(e) => e.preventDefault()} />
    </div>
  )
}