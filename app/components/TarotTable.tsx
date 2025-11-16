'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TarotCard } from './TarotCard'
import { spreads } from '../data/spreads'
import { allCards } from '../data/tarotCards'
import { SeededRandom } from '../utils/seededRandom'
import type { SpreadType, TarotCard as TarotCardType } from '../types/tarot'

interface TarotTableProps {
  spreadType: SpreadType
  seed: string
  onReset: () => void
}

export function TarotTable({ spreadType, seed, onReset }: TarotTableProps) {
  const [drawnCards, setDrawnCards] = useState<TarotCardType[]>([])
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set())
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isAutoRevealing, setIsAutoRevealing] = useState(false)

  const spread = spreads[spreadType]

  useEffect(() => {
    const rng = new SeededRandom(seed)
    const shuffled = rng.shuffle(allCards)
    const selected = shuffled.slice(0, spread.cardCount).map(card => ({
      ...card,
      reversed: rng.boolean(),
    }))
    setDrawnCards(selected)
  }, [spreadType, seed, spread.cardCount])

  const revealCard = (index: number) => {
    if (!revealedCards.has(index)) {
      setRevealedCards(new Set(Array.from(revealedCards).concat(index)))
      if (index === currentCardIndex) {
        setCurrentCardIndex(index + 1)
      }
    }
  }

  const revealAll = () => {
    setIsAutoRevealing(true)
    let index = 0
    const interval = setInterval(() => {
      if (index < drawnCards.length) {
        revealCard(index)
        index++
      } else {
        clearInterval(interval)
        setIsAutoRevealing(false)
      }
    }, 800)
  }

  const allRevealed = revealedCards.size === drawnCards.length

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex justify-between items-center"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            {spread.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            {spread.description}
          </p>
        </div>
        <div className="flex gap-3">
          {!allRevealed && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={revealAll}
              disabled={isAutoRevealing}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Révéler toutes les cartes
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReset}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-lg transition-colors"
          >
            Nouveau tirage
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative bg-gradient-to-br from-green-800/20 to-emerald-900/20 dark:from-green-900/40 dark:to-emerald-950/40 rounded-2xl shadow-2xl p-8 min-h-[600px] border-4 border-yellow-700/30"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1) 0%, transparent 70%)',
        }}
      >
        <div className="relative w-full h-full min-h-[500px]">
          {drawnCards.map((card, index) => (
            <TarotCard
              key={index}
              card={card}
              position={spread.positions[index]}
              index={index}
              isRevealed={revealedCards.has(index)}
              onClick={() => revealCard(index)}
            />
          ))}
        </div>
      </motion.div>

      {!allRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Cliquez sur une carte pour la révéler
          </p>
        </motion.div>
      )}

      {allRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Cartes tirées
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {drawnCards.map((card, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    {spread.positions[index].label}
                  </span>
                  {card.reversed && (
                    <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">
                      Inversée
                    </span>
                  )}
                </div>
                <p className="text-gray-800 dark:text-gray-100 font-medium">
                  {card.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {card.arcana === 'major' ? 'Arcane majeur' : `${card.suit} - Arcane mineur`}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold">💡 Module d'interprétation IA :</span> Fonctionnalité à venir - L'intelligence artificielle vous proposera bientôt une interprétation personnalisée de votre tirage.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
