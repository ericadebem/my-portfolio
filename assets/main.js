
let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

function  toggleMenu(){
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
navigation.classList.remove('active');
main.classList.remove('active');
}

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const dayOfCode = "27 dec 2022";

function countdown(){

    const dayOfCodeDate = new Date(dayOfCode);
    const currentDate = new Date();

    const totalSeconds = (dayOfCodeDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}