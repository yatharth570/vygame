function myFunction(x) {
  x.classList.toggle("change");

}
$(document).ready(function () {
  $('.menu').click(function () {
    $('ul#menu').toggleClass('active');
    $('header').toggleClass('h_active');
  })
})

$(function () {
  $('.slide').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows:false,
    dots:true,
    variableWidth: true,
    variableHeight: true,
    cssEase: 'ease',
    autoplay: true,
    autoplaySpeed: 1000,
    speed:2000,
    infinite:true,
    pauseOnHover:false,
    


  });
  
  
});
