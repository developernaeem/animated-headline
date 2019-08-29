$(document).ready(function(){

	/*======================*/
		/* Responsive Mobile Menu Active */
	/*======================*/
	// Toggle-menu
	$('.show-menu-btn').click(function () {
	 $('.menu').toggleClass('active')
	});
	// Remove-Menu
	$('.hide-menu-btn').click(function () {
	 $('.menu').removeClass('active')
	});
	// list item click to Remove-menu
	$('ul li').click(function () {
	 $('.menu').removeClass('active')
	});

	/*======================*/
		/* SmoothScroll Active */
	/*======================*/
	$('a').smoothScroll();

});
	
  

	
	
	
	
	