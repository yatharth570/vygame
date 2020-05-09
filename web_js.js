function myFunction(x) {
    x.classList.toggle("change");
    
}
$(document).ready(function(){
  $('.menu').click(function(){
    $('ul').toggleClass('active');
    $('header').toggleClass('h_active');
  })
})