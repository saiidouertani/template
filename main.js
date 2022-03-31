// background
let bakground = document.querySelectorAll(".imgs div img");
let activepage = document.querySelectorAll(".pagenumber span");
console.log(activepage);
function scrolltoright() {
  let i = 1;
  let j = 100;
  let imgscroll = window.setInterval(function () {
    bakground[i].style = `transform:translateX(-${j}%)`;
    j = j + 100;
    i++;
    if (i == bakground.length) {
      window.clearInterval(imgscroll);
      scrolltoleft();
    }
  }, 10000);
}
function scrolltoleft() {
  let i = bakground.length - 1;
  console.log(i);
  let j = -(bakground.length - 2) * 100;
  console.log(j);
  let imgscrollleft = window.setInterval(function () {
    console.log(i);
    console.log(j);
    bakground[i].style = `transform:translateX(${j}%)`;
    j = j + 100;
    i--;
    if (i == 0) {
      window.clearInterval(imgscrollleft);
      scrolltoright();
    }
  }, 10000);
}

function scrollpage() {
  let i = 1;
  let scrollpagenum = setInterval(function () {
    activepage.forEach((el) => (el.classList = ""));
    activepage[i].classList.add("activepage");
    i++;
    if (i == 6) {
      window.clearInterval(scrollpagenum);
      scrollbackpage();
    }
  }, 10000);
}
function scrollbackpage() {
  let i = activepage.length - 2;
  let scrollbackpagenum = setInterval(function () {
    activepage.forEach((el) => (el.classList = ""));
    activepage[i].classList.add("activepage");
    i--;
    if (i == -1) {
      window.clearInterval(scrollbackpagenum);
      scrollpage();
    }
  }, 10000);
}

scrolltoright();
scrollpage();

// end bakground landing

// Start parameter code
let parameter = document.querySelector(".parameter");
let icon = parameter.querySelector(".spin");
let icongear = icon.querySelector("i");

icon.onclick = function () {
  parameter.classList.toggle("opened");
  icongear.classList.toggle("fa-spin");
};
let colors = parameter.querySelectorAll("ul li");

colors.forEach(function (el) {
  el.onclick = function () {
    colors.forEach((el) => el.classList.remove("active"));
    el.classList.add("active");
    document.documentElement.style.setProperty(
      "--main-color",
      `${el.dataset.color}`
    );
    window.localStorage.setItem("color", el.dataset.color);
  };
});
window.onload = function () {
  document.documentElement.style.setProperty(
    "--main-color",
    `${window.localStorage.getItem("color")}`
  );
};
// end parameter code
