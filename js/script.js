"use strict";

(function() {
  const SPACE_KEYCODE = 32;

  const ground = document.querySelector(".ground");
  const babyYoda = document.querySelector(".baby-yoda");
  const babyYodaShadow = document.querySelector(".baby-yoda-shadow");
  const helpText = document.querySelector(".help-text");
  const sky = document.querySelector(".sky");

  const audio = new Audio("music/bbyoda2.mp3");
  const playAudio = () => audio.play();
  const pauseAudio = () => audio.pause();
  let pause = true;
  let spacePressOnce = false;

  const moveYoda = () => {
    ground.classList.add("animate");
    babyYoda.classList.add("float");
    babyYodaShadow.classList.add("float");
    helpText.classList.remove("show");
  };

  const togglePause = () => {
    ground.classList.toggle("pause");
    babyYoda.classList.toggle("pause");
    babyYodaShadow.classList.toggle("pause");
  };

  document.addEventListener("keydown", evt => {
    if (evt.keyCode === SPACE_KEYCODE) {
      pause = !pause;

      if (pause) {
        pauseAudio();
      } else {
        playAudio();
        moveYoda();
      }
      spacePressOnce && togglePause();
      spacePressOnce = true;
    }
  });

  const pageLoadHandler = () => {
    babyYoda.classList.add("show");
    babyYodaShadow.classList.add("show");
    setTimeout(() => helpText.classList.add("show"), 1000);
  };

  window.addEventListener("load", pageLoadHandler);

  const generateRandomInteger = max => Math.floor(Math.random() * max);

  const changeSkyColor = () => {
    const randomRed = generateRandomInteger(255);
    const randomGreen = generateRandomInteger(255);
    const randomBlue = generateRandomInteger(255);
    sky.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  };

  setInterval(changeSkyColor, 20000);
})();
