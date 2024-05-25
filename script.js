'use strict';

const carouselItems = document.querySelectorAll('.carousel__item');
console.log(carouselItems)
let currentItem = document.querySelector('.carousel__item--main');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');


rightBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.carousel__item--right');
    const leftItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item,i) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    leftItem.classList.add('carousel__item--left');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const rightItem = currentId === carouselItems.length -1 ? carouselItems[0] : carouselItems[currentId +1];
    rightItem.classList.add('carousel__item--right');
});

leftBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.carousel__item--left');
    const rightItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item,i) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    rightItem.classList.add('carousel__item--right');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const leftItem = currentId === 0 ? carouselItems[carouselItems.length-1] : carouselItems[currentId-1];
    leftItem.classList.add('carousel__item--left');
});
let con = document.querySelector('.container'),
    cube = document.querySelector(".image-cube"),
    btnNext = document.getElementById("next"),
    btnPrev = document.getElementById("prev"),
    switch_delay = 3000 //milli-seconds

let pos = 0;

btnNext.addEventListener("click", () => {
  pos -= 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});
btnPrev.addEventListener("click", () => {
  pos += 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});

function autoClick() {
  pos -= 90;
  cube.style.transform = `rotateY(${pos}deg)`;
}
autoClick()

let autoRun = setInterval(autoClick, switch_delay)
//pause on mouseover
con.addEventListener('mouseenter', function(){
  clearInterval(autoRun)
})
//restart on mouseleave
con.addEventListener('mouseleave', function(){
  autoRun = setInterval(autoClick, switch_delay)
})
