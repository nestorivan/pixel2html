// Here we are importing the whole app read more about modules here:
// http://wesbos.com/javascript-modules/
import $ from 'jquery';
import 'slick-carousel';
import allTheColors from './app';
import pricing from './pricing';

allTheColors.map(color => console.log(`The color is ${color}`))

const carousel = $('.carousel');

$(carousel).slick({
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  arrows: true
});

$(document).ready(() => {
  pricing();
})
