$(document).ready(function(){
	// Checks the scroll position for proper navbar styling
	$(document).on("scroll", function(){
		console.log($(document).scrollTop() - ($('header').height()- $('nav').height()));
		navbar = $(this).find("nav");
		if($(document).scrollTop() - ($('header').height()) <= 0){
			//If the page is scrolled above the orignal navbar position, we dont un-fix it.
			navbar.attr('id','navbar');
		}
		if ($(document).scrollTop() - ($('header').height()- $('nav').height()) >= 0){
			//If we scroll down beyond the header, we fix the navbar.
			navbar.attr('id','navbarFixed');
		}
	})
})