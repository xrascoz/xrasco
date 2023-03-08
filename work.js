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

//  ----------

let onlode = document.querySelector(".onlode");

function lode() {
  onlode.classList.add("none");
}

setTimeout(() => {
  onlode.remove();
}, 1000);
