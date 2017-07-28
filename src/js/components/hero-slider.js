import $ from "jquery";
import "slick-carousel";

$(document).ready(function() {
  $('.hero-slider__container').slick({
    infinite: true,
    draggable: true,
    arrows: true,
    prevArrow: '#hero-slider--prev',
    nextArrow: '#hero-slider--next',
    fade: true,
    speed: 600,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 2500
  });
});
