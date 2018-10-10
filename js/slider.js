$(document).ready(function() {

	let carousel = $('#slider');
	let img = $(".group");
	let back = $(".back");
	let index = 0;
	let indexClose = 0;
	let total = img.length;
	let totalClose = img.length;
	tl = new TimelineMax();
	let test = 0;

	
	TweenLite.set(img, {rotationY: 90 ,perspective:800});
	TweenLite.set(img[index], {rotationY: 0, zIndex:2});
	TweenLite.set(back[index], {rotationX: 0});
	TweenLite.set(carousel, {perspective:1000});

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

	function restartRightAnimation() {

		tl.to(img[index], 0.8, {rotationY:180, transformOrigin:"100% 0%", ease:Linear.easeNone})
		tl.to(img[index], 0.3 , {autoAlpha:0}); 
		TweenLite.set(img, {rotationY: 90 ,perspective:800});
		index = 0;
		TweenLite.set(img[index], {rotationY: 0});
		tl.to(img[index], 1, {rotationY: 0, zIndex:2});
	}

	function restartLeftAnimation() {
		tl.to(img[index], 0.8, {rotationY:180, transformOrigin:"100% 0%", ease:Linear.easeNone})
		tl.to(img[index], 0.3 , {autoAlpha:0});
		TweenLite.set(img, {rotationY: 90 ,perspective:800});
		index = 0;
		TweenLite.set(img[index], {rotationY: 0});
		tl.to(img[index], 1, {rotationY: 0, zIndex:2});
	}

	function restartUpAnimation() {

		tl.to(img[index], 0.8, {rotationX:'180_cw', transformOrigin:"100% 0%", ease:Linear.easeNone})
		tl.to(img[index], 0.3 , {autoAlpha:0}); 
		TweenLite.set(img, {rotationY: 90 ,perspective:800});
		index = 0;
		TweenLite.set(img[index], {rotationY: 0});
		tl.to(img[index], 1, {rotationY: 0, zIndex:2});
	}

	function restartDownAnimation() {

		tl.to(img[index], 0.8, {rotationX:'180_ccw', transformOrigin:"0% 100%", ease:Linear.easeNone})
		tl.to(img[index], 0.3 , {autoAlpha:0}); 
		TweenLite.set(img, {rotationY: 90 ,perspective:800});
		index = 0;
		TweenLite.set(img[index], {rotationY: 0});
		tl.to(img[index], 1, {rotationY: 0, zIndex:2});
	}

	function setTimeOut() {
		$('#next').css("display","none");
		$('#prev').css("display","none");
		$('#up').css("display","none");
		$('#down').css("display","none");
		setTimeout( function() 
				{
					$('#next').css("display","block"), 
					$('#prev').css("display","block"),
					$('#up').css("display","block"), 
					$('#down').css("display","block");
			}, 1200);
	}

	$('#next').click(function() {

		if(index < total -1) {
			$('#countImg').html(function(i, val) {
				return (val * 1 + 1 );	
			}); 
			
			setTimeOut();
			rightAnimation();
			
		} else {
	
			$('#countImg').html(function(i, val) {
				val = 0 ;
				return (val * 1 + 1);
				console.log(val)	
			});
			TweenLite.set(img,{clearProps:"all"});
			restartRightAnimation()
			test = 1;

		}
		$('.group').eq(indexClose).addClass('active').siblings().removeClass('active');

		/*if (test == 1 ) {
				TweenLite.set(img[6],{visibility:"visible",opacity:0,zIndex:0});
		} 

		if ( index == 6 ) {
				TweenLite.set(img[6],{visibility:"visible",opacity:1,zIndex:2});
		}*/
		
	});

	$('#prev').click(function() {
		if(index < total - 1) {
			$('#countImg').html(function(i, val) {
				return (val * 1 + 1 );	
			}); 
			setTimeOut();
			leftAnimation();
		} else {
	
			$('#countImg').html(function(i, val) {
				val = 0 ;
				return (val * 1 + 1);
				console.log(val)	
			});
			TweenLite.set(img,{clearProps:"all"});
			restartLeftAnimation();
		}		
	});

	$('#up').click(function() {
		if(index < total - 1) {
			$('#countImg').html(function(i, val) {
				return (val * 1 + 1 );	
			}); 
			setTimeOut();
			upAnimation();
			
		} else {
	
			$('#countImg').html(function(i, val) {
				val = 0 ;
				return (val * 1 + 1);
				console.log(val)	
			});
			TweenLite.set(img,{clearProps:"all"});
			restartUpAnimation();
		}			
	
	});

	$('#down').click(function() {
		if(index < total - 1) {
			$('#countImg').html(function(i, val) {
				return (val * 1 + 1 );	
			}); 
			setTimeOut();
			downAnimation();	
		} else {
	
			$('#countImg').html(function(i, val) {
				val = 0 ;
				return (val * 1 + 1);
				console.log(val)	
			});
			TweenLite.set(img,{clearProps:"all"});
			restartDownAnimation();
		}		
		
	});

	$('#countTotal').html(function() {
		return '/ ' + totalClose;
	})


	$('.show').click(function() {
		$('#showLove').css({ fill: "#e20b0b", animation: "pulse 1s ease infinite", transition: "all 0.2s ease-in-out", transform: "scale(1)"})
	});

	$( ".show" ).hover(function() {
		$('#heartAnimation').css({stroke: "#e20b0b", strokeDasharray: 400, strokeDashoffset: 400, animation:"draw 3s forwards"})
	});

	
	$("#close").click(function() {
		currentIndex = $('img.active').index();
		let ActiveElement = carousel.find('.group.active');
		ActiveElement.remove();
		indexClose = indexClose - 1;
		TweenLite.set(img[index+1], {rotationY: 0, zIndex:2});
		nextAtClose() // asta trebuie inlocuita cu o actiune pe buton, imi e prea somn sa imi dau seama ce dar vei intelege tu. Fara ea se strica delete-ul deci ai nevoie de ceva asemanator dar care sa nu faca animatia	
		// am incercat sa cresc index-ul aici, "index++", ca sa evit folosirea dar se intampla ceva urat, sa te uiti.
		$('#countTotal').html(function() {
			totalClose = totalClose - 1;
		return '/ ' + totalClose;
	})

});
    //daca sterg din prima pozele se sterg ok ultima poza ramane nu se mai poate sterge 1/1
    //daca merg si sterg de la n poza pozele care au ramas nu se mai vad
    //daca dau next 2/2 iar dupa x totalul ajunge la un nr cu -
	function nextAtClose() {

		tl.to(img[index], 0.3 , {autoAlpha:0});
		index++;
		TweenLite.set(img[index], {rotationY: 0});
		tl.to(img[index], 1, {rotationY: 0, zIndex:2});		
		indexClose++;
	}

});