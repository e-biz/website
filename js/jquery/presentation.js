$(function() {

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
	
	/** Message box gets bigger on focus */

	$("#mail-content").focus(function(){
		$(this).attr("rows", 6);
	})

	$("#mail-content").focusout(function(){
		$(this).attr("rows", 0);
	});

 });
