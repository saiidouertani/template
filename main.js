// background
let transition = 1000;
let bakground = document.querySelectorAll(".imgs div img");
let landing = document.querySelector(".landing-page");
let about = document.querySelector(".about");
let skills = document.querySelector(".skills");
let test = document.querySelector(".test");
let progress = document.querySelectorAll(".skills .skills-box .progress span");
let progressafter = document.querySelectorAll(".skills .skills-box .progress");
let activepage = document.querySelectorAll(".pagenumber span");
let parameter = document.querySelector(".parameter");
let icon = parameter.querySelector(".spin");
let icongear = icon.querySelector("i");
let imgscroll;
let imgscrollleft;
let scrollpagenum;
let scrollbackpagenum;

// end bakground landing
let backgroundoption = localStorage.getItem("backgroundoption");
console.log(typeof backgroundoption);
if (backgroundoption == "false") {
  parameter.querySelectorAll(".backchoose span")[0].classList.remove("active");
  parameter.querySelectorAll(".backchoose span")[1].classList.add("active");
} else {
  parameter.querySelectorAll(".backchoose span")[0].classList.add("active");
  parameter.querySelectorAll(".backchoose span")[1].classList.remove("active");
  imgscrollone(1);
  // randombackground();
  pagecrollone(1);
}

parameter.querySelectorAll(".backchoose span")[1].onclick = function () {
  if (
    !parameter
      .querySelectorAll(".backchoose span")[1]
      .classList.contains("active")
  ) {
    console.log("false");
    window.clearInterval(imgscroll);
    window.clearInterval(imgscrollleft);
    window.clearInterval(scrollpagenum);
    window.clearInterval(scrollbackpagenum);
    backgroundoption = false;
    localStorage.setItem("backgroundoption", backgroundoption);
  }
};

parameter.querySelectorAll(".backchoose span")[0].onclick = function () {
  if (
    !parameter
      .querySelectorAll(".backchoose span")[0]
      .classList.contains("active")
  ) {
    backgroundoption = true;
    localStorage.setItem("backgroundoption", backgroundoption);

    for (i = 0; i < bakground.length; i++) {
      if (
        bakground[i].classList.contains("activeimage") &&
        activepage[i].classList.contains("activepage")
      ) {
        imgscrollone(i);
        // randombackground();
        pagecrollone(i);
      }

      if (activepage[i].classList.contains("activebackpage")) {
        pagecrolltwo(i);
        imgscrolltwo(i + 1);
        // randombackground();
      }
    }
  }
};
scrollinto(".links a");
function randombackground() {
  let imgs = [
    "../imgs/laptop-3.webp",
    "../imgs/laptop.webp",
    "../imgs/04 (1).jpg",
    "../imgs/web-design.jpg",
    "../imgs/01.jpg",
  ];
  imgscroll = setInterval(function () {
    console.log(imgs[Math.floor(Math.random() * imgs.length)]);
    landing.style = `background-image:url(${
      imgs[Math.floor(Math.random() * imgs.length)]
    })`;
  }, transition);
}
function imgscrollone(i) {
  imgscroll = setInterval(function () {
    bakground.forEach((e) => e.classList.remove("activeimage"));

    bakground[i].classList.add("activeimage");
    bakground[i].style = `transform:translateX(${-i * 100}%)`;
    i++;
    if (i == bakground.length) {
      window.clearInterval(imgscroll);
      imgscrolltwo(bakground.length - 1);
    }
  }, transition);
}
function imgscrolltwo(i) {
  imgscrollleft = setInterval(function () {
    bakground.forEach((e) => e.classList.remove("activeimage"));
    bakground[i].classList.add("activebackimage");
    bakground[i].style = `transform:translateX(${0}%)`;
    i--;
    if (i == 0) {
      window.clearInterval(imgscrollleft);
      imgscrollone(1);
    }
  }, transition);
}
function pagecrollone(i) {
  scrollpagenum = setInterval(function () {
    activepage.forEach((e) => e.classList.remove("activebackpage"));

    activepage.forEach((e) => e.classList.remove("activepage"));
    activepage[i].classList.add("activepage");
    i++;
    if (i == activepage.length) {
      window.clearInterval(scrollpagenum);
      pagecrolltwo(activepage.length - 2);
    }
  }, transition);
}

function pagecrolltwo(i) {
  scrollbackpagenum = setInterval(function () {
    activepage.forEach((e) => e.classList.remove("activepage"));
    activepage.forEach((e) => e.classList.remove("activebackpage"));
    activepage[i].classList.add("activebackpage");
    i--;
    if (i == -1) {
      window.clearInterval(scrollbackpagenum);
      pagecrollone(1);
    }
  }, transition);
}

// end landing code

// Start parameter code

// color parametre

icon.onclick = function () {
  parameter.classList.toggle("opened");
  icongear.classList.toggle("fa-spin");
};
let colors = parameter.querySelectorAll("ul li");

