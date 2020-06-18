$(document).ready(function(){

    $('#nav').onePageNav();

    //fixed menu

    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
         $(".header-area").removeClass("scroll-header");
        }else{
         $(".header-area").addClass("scroll-header");
        }
   });



    $('.portfolio-menu ul li').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    var $grid = $('.portfolio-item-gallery').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    })

    
    $('.filter-button-group').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });


    //testimonial-area
    $('.testimonial-active').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
     // autoplay:true,
     // autoplayTimeout: 3000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:2
          }
      }
  })





  //client-logo-area

  $('.client-logo-carusol').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
   // autoplay:true,
   // autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

    	var audio = document.getElementById("audio-player");
    	audio.volume = 0.2;
	
	if($(window).length) {
		$('.music').css({'visibility':'visible'});
		$('body').addClass("audio-on");
		if ($('body').hasClass('audio-off')) {
        	$('body').removeClass('audio-on');
		} 
		$(".music").on('click', function() {
			$('body').toggleClass("audio-on audio-off");         
			if ($('body').hasClass('audio-off')) {
				audio.pause();
			} 
			if ($('body').hasClass('audio-on')) {
				audio.play();
			}
		});
	}
 
  

});
 