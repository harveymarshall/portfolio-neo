import { PAST_ROLES } from '@/data/experience'

export default function Experience() {
  return (
    <div className="mb-16">
      <h2 className="font-heading mb-8 text-xl sm:text-2xl">Experience</h2>

      <div className="flex flex-col gap-5">
        {PAST_ROLES.map((role, id) => {
          return (
            <div
              className="border-border bg-secondary-background shadow-shadow rounded-base border-2 p-4 sm:p-5"
              key={id}
            >
              <h3 className="font-heading text-lg sm:text-xl">
                {role.role} @ {role.company}
              </h3>

              <p className="mt-0.5 mb-4 text-sm">
                {role.startDate} - {role.endDate}
              </p>
              <p>{role.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
