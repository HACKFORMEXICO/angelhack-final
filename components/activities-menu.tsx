'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ActivitiesMenu() {
  const router = useRouter()
  const [showVideo, setShowVideo] = useState(true)

  const activities = [
    { 
      id: 'cycle-for-power',
      name: 'Cycle for power', 
      image: '/assets/cycling.png',
      description: 'Reach 100kWh in 30 min of cycling'
    },
    { 
      id: 'eco-cooking',
      name: 'Eco cooking class', 
      image: '/assets/cooking.png',
      description: 'Learn the impact of food and cook a delicious, healthy and eco friendly meal'
    },
    { 
      id: 'compost-shaking',
      name: 'Compost shaking', 
      image: '/assets/composta.png',
      description: 'Take the compost class and learn sustainable practices'
    }
  ]

  return (
    <div className="font-['Fira_Sans',_sans-serif] bg-[#d5e6a3] min-h-screen text-[#333] flex flex-col">
      {/* Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg w-full max-w-[500px]">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full aspect-[9/16]">
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
      <main className="flex-grow overflow-y-auto pt-[64px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
          {/* Nature Scene */}
          <div className="relative rounded-lg overflow-hidden aspect-video">
            <Image
              src="/assets/lyf.png"
              alt="Nature scene"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Challenge Card */}
          <div className="bg-[#f2e2ba] rounded-lg p-3 sm:p-4 relative min-h-[100px] sm:min-h-[120px]">
            <h2 className="font-['Canva_Sans',_sans-serif] text-xl font-bold mb-2 pr-16">
              Find a challenge and start earning!
            </h2>
            <p className="text-sm mb-2 pr-16">Start Impact and earn rewards!</p>
            <Image
              src="/assets/mascota3.png"
              alt="Flower mascot"
              width={80}
              height={80}
              className="absolute bottom-2 right-2"
            />
          </div>

          {/* Activity Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {activities.map((activity) => (
              <div 
                key={activity.id} 
                className="bg-[#f2e2ba] rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => router.push(`/activities/${activity.id}`)}
              >
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
                  <p className="text-sm">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
