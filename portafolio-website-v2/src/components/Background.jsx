export default function Background() {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
            <div className="w-full h-full bg-cover bg-center opacity-10 dark:opacity-30" 
            style={{backgroundImage: `url('/src/assets/background.jpg')`
            }}>
            </div>
        </div>
    )
}