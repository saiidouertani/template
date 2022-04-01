// background
let bakground = document.querySelectorAll('.imgs div img')
let activepage = document.querySelectorAll('.pagenumber span')
let imgscroll
let imgscrollleft
let scrollpagenum
let scrollbackpagenum
function scrolltoright() {
  let i = 1
  let j = 100
  imgscroll = window.setInterval(function () {
    bakground[i].style = `transform:translateX(-${j}%)`
    j = j + 100
    i++
    if (i == bakground.length) {
      window.clearInterval(imgscroll)
      scrolltoleft()
    }
  }, 1000)
}
function scrolltoleft() {
  let i = bakground.length - 1
  let j = -(bakground.length - 2) * 100
  imgscrollleft = window.setInterval(function () {
    bakground[i].style = `transform:translateX(${j}%)`
    j = j + 100
    i--
    if (i == 0) {
      window.clearInterval(imgscrollleft)
      scrolltoright()
    }
  }, 1000)
}

function scrollpage() {
  let i = 1
  scrollpagenum = setInterval(function () {
    activepage.forEach((el) => (el.classList = ''))
    activepage[i].classList.add('activepage')
    i++
    if (i == 6) {
      window.clearInterval(scrollpagenum)
      scrollbackpage()
    }
  }, 1000)
  return i
}
function scrollbackpage() {
  let i = activepage.length - 2
  scrollbackpagenum = setInterval(function () {
    activepage.forEach((el) => (el.classList = ''))
    activepage[i].classList.add('activepage')
    i--
    if (i == -1) {
      window.clearInterval(scrollbackpagenum)
      scrollpage()
    }
  }, 1000)
}

// end bakground landing

// Start parameter code

// color parametre
let parameter = document.querySelector('.parameter')
let icon = parameter.querySelector('.spin')
let icongear = icon.querySelector('i')

icon.onclick = function () {
  parameter.classList.toggle('opened')
  icongear.classList.toggle('fa-spin')
}
let colors = parameter.querySelectorAll('ul li')

colors.forEach(function (el) {
  el.onclick = function () {
    colors.forEach((el) => el.classList.remove('active'))
    el.classList.add('active')
    document.documentElement.style.setProperty(
      '--main-color',
      `${el.dataset.color}`,
    )
    window.localStorage.setItem('color', el.dataset.color)
  }
})
window.onload = function () {
  if (localStorage.getItem('color') != null) {
    document.documentElement.style.setProperty(
      '--main-color',
      `${window.localStorage.getItem('color')}`,
    )
  }
}
// end color parametre

// start background parameter
parameter.querySelector('.backchoose').addEventListener(
  'click',
  function (e) {
    parameter
      .querySelectorAll('.backchoose span')
      .forEach((e) => e.classList.remove('active'))
    e.target.classList.add('active')
  },
  this,
)

// end background parametre

// end parameter code

scrolltoright()
scrollpage()

parameter.querySelectorAll('.backchoose span')[1].onclick = function () {
  console.log('ok')
  window.clearInterval(imgscroll)

  window.clearInterval(imgscrollleft)
  window.clearInterval(scrollpagenum)
  window.clearInterval(scrollbackpagenum)
}

parameter.querySelectorAll('.backchoose span')[0].onclick = function () {
  scrolltoright()
  scrollpage()
}
