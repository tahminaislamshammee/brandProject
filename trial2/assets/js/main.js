$(document).ready(function(){

    $("p.themes-btn").on('click',function(){
        $(".themes .colors").toggleClass("active");
    })

    $('.theme-colors li').click (function(){
        $('body').css('background',$(this).css('color'));
    });
    
    $('.logo-colors li').click(function(){
        var theme= $(this).css('background-color');
        $('#leafs div').css('background', theme);
        $('h1 h3').css('color', theme);
    });
});