colors.forEach(function (el) {
  el.onclick = function () {
    el.parentElement
      .querySelectorAll(".active")
      .forEach((el) => el.classList.remove("active"));
    el.classList.add("active");
    document.documentElement.style.setProperty(
      "--main-color",
      `${el.dataset.color}`
    );
    window.localStorage.setItem("color", el.dataset.color);
    progressskills();
  };
});
if (localStorage.getItem("color") != null) {
  document.documentElement.style.setProperty(
    "--main-color",
    `${window.localStorage.getItem("color")}`
  );
  colors.forEach(function (el) {
    if (window.localStorage.getItem("color") == el.dataset.color) {
      el.parentElement
        .querySelectorAll(".active")
        .forEach((el) => el.classList.remove("active"));
      el.classList.add("active");
    }
  });
}
// end color parametre
// start bullets section
function scrollinto(elm) {
  const bullets = document.querySelectorAll(elm);

  bullets.forEach((bullet) =>
    bullet.addEventListener("click", function (e) {
      e.preventDefault();

      document
        .querySelector(e.target.dataset.section)
        .scrollIntoView({ behavior: "smooth" });
    })
  );
}
scrollinto(".bullet .bullet-box");
document
  .querySelector(".chooseoptionbullet .backchoose")
  .addEventListener("click", function (ev) {
    ev.target.parentElement.querySelectorAll("span").forEach(function (span) {
      span.classList.remove("active");
    });
    ev.target.classList.add("active");
    if (ev.target.textContent == "Yes") {
      localStorage.setItem("bulletoption", "true");
      document.querySelector(".bullet").style.display = "block";
    } else {
      localStorage.setItem("bulletoption", "false");
      document.querySelector(".bullet").style.display = "none";
    }
  });

if (localStorage.getItem("bulletoption") == "false") {
  document.querySelector(".bullet").style.display = "none";
  parameter
    .querySelectorAll(".chooseoptionbullet .backchoose span")[0]
    .classList.remove("active");
  parameter
    .querySelectorAll(".chooseoptionbullet .backchoose span")[1]
    .classList.add("active");
} else {
  document.querySelector(".bullet").style.display = "block";
  parameter
    .querySelectorAll(".chooseoptionbullet .backchoose span")[0]
    .classList.add("active");
  parameter
    .querySelectorAll(".chooseoptionbullet .backchoose span")[1]
    .classList.remove("active");
}

// end bullets section
// start reset option
document.querySelector(".reset").onclick = function () {
  localStorage.clear();
  window.location.reload();
};
// end reset option
// start background parameter
parameter.querySelector(".chooseoption .backchoose").addEventListener(
  "click",
  function (e) {
    parameter
      .querySelectorAll(".chooseoption .backchoose span")
      .forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
  },
  this
);

// end background parametre

// end parameter code

//  start our skills section
// console.log(window.innerHeight)
// console.log(landing.offsetHeight)
// console.log(about.offsetHeight)

// console.log(skills.offsetHeight)

console.log(skills.offsetTop);
window.onscroll = function () {
  console.log(skills.offsetTop);
  if (scrollY > skills.offsetTop + skills.offsetHeight - window.innerHeight) {
    progressskills();
  }
};

function progressskills() {
  for (let i = 0; i < progressafter.length; i++) {
    let after = document.createElement("div");
    after.style = `padding:5px; display:flex;justify-content:center; align-items:center;background-color: ${window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(
        "--main-color"
      )};color:white;position: absolute;top: -45px;left: ${
      progress[i].dataset.progress
    };transform: translateX(-50%);`;
    let before = document.createElement("div");
    before.style = `position: absolute;top:-17px;left: ${progress[i].dataset.progress};transform: translateX(-50%); border: 10px solid #eee;border-color: rgb(233 215 215) transparent transparent;`;
    after.textContent = progress[i].dataset.progress;
    progressafter[i].appendChild(after);
    progressafter[i].appendChild(before);
  }

  progress.forEach((el) => (el.style.width = el.dataset.progress));
}
// end our skill section

let images = document.querySelectorAll(".galerie img");
images[0].getAttribute;

images.forEach((img) =>
  img.addEventListener("click", function (e) {
    let popoverlay = document.createElement("div");
    popoverlay.classList.add("popoverlay");
    document.body.appendChild(popoverlay);
    let popupimage = document.createElement("div");
    image = document.createElement("img");
    image.style = " height: 300px;width: 580px";
    image.src = e.target.getAttribute("src");
    popupimage.appendChild(image);
    popupimage.classList.add("popimage");
    document.body.appendChild(popupimage);
    if (img.alt != null) {
      let title = document.createElement("h1");
      title.textContent = img.alt;
      title.classList.add("poptitle");
      popupimage.prepend(title);
    }
    let cancel = document.createElement("span");
    cancel.textContent = "X";
    cancel.classList.add("cancel");
    popupimage.appendChild(cancel);
    cancel.addEventListener("click", function () {
      popupimage.remove();
      popoverlay.remove();
    });
    window.addEventListener("keyup", function (event) {
      if (event.key === "Escape") {
        popupimage.remove();
        popoverlay.remove();
      }
    });
  })
);
