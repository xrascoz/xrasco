let tooglephone = document.querySelector(".toogle-phone");
let phone = document.querySelector(".phone");
let closePhone = document.querySelector(".close");

tooglephone.addEventListener("click", function () {
  phone.classList.add("active");
});

closePhone.addEventListener("click", function () {
  phone.classList.remove("active");
});

let arwwo = document.querySelector(".arwwo");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    arwwo.classList.add("active");
  } else {
    arwwo.classList.remove("active");
  }
});
arwwo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let wats = document.querySelector(".whats");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    wats.classList.add("active");
  } else {
    wats.classList.remove("active");
  }
});

let continercontant = document.querySelector(".continer-contant-1");
let imgsection1 = document.querySelector(".img-section-1");

window.addEventListener("scroll", function () {
  if (window.scrollY >= continercontant.offsetTop - 1000) {
    continercontant.classList.add("active");
    imgsection1.classList.add("active");
  } else {
    continercontant.classList.remove("active");
    imgsection1.classList.remove("active");
  }
});

// let middel = document.querySelector(".middel");
// let front = document.querySelector(".front");

// window.addEventListener("load", function () {
//   middel.classList.add("active");
//   front.classList.add("active");
// });

let point = 0;
let pointslide = document.querySelectorAll(".point-slide");
let pointslidespan = document.querySelectorAll(".point-slide span");

let arraypointslidespan = Array.from(pointslidespan);

arraypointslidespan[0].classList.add("active");
arraypointslidespan.forEach((element) => {
  element.addEventListener("click", function () {
    removeactive();
    element.classList.add("active");

    arraypointslidespan[0].addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
});

let scroolbottom = document.querySelector(".scrool-bottom");
let titlesection = document.querySelectorAll(".title-section");

scroolbottom.addEventListener("click", function () {
  window.scrollTo({
    top: titlesection[0].offsetTop - 100,
    behavior: "smooth",
  });
});

arraypointslidespan[1].addEventListener("click", function () {
  window.scrollTo({
    top: titlesection[0].offsetTop - 100,
    behavior: "smooth",
  });
});

arraypointslidespan[2].addEventListener("click", function () {
  window.scrollTo({
    top: titlesection[1].offsetTop - 100,
    behavior: "smooth",
  });
});

arraypointslidespan[3].addEventListener("click", function () {
  window.scrollTo({
    top: titlesection[2].offsetTop - 100,
    behavior: "smooth",
  });
});

arraypointslidespan[4].addEventListener("click", function () {
  window.scrollTo({
    top: titlesection[3].offsetTop - 100,
    behavior: "smooth",
  });
});

function removeactive() {
  pointslidespan.forEach((element) => {
    element.classList.remove("active");
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 0) {
    removeactive();
    arraypointslidespan[0].classList.add("active");
  }

  if (window.scrollY >= titlesection[0].offsetTop - 200) {
    removeactive();
    arraypointslidespan[1].classList.add("active");
  }

  if (window.scrollY >= titlesection[1].offsetTop - 200) {
    removeactive();
    arraypointslidespan[2].classList.add("active");
  }

  if (window.scrollY >= titlesection[2].offsetTop - 200) {
    removeactive();
    arraypointslidespan[3].classList.add("active");
  }
  if (window.scrollY >= titlesection[3].offsetTop - 200) {
    removeactive();
    arraypointslidespan[4].classList.add("active");
  }
});

//  -------

let lines = document.querySelectorAll(".line");
let spanlines = document.querySelectorAll(".line span");

let section5 = document.querySelector(".section-5");

window.addEventListener("scroll", function () {
  if (window.scrollY >= section5.offsetTop - 600) {
    spanlines.forEach((element) => {
      let dataskil = element.getAttribute("data-skil");
      element.style.width = `${dataskil}%`;
      element.innerHTML = `${dataskil}%`;
      element.classList.add("active");
    });
  } else {
    spanlines.forEach((element) => {
      element.style.width = 0;
      element.classList.remove("active");
      startcount = 0;
    });
  }
});

// ---------------------------
let iconcentershow = document.querySelectorAll(".icon-center-show");

iconcentershow.forEach((element) => {
  element.addEventListener("click", function () {
    window.open("work.html", "_blank");
  });
});

let activeimgpop = document.querySelector(".active-img-pop");
let eayclick = document.querySelectorAll(".eay-click");
let imgcontntjs = document.querySelectorAll(".img-contnt-js .img-contnt");

let divimg = document.querySelector(".div-img");

eayclick.forEach((element) => {
  element.addEventListener("click", function (eo) {
    showactiveimg();
    let getsrc = element.parentElement.getElementsByTagName("img")[0].src;
    let srcimg = divimg.getElementsByTagName("img")[0];

    srcimg.src = getsrc;
  });
});

imgcontntjs.forEach((element) => {
  element.addEventListener("click", function (eo) {
    showactiveimg();
    let getsrc = element.getElementsByTagName("img")[0].src;
    let srcimg = divimg.getElementsByTagName("img")[0];

    srcimg.src = getsrc;
  });
});

activeimgpop.addEventListener("click", function () {
  removeshowactiveimg();
});

function removeshowactiveimg() {
  activeimgpop.classList.remove("active");
}

function showactiveimg() {
  activeimgpop.classList.add("active");
}

// -----------------------

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("contextmenu", function (e) {
  alert(
    "Sorry, right click is disabled to prevent leakage of 			confidential functions"
  );
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
    return false;
  }
};

