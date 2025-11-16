'use client'

import { useState } from 'react'
import { TarotSpreadSelector } from './components/TarotSpreadSelector'
import { TarotTable } from './components/TarotTable'
import { ThemeToggle } from './components/ThemeToggle'
import { SeedInput } from './components/SeedInput'
import type { SpreadType } from './types/tarot'

export default function Home() {
  const [selectedSpread, setSelectedSpread] = useState<SpreadType | null>(null)
  const [seed, setSeed] = useState<string>('')
  const [isDrawing, setIsDrawing] = useState(false)

  const handleSpreadSelect = (spread: SpreadType) => {
    setSelectedSpread(spread)
    setIsDrawing(true)
  }

  const handleReset = () => {
    setIsDrawing(false)
    setSelectedSpread(null)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 transition-colors duration-500">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Tarot de Marseille
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Découvrez votre destinée à travers les arcanes
            </p>
          </div>
          <div className="flex items-center gap-4">
            <SeedInput seed={seed} onSeedChange={setSeed} />
            <ThemeToggle />
          </div>
        </header>

        {!isDrawing ? (
          <TarotSpreadSelector onSelectSpread={handleSpreadSelect} />
        ) : (
          <TarotTable
            spreadType={selectedSpread!}
            seed={seed}
            onReset={handleReset}
          />
        )}
      </div>
    </main>
  )
}
