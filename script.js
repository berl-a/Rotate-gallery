$(document).ready(
	function() {
		/*CONST*/
		var TIME_TO_SHOW = 5000 + 60000*5;
		var TIME_FOR_MOVING = 500;
		/*CONST*/
		
		var screenWidth = $(window).width();
		var screenHeight = $(window).height();
		
		
		$('img').css(
			'top',
			function(i, val){
				return screenHeight*0.02 + i*(70) + 'px';
			}
		);
		
		var TIME_TO_SHOW = 5000;
		
		var number_of_images=$('img').toArray().length;
		var now_image = 1;
		
		var changeImage = function() {
			var $image = $('img:nth-of-type(' + now_image + ')');
			
			var oldX = $image.css('left');
			var oldY = $image.css('top');
			
			$image.animate(
				{
					left: screenWidth * 0.18 + 'px', 
					top: screenHeight * 0.02 + 'px'
				}, {
					duration: TIME_FOR_MOVING, 
					queue: false
				}
			);
			$image.toggleClass('rotated not-rotated');
			
			
			setTimeout(
				function() {
					
					$image.animate(
						{
							left: oldX, 
							top: oldY
						}, {
							duration: TIME_FOR_MOVING, 
							queue: false
						}
					);
					$image.toggleClass('rotated not-rotated');
					
					
					if(now_image < number_of_images)
						now_image++;
					else
						now_image = 1;
					
					changeImage();
					
				}, TIME_TO_SHOW + 2000
			);
		};
		changeImage();
		
		
//		
//		$.when(changeImage()).done(
//			function() {
//				setTimeout(
//					changeImage, 5000
//				);
//			}
//		);
	}
);