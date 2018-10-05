$(document).ready(function() {

	let slider = $("#slider");
	let img = $(".group");
	let back = $(".back");
	let index = 0;
	let total = img.length;
	tl = new TimelineMax();

	
	TweenLite.set(img, {rotationY: 90 ,perspective:800});
	TweenLite.set(img[0], {rotationY: 0, zIndex:2});
	TweenLite.set(back[0], {rotationX: 0});
	TweenLite.set(slider, {perspective:1000});

	function rightAnimation() {

		tl.to(img[index], 0.8, {rotationY:180, transformOrigin:"100% 0%", ease:Linear.easeNone})
		tl.to(img[index], 0.3 , {autoAlpha:0});
		index++;
		TweenLite.set(img[index], {rotationY: 0});
		tl.to(img[index], 1, {rotationY: 0, zIndex:2});
	}


	function leftAnimation() {

		tl.to(img[index], 0.8, {rotationY:-180, transformOrigin:"0% 100%", ease:Linear.easeNone})
		tl.to(img[index], 0.3 , {autoAlpha:0});
		index++;
		tl.to(img[index], 1, {rotationY: 0, zIndex:2});
		TweenLite.set(img[index], {rotationY: 0});
	}

	function upAnimation() {

		tl.to(back[index], 0.8, {rotationX:'180_cw', transformOrigin:"100% 0%", ease:Linear.easeNone})
		tl.to(img[index], 0.3 , {autoAlpha:0});
		index++;
		TweenLite.set(img[index], {rotationY: 0});
		tl.to(img[index], 1, {rotationY: 0, zIndex:2});
	}

	function downAnimation() {

		tl.to(back[index], 0.8, {rotationX:'180_ccw', transformOrigin:"0% 100%", ease:Linear.easeNone})
		tl.to(img[index], 0.3 , {autoAlpha:0});
		index++;
		TweenLite.set(img[index], {rotationY: 0});
		tl.to(img[index], 1, {rotationY: 0, zIndex:2});
	}

	$('#next').click(function() {
		if(index < total - 1) {
			$('#count').html(function(i, val) {
				return (val * 1 + 1 );	
			}); 
			rightAnimation();
		}	
	});

	$('#prev').click(function() {
		if(index < total - 1) {
			$('#count').html(function(i, val) {
				return (val * 1 + 1 );	
			}); 
			leftAnimation();
		}		
	});

	$('#up').click(function() {
		if(index < total - 1) {
			$('#count').html(function(i, val) {
				return (val * 1 + 1 );	
			}); 
			upAnimation();
		}	
	
	});

	$('#down').click(function() {
		if(index < total - 1) {
			$('#count').html(function(i, val) {
				return (val * 1 + 1 );	
			}); 
			downAnimation();
		}			
	});

	$('#count2').html(function() {
		return '/' + total;
	})

	/*$('#test2').click(function() {
		  $(this).closest(".group").remove();
	})*/

	$('.show').click(function() {
		$('#lineLeft').addClass( "line-animation" )
		$('#showLove').css({ fill: "#e20b0b",  transition: "all 0.2s ease-in-out", transform: "scale(1)"})
		tl.from("#lineLeft", 1, { delay:0.5, visibility:'visible', scaleX:0, transformOrigin:"left"})
	});


});