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
    $('header nav li.logo a, h1 a').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});