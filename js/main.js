var currCont = $('#homecont');
var currSection = $('#home');
$(document).ready(function(){
	navbar = $(this).find("nav");
	$('#filler').height(navbar.height());
	// Checks the scroll position for proper navbar styling
	$(document).on("scroll", function(){
		if($(document).scrollTop() - ($('header').height()) <= 0){
			//If the page is scrolled above the orignal navbar position, we un-fix it.
			if (navbar.attr('id') === 'navbarFixed'){
				// The filler div takes up the space previosly occupied by the navbar
				$('#filler').hide();
				navbar.attr('id','navbar');
			}
		}
		if ($(document).scrollTop() - ($('header').height()- $('nav').height()) >= 0){
			//If we scroll down beyond the header, we fix the navbar.
			navbar.attr('id','navbarFixed');
			// The filler div takes up the space previosly occupied by the navbar
			$('#filler').show();
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
		currCont = newCont;
	}
}