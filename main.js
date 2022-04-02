// background
let transition = 2000
let bakground = document.querySelectorAll('.imgs div img')
let activepage = document.querySelectorAll('.pagenumber span')
let imgscroll
let imgscrollleft
let scrollpagenum
let scrollbackpagenum
function scrolltoright(i, j) {
  imgscroll = window.setInterval(function () {
    bakground[i].style = `transform:translateX(-${j}%)`
    bakground.forEach((el) => (el.classList = ''))
    bakground[i].classList.add('activeimage')
    bakground[i].setAttribute('data-tranlate', j)
    j = j + 100
    i++
    if (i == bakground.length) {
      window.clearInterval(imgscroll)
      scrolltoleft(bakground.length - 1, -(bakg
        round.length - 2) * 100)
    }
    // console.log(i);
    return i
  }, transition)
}
function scrolltoleft(i, j) {
  imgscrollleft = window.setInterval(function () {
    bakground[i].style = `transform:translateX(${j}%)`
    bakground.forEach((el) => (el.classList = ''))
    bakground[i].classList.add('activebackimage')
    bakground[i].setAttribute('data-tranlate', j)

    j = j + 100
    i--
    if (i == 0) {
      window.clearInterval(imgscrollleft)
      scrolltoright(1, 100)
    }
  }, transition)
}

function scrollpage(i) {
  scrollpagenum = setInterval(function () {
    activepage.forEach((el) => (el.classList = ''))
    activepage[i].classList.add('activepage')
    i++
    if (i == 6) {
      window.clearInterval(scrollpagenum)
      scrollbackpage(activepage.length - 2)
    }
  }, transition)
}
function scrollbackpage(i) {
  scrollbackpagenum = setInterval(function () {
    activepage.forEach((el) => (el.classList = ''))
    activepage[i].classList.add('activebackpage')
    i--
    if (i == -1) {
      window.clearInterval(scrollbackpagenum)
      scrollpage(1)
    }
  }, transition)
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

scrolltoright(1, 100)
scrollpage(1)

parameter.querySelectorAll('.backchoose span')[1].onclick = function () {
  console.log('ok')
  window.clearInterval(imgscroll)
  window.clearInterval(imgscrollleft)
  window.clearInterval(scrollpagenum)
  window.clearInterval(scrollbackpagenum)
}

parameter.querySelectorAll('.backchoose span')[0].onclick = function () {
  //scrolltoright();
  for (i = 0; i < activepage.length; i++) {
    if (
      activepage[i].classList.contains('activepage') &&
      bakground[i].classList.contains('activeimage')
    ) {
      scrolltoright(
        i + 1,
        parseInt(bakground[i].getAttribute('data-translate')) + 100,
      )
      scrollpage(i + 1)
    } else if (
      activepage[i].classList.contains('activebackpage') &&
      bakground[i].classList.contains('activebackimage')
    ) {
      // scrolltoleft(i, -bakground[i].getAttribute("data-translate"));
      scrollbackpage(i)
    }
  }
}
