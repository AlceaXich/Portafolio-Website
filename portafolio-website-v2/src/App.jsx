import Header from "./components/Header";
import About from "./components/About";
import Background from "./components/Background";

export default function App() {
  return <div className="min-h-screen bg-white dark:bg-[#0b0c10] text-gray-900 dark:text-white">
    <Background/>
    <Header/>
    <About/>
  </div>
}
