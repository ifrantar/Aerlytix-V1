$(document).ready(function() {

    /* LINK SCROLLING TO SECTION AND SELECTING SECTION LINK */

    // Cache selectors
	var lastId,
	    topMenu = $('#main-header'),
	    topMenuHeight = topMenu.outerHeight(),
	    // All list items
	    menuItems = topMenu.find('a'),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr('href'));
	      if (item.length) { return item; }
		});
		
	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr('href'),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 400);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){

		var scroll = $(window).scrollTop();
		  if (scroll >= 100) {
			 $('#main-header').addClass('fixed');
			 $('#hero-content').css('margin-top', '87px');
		   } else if (scroll <= 100)  {
			 $('#main-header').removeClass('fixed');
			 $('#hero-content').css('margin-top', '0');
	    }


	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass('active')
	         .end().filter("[href=#"+id+"]").parent().addClass('active');
	   }                   
	});

	var $hamburger = $('.hamburger');
	$hamburger.on('click', function(e) {
		$hamburger.toggleClass('is-active');
		$('#main-nav').toggleClass('header__navigation--show');
	});
	    
});