import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">About</h1>

      <div className="mb-10 max-w-2xl space-y-4 text-base sm:text-lg">
        <p>
          I am a self taught coder, who began working as a Data Engineer in
          2020. Since then I have worked across various projects and teams at
          different companies. To build robust, scalable and efficient data
          platforms. These platforms include data modelling frameworks,
          ingestion frameworks and patterns. As well as building internal
          tooling to help democratize data within a company itself.
        </p>
        <p>
          I have also built several personal projects which can be found on my{' '}
          <a
            href="https://github.com/harveymarshall"
            className="font-bold hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Github.
          </a>
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
