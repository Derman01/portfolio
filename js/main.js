$(document).ready(function () {   

    $(".header__burger, .header__link").click(function (e) {
        if (isMobile()){
            $(".header").toggleClass('active');
            $('body').toggleClass('lock');
        }
    })

    $('.header__link').click(smoothScrolling);    

    $(window).on('scroll', scrollMenu);

    $('img').click(popupOpen);

});

function popupOpen(){
    $('body').addClass('lock');
    var src = $(this).attr('src');
    $('body').append(
        "<div class='popup'>" +
        "<div class='container'>" +
            '<div class="popup__body">' +
                '<img class="popup__img" src="'+ src +'" alt="">' +
            '</div>'+
        '</div>' +
    '</div>');

    $('.popup').fadeIn(500);
    $('.popup').click(()=>{
        $('.popup').fadeOut(500);
        setTimeout(()=>{
            $('.popup').remove();
            $('body').removeClass('lock');
        }, 500);
    });
}

function isMobile(){
    return $(window).width() <= 700;
}

function smoothScrolling(){
    if (!isMobile()){
        const header_height = $('.header').height();
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top - header_height
        }, {
            duration: 370,   // по умолчанию «400» 
            easing: "linear" // по умолчанию «swing» 
        });
        return false;
    }
}

function scrollMenu(){
    var windowTop = $(window).scrollTop();
    var headerHeight = $('.header').height();

    for (const section of $('section')) {
        var sectionTop = $(section).offset().top;
        if (sectionTop - headerHeight <= windowTop + 1 )
            changeCurrentLink($(section));
    }
    
}

function changeCurrentLink(section){
    var id = $(section).attr('id');
    var currentLink = $('.header__link[href="#'+id+'"]');
    if ($(currentLink) !== $('.header__link.activ')){
        $('.header__link.activ').removeClass('activ');
        $(currentLink).addClass('activ');
    }
}
