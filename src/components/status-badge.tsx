export default function StatusBadge({ status }: { status: string }) {
  return (
    <span className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base inline-flex w-fit items-center gap-2 border-2 px-3 py-1 text-sm sm:text-base">
      <span className="size-2 rounded-full bg-green-600" />
      {status}
    </span>
  )
}
