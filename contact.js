let tooglephone = document.querySelector(".toogle-phone");
let phone = document.querySelector(".phone");
let closePhone = document.querySelector(".close");

tooglephone.addEventListener("click", function () {
  phone.classList.add("active");
});

closePhone.addEventListener("click", function () {
  phone.classList.remove("active");
});

let onlode = document.querySelector(".onlode");

function lode() {
  window.addEventListener("load", function () {
    onlode.classList.add("none");
  });
}

setTimeout(() => {
  onlode.remove();
}, 100);
