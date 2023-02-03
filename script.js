"use strict";

// muc ablut ân hiện in-fo cá nhân
const inputEmail = document.querySelector(".input-emial");
const infoShow = document.querySelector(".info-show");
const btnSubmit = document.querySelector(".btn--submit");

btnSubmit.addEventListener("click", function () {
  //nhap email click submit hien class info show, an class inputemcil

  const emialValue = document.getElementById("email").value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(emialValue)) {
    document.querySelector(".email-input").textContent = emialValue;
    inputEmail.classList.add("hidden");
    infoShow.classList.remove("hidden");
  } else {
    document.querySelector(".form-text").textContent =
      "Email bạn nhập chưa chính xác, hãy nhập lại Email để xác thực";
  }
});

// ẩn hiện khi click vàp viewmore

const btnView1 = document.querySelector(".btn--view1");
const btnView2 = document.querySelector(".btn--view2");
const btnView3 = document.querySelector(".btn--view3");
const btnView4 = document.querySelector(".btn--view4");
const btnView5 = document.querySelector(".btn--view5");
const btnView6 = document.querySelector(".btn--view6");

btnView1.addEventListener("click", function () {
  if (btnView1.textContent === "View Less ▲") {
    btnView1.textContent = "View more ▼";
  } else {
    btnView1.textContent = "View Less ▲";
  }
  document.querySelector(".sub-content1").classList.toggle("hidden");
});

btnView2.addEventListener("click", function () {
  if (btnView2.textContent === "View Less ▲") {
    btnView2.textContent = "View more ▼";
  } else {
    btnView2.textContent = "View Less ▲";
  }
  document.querySelector(".sub-content2").classList.toggle("hidden");
});

btnView3.addEventListener("click", function () {
  if (btnView3.textContent === "View Less ▲") {
    btnView3.textContent = "View more ▼";
  } else {
    btnView3.textContent = "View Less ▲";
  }
  document.querySelector(".sub-content3").classList.toggle("hidden");
});
btnView4.addEventListener("click", function () {
  if (btnView4.textContent === "View Less ▲") {
    btnView4.textContent = "View more ▼";
  } else {
    btnView4.textContent = "View Less ▲";
  }
  document.querySelector(".sub-content4").classList.toggle("hidden");
});
btnView5.addEventListener("click", function () {
  if (btnView5.textContent === "View Less ▲") {
    btnView5.textContent = "View more ▼";
  } else {
    btnView5.textContent = "View Less ▲";
  }
  document.querySelector(".sub-content5").classList.toggle("hidden");
});
btnView6.addEventListener("click", function () {
  if (btnView6.textContent === "View Less ▲") {
    btnView6.textContent = "View more ▼";
  } else {
    btnView6.textContent = "View Less ▲";
  }
  document.querySelector(".sub-content6").classList.toggle("hidden");
});
