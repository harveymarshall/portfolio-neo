import { CURRENT_ROLE } from '@/data/experience'

export default function CurrentRole() {
  return (
    <div className="mb-16">
      <h2 className="font-heading mb-8 text-xl sm:text-2xl">My Current Role</h2>

      <div className="border-border bg-secondary-background shadow-shadow rounded-base border-2 p-4 sm:p-5">
        <h3 className="font-heading text-lg sm:text-xl">
          {CURRENT_ROLE.role} @ {CURRENT_ROLE.company}
        </h3>

        <p className="mt-0.5 mb-4 text-sm">
          {CURRENT_ROLE.startDate} - {CURRENT_ROLE.endDate}
        </p>
        <p>{CURRENT_ROLE.description}</p>
      </div>
    </div>
  )
}
