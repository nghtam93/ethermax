$(document).ready(function(){
    var wow = new WOW(
        {
          boxClass:     'wow',
          animateClass: 'animated',
          offset:       0,
          mobile:       true,
          live:         true
        }
      );
    wow.init();

    var header_sticky=$("header.header--fix")
    $(window).scroll(function(){
        $(this).scrollTop()>1?header_sticky.addClass("is-active"):header_sticky.removeClass("is-active")
    })


    //smoothscroll
    $('.js-click-smooth').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        },500);
    });

    //-------------------------------------------------
    // Menu
    //-------------------------------------------------
    $('.nav__mobile--close').click(function(e){
        $('.nav__mobile').removeClass('active')
        $('body').removeClass('modal-open')
    });
    $('.menu-mb__btn').click(function(e){
        e.preventDefault()
        $('body').addClass('modal-open')
        // $('.menu-mb__btn').addClass('active')
        $('.nav__mobile').addClass('active')
    });

    var back_to_top=$(".scrollTop"),offset=220,duration=500;$(window).scroll(function(){$(this).scrollTop()>offset?back_to_top.addClass("active"):back_to_top.removeClass("active")}),$(document).on("click",".scrollTop",function(o){return o.preventDefault(),$("html, body").animate({scrollTop:0},duration),!1});

});


