var currCont = $('#homecont');
var currSection = $('#home');
var projects = [{image: "./assets/fl_animated.gif", title: "Flash Learn", desc: "A crowdsourced flashcard platform. lorremmm", link: "http://flashlearn.github.io"}];
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
	loadProjs();
	$('#home').on('click', navClick);
	$('#proj').on('click', navClick);
	$('#resume').on('click', navClick);
});
var loadProjs = function(){
	for (var i = 0; i < projects.length; ++i){
		var link = $('<a></a>')
		link.attr('href',projects[i].link);
		var projBox = $('<div></div>');
		projBox.addClass('projBox');
		var imgCont = $('<div></div>');
		imgCont.addClass('imgCont');
		var projImg = $('<img>');
		projImg.addClass('projImg');
		projImg.attr('src',projects[i].image);
		var scale = projImg.height()/projImg.width();
		projImg.height(100);
		projImg.width(100/scale);
		imgCont.append(projImg);
		projBox.append(imgCont);
		var infoCont = $('<div></div>');
		infoCont.addClass('infoCont');
		var projTitle = $('<h1></h1>');
		projTitle.addClass('projTitle');
		projTitle.text(projects[i].title);
		infoCont.append(projTitle);
		var projDesc = $('<p></p>');
		projDesc.addClass('projDesc');
		projDesc.text(projects[i].desc);
		infoCont.append(projDesc);
		projBox.append(infoCont);
		link.append(projBox);
		$('#projcont').append(link);
	}
}
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