'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export function EcoRewards() {
  const rewards = [
    { 
      title: '50% OFF A BEER AT ZEN COFFEE', 
      company: 'ZENCOFFEE', 
      image: '/assets/coffee.png' 
    },
    { 
      title: '15% OFF IF YOU EXTEND YOUR STAY 3 NIGHTS', 
      company: 'Lyf Funan', 
      image: '/assets/bed.png' 
    },
    { 
      title: '20% OFF CITY BIKE TOUR', 
      company: 'SingaporeBikecompany', 
      image: '/assets/ride.png' 
    },
    { 
      title: 'FREE WEEKEND HIKE AND CAMPING', 
      company: 'EcoFriendlytours', 
      image: '/assets/hike.png' 
    },
  ]

  return (
    <div className="min-h-screen bg-green-400 p-4 md:p-6 lg:p-8">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-xl font-bold text-center text-green-800">Local Rewards (Singapore)</h1>

        <div className="space-y-4">
          {rewards.map((reward, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative w-full h-32">
                <Image
                  src={reward.image}
                  alt={reward.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
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
