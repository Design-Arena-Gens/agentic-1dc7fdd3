import type { Spread } from '../types/tarot'

export const spreads: Record<string, Spread> = {
  single: {
    type: 'single',
    name: 'Tirage à une carte',
    description: 'Une réponse simple et directe à votre question',
    cardCount: 1,
    positions: [
      { x: 50, y: 50, rotation: 0, label: 'Réponse' }
    ]
  },
  cross: {
    type: 'cross',
    name: 'Tirage en croix',
    description: 'Une vision complète de votre situation',
    cardCount: 5,
    positions: [
      { x: 50, y: 30, rotation: 0, label: 'Situation actuelle' },
      { x: 30, y: 50, rotation: 0, label: 'Obstacle' },
      { x: 70, y: 50, rotation: 0, label: 'Atout' },
      { x: 50, y: 50, rotation: 90, label: 'Influence cachée' },
      { x: 50, y: 70, rotation: 0, label: 'Issue' }
    ]
  },
  linear: {
    type: 'linear',
    name: 'Tirage linéaire',
    description: 'Passé, présent, futur',
    cardCount: 3,
    positions: [
      { x: 25, y: 50, rotation: 0, label: 'Passé' },
      { x: 50, y: 50, rotation: 0, label: 'Présent' },
      { x: 75, y: 50, rotation: 0, label: 'Futur' }
    ]
  },
  grand: {
    type: 'grand',
    name: 'Grand tirage',
    description: 'Une lecture approfondie en 10 cartes',
    cardCount: 10,
    positions: [
      { x: 50, y: 20, rotation: 0, label: 'Vous' },
      { x: 50, y: 30, rotation: 90, label: 'Influences' },
      { x: 50, y: 40, rotation: 0, label: 'Objectif' },
      { x: 30, y: 50, rotation: 0, label: 'Fondations' },
      { x: 70, y: 50, rotation: 0, label: 'Passé récent' },
      { x: 50, y: 60, rotation: 0, label: 'Futur proche' },
      { x: 80, y: 25, rotation: 0, label: 'Attitude' },
      { x: 80, y: 40, rotation: 0, label: 'Entourage' },
      { x: 80, y: 55, rotation: 0, label: 'Espoirs et peurs' },
      { x: 80, y: 70, rotation: 0, label: 'Issue finale' }
    ]
  }
}
