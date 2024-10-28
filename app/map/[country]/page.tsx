'use client'
import { CountryDashboardComponent } from '@/components/country-dashboard'

export default function CountryPage({ params }: { params: { country: string } }) {
  // Capitalize first letter of country name
  const countryName = params.country.charAt(0).toUpperCase() + params.country.slice(1)
  
  return (
    <div className="min-h-screen bg-[#a4d867] flex flex-col">
      <main className="flex-grow overflow-y-auto pt-16 pb-20 px-4 md:pt-20 md:pb-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-6 min-h-full py-8">
          <CountryDashboardComponent countryName={countryName} />
        </div>
      </main>
    </div>
  )
}
