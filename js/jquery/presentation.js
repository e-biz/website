$(function() {

	/** Some basic effets on load */

	$(".header-bg-shadow-start").addClass('header-bg-shadow');

	var delay = 1000;
	$(".ebusiness-logo").delay(delay).fadeIn('slow');

	delay += 300;
	$(".ebiz").delay(delay).fadeIn('slow');

	// Top strip
	$(".header-light-effect");
	$(".header-top-strip").delay(delay).slideDown('slow').queue(function(){
		$(".header-light-effect").fadeIn();
	});

	delay += 300;
	$(".ebiz-description").hide().delay(delay).fadeIn('slow');

	delay += 300;
	$(".header-top-strip-content-left").hide().delay(delay).fadeIn('slow');
	
 });
