const $root = document.querySelector('#root')
const $chart = document.querySelector('#chart')

const $chartContainer = document.querySelector('#chart-container')
const $themeToggler = document.querySelector('#theme-toggler')

const $donation = document.querySelector('.donation')
const $donationModal = document.querySelector('#donationModal')
const $donationModalClose = document.querySelector('.close')

const $limit = document.querySelector('#limit')

// Reading GET parameters
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const limit = urlParams.get('limit') || 'nl10'

const structure = struct[limit]

const limits = ['nl10', 'nl25', 'nl50']
const nextLimit = limits[limits.indexOf(limit) + 1] || limits[0]

$limit.innerHTML = `<a href="?limit=${nextLimit}" data-next-limit=${
  '-&gt;' + nextLimit
}>${limit}</a>`

// $limit.setAttribute('data-next-limit', nextLimit)

function setTheme(themeName, saveToLocalStorage = true) {
  if (!['light', 'dark'].includes(themeName)) {
    console.log('wrong theme name')
    return
  }

  if (themeName === 'dark') {
    document.body.classList.add('darktheme')
  } else {
    document.body.classList.remove('darktheme')
  }

  saveToLocalStorage && localStorage.setItem('theme', themeName)
}

// Loading saved theme value from the localStorage
if (localStorage.getItem('theme') === 'dark') {
  $themeToggler.checked = true
  setTheme('dark', false)
}

// Theme toggle logic
$themeToggler.addEventListener('change', e => {
  if (e.target.checked) {
    setTheme('dark')
  } else {
    setTheme('light')
  }
})

// Hide chart on click
$chart.addEventListener('click', event => {
  $chartContainer.classList.add('hidden')
})

// Print chart categories tree from structure.js

for (const [key, value] of Object.entries(structure)) {
  let $category = document.createElement('li')
  if (key[0] !== '!') {
    $category.innerHTML = `<h4>${capitalize(key)}</h4>`
  } else {
    $category.classList.add('bonus')
  }

  let $subList = document.createElement('ul')
  $subList.classList.add('subcats')
  value.forEach(chartName => {
    let $chartLink = document.createElement('li')
    $chartLink.innerHTML = chartName
    $chartLink.addEventListener('click', event => {
      document
        .querySelectorAll('.active')
        .forEach(el => el.classList.remove('active'))
      event.target.classList.add('active')
      $chartContainer.classList.remove('hidden')
      $chart.src = `./charts/${limit}/${key}/${escape(chartName)}.png`
      window.scroll(0, 0)
    })

    $subList.appendChild($chartLink)
  })
  $category.appendChild($subList)

  $root.appendChild($category)
}

// Donation modal

$donation.addEventListener('click', () => {
  $donationModal.style.display = 'block'
})

$donationModalClose.addEventListener('click', () => {
  $donationModal.style.display = 'none'
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == $donationModal) {
    $donationModal.style.display = 'none'
  }
}
