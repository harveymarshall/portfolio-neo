import PAST_ROLES from '@/data/experience'

export default function CurrentRole() {
    return (
        <div className="mb-16">
            <h2 className="mb-8 text-xl font-heading sm:text-2xl">My Current Role</h2>

            {PAST_ROLES[0] && (
                <div className="mb-8">
                    <h3 className="text-lg font-heading sm:text-xl">
                        {PAST_ROLES[0].role} @ {PAST_ROLES[0].company}
                    </h3>

                    <p className="mb-4 mt-0.5 text-sm">
                        {PAST_ROLES[0].startDate} - {PAST_ROLES[0].endDate}
                    </p>
                    <p>{PAST_ROLES[0].description}</p>
                </div>
            )}
        </div>
    )
}
