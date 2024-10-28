'use client'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import confetti from 'canvas-confetti'

const activities = {
  'cycle-for-power': {
    title: 'Cycle for power',
    image: '/assets/cycling.png',
    description: 'Reach 100kWh in 30 min of cycling',
    mascot: '/assets/mascota5.png',
    reward: '50 Impact Points'
  },
  'eco-cooking': {
    title: 'Eco cooking class',
    image: '/assets/cooking.png',
    description: 'Learn the impact of food and cook a delicious, healthy and eco friendly meal',
    mascot: '/assets/mascota6.png',
    reward: '30 Impact Points'
  },
  'compost-shaking': {
    title: 'Compost shaking',
    image: '/assets/composta.png',
    description: 'Take the compost class and learn sustainable practices',
    mascot: '/assets/mascota7.png',
    reward: '40 Impact Points'
  }
}

export default function SubmitPage() {
  const params = useParams()
  const router = useRouter()
  const activityId = params.activity as string
  const activity = activities[activityId as keyof typeof activities]
  
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!activity) {
    return <div>Activity not found</div>
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    setIsSubmitted(true)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100 p-4">
      <Card className="w-full max-w-md bg-green-200 overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-48 md:h-64">
            <Image
              src={activity.image}
              alt={activity.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <h2 className="text-lg font-bold">{activity.title.toUpperCase()}!</h2>
            </div>
          </div>
        </CardHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <CardContent className="p-4 space-y-4">
              <CardTitle className="text-2xl font-bold text-green-800">
                Submit Your Evidence
              </CardTitle>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-green-900">
                  Upload Photo Evidence
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  className="w-full"
                />
              </div>

              {previewUrl && (
                <div className="relative h-48 w-full">
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              )}

              <div className="flex justify-center">
                <Image
                  src={activity.mascot}
                  alt="Activity mascot"
                  width={100}
                  height={100}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                Submit Evidence
              </Button>
            </CardFooter>
          </form>
        ) : (
          <CardContent className="p-4 space-y-4">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-bold text-green-800">
                Congratulations! 🎉
              </h3>
              <p className="text-green-700">
                You&apos;ve completed the {activity.title}!
              </p>
              <p className="text-green-700 font-bold">
                Reward: {activity.reward}
              </p>
              <div className="flex justify-center">
                <Image
                  src={activity.mascot}
                  alt="Activity mascot"
                  width={120}
                  height={120}
                />
              </div>
              <Button 
                onClick={() => router.push('/dashboard/rewards')}
                className="bg-pink-500 hover:bg-pink-600 text-white"
              >
                See Rewards
              </Button>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
