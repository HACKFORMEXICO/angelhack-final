'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ChallengeProps {
  title: string;
  image: string;
  description: string;
  mascot: string;
  activityId: string;
}

export function Challenge({ title, image, description, mascot, activityId }: ChallengeProps) {
  const router = useRouter()

  const handleSubmit = () => {
    const submitPath = `/activities/${activityId}/submit`
    console.log('Navigating to:', submitPath)
    
    // Try using window.location as a fallback
    try {
      router.push(submitPath)
    } catch (error) {
      console.error('Router push failed:', error)
      window.location.href = submitPath
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100 p-4">
      <Card className="w-full max-w-md bg-green-200 overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-48 md:h-64">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <h2 className="text-lg font-bold">{title.toUpperCase()}!</h2>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-2xl font-bold mb-4 text-green-800">Energy legion</CardTitle>
          <p className="text-green-900 mb-4">{description}</p>
          <div className="flex justify-center mb-4">
            <Image
              src={mascot}
              alt="Activity mascot"
              width={100}
              height={100}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-pink-500 hover:bg-pink-600 text-white"
            onClick={handleSubmit}
          >
            Submit evidence
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}