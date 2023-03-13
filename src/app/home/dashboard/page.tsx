import DataCard from '@/components/DataCard'

const cards = [
  {
    title: 'Market 1',
  },
  {
    title: 'Market 2',
  },
  {
    title: 'Market 3',
  },
  {
    title: 'Market 4',
  },
  {
    title: 'Market 5',
  },
  {
    title: 'Market 6',
  },
  {
    title: 'Market 7',
  },
  {
    title: 'Market 8',
  },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center w-full h-screen overflow-y-auto">

      <div className="flex flex-row w-full h-full flex-wrap p-6">
        {cards.map((card) => (
          <DataCard options={card} key={card.title} />
        ))}
        
        
      </div>
    </div>
  )
}
