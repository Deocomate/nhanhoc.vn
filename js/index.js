$(document).ready(function () {
    $(".menumobile").click(function (e) { 
        $("nav ul li").slideToggle();
        
    });
    $("nav>ul>li span").click(function (e) { 
        $(this).next().next().slideToggle();
        
    });
});