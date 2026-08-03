import SKILLS from '@/data/skills'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Skills() {
  return (
    <div className="mb-16">
      <h2 className="font-heading mb-8 text-xl sm:text-2xl">Skills</h2>

      {SKILLS.map((item, id) => {
        return (
          <div key={id}>
            <h3 className="font-heading mb-4 text-lg sm:text-xl">
              {item.field}
            </h3>

            <div className="mb-10 flex flex-wrap gap-5">
              {item.skills.map((skill, id) => {
                return (
                  <TooltipProvider key={id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base inline-flex border-2 p-2">
                          <skill.icon className="h-8 w-8" title="" />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>{skill.skill}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
