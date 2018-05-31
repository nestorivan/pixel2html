// Here we are importing the whole app read more about modules here:
// http://wesbos.com/javascript-modules/
import 'babel-polyfill';
import $ from 'jquery';
import 'slick-carousel';
import allTheColors from './app';
import pricing from './pricing';
import menu from './menu';

allTheColors.map(color => console.log(`The color is ${color}`))

const carousel = $('.carousel__container');

$(carousel).slick({
  slidesToScroll: 1,
  dots: true,
  centerMode: false,
  appendDots: '.carousel__dots-container',
  dotsClass: 'carousel__dots',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false
      }
    }
  ]
});

$(document).ready(() => {
  pricing();
  menu();
})
