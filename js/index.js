const structure = {
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
  '3bet SB': ['SB vs 10%', 'SB vs 15%', 'SB vs 20%', 'SB vs 25%', 'SB vs 45%'],
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
}

const $root = document.querySelector('#root')
const $chart = document.querySelector('#chart')

const $chartContainer = document.querySelector('#chart-container')
const $themeToggler = document.querySelector('#theme-toggler')

if (localStorage.getItem('theme') === 'dark') {
  $themeToggler.checked = true
  document.body.classList.add('darktheme')
}

$themeToggler.addEventListener('change', e => {
  if (e.target.checked) {
    document.body.classList.add('darktheme')
    localStorage.setItem('theme', 'dark')
  } else {
    document.body.classList.remove('darktheme')
    localStorage.setItem('theme', 'light')
  }
})

$chart.addEventListener('click', event => {
  $chartContainer.classList.add('hidden')
})

for (const [key, value] of Object.entries(structure)) {
  console.log(`${key}: ${value}`)
  let $category = document.createElement('li')
  $category.innerHTML = key

  value.forEach(chartName => {
    let $subList = document.createElement('ul')
    $subList.classList.add('subcats')

    let $chartLink = document.createElement('li')
    $chartLink.innerHTML = chartName
    $chartLink.addEventListener('click', event => {
      document
        .querySelectorAll('.active')
        .forEach(el => el.classList.remove('active'))
      event.target.classList.add('active')
      $chartContainer.classList.remove('hidden')
      $chart.src = `./charts/${key}/${escape(chartName)}.png`
    })

    $subList.appendChild($chartLink)

    $category.appendChild($subList)
  })

  $root.appendChild($category)
}
