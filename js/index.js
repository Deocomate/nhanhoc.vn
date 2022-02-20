$(document).ready(function () {
    $('nav>ul').addClass('transform');
    $(".close_nav i").click(function (e) { 
        $('nav>ul').addClass('transform');
        
    });
    $('.menumobile').click(function (e) { 
        $('nav>ul').removeClass('transform');
    });
    $('nav>ul>li').click(function (e) { 
        $('.child_list').removeClass('child_list_show');
        $(this).find('.child_list').toggleClass('child_list_show');
        
    });
    $('nav>ul>li>div>div').click(function (e) { 
        $(this).toggleClass('slideDown');
        var valueS = $(this).attr('class');
        
        if (valueS == "slideDown") {
            $('nav>ul>li>div>div').removeClass('slideDown');
            $('.child_list').slideUp();
            $(this).addClass('slideDown');
            $(this).parent().next().slideDown();
        }   else    {
            

            $(this).parent().next().slideUp();
        }

    });
    $(window).scroll(function () { 
        var scroll = ($('html,body').scrollTop());
        if (scroll>144) {
            $('nav').addClass('fixed-menu');
            $('.header_search').addClass('mb-50');
            $('.menumobile img').addClass('visible');
            $('nav form').addClass('visible');
        }
        else{
            $('nav').removeClass('fixed-menu');
            $('.header_search').removeClass('mb-50');
            $('.menumobile img').removeClass('visible');
            $('nav form').removeClass('visible');
        }

    });
    
    $('.carousel-indicators img').click(function (e) { 
        $('.carousel-indicators img').attr('src', '../img/slide2.png');
        $(this).attr('src', '../img/slide1.png');
    });
    
    console.log($('.carousel-indicators img.active'));
    
    
});