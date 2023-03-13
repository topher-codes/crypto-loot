import Card from '@/components/Card'

export default function DataCard({ options }: { options: any }) {
  return (
  <Card className="w-96 h-96 flex flex-col items-center justify-center">
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="text-3xl font-bold">{options.title}</h1>
      <p>This is the DataCard component.</p>
      <p>It is a card that displays data.</p>
      <p>It is used in the Dashboard page.</p>

    </div>
  </Card>
  )
}
