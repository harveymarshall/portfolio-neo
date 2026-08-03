import { Link } from 'next-view-transitions'
import Links from '@/components/links'
import CurrentRole from '@/components/sections/current-role'
import StatusBadge from '@/components/status-badge'

export default function Home() {
  return (
    <div className="font-base">
      <section className="mb-16">
        <StatusBadge status="Employed" />

        <h1 className="font-heading mt-4 text-3xl sm:text-5xl">
          Harvey Marshall
        </h1>
        <p className="font-heading mt-2 text-lg sm:text-2xl">Data Engineer</p>

        <p className="mt-4 max-w-xl text-base sm:text-lg">
          I build reliable data pipelines, models, and full-stack applications,
          and I&apos;m based in West Yorkshire.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="border-border bg-main text-main-foreground shadow-shadow rounded-base font-heading hover:translate-x-boxShadowX hover:translate-y-boxShadowY border-2 px-5 py-2.5 text-center transition-all hover:shadow-none"
          >
            View Projects
          </Link>
          <a
            href="mailto:dev.marshallharvey@gmail.com"
            className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-heading hover:translate-x-boxShadowX hover:translate-y-boxShadowY border-2 px-5 py-2.5 text-center transition-all hover:shadow-none"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <section className="mb-16 max-w-2xl text-base sm:text-lg">
        <p>
          I&apos;m a self-taught Data Engineer experienced in building reliable
          pipelines, models, and analytics products, with full-stack development
          and DevOps experience alongside it.
        </p>
        <Link
          href="/about"
          className="mt-2 inline-block font-bold hover:underline"
        >
          Read more about me →
        </Link>
      </section>

      <CurrentRole />
      <Links />
    </div>
  )
}
