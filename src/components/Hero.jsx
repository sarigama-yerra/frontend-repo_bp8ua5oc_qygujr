import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Realtime AI voice agents for modern brands
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
                Build an AI Agency with a premium, modern identity
              </h1>
              <p className="mt-5 text-lg md:text-xl text-slate-300 max-w-xl">
                We craft intelligent voice and chat agents that feel alive — designed, trained, and deployed to amplify your customer experience.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-medium shadow-[0_10px_30px_-10px_rgba(99,102,241,0.7)]">
                  Start your project
                </a>
                <a href="#services" className="pointer-events-auto inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 text-slate-200 hover:text-white hover:border-white/20 transition-colors">
                  Explore services
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-[420px] md:h-[520px] lg:h-[560px]">
              {/* Spline animation fills background; keep space for visual balance */}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['OpenAI', 'Anthropic', 'ElevenLabs', 'Twilio'].map((brand) => (
            <div key={brand} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-slate-300">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
