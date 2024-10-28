'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

export default function ActivitiesMenu() {
  const [showVideo, setShowVideo] = useState(true)

  return (
    <div className="font-['Fira_Sans',_sans-serif] bg-[#d5e6a3] min-h-screen text-[#333] flex flex-col">
      {/* Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg w-full max-w-4xl">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full aspect-video">
              <video 
                className="w-full h-full rounded-lg"
                controls
                autoPlay
                muted
              >
                <source src="/assets/animacion.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

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
            {[
              { name: 'Cycle for power', image: '/assets/cycling.png' },
              { name: 'Eco cooking class', image: '/assets/cooking.png' },
              { name: 'Compost shaking', image: '/assets/composta.png' }
            ].map((activity, index) => (
              <div key={index} className="bg-[#f2e2ba] rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{activity.name}</h3>
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
