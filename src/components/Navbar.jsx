import { useState } from 'react'
import { Menu, X, Bot, Sparkles } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 text-white shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                <Bot className="w-5 h-5" />
                <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-300" />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Auralynx</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-slate-300 hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="px-4 py-2 rounded-xl border border-white/10 text-slate-200 hover:text-white hover:border-white/20 transition-colors">Talk to us</a>
              <a href="#contact" className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-medium shadow-[0_10px_25px_-10px_rgba(59,130,246,0.6)]">Get a quote</a>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="block text-slate-200 hover:text-white">
                  {n.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a href="#contact" className="flex-1 px-4 py-2 rounded-xl border border-white/10 text-slate-200 text-center">Talk to us</a>
                <a href="#contact" className="flex-1 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white text-center">Get a quote</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
