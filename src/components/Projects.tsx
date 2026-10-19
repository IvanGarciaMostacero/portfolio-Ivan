import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Plataforma B2B Marvin',
    tag: 'B2B · React',
    description:
      'Portal corporativo B2B para pedidos, tarifas y catálogo. Pensado para equipos comerciales y clientes con volúmenes reales.',
    accent: 'from-cyan-500/30 via-zinc-900 to-zinc-950',
  },
  {
    title: 'Portal Seguro de Descargas (PHP)',
    tag: 'PHP · Seguridad',
    description:
      'Acceso controlado a archivos y entregables. Autenticación, permisos y descargas auditables sobre un backend PHP sólido.',
    accent: 'from-violet-500/30 via-zinc-900 to-zinc-950',
  },
  {
    title: 'E-commerce Sloan',
    tag: 'E-commerce · CMS',
    description:
      'Tienda online con foco en operación: catálogo, checkout y conexión con los flujos de negocio del día a día.',
    accent: 'from-emerald-500/25 via-zinc-900 to-zinc-950',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400/80">
          Selección
        </p>
        <h2 className="mt-3 font-display text-4xl text-zinc-50 sm:text-5xl">
          Proyectos
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base">
          Piezas donde el código se encuentra con el negocio. Las tarjetas
          están listas para capturas cuando las tengas.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent}`}
              >
                <div className="absolute inset-0 opacity-40 mix-blend-overlay [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:18px_18px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-medium text-zinc-200 backdrop-blur-md">
                  {project.tag}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-zinc-50">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-zinc-500 transition group-hover:text-cyan-300"
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
