    //Bootstrap tooltip    
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();   
        });
        
    //Fixed navbar After Scroll down
        $(document).scroll(function() {
          var y = $(this).scrollTop();
          if (y > 500) {
            $('.navbar-default').addClass('navbar-fixed-top');
          } else {
            $('.navbar-default').removeClass('navbar-fixed-top');
          }
        });

    //Fixed cart list 
        $(document).scroll(function() {
          var y = $(this).scrollTop();
          if (y > 220) {
            $( ".cart_fixed" ).addClass( "fixed_while_scroll" );
          } else {
            $( ".cart_fixed" ).removeClass( "fixed_while_scroll" );
          }
        });
        
    //Add/Remove cart according click on busket on mobile device
        $(document).ready(function(){
            $(".m-cart, .checkout-cancel").click(function(){
                $(".cart_fixed").fadeToggle(100);
                $(".area-clear").fadeToggle(100);
            });
        });