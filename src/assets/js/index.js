// Here we are importing the whole app
// read more about modules here:
// http://wesbos.com/javascript-modules/
import $ from 'jquery';
import 'slick-carousel';
import allTheColors from './app';
import pricing from './pricing';

allTheColors.map(color => console.log(`The color is ${color}`))

$('.carousel').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

$(document).ready(() => {
  pricing();
})
