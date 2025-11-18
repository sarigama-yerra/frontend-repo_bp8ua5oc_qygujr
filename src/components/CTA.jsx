function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/60 backdrop-blur-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-white">Bring your AI agent to life</h3>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Tell us about your goals and we’ll propose a tailored plan, timeline, and budget — typically within 24 hours.</p>

          <form className="mt-8 grid md:grid-cols-3 gap-3">
            <input className="col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your email" />
            <button className="rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-medium px-6 py-3 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)]">Request proposal</button>
          </form>

          <div className="mt-4 text-xs text-slate-400">No spam. We’ll get back fast.</div>
        </div>
      </div>
    </section>
  )
}

export default CTA
