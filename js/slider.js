$(function(){

	var currentSlide = 0;

	var max = $('div.banner-single').length - 1;

	var delay = 3;

	init();

	change();

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

	
})