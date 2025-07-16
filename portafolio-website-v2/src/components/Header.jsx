//useState: guardar valores que pueden cambiar
//useEffect: hacer cosas cuando el componente carga o cambia algo
import { useState, useEffect } from "react";

//Creacion del componente Header
export default function Header() {
    //Creacion de un estado: darkmode es true o false y setDarkMode funcion para luego cambiar el valor
    const [darkMode, setDarkMode] = useState(() => {
        //Obtiene del navegador de usuario si ya tiene un tema establecido
        const stored = localStorage.getItem("theme")
        return stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    })
    
    //Se realiza esto cada vez que darkMode cambia
    useEffect(() => {
        //Agrega la clases dark al html del document.documentElement
        document.documentElement.classList.toggle("dark", darkMode)
        //Guarda la eleccion del usuario en el navegador
        localStorage.setItem("theme", darkMode ? "dark":"light")
    }, [darkMode])

    return(
        <header className="w-full fixed top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white ">
                    AlceaXich
                </h1>
                <nav className="space-x-6 text-gray-700 dark:text-gray-300">
                    <a href="#inicio" className="hover:text-purple-500">Inicio</a>
                    <a href="#proyectos" className="hover:text-purple-500">Proyectos</a>
                    <a href="#sobre-mi" className="hover:text-purple-500">Sobre mi</a>
                    <a href="#contacto" className="hover:text-purple-500">Contacto</a>
                </nav>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="ml-4 text-xl"
                    aria-label="Toggle dark mode"
                    >
                    {darkMode ? "🌞" : "🌙"}
                </button>
            </div>
        </header>
    )
}