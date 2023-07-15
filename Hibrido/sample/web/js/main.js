require([
  'jquery',
  'slick'
], 
function($) {
  "use strict";

  $(document).ready(function () {
      console.log('testando');
      $(".rotate-banner").slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true
      });
  });
  
});