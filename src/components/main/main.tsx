export type Props = {
  title: string
  description: string
}

export const Main = ({ title, description }: Props) => {
  return (
    <main className="flex flex-col items-center justify-center gap-16 p-16 text-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className="text-xl">{description || 'We should have an description'}</h2>
      </div>
    </main>
  )
}
