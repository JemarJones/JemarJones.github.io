var currCont = $('#homecont');
var currSection = $('#home'); 
var projects = [{image: "./assets/webtunes_logo.png", title: "WebTunes",colab: [{name: "Nikolai Savas", link: "http://savas.ca/"},{name: "Samraj Nalwa", link: "http://nalwa.ca"}],tech:[{name: "Node.js", link: "https://nodejs.org/"},{name: "Express.js", link: "http://expressjs.com/"},{name: "SQL", link: "http://www.mysql.com/"},{name: "Jade", link: "http://jade-lang.com/"},{name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name: "jQuery", link: "https://jquery.com/"},{name: "HTML5", link: "https://www.w3.org/html/"},{name: "CSS", link: "https://www.w3.org/Style/CSS/"}], desc: "An online service that lets you share your musical tastes.", link: "http://webtunes.jkjones.me"},{image: "./assets/survival.png", title: "Survival of the Fittest",colab: [{name: "Vicky Bilbily", link: "http://bickybilly.github.io/"}],tech:[{name: "Node.js", link: "https://nodejs.org/"},{name: "Express.js", link: "http://expressjs.com/"},{name: "Socket.io", link: "http://socket.io/"},{name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name: "jQuery", link: "https://jquery.com/"},{name: "Canvas (HTML5)", link: "https://jquery.com/"},{name: "HTML5", link: "https://www.w3.org/html/"},{name: "CSS", link: "https://www.w3.org/Style/CSS/"}], desc: "An interesting multiplayer take on the heavily studied cellular automaton, Conway's Game of Life.", link: "http://survival.jkjones.me"},{image: "./assets/jquery-flip.png", title: "jQuery Flip",colab: [{name: "Nattawat Nonsung (Author)", link: "https://github.com/nnattawat"},{name: "Stijn de Witt", link: "http://StijnDeWitt.com"}],tech:[{name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name: "jQuery", link: "https://jquery.com/"}], desc: "A lightweight jQuery plugin to make 3D card flipping animation", link: "http://nnattawat.github.io/flip/"},{image: "./assets/fl_animated.gif", title: "Flash Learn",colab: [{name: "Vicky Bilbily", link: "http://bickybilly.github.io/"}],tech: [{name: "AngularJS", link: "https://angularjs.org/"},{name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name: "jQuery", link: "https://jquery.com/"},{name: "HTML", link: "https://www.w3.org/html/"},{name: "CSS", link: "https://www.w3.org/Style/CSS/"}], desc: "A crowdsourced flashcard platform.", link: "http://flashlearn.jkjones.me"},{image: "./assets/fmPromoMarq.png", title: "FontMe",colab: [],tech:[{name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name: "jQuery", link: "https://jquery.com/"},{name: "HTML", link: "https://www.w3.org/html/"},{name: "CSS", link: "https://www.w3.org/Style/CSS/"}], desc: "An extension that helps you discover what Font is being used on a given HTML element.", link: "https://chrome.google.com/webstore/detail/fontme/jmflbifhkmjblfhmkpfdflfhphbinfjl"}];
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
		var link = $('<a></a>');
		link.attr('href',projects[i].link);
		var projBox = $('<div></div>');
		projBox.addClass('projBox');
		var imgCont = $('<div></div>');
		imgCont.addClass('imgCont');
		var projImg = $('<img>');
		projImg.addClass('projImg');
		projImg.attr('src',projects[i].image);
		var scale = projImg.height()/projImg.width();
		projImg.width(350);
		projImg.height(350/scale);
		imgCont.append(projImg);
		projBox.append(imgCont);
		var infoCont = $('<div></div>');
		infoCont.addClass('infoCont');
		var projTitle = $('<h1></h1>');
		projTitle.addClass('projTitle');
		projTitle.text(projects[i].title);
		infoCont.append(projTitle);
		if (projects[i].colab.length !== 0){
			var projColab = $('<p>Collaborators: </p>');
			projColab.addClass('infoList');
			for (var j = 0; j < projects[i].colab.length; j++){
				if (j !== 0){
					projColab.append(', ');
				}
				if ((j== projects[i].colab.length - 1) && (j!==0)){
					projColab.append('and ');
				}
				projColab.append('<a href="' + projects[i].colab[j].link + '"> ' + projects[i].colab[j].name + '</a>');
				if ( j== projects[i].colab.length - 1){
					projColab.append('.');
				}
			}
			infoCont.append(projColab);
		}
		if (projects[i].tech.length !== 0){
			var projTech = $('<p>Technologies: </p>');
			projTech.addClass('infoList');
			for (var j = 0; j < projects[i].tech.length; j++){
				if (j !== 0){
					projTech.append(', ');
				}
				if ((j== projects[i].tech.length - 1) && (j!==0)){
					projTech.append('and ');
				}
				projTech.append('<a href="' + projects[i].tech[j].link + '"> ' + projects[i].tech[j].name + '</a>');
				if ( j== projects[i].tech.length - 1){
					projTech.append('.');
				}
			}
			infoCont.append(projTech);
		}
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