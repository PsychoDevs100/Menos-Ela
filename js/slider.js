$(function(){

	var currentSlide = 0;

	var max = $('div.banner-single').length - 1;

	var delay = 3;

	init();

	change();

	changeSlide();

	function init() {
		
		$('div.banner-single').hide();

		$('div.banner-single').eq(0).show();
	}

	function change() {
		
		setInterval(function(){

			$('div.banner-single').eq(currentSlide).fadeOut(1500);

			currentSlide++;

			if(currentSlide > max){
				
				currentSlide = 0;
			}

			$('div.banner-single').eq(currentSlide).fadeIn(1500);

		},delay * 1000);
	}

	function changeSlide() {

		$(document).ready(function(){

			$('.slide_galery').slick({

				dots: true,

				arrows: true,

				autoplay: false,

			  	infinite: false,
			  	
			  	centerMode: false,
			  	
			  	speed:1000,
			  	
			  	slidesToShow: 3,
			    
			    slidesToScroll: 1,

		        responsive: [
					{
			      		breakpoint: 1025,
			      		
			      		settings: {
			        		
			        		autoplay: true,

			        		slidesToShow: 2
			      		}

			  	    },

			    	{
			      		breakpoint: 769,
			      		
			      		settings: {
			        		
			        		slidesToShow: 1
			      		}

			  	    }

		  	    ]

			});

	    });
	}

})