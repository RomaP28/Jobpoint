const burgerIcon = document.querySelector('.menu__icon')
const menu = document.querySelector('.nav')
const card = document.querySelectorAll('.jobs__item')
const favorited = document.querySelectorAll('.item__header--star')
const back = document.querySelector('.back')

burgerIcon && burgerIcon.addEventListener('click', onBurgerMenuCLick)

function onBurgerMenuCLick() {
  burgerIcon.classList.toggle('_active_burger')  // swap burger/cross
  menu.classList.toggle('_active')               // open/close menu
  document.body.classList.toggle('_lock')        // blocking body scroll under menu
}

card.forEach(e => {
  !e.classList.contains('jobs--viewAll') && e.addEventListener('click', () => {
    localStorage.setItem('path', window.location.href)
    window.location.assign('/pages/review/review.html')
  })
})

favorited.forEach(el => el.addEventListener('click', e => {
  e.stopPropagation()
  el.classList.toggle('star--checked')
}))

//adding the listener if back button exists on the page and check last path where to go
back && back.addEventListener('click', () => localStorage.getItem('path') && window.location.assign(localStorage.getItem('path')))
