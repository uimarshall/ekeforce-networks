$(document).ready(function () {
	// ***********NAVBAR**************
	// Listen to click event on the nav-link & hide the nvabar-collapse
	// Close responsive menu when a scroll trigger link is clicked
	$(".nav-link").click(function () {
		$(".navbar-collapse").collapse("hide");
	});

	// Activate scrollspy to add active class 2 d navitems on scroll
	$("body").scrollspy({
		target: "#mainNav",
		offset: 70,
	});

	// On scroll-down, if d offset is greater than 50px, add navbar-shrink class
	$(window).scroll(function () {
		if ($("#mainNav").offset().top > 50) {
			$("#mainNav").addClass("navbar-shrink");
		} else {
			$("#mainNav").removeClass("navbar-shrink");
		}
	});
});
