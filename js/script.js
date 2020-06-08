$(function(){

    var slide_wrp = ".side-menu-wrapper"; //Menu Wrapper
    
    var open_button = ".menu-open"; //Menu Open Button
    
    var close_button = ".menu-close"; //Menu Close Button
    
    var overlay = ".menu-overlay"; //Overlay

    //scrollMenu();

    menuMobile();

    function scrollMenu() {

        $(window).scroll(function() {  

             //console.log(scroll);
            if (scroll >= 520) {

                //console.log('a');
                $("nav.navbar").addClass("fixed");
            } 

            else {
                //console.log('a');
                $("nav.navbar").removeClass("fixed");            
            }
        });

    }

    function menuMobile() {
        
        //Posição inicial do menu
        $(slide_wrp).hide().css( {"right": -$(slide_wrp).outerWidth()+'px'}).delay(50).queue(function(){$(slide_wrp).show()}); 

        $(open_button).click(function(e){ //On menu open button click
            
            e.preventDefault();
            
            $(slide_wrp).css( {"right": "0px"}); //move menu right position to 0
            
            setTimeout(function(){
            
                $(slide_wrp).addClass('active'); //add active class
            },50);
            
            $(overlay).css({"opacity":"1", "width":"100%"});
        });

        $(close_button).click(function(e){ //on menu close button click
            
            e.preventDefault();
            
            $(slide_wrp).css( {"right": -$(slide_wrp).outerWidth()+'px'}); //hide menu by setting right position 
            
            setTimeout(function(){
                $(slide_wrp).removeClass('active'); // remove active class
            },50);
            
            $(overlay).css({"opacity":"0", "width":"0"});
        });

        $(document).on('click', function(e) { //Hide menu when clicked outside menu area
            
            if (!e.target.closest(slide_wrp) && $(slide_wrp).hasClass("active")){ // check menu condition
                
                $(slide_wrp).css( {"right": -$(slide_wrp).outerWidth()+'px'}).removeClass('active');
                
                $(overlay).css({"opacity":"0", "width":"0"});
            }
    
        });
    
    }

    

    document.getElementById("demo").onmouseenter = function() {mouseEnter()};

    document.getElementById("demo").onmouseleave = function() {mouseLeave()};
    

    function mouseEnter() {
        
      document.getElementById("demo").style.background = "rgba(0,0,0,0.7)";

      document.getElementById("demo").style.color = "white";
    }

    function mouseLeave() {
        
      document.getElementById("demo").style.background = "transparent";

      document.getElementById("demo").style.color = "transparent";
    }




    document.getElementById("demo2").onmouseenter = function() {mouseEnter2()};

    document.getElementById("demo2").onmouseleave = function() {mouseLeave2()};
    

    function mouseEnter2() {
        
      document.getElementById("demo2").style.background = "rgba(0,0,0,0.7)";

      document.getElementById("demo2").style.color = "white";
    }

    function mouseLeave2() {
        
      document.getElementById("demo2").style.background = "transparent";

      document.getElementById("demo2").style.color = "transparent";
    }




    document.getElementById("demo3").onmouseenter = function() {mouseEnter3()};

    document.getElementById("demo3").onmouseleave = function() {mouseLeave3()};
    

    function mouseEnter3() {
        
      document.getElementById("demo3").style.background = "rgba(0,0,0,0.7)";

      document.getElementById("demo3").style.color = "white";
    }

    function mouseLeave3() {
        
      document.getElementById("demo3").style.background = "transparent";

      document.getElementById("demo3").style.color = "transparent";
    }




    document.getElementById("demo4").onmouseenter = function() {mouseEnter4()};

    document.getElementById("demo4").onmouseleave = function() {mouseLeave4()};
    

    function mouseEnter4() {
        
      document.getElementById("demo4").style.background = "rgba(0,0,0,0.7)";

      document.getElementById("demo4").style.color = "white";
    }

    function mouseLeave4() {
        
      document.getElementById("demo4").style.background = "transparent";

      document.getElementById("demo4").style.color = "transparent";
    }




    document.getElementById("demo5").onmouseenter = function() {mouseEnter5()};

    document.getElementById("demo5").onmouseleave = function() {mouseLeave5()};
    

    function mouseEnter5() {
        
      document.getElementById("demo5").style.background = "rgba(0,0,0,0.7)";

      document.getElementById("demo5").style.color = "white";
    }

    function mouseLeave5() {
        
      document.getElementById("demo5").style.background = "transparent";

      document.getElementById("demo5").style.color = "transparent";
    }
})