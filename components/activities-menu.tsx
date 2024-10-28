'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from './navbar'
import Navigation from './navigation'

export default function ActivitiesMenu() {
  return (
    <div className="font-['Fira_Sans',_sans-serif] bg-[#d5e6a3] min-h-screen text-[#333] flex flex-col">
      {/* Main Content */}
      <main className="flex-grow overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
          {/* Nature Scene */}
          <div className="relative rounded-lg overflow-hidden aspect-video">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Nature scene"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-4 left-4 font-['More_Sugar',_cursive] text-4xl text-white">lyf</div>
          </div>

          {/* Challenge Card */}
          <div className="bg-[#f2e2ba] rounded-lg p-4 relative min-h-[120px]">
            <h2 className="font-['Canva_Sans',_sans-serif] text-xl font-bold mb-2 pr-16">
              Find a challenge and start earning!
            </h2>
            <p className="text-sm mb-2 pr-16">Start Impact and earn rewards!</p>
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Flower mascot"
              width={80}
              height={80}
              className="absolute bottom-2 right-2"
            />
          </div>

          {/* Activity Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Cycle for power', 'Eco cooking class', 'Compost shaking'].map((activity, index) => (
              <div key={index} className="bg-[#f2e2ba] rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={activity}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{activity}</h3>
                  <p className="text-sm">
                    {index === 0 && 'Reach 100kWh in 30 min of cycling'}
                    {index === 1 && 'Learn the impact of food and cook a delicious, healthy and eco friendly meal'}
                    {index === 2 && 'Take the compost class and learn sustainable practices'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
