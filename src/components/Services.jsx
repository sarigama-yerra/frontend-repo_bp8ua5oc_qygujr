import { Sparkles, Bot, Headphones, Workflow, ShieldCheck, LineChart } from 'lucide-react'

function ServiceCard({ icon: Icon, title, desc, highlight }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-cyan-500/10" />
      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 text-white grid place-items-center shadow-[0_10px_30px_-10px_rgba(99,102,241,0.6)]">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-slate-300 leading-relaxed">{desc}</p>
        {highlight && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            {highlight}
          </div>
        )}
      </div>
    </div>
  )
}

function Services() {
  const items = [
    {
      icon: Bot,
      title: 'AI Voice Agents',
      desc: 'Natural, realtime voice agents powered by the best LLMs and voice models. Plug into your tools and CRM.',
      highlight: 'Latency under 300ms',
    },
    {
      icon: Headphones,
      title: '24/7 AI Support',
      desc: 'Omnichannel support across chat, phone, SMS, and email with human-like tone and brand style.',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      desc: 'Orchestrate complex tasks with agents that reason, call APIs, and update systems autonomously.',
    },
    {
      icon: LineChart,
      title: 'Insights & Analytics',
      desc: 'Measure every interaction. A/B test prompts, voices, and flows to continually improve outcomes.',
    },
  ]

  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">What we do</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">From strategy to production, we design, build, and manage intelligent agents for ambitious teams.</p>
          </div>
          <div className="hidden md:block text-slate-400 text-sm">Premium delivery · Enterprise-grade</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <ServiceCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
