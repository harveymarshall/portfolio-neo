import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          I am a self taught coder, who began working as a Data Engineer in 2020. Since then I have worked across various projects and teams at different companies. To build robust, scalable and efficient data platforms. These platforms include data modelling frameworks, ingestion frameworks and patterns. As well as building internal tooling to help democratize data within a company itself.

          <br />
          <br />

          I have also built several personal projects which can be found on my <a href='https://github.com/harveymarshall' className="hover:underline font-bold" target="" rel="noreferrer">Github.</a>

          <br />
          <br />

          My current work status is - <span className="text-green-600 font-bold">Employed.</span>
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
