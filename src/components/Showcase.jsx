import { motion } from 'framer-motion'

function Showcase() {
  const items = [
    {
      title: 'Lead Qualification Agent',
      tag: 'Sales',
      copy: 'Qualifies inbound leads in realtime and books meetings automatically across channels.',
    },
    {
      title: 'Order Support Agent',
      tag: 'E-commerce',
      copy: 'Understands order status, handles returns, and proactively updates customers.',
    },
    {
      title: 'Concierge Booking Agent',
      tag: 'Hospitality',
      copy: 'Conversational booking flow that syncs with calendars, payments, and reminders.',
    },
  ]

  return (
    <section id="work" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Recent work</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">A snapshot of intelligent experiences we shipped recently.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-blue-600/0 to-cyan-500/0 group-hover:from-purple-600/10 group-hover:via-blue-600/10 group-hover:to-cyan-500/10 transition-colors" />
              <div className="relative z-10">
                <div className="text-xs text-slate-300/80">{card.tag}</div>
                <h3 className="mt-2 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-slate-300">{card.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
