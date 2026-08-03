import PROJECTS from '@/data/projects'

export default function Projects() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Projects</h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {PROJECTS.map((project, id) => {
          return (
            <div
              className="border-border shadow-shadow rounded-base bg-secondary-background border-2 p-4 sm:p-5"
              key={id}
            >
              <div className="text-foreground font-base mt-5">
                <project.icon className="text-main h-16 w-16" />

                <h2 className="font-heading mt-5 text-xl sm:text-2xl">
                  {project.name}
                </h2>

                <p className="mt-2">{project.description}</p>

                <div className="mt-8 grid grid-cols-2 gap-5">
                  <a
                    className="border-border bg-main text-main-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                    href={project.repoUrl}
                    target="_blank"
                  >
                    Github
                  </a>
                  <div className="grid grid-cols-5 items-center justify-items-center gap-0">
                    {project.skillsUsed.map((SkillIcon, index) => (
                      <span
                        key={index}
                        className="rounded-base border-border bg-background text-foreground shadow-shadow w-fit border-2 p-1"
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
