module.exports = {
  cli: [
    'cli/cli0',
    'cli/cli1',
    'cli/cli2',
    'cli/cli3',
    'cli/cli4',
  ],
  templates: [
    'templates/template0',
    { type: 'category',
      label: 'Fungible Token',
      items: [
        'templates/template1',
        'templates/template2',
      ] },
    { type: 'category',
      label: 'Non-Fungible Token',
      items: [
        'templates/template3',
      ] },
    { type: 'category',
      label: 'DeFi',
      items: [
        'templates/template6',
        'templates/template4',
        'templates/template5',
        'templates/template7',
      ] },
    { type: 'category',
      label: 'Payment',
      items: [
        'templates/template11',
        'templates/template12',
        'templates/template15',
        'templates/template13',
      ] },
    { type: 'category',
      label: 'Governance',
      items: [
        'templates/template17',
        'templates/template18',
        'templates/template8',
        'templates/template9',
        'templates/template10',
        'templates/template16',
      ] },
  ],
  contract: [
    'contract/contract1',
    'contract/contract2',
    { type: 'category',
      label: 'Archetype Tutorial',
      link: {
        type: 'doc',
        id: 'contract/tuto/tutorial',
      },
      items: [
        'contract/tuto/tuto1',
        'contract/tuto/tuto2',
        'contract/tuto/tuto3',
        'contract/tuto/tuto4',
        'contract/tuto/tuto5',
        'contract/tuto/tuto6',
        'contract/tuto/tuto7',
        'contract/tuto/tuto8',
      ] },
    'contract/contract3',
  ],
  verification: [
    'verification/verification1',
    'verification/verification2',
    { type: 'category',
    label: 'Specification Guidelines',
    items: [
        'verification/verification3',
        'verification/verification5',
        'verification/verification6',
        'verification/verification7',
        'verification/verification8',
      ] },
  ],
  tools:  [
    'dapp-tools/tools1',
    'dapp-tools/tools8',
    {
      type: 'category',
      label: 'User Interface',
      items: [
        'dapp-tools/tools10',
        'dapp-tools/tools9',
        'dapp-tools/tools2',
      ]
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        'dapp-tools/tools6',
        'dapp-tools/tools4',
        'dapp-tools/tools5',
      ]
    },
    ],
  first: [
    'dapp-first/first0',
    'dapp-first/first1',
    'dapp-first/first2',
    'dapp-first/first3',
    'dapp-first/first4',
    'dapp-first/first5',
    'dapp-first/first6',
    'dapp-first/first7',
  ],

  bids: ['dapp-bids/bids1'],
  dapps: [
    {
      type: 'category',
      label: 'Fidelity Program',
      items: [
        'dapp-miles/miles1',
        {
          type: 'category',
          label: 'Use Case',
          items: [
            'dapp-miles/miles2', 'dapp-miles/miles3', 'dapp-miles/miles5'
          ],
        },
        {
          type: 'category',
          label: 'Technical Guide',
          items: [
            'dapp-miles/miles6', 'dapp-miles/miles7', 'dapp-miles/miles8'
          ]
        },

      ]
    },
    {
      type: 'category',
      label: 'Connected Object',
      items: [
        'dapp-iot/iot1',
        {
          type: 'category',
          label: 'Use Case',
          items: [
            'dapp-iot/iot3', 'dapp-iot/iot4', 'dapp-iot/iot40'
          ],
        },
        {
          type: 'category',
          label: 'Technical Guide',
          items: [
            'dapp-iot/iot5', 'dapp-iot/iot6', 'dapp-iot/iot7'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Idea Box',
      items: [
        'dapp-ideabox/ideabox1',
        {
          type: 'category',
          label: 'Use Case',
          items: [
            'dapp-ideabox/ideabox3', 'dapp-ideabox/ideabox4', 'dapp-ideabox/ideabox10'
          ],
        },
        {
          type: 'category',
          label: 'Technical Guide',
          items: [
            'dapp-ideabox/ideabox5', 'dapp-ideabox/ideabox6', 'dapp-ideabox/ideabox7'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: '2048 Competition',
      items: [
        'dapp-game/game1',
        {
          type: 'category',
          label: 'Use Case',
          items: [
            'dapp-game/game3', 'dapp-game/game4'
          ],
        },
        {
          type: 'category',
          label: 'Technical Guide',
          items: [
            'dapp-game/game5', 'dapp-game/game6', 'dapp-game/game7'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Online Purchase',
      items: [
        'dapp-escrow/escrow1',
        {
          type: 'category',
          label: 'Use Case',
          items: [
            'dapp-escrow/escrow3', 'dapp-escrow/escrow4'
          ],
        },
        {
          type: 'category',
          label: 'Technical Guide',
          items: [
            'dapp-escrow/escrow5', 'dapp-escrow/escrow6', 'dapp-escrow/escrow7'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Collectible Cards',
      items: [
        'dapp-nonfungible/nonfungible1',
        {
          type: 'category',
          label: 'Use Case',
          items: [
            'dapp-nonfungible/nonfungible3', 'dapp-nonfungible/nonfungible4', 'dapp-nonfungible/nonfungible10'
          ],
        },
        {
          type: 'category',
          label: 'Technical Guide',
          items: [
            'dapp-nonfungible/nonfungible5', 'dapp-nonfungible/nonfungible6', 'dapp-nonfungible/nonfungible7'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'DEX',
      items: [
        'dapp-dex/dex1',
        {
          type: 'category',
          label: 'Use Case',
          items: [
            'dapp-dex/dex3', 'dapp-dex/dex4',  'dapp-dex/dex10'
          ],
        },
        {
          type: 'category',
          label: 'Technical Guide',
          items: [
            'dapp-dex/dex5', 'dapp-dex/dex6', 'dapp-dex/dex7'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Zero-Coupon Bond',
      items: [
        'dapp-zcb/zcb1',
        {
          type: 'category',
          label: 'Use Case',
          items: [
            'dapp-zcb/zcb3', 'dapp-zcb/zcb4'
          ],
        },
        {
          type: 'category',
          label: 'Technical Guide',
          items: [
            'dapp-zcb/zcb5', 'dapp-zcb/zcb6', 'dapp-zcb/zcb7'
          ]
        },
      ]
    },
  ]
};
