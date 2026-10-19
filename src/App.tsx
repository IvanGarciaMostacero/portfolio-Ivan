import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'

export default function App() {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-zinc-950 text-zinc-200">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <TechStack />
      </main>
      <footer className="border-t border-white/10 px-5 py-10 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Iván García — Full Stack & E-commerce
      </footer>
    </div>
  )
}
