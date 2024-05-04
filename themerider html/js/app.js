//Bootstrap 4 Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Remove conditiona-offer
$( ".close-btn" ).click(function() {
  $( ".conditiona-offer" ).fadeOut();
});

// Toogle Menu
$(document).ready(function(){
    $(".btnNavClick").click(function(){
        $(".main-nav-bar").fadeIn("5000");
    });    
    $(".nav-close-sidebar").click(function(){
        $(".main-nav-bar").fadeOut("5000");
    });        
});

//Vertical scrolling animation
$(document).ready(function(){
	$(".vAnimate").mouseover(function(){
		var vAheight = $(this).height();
		var vIheight = $(this).find('.vItem').height();
			$(this).find(".vItem").css("top",-vIheight);
			$(this).find(".vItem").css("margin-top",vAheight);
	});
				
	$(".vAnimate").mouseout(function(){
			$(this).find(".vItem").css("top",'0');
			$(this).find(".vItem").css("margin-top",'0');
	});
});


// Device viewport area 
$("#vDesktop").click(function(){
  $(".screens-resising").removeClass("screen-tablet screen-mobile");
});

$("#vTablet").click(function(){
  $(".screens-resising").addClass("screen-tablet");
  $(".screens-resising").removeClass("screen-mobile");
});

$("#vMobile").click(function(){
  $(".screens-resising").addClass("screen-mobile");
  $(".screens-resising").removeClass("screen-tablet");
});


// Device scrollbar customized
$("#boxscroll2").niceScroll("#contentscroll2",{cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:true,touchbehavior:true});  // Second scrollable DIV
