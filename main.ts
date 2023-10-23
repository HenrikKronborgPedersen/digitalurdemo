let sekund = 0
let timer: Sprite = null
let time = 0
let minutter: Sprite = null
let minut = 0
let sekunder: Sprite = null
function skrivTid () {
    sekund = sekund + 1
    timer.sayText(time)
    minutter.sayText(minut)
    sekunder.sayText(sekund)
}
function init () {
    time = 0
    minut = 0
    sekund = 0
    sekunder = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 1 . . 1 1 1 1 . . 1 1 1 . . 
        1 . . 1 . 1 . . . . 1 . . . 1 . 
        1 . . 1 . 1 . . . . 1 . . . . . 
        . 1 1 . . 1 1 1 . . 1 . . . . . 
        . . . 1 . 1 . . . . 1 . . . . . 
        1 . . 1 . 1 . . . . 1 . . . 1 . 
        . 1 1 . . 1 1 1 1 . . 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    minutter = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 . . . 1 . 1 1 1 . 1 . . . 1 . 
        1 1 . 1 1 . . 1 . . 1 1 . . 1 . 
        1 . 1 . 1 . . 1 . . 1 . 1 . 1 . 
        1 . . . 1 . . 1 . . 1 . 1 . 1 . 
        1 . . . 1 . . 1 . . 1 . 1 . 1 . 
        1 . . . 1 . . 1 . . 1 . . 1 1 . 
        1 . . . 1 . 1 1 1 . 1 . . . 1 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    timer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 . . . 1 . 1 1 1 . . . 1 1 . . 
        1 . . . 1 . 1 . . 1 . 1 . . 1 . 
        1 . . . 1 . 1 . . 1 . 1 . . . . 
        1 1 1 1 1 . 1 1 1 . . . 1 1 . . 
        1 . . . 1 . 1 1 . . . . . . 1 . 
        1 . . . 1 . 1 . 1 . . 1 . . 1 . 
        1 . . . 1 . 1 . . 1 . . 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    timer.setPosition(36, 56)
    minutter.setPosition(76, 56)
    sekunder.setPosition(118, 56)
}
forever(function () {
    init()
    while (time < 24) {
        while (minut < 60) {
            while (sekund < 60) {
                skrivTid()
                pause(1000)
            }
            minut = minut + 1
            sekund = 0
        }
        time = time + 1
        minut = 0
    }
    time = 0
})
