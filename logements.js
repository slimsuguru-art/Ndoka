export const formatFCFA = (n) => n.toLocaleString('fr-FR') + ' FCFA';

export const quartiers = [
  'Nzeng-Ayong',
  'Angondjé',
  'Owendo',
  'Akébé',
  'Lalala',
  'Alibandeng',
  'Batterie IV',
  'PK9',
];

// Données fictives pour la V1. Les photos seront ajoutées à l'étape 6.
export const logements = [
  {
    id: 1, type: 'Studio', titre: 'Studio moderne proche du carrefour',
    quartier: 'Nzeng-Ayong', loyer: 60000, cautionMois: 2, avanceMois: 1, chambres: 1,
    edan: true, forage: false, coursFermee: true, disponible: true, photos: [],
    verifie: { route: 'Route goudronnée', acces: 'Taxi jusqu’à la porte', eau: 'Pression moyenne' },
    description: 'Studio carrelé avec douche interne et cuisine ouverte, dans une cour sécurisée.',
  },
  {
    id: 2, type: 'Appartement', titre: 'Appartement 2 chambres calme',
    quartier: 'Angondjé', loyer: 150000, cautionMois: 2, avanceMois: 2, chambres: 2,
    edan: true, forage: true, coursFermee: true, disponible: true, photos: [],
    verifie: { route: 'Route goudronnée', acces: 'Accessible en voiture', eau: 'Pression forte (eau H24)' },
    description: 'Deux chambres, salon spacieux, parking dans la cour fermée.',
  },
  {
    id: 3, type: 'Chambre-salon', titre: 'Chambre-salon économique',
    quartier: 'Akébé', loyer: 45000, cautionMois: 2, avanceMois: 1, chambres: 1,
    edan: false, forage: false, coursFermee: false, disponible: true, photos: [],
    verifie: { route: 'Piste en latérite praticable', acces: 'Taxi à 100 m', eau: 'Pression faible le matin' },
    description: 'Chambre-salon avec toilettes internes, idéal pour une première location.',
  },
  {
    id: 4, type: 'Villa', titre: 'Villa basse 3 chambres avec cour',
    quartier: 'Owendo', loyer: 250000, cautionMois: 3, avanceMois: 2, chambres: 3,
    edan: true, forage: true, coursFermee: true, disponible: true, photos: [],
    verifie: { route: 'Route goudronnée', acces: 'Accessible en voiture', eau: 'Pression forte (eau H24)' },
    description: 'Villa familiale avec grande cour fermée, deux salles d’eau et cuisine équipée.',
  },
  {
    id: 5, type: 'Studio', titre: 'Studio indépendant carrelé',
    quartier: 'Lalala', loyer: 55000, cautionMois: 2, avanceMois: 1, chambres: 1,
    edan: true, forage: false, coursFermee: false, disponible: true, photos: [],
    verifie: { route: 'Route en bon état', acces: 'Taxi jusqu’à la porte', eau: 'Pression moyenne' },
    description: 'Studio indépendant avec compteur EDAN individuel et douche interne.',
  },
  {
    id: 6, type: 'Appartement', titre: 'Appartement 3 chambres à l’étage',
    quartier: 'Angondjé', loyer: 200000, cautionMois: 2, avanceMois: 2, chambres: 3,
    edan: true, forage: true, coursFermee: true, disponible: true, photos: [],
    verifie: { route: 'Route goudronnée', acces: 'Accessible en voiture', eau: 'Pression forte (eau H24)' },
    description: 'Grand appartement lumineux avec balcon et gardien dans la résidence.',
  },
  {
    id: 7, type: 'Chambre', titre: 'Chambre simple bien située',
    quartier: 'Nzeng-Ayong', loyer: 40000, cautionMois: 1, avanceMois: 1, chambres: 1,
    edan: false, forage: false, coursFermee: true, disponible: true, photos: [],
    verifie: { route: 'Route goudronnée', acces: 'Taxi à 50 m', eau: 'Pression moyenne' },
    description: 'Chambre carrelée dans une cour partagée et fermée, toilettes communes propres.',
  },
  {
    id: 8, type: 'Maison', titre: 'Maison 2 chambres avec forage',
    quartier: 'Alibandeng', loyer: 120000, cautionMois: 2, avanceMois: 2, chambres: 2,
    edan: true, forage: true, coursFermee: true, disponible: true, photos: [],
    verifie: { route: 'Piste en latérite praticable', acces: 'Accessible en voiture', eau: 'Pression forte (forage)' },
    description: 'Maison avec forage privé, cour fermée et espace pour un petit jardin.',
  },
  {
    id: 9, type: 'Appartement', titre: 'Appartement meublé standing',
    quartier: 'Batterie IV', loyer: 300000, cautionMois: 3, avanceMois: 3, chambres: 2,
    edan: true, forage: true, coursFermee: true, disponible: true, photos: [],
    verifie: { route: 'Route goudronnée', acces: 'Accessible en voiture', eau: 'Pression forte (eau H24)' },
    description: 'Appartement entièrement meublé, climatisé, avec gardiennage et groupe électrogène.',
  },
  {
    id: 10, type: 'Studio', titre: 'Studio neuf près de la route principale',
    quartier: 'PK9', loyer: 70000, cautionMois: 2, avanceMois: 1, chambres: 1,
    edan: true, forage: false, coursFermee: false, disponible: true, photos: [],
    verifie: { route: 'Route goudronnée', acces: 'Taxi jusqu’à la porte', eau: 'Pression moyenne' },
    description: 'Studio neuf, peinture fraîche, compteur EDAN individuel déjà installé.',
  },
];
