"use strict";

(function() {
  var SPACE_KEYCODE = 32;

  var clouds = document.querySelectorAll(".clouds");
  var ground = document.querySelector(".ground");
  var babyYoda = document.querySelector(".baby-yoda");
  var babyYodaShadow = document.querySelector(".baby-yoda-shadow");

  document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === SPACE_KEYCODE) {
      ground.classList.add("animate");
      babyYoda.classList.add("float");
      babyYodaShadow.classList.add("float");
    }
  });

  window.addEventListener("load", function() {
    babyYoda.classList.add("show");
    babyYodaShadow.classList.add("show");
    // setTimeout(function() {
    //   //babyYoda.classList.remove("show");
    //   babyYoda.classList.add("float");
    // }, 2100);
  });
})();
