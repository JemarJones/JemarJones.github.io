var currCont = $('#homecont');
var currSection = $('#home');
$(document).ready(function(){
	// Checks the scroll position for proper navbar styling
	$(document).on("scroll", function(){
		navbar = $(this).find("nav");
		if($(document).scrollTop() - ($('header').height()) <= 0){
			//If the page is scrolled above the orignal navbar position, we dont un-fix it.
			if (currCont.hasClass('adjusted')){
				currCont.removeClass('adjusted');
			}
			navbar.attr('id','navbar');
		}
		if ($(document).scrollTop() - ($('header').height()- $('nav').height()) >= 0){
			//If we scroll down beyond the header, we fix the navbar.
			currCont.addClass('adjusted');
			navbar.attr('id','navbarFixed');
		}
	});
	$('#home').on('click', navClick);
	$('#proj').on('click', navClick);
	$('#resume').on('click', navClick);
});
var navClick = function(event){
	event.preventDefault();
	switchCont($(this),$($(this).data('cont')));
}
//Changes the page to the given content
var switchCont = function(newSection, newCont){
	if (currCont != newCont){
		// currSection.closest('li').removeClass('selected');
		currSection.removeClass('selected');
		currSection = newSection;
		// newSection.closest('li').addClass('selected');
		newSection.addClass('selected');
		currCont.hide();
		newCont.show();
		if (currCont.hasClass('adjusted')){
			currCont = newCont;
			currCont.addClass('adjusted');
		} else{
			currCont = newCont;
			currCont.removeClass('adjusted');
		}
	}
}