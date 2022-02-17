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
});