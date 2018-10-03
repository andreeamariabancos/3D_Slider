$(document).ready(function() {

	let slider = $("#slider");
	let img = $(".group");
	let back = $(".back");
	let index = 1;
	let total = img.length - 1;
	tl = new TimelineMax();
	
	TweenLite.set(img, {rotationY: 90 ,perspective:800});
	TweenLite.set(img[0], {rotationY: 0, zIndex:2});
	TweenLite.set(back[0], {rotationX: 0});
	TweenLite.set(slider, {perspective:1000});

	function rightAnimation() {

		tl.to(img[index], 1, {rotationY:180, transformOrigin:"100% 0%", ease:Linear.easeNone})
		tl.to(img[index], 0.3 , {autoAlpha:0});
		index++;
		TweenLite.set(img[index], {rotationY: 0});
		tl.to(img[index], 1, {rotationY: 0, zIndex:2});
	}


	function leftAnimation() {

		tl.to(img[index], 1, {rotationY:-180, transformOrigin:"0% 100%", ease:Linear.easeNone})
		tl.to(img[index], 0.3 , {autoAlpha:0});
		index++;
		TweenLite.set(img[index], {rotationY: 0});
		tl.to(img[index], 1, {rotationY: 0, zIndex:2});

			if ( index == total ) {
				index = 0;
			}
	}

	function upAnimation() {

		tl.to(back[index], 1, {rotationX:'180_cw', transformOrigin:"100% 0%", ease:Linear.easeNone})
		tl.to(img[index], 0.3 , {autoAlpha:0});
		index++;
		TweenLite.set(img[index], {rotationY: 0});
		tl.to(img[index], 1, {rotationY: 0, zIndex:2});

			if ( index == total ) {
				index = 0;
			}
	}

	function downAnimation() {

		tl.to(back[index], 1, {rotationX:'180_ccw', transformOrigin:"0% 100%", ease:Linear.easeNone})
		tl.to(img[index], 0.3 , {autoAlpha:0});
		index++;
		TweenLite.set(img[index], {rotationY: 0});
		tl.to(img[index], 1, {rotationY: 0, zIndex:2});
			if ( index == total ) {
				index = 0;
			}
	}

	$('#next').click(function() {
		if(index < total) {
			$('#count').html(function(i, val, total) {
				console.log(total)
     			return (val * 1 + 1 );
   			}); 

   			rightAnimation();
		}
	});

	$('#prev').click(function() {
		leftAnimation();	
	});

	$('#up').click(function() {
		upAnimation();
	
	});

	$('#down').click(function() {
		downAnimation();		
	});

	$('.show').click(function() {
		$('#showLove').css({ fill: "#e20b0b",  transition: "all 0.2s ease-in-out", transform: "scale(1)"})
	});

});