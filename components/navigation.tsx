'use client'

import React from 'react'
import { Leaf, MapPin, Award } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const pathname = usePathname()

  return (
    <footer className={`flex justify-around pt-4 bg-[#f2e8cf] ${className}`}>
      <Link href="/" className={`p-2 text-gray-600 hover:text-[#f18a8a] cursor-pointer ${pathname === '/' ? 'text-[#f18a8a]' : ''}`}>
        <Leaf />
      </Link>
      <Link href="/map" className={`p-2 text-gray-600 hover:text-[#f18a8a] cursor-pointer ${pathname === '/map' ? 'text-[#f18a8a]' : ''}`}>
        <MapPin />
      </Link>
      <Link href="/dashboard" className={`p-2 text-gray-600 hover:text-[#f18a8a] cursor-pointer ${pathname === '/dashboard' ? 'text-[#f18a8a]' : ''}`}>
        <Award />
      </Link>
    </footer>
  )
}
