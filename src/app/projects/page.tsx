import PROJECTS from '@/data/projects'

export default function Projects() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Projects</h1>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
              key={id}
            >

              <div className="text-main-foreground font-base mt-5">

                <project.project_icon className="h-20 w-20 " />

                <h2 className="mt-5 font-heading text-xl sm:text-2xl">
                  {project.name}
                </h2>

                <p className="mt-2">{project.description}</p>

                <div className="mt-8 grid grid-cols-2 gap-5">
                  <a
                    className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                    href={project.repoUrl}
                    target="_blank"
                  >
                    Github
                  </a>
                  <div className="grid grid-cols-5 items-center justify-items-center gap-0">
                    {project.skills_used.map((SkillIcon, index) => (
                      <span
                        key={index}
                        className="rounded-base border-border border-2 bg-secondary-background p-1 text-foreground shadow-shadow w-fit"
                      >
                        <SkillIcon />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
