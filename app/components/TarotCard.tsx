'use client'

import { motion } from 'framer-motion'
import type { TarotCard as TarotCardType } from '../types/tarot'

interface TarotCardProps {
  card: TarotCardType
  position: { x: number; y: number; rotation: number }
  index: number
  isRevealed: boolean
  onClick: () => void
}

export function TarotCard({ card, position, index, isRevealed, onClick }: TarotCardProps) {
  const getCardColor = () => {
    if (card.arcana === 'major') {
      return 'from-purple-600 to-indigo-600'
    }
    switch (card.suit) {
      case 'cups': return 'from-blue-500 to-cyan-500'
      case 'wands': return 'from-orange-500 to-red-500'
      case 'swords': return 'from-gray-500 to-slate-600'
      case 'coins': return 'from-yellow-500 to-amber-600'
      default: return 'from-purple-500 to-pink-500'
    }
  }

  const getSuitSymbol = () => {
    switch (card.suit) {
      case 'cups': return '🏆'
      case 'wands': return '🪄'
      case 'swords': return '⚔️'
      case 'coins': return '💰'
      default: return '✨'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotateY: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateY: isRevealed ? 180 : 0,
        x: `${position.x - 50}%`,
        y: `${position.y - 50}%`,
        rotate: card.reversed ? position.rotation + 180 : position.rotation,
      }}
      transition={{
        opacity: { delay: index * 0.2 },
        scale: { delay: index * 0.2, type: 'spring' },
        rotateY: { duration: 0.6, delay: isRevealed ? 0.5 : 0 },
        x: { delay: index * 0.2, type: 'spring' },
        y: { delay: index * 0.2, type: 'spring' },
      }}
      className="absolute cursor-pointer"
      style={{
        left: '50%',
        top: '50%',
        transformStyle: 'preserve-3d',
      }}
      onClick={onClick}
      whileHover={{ scale: 1.1, zIndex: 100 }}
    >
      <div className="relative w-32 h-48 md:w-40 md:h-60">
        {/* Card Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-lg shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-lg p-2 border-4 border-yellow-500">
            <div className="w-full h-full border-2 border-yellow-400 rounded flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🌙</div>
                <div className="text-yellow-400 text-xs font-serif">TAROT</div>
                <div className="text-yellow-400 text-xs font-serif">DE MARSEILLE</div>
                <div className="text-4xl mt-2">⭐</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-lg shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className={`w-full h-full bg-gradient-to-br ${getCardColor()} rounded-lg p-3 border-4 border-yellow-500`}>
            <div className="w-full h-full bg-white/95 dark:bg-gray-900/95 rounded flex flex-col items-center justify-between p-3">
              <div className="text-2xl">{getSuitSymbol()}</div>
              <div className="text-center flex-1 flex items-center">
                <h3 className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-100 leading-tight">
                  {card.name}
                </h3>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {card.arcana === 'major' ? `Arcane ${card.id}` : `${card.value}`}
              </div>
              {card.reversed && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Inversée
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
