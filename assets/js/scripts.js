$(document).ready(function(){

    // menu spy scroll
    $('.menu ul li a').click(function(){  
        $('html,body').animate({    
            scrollTop:$($(this).attr('href')).offset().top  
        },1000);
        return false;
    });

    //menu click slide
    $('.logo a .fa-bars,.fa-bars').click(function(){
        $('.menu ul ').slideToggle(500);
        $('.fa-bars').toggleClass('b-click');
        return false;
    })

    // search bar desngi
	$('.my-search').click(function(){
		$(this).toggleClass('click');
		$('.top-search-bar').slideToggle("show");

        return false;
	})
    // scroll spy-
    $('body').scrollspy({ target: '#spy-nav' })

	// team caorusel
	$('.team-carousel').owlCarousel({
        items:4,
    	loop:true,
    	nav:false,
    	dots:true,
    	margin:30,
        autoplay:1000,
    	responsiveClass:true,
    	responsive:{
            0:{
                items:1,
            },
            576:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                itmes:4,
            }

        }
	});

	// testimonial carousel
	$('.testimonial-carousel').owlCarousel({
        items:1,
    	loop:true,
    	nav:true,
    	dots:false,
	})	

	// blog carousel
	$('.blog-carousel').owlCarousel({
        items:1,
    	loop:true,
    	nav:false,
    	dots:false,
    	autoplay:1500
	})


    // back-top
    $('.back-top').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
        return false;
    })
})

$(window).scroll(function() {
    var scrollvalue = $(this).scrollTop();

    if(scrollvalue>120){
        $('header').addClass('sticky');
    }
    else{
        $('header').removeClass('sticky');
    }

   if(scrollvalue>250){
        $('.back-top').fadeIn();
    }else{
        $('.back-top').fadeOut();
    }
})