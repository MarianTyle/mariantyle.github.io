$(function() {
			//settings for slider
			var width = 1050;
			var animationSpeed = 1800;
			var pause = 5000;
			var currentSlide = 1;
			
			//cache DOM elements
			var $slider = $('#slider');
			var $slideContainer = $('.slides', $slider);
			var $slides = $('.slide', $slider);
			
			var interval;
			
			function startSlider() {
				interval = setInterval(function() {
					$slideContainer.animate( { "margin-left": "-=" + width}, animationSpeed, function() {
							if(++currentSlide === $slides.length)
							{
								currentSlide = 1;
								$slideContainer.css('margin-left',0);
							}
						});
					}, pause);
			}
			
			function stopSlider() {
				clearInterval(interval);
			}			
			
			$slideContainer
				.on('mouseenter', stopSlider)
				.on('mouseleave', startSlider);
				
			startSlider();
			
});