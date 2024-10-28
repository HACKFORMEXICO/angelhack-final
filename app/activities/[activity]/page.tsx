'use client'
import { Challenge } from '@/components/challenges'
import { useParams } from 'next/navigation'

const activities = {
  'cycle-for-power': {
    title: 'Cycle for power',
    image: '/assets/cycling.png',
    description: 'Reach 100kWh in 30 min of cycling',
    mascot: '/assets/mascota5.png'
  },
  'eco-cooking': {
    title: 'Eco cooking class',
    image: '/assets/cooking.png',
    description: 'Learn the impact of food and cook a delicious, healthy and eco friendly meal',
    mascot: '/assets/mascota6.png'
  },
  'compost-shaking': {
    title: 'Compost shaking',
    image: '/assets/composta.png',
    description: 'Take the compost class and learn sustainable practices',
    mascot: '/assets/mascota7.png'
  }
}

export default function ActivityPage() {
  const params = useParams()
  const activityId = params.activity as string
  const activity = activities[activityId as keyof typeof activities]

  if (!activity) {
    return <div>Activity not found</div>
  }

  return (
    <Challenge 
      title={activity.title}
      image={activity.image}
      description={activity.description}
      mascot={activity.mascot}
      activityId={activityId}
    />
  )
}
