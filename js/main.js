var currCont = $('#homecont');
var currSection = $('#home'); 
var projects;

$(document).ready(function(){
  const hash = window.location.hash.substring(1) || 'home';
  switchCont($('.' + hash));
  $.getJSON('./js/projects.json', function(data) {
    projects = data;

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
    $('.home').on('click', navClick);
    $('.projects').on('click', navClick);
    $('.resume').on('click', navClick);
  });
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
    $('#projectscont').append(link);
  }
}
var navClick = function(event){
  event.preventDefault();
  switchCont($(this));
}
//Changes the page to the given content
var switchCont = function(newSection){
  const newCont = $(newSection.data('cont'));
  window.history.pushState({},'', '#' + newSection.attr('class'));
  if (currCont != newCont){
    currSection.removeClass('selected');
    currSection = newSection;
    newSection.addClass('selected');
    currCont.hide();
    newCont.show();
    currCont = newCont;
  }
}