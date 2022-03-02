//Ease Scrolling
$("html").easeScroll();

//Bootstrap 4 Tooltips 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


//Interactive label design for products search page
$( document ).ready(function() {
    $( "#sr-text" ).mouseover(function() {
        $( "#sr-lb" ).css("margin-top","2px");
    }); 
});