import { motion } from 'framer-motion'
import { Boxes, GitMerge, ShoppingBag } from 'lucide-react'

const items = [
  {
    year: 'Actualidad',
    title: 'Gestión técnica integral de e-commerce corporativos',
    role: 'Full Stack & E-commerce Manager',
    icon: ShoppingBag,
    description:
      'Liderazgo técnico y operativo de tiendas corporativas: arquitectura, catálogo, checkout, rendimiento y coordinación con negocio para que cada flujo convierta.',
  },
  {
    year: 'Integraciones',
    title: 'ERP Sage 200',
    role: 'Sincronización de datos y procesos',
    icon: Boxes,
    description:
      'Integraciones estables entre e-commerce y Sage 200: stock, pedidos, clientes y facturación. Menos fricción manual, más fiabilidad entre sistemas.',
  },
  {
    year: 'Operaciones',
    title: 'Automatización de flujos',
    role: 'Procesos, CMS y backend',
    icon: GitMerge,
    description:
      'Automatizo tareas repetitivas entre CMS, ERP y tienda. Pipelines que ahorran tiempo al equipo y reducen errores operativos.',
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400/80">
          Trayectoria
        </p>
        <h2 className="mt-3 font-display text-4xl text-zinc-50 sm:text-5xl">
          Experiencia
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base">
          Del código al ERP: un mismo hilo técnico para e-commerce que tienen
          que funcionar en producción, no solo en demos.
        </p>

        <div className="relative mt-14">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-white/15 to-transparent sm:left-[23px]" />

          <ol className="space-y-8">
            {items.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative pl-14 sm:pl-16"
                >
                  <span className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-zinc-950 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] sm:h-12 sm:w-12">
                    <Icon size={18} />
                  </span>

                  <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-cyan-400/25 hover:bg-white/[0.06] sm:p-6">
                    <p className="text-xs font-medium uppercase tracking-wider text-cyan-300/80">
                      {item.year}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-zinc-50 sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">{item.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </article>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
