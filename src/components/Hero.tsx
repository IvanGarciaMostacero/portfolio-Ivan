import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/12 blur-[120px] sm:h-[28rem] sm:w-[28rem]" />
        <div className="absolute bottom-10 right-0 h-56 w-56 rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.p
          custom={0.05}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300/90 backdrop-blur-md sm:text-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
          Disponible para proyectos
        </motion.p>

        <motion.h1
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display text-[clamp(2.75rem,10vw,7rem)] leading-[0.95] tracking-tight text-zinc-50"
        >
          Iván García
        </motion.h1>

        <motion.p
          custom={0.28}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-2xl text-lg font-medium text-zinc-300 sm:text-2xl"
        >
          Desarrollador Web Full Stack & E-commerce Manager
        </motion.p>

        <motion.p
          custom={0.42}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base"
        >
          Conecto código puro —React y PHP— con las operaciones reales del
          negocio: ERP, CMS y e-commerce. Diseño sistemas que no solo se ven
          bien, sino que venden, integran y escalan.
        </motion.p>

        <motion.div
          custom={0.55}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#proyectos"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
          >
            Ver proyectos
          </a>
          <a
            href="#experiencia"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-200 backdrop-blur-md transition hover:border-cyan-400/40 hover:text-cyan-200"
          >
            Experiencia
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
