function myFunction(x) {
  x.classList.toggle("change");

}
$(document).ready(function () {
  $('.menu').click(function () {
    $('ul').toggleClass('active');
    $('header').toggleClass('h_active');
  })
})

$(function () {
  $('.slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 4,
    arrows:false,
    dots:true,
    cssEase:'linear',
    variableWidth: true,
    variableHeight: true,
    


  });
  
  
});
