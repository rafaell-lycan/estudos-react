require("./sass/main.scss");

import React from "react";
import Greeting from "./greeting";

var menu = document.querySelector('.toggle-menu');

menu.addEventListener('click', function () {
  document.querySelector('.player-art').classList.toggle('is-open');
});

var play = document.querySelector('.fa-play');
var pause = document.querySelector('.fa-pause');

play.addEventListener('click', toggleBtn);
pause.addEventListener('click', toggleBtn);

function toggleBtn () {
  play.classList.toggle('hidden');
  pause.classList.toggle('hidden');
}

// React.render(
//   <Greeting name="World"/>,
//   document.querySelector('.main')
// );
