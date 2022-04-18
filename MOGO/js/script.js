$(function(){
    "use strick"
// count_up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

// slick_slider
    $('.slick_slid').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prev_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nex_arr"></i>',
        responsive:[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

        ]
    });


    // hamburger 
    $(document).ready(function(){
        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
            $(this).toggleClass('open');
        });
    });


    
    // Menu fix 
    let offnav = $('.menu').offset().top

  $(window).scroll(function(){
    let scroling= $(this).scrollTop();

    if(scroling > offnav){
      $(".menu").addClass("menu_fiex");
    }

    else{
      $(".menu").removeClass("menu_fiex");

    }

  })  


// back to top button
$('.bc_top').click(function(){
  $('html, body').animate({
    scrollTop:0,
  },2000)
});

$(window).scroll(function(){
  let scrollthis = $(this).scrollTop();

  if(scrollthis > 600){
    $('.bc_top').fadeIn();
  }

  else{
    $('.bc_top').fadeOut();
  }
})


    
              

});