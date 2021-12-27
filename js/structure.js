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
      ['UTG 1 2,5bb', '8,8%'],
      ['UTG 2 2,5bb', '9,5%'],
      ['UTG 3 2,5bb', '12,2%'],
      ['LJ 2,5bb', '15,1%'],
      ['HJ 2,5bb', '19,5%'],
      ['CO 2,5bb', '26,7%'],
      ['BU 2,1bb', '41,8%'],
      ['SB 3bb', '41,8%'],
      ['SB 2,5bb fe65%+', '56,9%'],
    ],
    '3bet IP': [
      ['3bet vs 10%', '4,4%'],
      ['3bet vs 12,5%', '5,4%'],
      ['3bet vs 15%', '6,3%'],
      ['3bet vs 20%', '7,7%'],
      ['3bet vs 25%', '10,9%'],
      ['3bet vs 30%', '12,7%'],
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
      ['vs 4%', 'AA 4bet, KK push (95bb)'],
      ['vs 6%', 'Simplification: <br> AKs, QQ call IP or push (95bb) OOP <br> AKo 4bet/fold'],
      ['vs 8%', 'Simplification: <br> AK, QQ push (95bb)'], 
      ['vs 10%', 'Simplification: <br> AK, QQ, JJ push (95bb)'], 
      ['vs 12%', 'Simplification: <br> AK, QQ-TT push (95bb)'],
      ['vs 14%', 'Simplification: <br> AK, QQ-99 push (95bb)']
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
      ['vs 2,5%', 'Green: call (best) / push (simple)'],
      ['vs 3%', 'Green: call (best) / push (simple)'],
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
      ['SB vs 10%', '4,1%'],
      ['SB vs 15%', '5,4%'],
      ['SB vs 20%', '6,9%'],
      ['SB vs 25%', '8,9%'],
      ['SB vs 30%', '10,1%'],
      ['SB vs 45%', '14,3%'],
    ],
    'def BB': [
      'vs 10% (3bb)',
      ['vs 15% (3bb)', 'Purple: fold vs strong agressive opponents'],
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
    '!bonus': [
      ['3bet vs fish 20% RFI', 'Purple only IP vs passive fish (not on EP)'], 
      ['overlimp on SB vs fish', 'Purple: isolate or limp']
    ],
  },
}
