const fields = [
  {
    label: 'Panier Moyen',
    name: 'averageBasket',
    attr: {
      type: 'number',
      value: 50,
      step: 5,
      min: 0,
    },
    unit: '€',
    type: 'int',
  },
  {
    label: 'Taux de marge',
    name: 'marginRate',
    attr: {
      type: 'number',
      value: 40,
      step: .5,
      min: 0,
      max: 100,
    },
    unit: '%',
    type: 'dec',
  },
  {
    label: 'Taux de conversion',
    name: 'conversionRate',
    attr: {
      type: 'number',
      value: 1.44,
      step: .01,
      min: 1,
      max: 10,
    },
    unit: '%',
    type: 'dec',
  },
  {
    label: 'Coût par clic',
    name: 'costPerClick',
    attr: {
      type: 'number',
      value: 0.17,
      min: .05,
      max: .5,
      step: .01,
    },
    unit: '€',
    type: 'dec',
  },
  {
    label: 'Budget',
    name: 'budget',
    attr: {
      type: 'number',
      value: 750,
      min: 200,
      max: 30000,
      step: 50,
    },
    unit: '€',
    type: 'int',
  },
  {
    label: 'Objectif de marge',
    name: 'marginGoal',
    attr: {
      type: 'number',
      value: 2000,
      min: 500,
      max: 30000,
      step: 100,
    },
    unit: '€',
    type: 'dec',
    description: 'Pour couvrir les frais fixe',
  },
  {
    label: 'Levier campagne gratuite',
    name: 'freeCampaignLeverage',
    attr: {
      type: 'number',
      value: 30,
      min: 0,
      max: 100,
      step: 5,
    },
    unit: '%',
    type: 'int',
  },
  {
    label: 'Levier campagne payante',
    name: 'paidCampaignLeverage',
    attr: {
      type: 'number',
      value: 70,
      min: 0,
      max: 100,
      step: 5,
    },
    unit: '%',
    type: 'int',
  }
]

export default fields
