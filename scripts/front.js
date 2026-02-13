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
});