import { useState } from "react"
import "../FlipAvatar.css"

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