$(document).ready(function() {

  //Title fade in
  $('.hello.hidden').fadeIn(3000).removeClass('hidden');

  //highlight navbar menu when scroll
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 50
  });

  $('#menu').affix({
    offset: {
      top: 100
    }
  });

  //page scroll
  $('a.page-scroll').click(function() {
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  //close navbar menu once click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  // timeline vertical line auto height
  var contentHeight = 0;
  $('.content').each(function(index) {
    contentHeight += parseInt($(this).outerHeight(true), 10);
  });

  var timelineHeight = ($('#timeline').height() - contentHeight - 20) * 0.8;
  $('.timeline-start').css({height:timelineHeight});
  $('.timeline-end').css({height:timelineHeight});

  // resume content toggle
  $('.content').hide();
  $('.heading').click(function(event) {
  	var selected = $(this).next('.content');
    $('.content').not(selected).slideUp();
    selected.slideToggle(700,'easeInOutExpo');
    event.stopPropagation();
  });

  $(document).click(function() {
    $('.content').slideUp();
	});

  $(".content").click(function(event){
    event.stopPropagation();
  });



  // language toggle
  $('li.language').css("display", "none");

  $('li.language-button').click(function(){
	   $(this).siblings('li.language').toggle('slide');
   });

  $('li.language').click(function(){
    $('li.language').hide('slide');
  });

  // image pop-up
  if($(window).width() < 768) {

  };

})
