import { EcoRewards } from '@/components/eco-rewards'

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-[#a4d867] flex flex-col">
      <main className="flex-grow overflow-y-auto pt-16 pb-20 px-4 md:pt-20 md:pb-24">
        <div className="max-w-4xl mx-auto flex items-center justify-center min-h-full py-8">
          <EcoRewards />
        </div>
      </main>
    </div>
  )
}
