import type { TarotCard } from '../types/tarot'

export const majorArcana: Omit<TarotCard, 'reversed'>[] = [
  { id: 0, name: 'Le Mat', arcana: 'major' },
  { id: 1, name: 'Le Bateleur', arcana: 'major' },
  { id: 2, name: 'La Papesse', arcana: 'major' },
  { id: 3, name: "L'Impératrice", arcana: 'major' },
  { id: 4, name: "L'Empereur", arcana: 'major' },
  { id: 5, name: 'Le Pape', arcana: 'major' },
  { id: 6, name: "L'Amoureux", arcana: 'major' },
  { id: 7, name: 'Le Chariot', arcana: 'major' },
  { id: 8, name: 'La Justice', arcana: 'major' },
  { id: 9, name: "L'Hermite", arcana: 'major' },
  { id: 10, name: 'La Roue de Fortune', arcana: 'major' },
  { id: 11, name: 'La Force', arcana: 'major' },
  { id: 12, name: 'Le Pendu', arcana: 'major' },
  { id: 13, name: "L'Arcane Sans Nom", arcana: 'major' },
  { id: 14, name: 'Tempérance', arcana: 'major' },
  { id: 15, name: 'Le Diable', arcana: 'major' },
  { id: 16, name: 'La Maison Dieu', arcana: 'major' },
  { id: 17, name: "L'Étoile", arcana: 'major' },
  { id: 18, name: 'La Lune', arcana: 'major' },
  { id: 19, name: 'Le Soleil', arcana: 'major' },
  { id: 20, name: 'Le Jugement', arcana: 'major' },
  { id: 21, name: 'Le Monde', arcana: 'major' },
]

export const minorArcana: Omit<TarotCard, 'reversed'>[] = [
  // Coupes (Cups)
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 22 + i,
    name: `${i + 1} de Coupe`,
    arcana: 'minor' as const,
    suit: 'cups' as const,
    value: i + 1,
  })),
  // Bâtons (Wands)
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 36 + i,
    name: `${i + 1} de Bâton`,
    arcana: 'minor' as const,
    suit: 'wands' as const,
    value: i + 1,
  })),
  // Épées (Swords)
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 50 + i,
    name: `${i + 1} d'Épée`,
    arcana: 'minor' as const,
    suit: 'swords' as const,
    value: i + 1,
  })),
  // Deniers (Coins)
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 64 + i,
    name: `${i + 1} de Denier`,
    arcana: 'minor' as const,
    suit: 'coins' as const,
    value: i + 1,
  })),
]

export const allCards: Omit<TarotCard, 'reversed'>[] = [...majorArcana, ...minorArcana]
