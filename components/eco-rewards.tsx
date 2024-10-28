'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export function EcoRewards() {
  const rewards = [
    { title: '50% OFF A BEER AT ZEN COFFEE', company: 'ZENCOFFEE', image: '/placeholder.svg?height=100&width=300' },
    { title: '15% OFF IF YOU EXTEND YOUR STAY 3 NIGHTS', company: 'Lyf Funan', image: '/placeholder.svg?height=100&width=300' },
    { title: '20% OFF CITY BIKE TOUR', company: 'SingaporeBikecompany', image: '/placeholder.svg?height=100&width=300' },
    { title: 'FREE WEEKEND HIKE AND CAMPING', company: 'EcoFriendlytours', image: '/placeholder.svg?height=100&width=300' },
  ]

  return (
    <div className="min-h-screen bg-green-400 p-4 md:p-6 lg:p-8">
      <div className="max-w-md mx-auto space-y-6">


        <h1 className="text-xl font-bold text-center text-green-800">Local Rewards (Singapore)</h1>

        <div className="space-y-4">
          {rewards.map((reward, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={reward.image}
                alt={reward.title}
                width={300}
                height={100}
                className="w-full h-32 object-cover"
              />
              <CardContent className="p-4 bg-green-100">
                <h3 className="font-semibold text-sm">{reward.title}</h3>
                <p className="text-xs text-gray-600">{reward.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}