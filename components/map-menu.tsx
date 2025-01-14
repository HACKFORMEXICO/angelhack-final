"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image'

export default function MapMenu() {
  const router = useRouter();

  const handleCountryClick = (countryName: string) => {
    console.log(`Navigating to: /map/${countryName.toLowerCase()}`);
    router.push(`/map/${countryName.toLowerCase()}`);
  };

  const countries = [
    'FRANCE', 'VIETNAM', 'AUSTRIA', 'CHINA', 'GERMANY', 'PHILIPINES',
    'SINGAPORE', 'INDONESIA', 'UK', 'AUSTRALIA', 'THAILAND', 'MEXICO'
  ]

  return (
    <div className="bg-[#a4d867] min-h-screen p-4 sm:p-6 md:p-8 text-black font-sans">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center drop-shadow-md">World wide Impact</h1>
        
        <div className="relative w-full aspect-[4/3] mb-4">
          <Image
            src="/assets/map.png"
            alt="World map with impact visualization"
            layout="fill"
            objectFit="contain"
            priority
          />
          <div 
            onClick={() => handleCountryClick('Spain')} 
            className="absolute cursor-pointer hover:opacity-75 transition-opacity"
            style={{ top: '30%', left: '45%', width: '5%', height: '5%' }}
          />
          <div 
            onClick={() => handleCountryClick('France')} 
            className="absolute cursor-pointer hover:opacity-75 transition-opacity"
            style={{ top: '28%', left: '47%', width: '5%', height: '5%' }}
          />
        </div>

        <div className="bg-[#f0e6c3] mb-6 p-3 rounded-lg relative">
          <p className="text-sm pr-10">
            Check out how lyf is making the difference worldwide and cash rewards everywhere!
          </p>
          <div className="absolute -top-4 right-2 w-12 h-12">
            <Image
              src="/assets/mascota4.png"
              alt="Starfish mascot"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
          {countries.map((country, index) => (
            <div 
              key={index} 
              onClick={() => handleCountryClick(country)}
              className="bg-[#f0e6c3] rounded-full py-1 px-3 text-center shadow-sm cursor-pointer hover:opacity-75 transition-opacity"
            >
              {country}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}