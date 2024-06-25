$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scrool script
        if(this.scrolly > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scrool-up button show/hide script
        if(this.scrolly > 500){
            $('.scrolly-up-btn').addClass("show");
        }else{
        $('.scrolly-up-btn').addClass("show");
    }
});

      // slide-up script
      $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up-button click
        $('html').css("scrollBehavior", "auto");
      });

      $('.navbar .menu li a'). click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
      });

      // toggle menu/navbar script
      $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
      });

      // typing text animation script
      var typed = new typed(".typing", {
        Strings: ["YouTuber", "Developer", "Designer", "Ffeelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
      var typed  = new typed(".typing-2",{
        Strings: ["YouTuber", "Developer", "Blogger", "Designen", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });

      // owl carousel script
      $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});