$(function() {

 	/** Manage the navbar */
 	var navbar = $(".flow-navbar");
 	var navbarLimit = $(".header-content").height() - $(".flow-navbar").height();
 	var navbarTop = $(".navbar-top");

	var adjustNavbar = function(){

		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		if (scrollTop > navbarLimit){
			// Set visible
			navbar.addClass("fixed-navbar");
			navbarTop.show();
		} else {
			// Set invisible 
			navbar.removeClass("fixed-navbar");
			navbarTop.hide();
		}
	};

	$(window).scroll(adjustNavbar);
	adjustNavbar();

	// Using delegate insure it will be executed
	// *after* the event is processed by the browser
	$(document).delegate('.navbar a', 'click', function(e) {
		goToByScroll($(this).attr("href"));
		e.preventDefault();
	});

	
	// Using delegate insure it will be executed
	// *after* the event is processed by the browser
	$(document).delegate('.smooth-scroll', 'click', function(e) {
		goToByScroll($(this).attr("href"));
		e.preventDefault();
	});
	
	function goToByScroll(id){
		var offset = $(id).offset().top - 120;
		$('html,body').animate({scrollTop: offset}, 400, function(){
			adjustNavbar();
			$('[data-spy="scroll"]').each(function () {
				var $spy = $(this).scrollspy('refresh');
			});
			location.hash = id;
		});
	}

	$(".navbar-top").click(function(){
		$('html,body').animate({scrollTop: 0}, 400, function(){});
	})

});