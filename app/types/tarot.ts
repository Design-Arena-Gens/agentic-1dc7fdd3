export type SpreadType = 'single' | 'cross' | 'linear' | 'grand'

export interface TarotCard {
  id: number
  name: string
  arcana: 'major' | 'minor'
  suit?: 'cups' | 'wands' | 'swords' | 'coins'
  value?: number
  reversed: boolean
}

export interface SpreadPosition {
  x: number
  y: number
  rotation: number
  label: string
}

export interface Spread {
  type: SpreadType
  name: string
  description: string
  cardCount: number
  positions: SpreadPosition[]
}
