$(document).ready(function() {

	let slider = $("#slider");
	let img = $(".group");
	tl = new TimelineMax();
	let index = 0;
	console.log(img.length)

	TweenLite.set(img, {rotationY: 90,perspective:800});
	TweenLite.set(img[0], {rotationY: 0});
	TweenLite.set(slider, {perspective:1000});
 

	function rightAnimation() {
		tl.to(img[index], 0.5, {rotationY : '-90_ccw'});
		index++;
			if ( index == img.length ) {
				index = 0;
			}
		tl.to(img[index], 0.5, {rotationY : '0_ccw'});
	}

	$('#next').click(function() {
		if (index < img.length) {
			rightAnimation()
			console.log(index)
		} else {

			index = 0;
			rightAnimation()
		}		
	});


	function leftAnimation() {
		tl.to(img[index], 0.5, {rotationY : '+90_cw'});
		index++;
			if ( index == img.length ) {
				index = 0;
			}
		tl.to(img[index], 0.5, {rotationY : '0_cw'});
	}

	$('#prev').click(function() {
		if (index < img.length) {
			leftAnimation()
			console.log(index)
		} else {

			index = 0;
			leftAnimation()
		}				
	});


	function upAnimation() {
		tl.to(img[index], 0.5, {rotationX : '90_cw'});
		index++;
			if ( index == img.length ) {
				index = 0;
			}
		tl.to(img[index], 0.5, {rotationX : '0_cw'});
	}

	$('#up').click(function() {
		if (index < img.length) {
			upAnimation()
			console.log(index)
		} else {

			index = 0;
			upAnimation()
		}				
	});


});