import type { SVGProps } from 'react'
import { motion } from 'framer-motion'

type IconProps = SVGProps<SVGSVGElement>

function ReactIcon(props: IconProps) {
  return (
    <svg viewBox="-11.5 -10.23 23 20.46" aria-hidden="true" {...props}>
      <circle r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" fill="none" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

function TypeScriptIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" {...props}>
      <path fill="#3178C6" d="M22 22h84v84H22z" />
      <path
        fill="#fff"
        d="M71.4 78.2v8.6c1.4.7 3 .1 4.3 1.3 1.3.4 2.7.6 4.1.6 1.7 0 3-.3 4.1-.8 1.1-.5 1.6-1.3 1.6-2.4 0-.8-.3-1.4-.8-1.9s-1.3-.9-2.3-1.3l-3.5-1.2c-2.4-.8-4.2-2-5.4-3.4-1.2-1.5-1.8-3.2-1.8-5.3 0-2 .6-3.8 1.8-5.3 1.2-1.5 3-2.5 5.4-3.1 2.4-.6 4.8-.7 7.4-.3 1.7.3 3.3.8 4.8 1.5v8.3c-1.3-.8-2.7-1.3-4.2-1.7-1.5-.3-3-.5-4.4-.5-1.5 0-2.6.3-3.5.8-.8.5-1.2 1.2-1.2 2 0 .8.4 1.4 1.1 1.9.7.5 2 1 3.8 1.6l3.3 1.1c2.5.8 4.4 2 5.6 3.5 1.2 1.5 1.8 3.3 1.8 5.5 0 2.2-.7 4.1-2.1 5.7-1.4 1.6-3.4 2.7-6 3.3-2.6.6-5.3.6-8.2 0-2-.4-3.9-1.1-5.6-2zm-23.2-20.6H61v6.6H58.6V98h-8.3V64.2h-2.1z"
      />
    </svg>
  )
}

function PhpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" {...props}>
      <ellipse cx="64" cy="64" rx="56" ry="36" fill="#777BB4" />
      <path
        fill="#fff"
        d="M40.5 52.5h8.4l-3.2 16.4c-.4 2.1.3 3.1 2.2 3.1 1.8 0 3.7-.9 5-2.6l3.3-16.9h8.3L59 78.4c-2.6 7.2-7.7 10.1-14.3 10.1-6.6 0-10.3-3.5-9.1-9.8zm30.2 0h14.2c7.3 0 10.3 3.1 8.9 10.2l-2.7 13.9c-1.6 8.1-6.7 12-14.6 12H62.2zm8.1 7.4-3.1 15.6h3.6c3.8 0 6.2-1.8 7-5.8l2.4-12.2c.4-2-.6-3-2.7-3.1h-7.2zm22.6-7.4h8.4l-5.3 27.2h-8.4z"
      />
    </svg>
  )
}

function WordPressIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 122.5 122.5" aria-hidden="true" {...props}>
      <circle cx="61.2" cy="61.2" r="61.2" fill="#21759B" />
      <path
        fill="#fff"
        d="M8.8 61.2c0 20.9 12.2 38.9 30 47.1L13.7 42.6c-3.1 5.8-4.9 12.1-4.9 18.6zm88.8-2.2c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.8-9.3.2 0 .5 0 .7.1-9.3-8.5-21.7-13.7-35.3-13.7-18.3 0-34.4 9.4-43.7 23.6 1.2 0 2.4.1 3.4.1 5.5 0 14-0.7 14-0.7 2.8-.2 3.2 4 0.3 4.3 0 0-2.8.3-6 0.5l19.1 56.8 11.5-34.5-8.2-22.3c-2.8-.2-5.5-.5-5.5-.5-2.8-.2-2.5-4.5.3-4.3 0 0 8.6.7 13.8.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.9.3-6 .5l18.9 56.3 5.2-17.4c2.3-7.2 4-12.4 4-16.9zm-35.3 7.4-15.7 45.7c4.7 1.4 9.7 2.1 14.8 2.1 6.1 0 12-1.1 17.4-3-1.4-2.2-2.7-4.6-3.4-7.5zm45.6-31.8c.2 1.8.4 3.8.4 5.9 0 5.8-1.1 12.4-4.3 20.6L90.4 104c16.5-9.6 27.6-27.4 27.6-47.8 0-9.6-2.5-18.6-6.8-26.4-2.4 4.7-5.9 8.5-8.8 11.2z"
      />
    </svg>
  )
}

function PrestaShopIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect width="24" height="24" rx="6" fill="#DF0067" />
      <path
        fill="#fff"
        d="M7.2 16.8V7.2h3.1c2.4 0 3.9 1.3 3.9 3.4 0 2.2-1.6 3.5-4 3.5H9.4v2.7zm2.2-4.7h.8c1.1 0 1.8-.6 1.8-1.5s-.7-1.5-1.8-1.5h-.8zm6.1 4.7h2.3V7.2h-2.3z"
      />
    </svg>
  )
}

function TailwindIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 28" aria-hidden="true" {...props}>
      <path
        fill="#38BDF8"
        d="M24 0C17.6 0 13.6 3.2 12 9.6 14.4 6.4 17.2 5.2 20.4 6c1.8.5 3.1 1.8 4.6 3.3C27.4 12 30.2 14.8 36 14.8c6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.5-3.1-1.8-4.6-3.3C32.6 2.8 29.8 0 24 0zM12 14.8C5.6 14.8 1.6 18 0 24.4c2.4-3.2 5.2-4.4 8.4-3.6 1.8.5 3.1 1.8 4.6 3.3C15.4 26.8 18.2 29.6 24 29.6c6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.5-3.1-1.8-4.6-3.3C20.6 17.6 17.8 14.8 12 14.8z"
      />
    </svg>
  )
}

function GitIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" {...props}>
      <path
        fill="#F05032"
        d="M124.8 58.3 69.7 3.2a11 11 0 0 0-15.5 0L42.8 14.6l14.7 14.7a9.7 9.7 0 0 1 12.6 12.6l14.2 14.2a9.7 9.7 0 1 1-5.8 5.5L63.7 46.8v31.3a9.7 9.7 0 1 1-8 0V46.1a9.7 9.7 0 0 1-5.3-12.8L35.5 18.4 3.2 50.7a11 11 0 0 0 0 15.5l55.1 55.1a11 11 0 0 0 15.5 0l53-53a11 11 0 0 0 0-15.5z"
      />
    </svg>
  )
}

const stack = [
  { name: 'React', Icon: ReactIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'PHP', Icon: PhpIcon },
  { name: 'WordPress', Icon: WordPressIcon },
  { name: 'PrestaShop', Icon: PrestaShopIcon },
  { name: 'Tailwind CSS', Icon: TailwindIcon },
  { name: 'Git', Icon: GitIcon },
]

export default function TechStack() {
  return (
    <section id="stack" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400/80">
          Herramientas
        </p>
        <h2 className="mt-3 font-display text-4xl text-zinc-50 sm:text-5xl">
          Tech stack
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base">
          El kit con el que construyo interfaces, tiendas e integraciones.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {stack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <tech.Icon className="h-9 w-9" />
              <span className="text-center text-xs font-medium text-zinc-300 sm:text-sm">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
