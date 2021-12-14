const struct = {
  nl10: {
    'Raise 1': [
      'UTG 1-2 3bb',
      'UTG 3-MP1 3bb',
      'HJ 2,5bb',
      'CO 2,5bb',
      'BU 2,1bb',
      'SB 3bb',
      'SB 2,5bb fe65%+',
    ],
    '3bet IP': [
      '3bet vs 10%',
      '3bet vs 12,5%',
      '3bet vs 15%',
      '3bet vs 20%',
      '3bet vs 25%',
      '3bet vs fish',
    ],
    'def vs 3bet': [
      'vs 3% IP',
      'vs 4% IP',
      'vs 5% IP',
      'vs 6% IP',
      'vs 7% IP',
      'vs 9% IP',
      'vs 11% IP',
      'vs 13% IP',
      'vs 15% IP',
      'vs 3% OOP',
      'vs 4% OOP',
      'vs 5% OOP',
      'vs 6% OOP',
      'vs 7% OOP',
      'vs 9% OOP',
      'vs 11% OOP',
      'vs 13% OOP',
      'vs 15% OOP',
    ],
    'def vs 4bet': [
      'vs 1% IP',
      'vs 1,5% IP',
      'vs 2% IP',
      'vs 2,5% IP',
      'vs 3,5% IP',
      'vs 4,5% IP',
      'vs 5,5% IP',
      'vs 1% OOP',
      'vs 1,5% OOP',
      'vs 2% OOP',
      'vs 2,5% OOP',
      'vs 3,5% OOP',
      'vs 4,5% OOP',
      'vs 5,5% OOP',
    ],
    squeeze: ['sq reg+fish OOP', 'sq reg+fish IP'],
    '3bet SB': [
      'SB vs 10%',
      'SB vs 15%',
      'SB vs 20%',
      'SB vs 25%',
      'SB vs 45%',
    ],
    'def BB': [
      'vs 10% (3bb)',
      'vs 15% (3bb)',
      'vs 20% (3bb)',
      'vs 25% (2,5bb)',
      'vs 45% (2bb)',
      'vs 45% (2,5bb)',
      'vs 45% (3bb)',
      'vSB 45% (3bb)',
    ],
  },
  nl25: {
    'Raise 1': [
      'UTG 1-2 3bb',
      'UTG 3-MP1 3bb',
      'HJ 2,5bb',
      'CO 2,5bb',
      'BU 2,1bb',
      'SB 3bb',
      'SB 2,5bb fe65%+',
    ],
    '3bet IP': [
      '3bet vs 10%',
      '3bet vs 12,5%',
      '3bet vs 15%',
      '3bet vs 20%',
      '3bet vs 25%',
      '3bet vs 30%',
    ],
    'def vs 3bet': [
      'vs 3% IP',
      'vs 4% IP',
      'vs 5% IP',
      'vs 6% IP',
      'vs 7% IP',
      'vs 9% IP',
      'vs 11% IP',
      'vs 13% IP',
      'vs 15% IP',
      'vs 3% OOP',
      'vs 4% OOP',
      'vs 5% OOP',
      'vs 6% OOP',
      'vs 7% OOP',
      'vs 9% OOP',
      'vs 11% OOP',
      'vs 13% OOP',
      'vs 15% OOP',
    ],
    'def vs 4bet': [
      'vs 1% IP',
      'vs 1,5% IP',
      'vs 2% IP',
      'vs 2,5% IP',
      'vs 3,5% IP',
      'vs 4,5% IP',
      'vs 5,5% IP',
      'vs 1% OOP',
      'vs 1,5% OOP',
      'vs 2% OOP',
      'vs 2,5% OOP',
      'vs 3,5% OOP',
      'vs 4,5% OOP',
      'vs 5,5% OOP',
    ],
    squeeze: ['sq reg+fish OOP', 'sq reg+fish IP'],
    '3bet SB': [
      'SB vs 10%',
      'SB vs 15%',
      'SB vs 20%',
      'SB vs 25%',
      'SB vs 45%',
    ],
    'def BB': [
      'vs 10% (3bb)',
      'vs 15% (3bb)',
      'vs 20% (3bb)',
      'vs 25% (2,5bb)',
      'vs 45% (2bb)',
      'vs 45% (2,5bb)',
      'vSB 45% (3bb)',
    ],
    '!bonus': ['3bet vs fish'],
  },
  nl50: {
    'Raise 1': [
      'UTG 1 2,5bb',
      'UTG 2 2,5bb',
      'UTG 3 2,5bb',
      'LJ 2,5bb',
      'HJ 2,5bb',
      'CO 2,5bb',
      'BU 2,1bb',
      'SB 3bb',
      'SB 2,5bb fe65%+',
    ],
    '3bet IP': [
      '3bet vs 10%',
      '3bet vs 12,5%',
      '3bet vs 15%',
      '3bet vs 20%',
      '3bet vs 25%',
      '3bet vs 30%',
    ],
    'def vs 3bet': [
      'vs 2% IP',
      'vs 3% IP',
      'vs 4% IP',
      'vs 5% IP',
      'vs 6% IP',
      'vs 7% IP',
      'vs 9% IP',
      'vs 11% IP',
      'vs 13% IP',
      'vs 15% IP',
      'vs 2% OOP',
      'vs 3% OOP',
      'vs 4% OOP',
      'vs 5% OOP',
      'vs 6% OOP',
      'vs 7% OOP',
      'vs 9% OOP',
      'vs 11% OOP',
      'vs 13% OOP',
      'vs 13% BvB',
      'vs 15% BvB',
    ],
    'def vs squeeze': [
      'vs 4%', 
      'vs 6%', 
      'vs 8%', 
      'vs 10%', 
      'vs 12%'
    ],
    squeeze: [
      // 'sq reg+fish OOP', 
      // 'sq reg+fish IP', 
      'sq vs 10% OOP', 
      'sq vs 15% OOP', 
      'sq vs 25% OOP', 
      'sq vs 45% OOP'
    ],
    
    // 'def vs 4bet': [
    //   'vs 1% IP',
    //   'vs 1,5% IP',
    //   'vs 2% IP',
    //   'vs 2,5% IP',
    //   'vs 3,5% IP',
    //   'vs 4,5% IP',
    //   'vs 5,5% IP',
    //   'vs 1% OOP',
    //   'vs 1,5% OOP',
    //   'vs 2% OOP',
    //   'vs 2,5% OOP',
    //   'vs 3,5% OOP',
    //   'vs 4,5% OOP',
    //   'vs 5,5% OOP',
    //   'vs 6,5% OOP',
    // ],
    'def vs 4bet (nl100-)': [
      'vs 1%',
      'vs 1,3%',
      'vs 1,6%',
      'vs 2%',
      'vs 2,5%',
      'vs 3%',
      'vs 3,5%',
      'vs 4%',
      'vs 5%',
      'vs 6,5%',
      // 'vs 1% IP',
      // 'vs 1,3% IP',
      // 'vs 1,6% IP',
      // 'vs 2% IP',
      // 'vs 2,5% IP',
      // 'vs 3% IP',
      // 'vs 3,5% IP',
      // 'vs 4% IP',
      // 'vs 5% IP',
      // 'vs 6,5% IP',
      // 'vs 1% OOP',
      // 'vs 1,5% OOP',
      // 'vs 2% OOP',
      // 'vs 2,5% OOP',
      // 'vs 3,5% OOP',
      // 'vs 4,5% OOP',
      // 'vs 5,5% OOP',
      // 'vs 6,5% OOP',
    ],
    '3bet SB': [
      'SB vs 10%',
      'SB vs 15%',
      'SB vs 20%',
      'SB vs 25%',
      'SB vs 30%',
      'SB vs 45%',
    ],
    'def BB': [
      'vs 10% (3bb)',
      'vs 15% (3bb)',
      'vs 20% (2,5bb)',
      'vs 25% (2,5bb)',
      'vs 30% (2,5bb)',
      'vs 45% (2bb)',
      'vs 45% (2,5bb)',
      'vSB 35% (3bb)',
      'vSB 45% (3bb)',
    ],
    'def vs iso3bet': [
      'vs 4% OOP',
      'vs 6% OOP',
      'vs 8% OOP',
      'vs 10% OOP',
      'vs 4% IP',
      'vs 6% IP',
      'vs 8% IP',
      'vs 10% IP',
    ],
    '!bonus': ['3bet vs fish 20% RFI', 'overcall BB-SB vs fish'],
  },
}
