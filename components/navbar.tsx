import React from 'react'
import Image from 'next/image'
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: 'ef427577-c323-4698-870e-871fac39c594',
        walletConnectors: [ EthereumWalletConnectors ],
      }}
    >
      <header className={`flex justify-between items-center p-4 bg-[#f2e2ba] ${className}`}>
        <div className="relative w-32 h-12">
          <Image
            src="/assets/logo.png"
            alt="Login Title"
            width={128}
            height={48}
            className="object-contain"
            priority
          />
        </div>
        <div className="flex items-center space-x-2">
          <DynamicWidget />
        </div>
      </header>
    </DynamicContextProvider>
  )
}
