function HeaderSticky(){
    var scroll = $(window).scrollTop();

    if(scroll >= $('.navbar').height()){
        $('.navbar').addClass('fixed-top');
    }else{
        $('.navbar').removeClass('fixed-top');
    }
}
function bannerSlider(){
    $('#banner-slider').owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        animateOut: 'fadeOut'
    })
}
function responsiveSubmenu(){
    $('.sub-menu').hide();
    $('.nav-link i').on('click', function(){
        $(this).parent().next('.sub-menu').slideToggle();
    })
}


$(document).ready(function(){
    //HeaderSticky();
    bannerSlider();
    responsiveSubmenu();


})
$(window).scroll(function(){
    //HeaderSticky();
})