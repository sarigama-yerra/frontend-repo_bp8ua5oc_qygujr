import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Showcase />
      <CTA />

      <footer className="relative py-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Auralynx AI Agency. All rights reserved.</p>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
