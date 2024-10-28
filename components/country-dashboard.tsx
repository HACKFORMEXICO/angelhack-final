'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Leaf, MapPin, Award } from 'lucide-react'
import { useState, useEffect } from 'react'

// Add the prop type at the top
interface CountryDashboardProps {
  countryName: string;
}

// Add this interface at the top of the file
interface DashboardActivity {
  title: string
  image: string
  mascot: string
}

export function CountryDashboardComponent({ countryName }: CountryDashboardProps) {
  const [activities, setActivities] = useState<DashboardActivity[]>([])

  // Define all available activities
  const allActivities = [
    { 
      title: 'CYCLE FOR POWER', 
      image: '/assets/cycling.png',
      mascot: '/assets/mascota1.png'
    },
    { 
      title: 'ECO COOKING CLASS', 
      image: '/assets/cooking.png',
      mascot: '/assets/mascota2.png'
    },
    { 
      title: 'COMPOST SHAKING', 
      image: '/assets/composta.png',
      mascot: '/assets/mascota3.png'
    }
  ]

  useEffect(() => {
    // Shuffle and pick random number of activities (1-3)
    const shuffled = [...allActivities].sort(() => 0.5 - Math.random())
    const numActivities = Math.floor(Math.random() * 3) + 1 // Random number between 1-3
    setActivities(shuffled.slice(0, numActivities))
  }, [])

  // Stats section remains the same
  const stats = [
    { label: 'CO2 saved', value: `${Math.floor(Math.random() * 1000)} Kg`, icon: '💡' },
    { label: 'WATER saved', value: `${Math.floor(Math.random() * 200)}L`, icon: '💧' },
    { label: 'TRASH Recycled', value: `${Math.floor(Math.random() * 100)} kg`, icon: '♻️' },
    { label: 'HOURS VOLUNTEERING', value: `${Math.floor(Math.random() * 50)}`, icon: '🕒' },
  ]

  return (
    <div className="font-['Fira_Sans',_sans-serif] bg-[#a4d867] min-h-screen text-[#333] flex flex-col">
      <main className="flex-grow overflow-y-auto pt-16 pb-20 px-4 md:pt-20 md:pb-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-full py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {countryName}
          </h1>

          <Card className="w-full bg-[#f2e8cf] rounded-lg p-6 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-[#f2e8cf] rounded-lg p-3 flex flex-col items-center justify-center text-center">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-bold">{stat.value}</div>
                  <div className="text-xs">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="font-bold mb-4">Available activities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activities.map((activity, index) => (
                  <Card key={index} className="bg-[#f2e8cf] rounded-lg overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw"
                      />
                    </div>
                    <div className="p-3 flex justify-between items-center">
                      <span className="font-bold">{activity.title}</span>
                      <div className="relative w-12 h-12">
                        <Image
                          src={activity.mascot}
                          alt="Activity mascot"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Link href="/dashboard/rewards" passHref>
              <Button className="w-full bg-[#f18a8a] hover:bg-[#e57373] text-black font-bold py-3 rounded-full">
                See Rewards
              </Button>
            </Link>
          </Card>
        </div>
      </main>
      
      <footer className="bg-[#f2e8cf] flex justify-around py-4 fixed bottom-0 left-0 right-0">
        <Leaf className="p-2 text-gray-600 hover:text-[#f18a8a] cursor-pointer" />
        <MapPin className="p-2 text-gray-600 hover:text-[#f18a8a] cursor-pointer" />
        <Award className="p-2 text-gray-600 hover:text-[#f18a8a] cursor-pointer" />
      </footer>
    </div>
  )
}
