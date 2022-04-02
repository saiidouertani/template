// background
let transition = 1000;
let bakground = document.querySelectorAll(".imgs div img");
let activepage = document.querySelectorAll(".pagenumber span");
let imgscroll;
let imgscrollleft;
let scrollpagenum;
let scrollbackpagenum;

// end bakground landing
function imgscrollone(i) {
  imgscroll = setInterval(function () {
    bakground.forEach((e) => e.classList.remove("activeimage"));
    bakground[i].classList.add("activeimage");
    bakground[i].style = `transform:translateX(${-i * 100}%)`;
    i++;
    j += 100;
    if (i == bakground.length) {
      window.clearInterval(imgscroll);
    }
  }, transition);
}
function pagecrollone(i) {
  scrollpagenum = setInterval(function () {
    activepage.forEach((e) => e.classList.remove("activepage"));
    activepage[i].classList.add("activepage");
    i++;
    if (i == activepage.length) {
      window.clearInterval(scrollpagenum);
    }
  }, transition);
}
// Start parameter code

// color parametre
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
  if (localStorage.getItem("color") != null) {
    document.documentElement.style.setProperty(
      "--main-color",
      `${window.localStorage.getItem("color")}`
    );
  }
};
// end color parametre

// start background parameter
parameter.querySelector(".backchoose").addEventListener(
  "click",
  function (e) {
    parameter
      .querySelectorAll(".backchoose span")
      .forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
  },
  this
);

// end background parametre

// end parameter code
imgscrollone(1);
pagecrollone(1);

parameter.querySelectorAll(".backchoose span")[1].onclick = function () {
  window.clearInterval(imgscroll);
  window.clearInterval(imgscrollleft);
  window.clearInterval(scrollpagenum);
  window.clearInterval(scrollbackpagenum);
};

parameter.querySelectorAll(".backchoose span")[0].onclick = function () {
  for (i = 0; i < bakground.length; i++) {
    if (
      bakground[i].classList.contains("activeimage") &&
      activepage[i].classList.contains("activepage")
    ) {
      imgscrollone(i);
      pagecrollone(i);
    }
  }
};
