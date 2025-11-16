'use client'

import { motion } from 'framer-motion'
import { spreads } from '../data/spreads'
import type { SpreadType } from '../types/tarot'

interface TarotSpreadSelectorProps {
  onSelectSpread: (spread: SpreadType) => void
}

export function TarotSpreadSelector({ onSelectSpread }: TarotSpreadSelectorProps) {
  const spreadList = Object.values(spreads)

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Choisissez votre type de tirage
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Sélectionnez le tirage qui correspond à votre question
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {spreadList.map((spread, index) => (
          <motion.div
            key={spread.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectSpread(spread.type)}
            className="cursor-pointer"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full border-2 border-transparent hover:border-purple-400 dark:hover:border-purple-600 transition-all">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {spread.cardCount}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center">
                {spread.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                {spread.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-200 dark:border-purple-800"
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
          💡 Conseil
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Concentrez-vous sur votre question avant de choisir votre tirage.
          Le Tarot répond à vos interrogations les plus profondes avec sagesse et intuition.
        </p>
      </motion.div>
    </div>
  )
}
