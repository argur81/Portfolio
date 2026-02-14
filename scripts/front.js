$(document).ready(function(){
    const items = $('.skill p');
    const total = items.length;
    let lastIndex = -1;
    function activateRandom() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * total);
        } while (randomIndex === lastIndex && total > 1);

        lastIndex = randomIndex;
        items.removeClass('on');
        items.eq(randomIndex).addClass('on');
    }
    activateRandom();
    setInterval(activateRandom, 1000);
    //Thumbnail
    $('.grid .cell .thumb .swiper-slide').each(function(){
        var imgSRC = $(this).find('img').attr('src');
        $(this).css('background-image','url('+imgSRC+')');
    });
    var swiper = new Swiper(".grid .cell .thumb", {
    pagination: {
        el: ".swiper-pagination",
        },
    });
    function mobileClassFunction(){
        if($(window).width() < 780) {
            $('header').addClass('mobile');
        }else{
            $('header').removeClass('mobile');
        }
    }
    mobileClassFunction();
    $(window).resize(function(){
        mobileClassFunction()
    });
    $(window).on('scroll', function() {
        // 현재 스크롤 위치를 변수에 저장
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 0) {
            $('header.mobile').addClass('move');
            $('aside.bottom_nav').addClass('move');
        } else {
            $('header.mobile').removeClass('move');
            $('aside.bottom_nav').removeClass('move');
        }
    });
    $('aside.bottom_nav a.up').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});