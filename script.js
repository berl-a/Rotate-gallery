$(document).ready(
	function() {
		
		
		
		$('img').css(
			'top',
			function(i, val){
				return 20 + i*(100) + 'px';
			}
		);
		
		var TIME_TO_SHOW = 7000;
		
		var number_of_images=$('img').toArray().length;
		var now_image = 1;
		
		var changeImage = function() {
			var $image = $('img:nth-of-type(' + now_image + ')');
			
			var oldX = $image.css('left');
			var oldY = $image.css('top');
//			$image.animate(
//				{
//					left: '140px', 
//					top: '40px'
//				}, {
//					duration: 4000, 
//					queue: false
//				}
//			);
			$image.toggleClass('rotated not-rotated');
			
			
			setTimeout(
				function() {
					
//					$image.animate(
//						{
//							left: oldX, 
//							top: oldY
//						}, {
//							duration: 4000, 
//							queue: false
//						}
//					);
					$image.toggleClass('rotated not-rotated');
					
					
					if(now_image < number_of_images)
						now_image++;
					else
						now_image = 1;
					
					changeImage();
					
				}, TIME_TO_SHOW
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