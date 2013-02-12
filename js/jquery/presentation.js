$(document).ready(function() {

	/** Some basic effets on load */
	
	$(".header-bg-shadow-start").addClass('header-bg-shadow');

	var speed = 300;
	var delay = 300;
	$(".ebusiness-logo").delay(delay).fadeIn(speed);

	delay += 100;
	$(".ebiz").delay(delay).fadeIn(speed);

	// Top strip
	$(".header-light-effect");
	$(".header-top-strip").delay(delay).slideDown(speed).queue(function(){
		$(".header-light-effect").fadeIn();
	});

	delay += 100;
	$(".ebiz-description").hide().delay(delay).fadeIn(speed);

	delay += 100;
	$(".header-top-strip-content-left").hide().delay(delay).fadeIn(speed);

	/* Reflect after load */

	var reflect = function(){
		console.log("Doing reflect.");
		$(".reflect")
			.css("right", "100%")
			.css("left", "auto")
			.css("opacity", "0")
			.delay(1000)
			.queue(function(){
				$(this).css("left", "100%");
				$(this).css("opacity", "1");
				$(this).dequeue();
			})
			.delay(150)
			.queue(function(){
				$(this).css("opacity", "0");
				$(this).dequeue();
			});

		setTimeout(reflect, 2000+20000*Math.random());
	}

	reflect();

	/* Message box gets bigger on focus */

	$("#mail-content").focus(function(){
		$(this).attr("rows", 6);
	})

	$("#mail-content").focusout(function(){
		$(this).attr("rows", 0);
	});


	/* Content slide effect */

	$(".slideIn").addClass("inactive");
	$(".slideIn:even").addClass("right");
	var pageHeight = $(window).height();
	var manageElemVisibility = function(){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		$(".slideIn.inactive").each(function(index){
			if (scrollTop + pageHeight*4/5 > this.offsetTop){
				console.log("fadeIn");
				$(this).addClass('shown');
				$(this).removeClass('inactive');
			}
		});
	};

	$(window).resize(function() {
		pageHeight = $(window).height();
		manageElemVisibility();
	});

	$(window).scroll(manageElemVisibility);

	setTimeout(manageElemVisibility, delay+100);

 });
