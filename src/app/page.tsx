import Links from '@/components/links'
import CurrentRole from '@/components/sections/current_role'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Harvey Marshall</h1>
      <p className="mt-2 text-lg sm:text-xl">Data Engineer</p>
      <p className="mt-2 text-lg sm:text-lg">
        Current Status - <span className="text-green-600 font-bold">Employed</span>
      </p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Hi, my name is Harvey Marshall. I am a Data Engineer based in West Yorkshire.</p>

        <br />

        <p>
          A Data engineer experienced in building reliable pipelines, models, and analytics products. I also have full stack software development skills and experience using DevOps practices and technologies.
        </p>

        <br />

        <p>
          I currently work for a Logistics company called Starlinks Global. In my role I am the sole developer responsible for building internal software for use by areas of the business such as the Finance and Quality teams. I am building an Internal tool currently which will stream line the onboarding of new suppliers and improve the efficiency of creating cost models for our customers. This application involves building the full stack from Frontend UI to the backend API and the data models required. My ability to adapt and learn is something I believe makes me stand out from the crowd. I have a very positive attitude and seek to create a good culture among all those I work with. One thing I have found in common with all my previous and current roles is that the best place to learn is from those around you. It is always better to ask questions and learn from those you work with. Among my strongest skills is my customer service. All the roles I have held have a strong emphasis on people; this has allowed me to solidify my people management and interaction skills. I am confident under pressure and have experience working towards deadlines and working within a fast-paced environment.
          <br />
          <br />
          I am not afraid to ask questions and that is something that my current role requires of me on a daily basis. I believe that asking questions is a compulsory skill for any job. It is better to ask a question than struggle with no answer or guidance.
          <br />
          <br />
          A big thing for me and my workplace is the culture. I want to work somewhere that puts the people, whether that is customers or employees at the forefront of everything they do.
        </p>
      </div>

      <br />
      <br />

      <CurrentRole />
      <Links />
    </div>
  )
}
