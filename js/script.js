$(document).ready(function(){

    // якорные ссылки
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    // кнопка Вибрати розділ
    $('.header-section .header-menu-btn button').on('click', function() {
        $('.container .header-section .header-links').slideToggle();
    });
});