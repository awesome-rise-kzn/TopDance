$(document).ready(function(){
	$('.nav-toggle').click(function(e){
	  	$(this).toggleClass('open');
	  	$('.container').toggleClass('nav-open');
	});
});
$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
 
    // Most important owl features
    items : 3,
    itemsCustom : false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
 
    //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
 
    //Autoplay
    autoPlay : true,
    stopOnHover : true,
 
    navigation : true,
    navigationText: ["",""],
 
    pagination : false,
 
    // CSS Styles
    baseClass : "owl-carousel",
    theme : "owl-theme",
 
    //Lazy load
    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",
 
    //Auto height
    autoHeight : false,
 
    
 
})
 
});

// portfolio
$(function() {
    var selectedClass = "";
    $(".portfolio-filter ul li a").click(function(){
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio .col-md-3").not("."+selectedClass).fadeOut();
        setTimeout(function() {
            $("."+selectedClass).fadeIn();
            $("#portfolio").fadeTo(600, 1);
        }, 300);
    });

    $(".portfolio-filter ul li").click(function(){
         $(this).addClass('active')
                .siblings()
                .removeClass('active');
    })
})