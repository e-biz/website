$(function() {

	/** Some basic effets on load */

	$(".header-bg-shadow-start").delay(500).queue(function(next){
		$(this).addClass('header-bg-shadow');
		next();
	});

	var delay = 1000;
	$(".ebusiness-logo").hide().delay(delay).fadeIn('slow');

	delay += 300;
	$(".ebiz").hide().delay(delay).fadeIn('slow');
	$(".flow-navbar").hide().delay(delay).fadeIn('slow');

	// Top strip
	$(".header-light-effect").hide();
	$(".header-top-strip").hide().delay(delay).slideDown('slow').queue(function(){
		$(".header-light-effect").fadeIn();
	});

	delay += 300;
	$(".ebiz-description").hide().delay(delay).fadeIn('slow');

	delay += 300;
	$(".header-top-strip-content-left").hide().delay(delay).fadeIn('slow');
	
 });
