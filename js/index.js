const $root = document.querySelector('#root')
const $chart = document.querySelector('#chart')

const $chartContainer = document.querySelector('#chart-container')
const $themeToggler = document.querySelector('#theme-toggler')

const $donation = document.querySelector('.donation')

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
  $category.innerHTML = `<h4>${capitalize(key)}</h4>`

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
      $chart.src = `./charts/${key}/${escape(chartName)}.png`
    })

    $subList.appendChild($chartLink)
  })
  $category.appendChild($subList)

  $root.appendChild($category)
}

$donation.addEventListener('click', () => {
  alert(
    'Привет!\n\nЕсли тебе нравится пользоваться веб версией чартов, ты можешь поблагодарить меня за её создание.\n\nМои никнеймы в румах PS и 888: EcklerV (чёрный смайлик-супермен на аватарке).\n\nСпасибо!\n\nP.S. Каждый доллара доната увеличивает винрейт на 1bb/100 (disclaimer: это может быть неправдой) :D'
  )
})
