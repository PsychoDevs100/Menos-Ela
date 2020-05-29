$(function(){

    //scrollMenu();

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

})