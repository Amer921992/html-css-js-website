// set time interval
setInterval(() => {
  const eventDate = new Date("31 dec 2022").getTime();
  const date = new Date().getTime();
  const restTime = eventDate - date;
  const restDays = restTime / (1000 * 60 * 60 * 24);
  document.querySelector(".days").textContent = parseInt(restDays);
  const restHours = (restTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
  document.querySelector(".hours").textContent = parseInt(restHours);
  const restMinutes = (restTime % (1000 * 60 * 60)) / (1000 * 60);
  document.querySelector(".minutes").textContent = parseInt(restMinutes);
  const restSeconds = (restTime % (1000 * 60)) / 1000;
  document.querySelector(".seconds").textContent = parseInt(restSeconds);
}, 1000);


// our skills spans fill && counter effect
const spans = Array.from(document.querySelectorAll('.progress span'));
const section = document.querySelector('.our-skills .container');

stats_spans = Array.from(document.querySelectorAll('.our-stats span:first-of-type')) ;
spans_section = document.querySelector('.our-stats');
let started = false


window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 600){
    spanFill();
  }
  if (window.scrollY >= section.offsetTop + 300){
    spanSill();
  }
  if (window.scrollY <= section.offsetTop - 600){
    spanSill();
  }
  if(window.scrollY >= spans_section.offsetTop - 600) {
    if(!started) {
      stats_spans.forEach((element) => {
        startCount(element);
      })
    }
    started = true;
  }
}
let spanFill = function () {
  spans.forEach((element) => {
    element.style.width = element.dataset.width;
  });
}
let spanSill = function () {
  spans.forEach((element) => {
    element.style.width = '0px';
  });
}
// statistics effect 

function startCount (ele) {
  let goal = ele.dataset.goal;
  let count = setInterval (()=> {
    ele.textContent++;
    if(ele.textContent == goal) {
      clearInterval(count)
    }
  }, 100/goal)
}