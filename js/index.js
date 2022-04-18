const DEFAULT_COLOR = "#2196f3"

const $root = document.querySelector('#root')
const $chart = document.querySelector('#chart')
const $comment = document.querySelector('#comment')

const $chartContainer = document.querySelector('#chart-container')
const $themeToggler = document.querySelector('#theme-toggler')

const $donation = document.querySelector('.donation')
const $donationModal = document.querySelector('#donationModal')
const $donationModalClose = document.querySelector('.close')

const $limit = document.querySelector('#limit')
const $rand = document.querySelector('#rand')

const $colorPicker = document.querySelector('#highlightcolor-picker')
const $colorPickerWrapper = document.querySelector("#color-picker-wrapper");

// Reading GET parameters
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const limit = urlParams.get('limit') || 'nl10'

const structure = struct[limit]

const limits = ['nl10', 'nl25', 'nl50']
const nextLimit = limits[limits.indexOf(limit) + 1] || limits[0]

document.addEventListener("DOMContentLoaded", () => {
  const color = localStorage.getItem('color') || DEFAULT_COLOR

  $colorPicker.value = color
  changeColor(color)
});


$limit.innerHTML = `<a href="?limit=${nextLimit}" data-next-limit=${
  '-&gt;' + nextLimit
}>${limit}</a>`

$rand.innerHTML = getRandomNumber().toString()

// $limit.setAttribute('data-next-limit', nextLimit)
function getRandomNumber() { return Math.floor(Math.random() * 100 + 1) }

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

// Random number generation logic
window.addEventListener('click', event => {
  $rand.innerHTML = getRandomNumber().toString()
})

// Hide chart on click
$chart.addEventListener('click', event => {
  $chartContainer.classList.add('hidden')
  $comment.classList.remove('visible')
  removeActive()
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
  value.forEach(chart => {
    let [chartName, comment] = Array.isArray(chart) ? chart : [chart, '']
    console.log(comment)

    let $chartLink = document.createElement('li')
    $chartLink.innerHTML = chartName
    $chartLink.addEventListener('click', event => {
      removeActive()
      event.target.classList.add('active')
      $chartContainer.classList.remove('hidden')
      $chart.src = `./charts/${limit}/${key}/${escape(chartName)}.png`

      // Showing comment if exists
      if (comment) {
        $comment.classList.add('visible')
      } else {
        $comment.classList.remove('visible')
      }
      $comment.innerHTML = comment

      window.scroll(0, 0)
    })

    $subList.appendChild($chartLink)
  })
  $category.appendChild($subList)

  $root.appendChild($category)
}

function removeActive() {
  document
  .querySelectorAll('.active')
  .forEach(el => el.classList.remove('active'))
}

// Color picker

function changeColor(newColor) {
  document.body.style.setProperty('--highlightcolor', newColor)
  document.body.style.setProperty('--headertextcolor', newColor)
  $colorPickerWrapper.style.backgroundColor = newColor
  console.log(colorIsDark(newColor))
  document.documentElement.style.setProperty('--hightlightedtextcolor', colorIsDark(newColor) ? '#fff' : '#000')
}

$colorPicker.addEventListener('input', (event) => {
  const newColor = event.target.value
  changeColor(newColor)
  localStorage.setItem('color', newColor)
})

$colorPicker.addEventListener('contextmenu', (event) => {
  event.preventDefault()
  localStorage.removeItem('color')
  changeColor(DEFAULT_COLOR)
})

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
