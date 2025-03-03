new TypeIt("#chjhll", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("CHJ && HLL")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("和你在一起")
    .pause(3000)
    .go();

new TypeIt('#talkToHLL', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();