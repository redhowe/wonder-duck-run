namespace SpriteKind {
    export const Decor = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
    sprite.setFlag(SpriteFlag.AutoDestroy, true)
    if (Math.percentChance(50)) {
        sprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . b b . . . 
            . . . . . . . b b b b f c b . . 
            . . . . . . b f c c c c f b . . 
            . . . . . b f f c c c c c c b . 
            . . . . b f f f f c c c c c c b 
            . b b b b b f f b b c c c c c b 
            b f f b c c b b f f b c c c b b 
            1 1 f b b b c b f 1 1 f f f b b 
            1 1 f b b b b b f 1 1 c c c c b 
            . b f f c b c f f b c c c c c b 
            . b c c f f f f c b b c c c b . 
            b c f f c c c c f f c b b b . . 
            b f f f b c b f f f b c b f b . 
            b f f f f b f f f f b c b f b . 
            . b b b b b b b b b . . b b b . 
            `)
    } else {
        sprite.setImage(img`
            .............fffff..............
            ...........fffffff..............
            ..........fffffff...............
            ..........fffffff...............
            .....fffffffffffff.........fff..
            ...fffffffffb11ffffff....ff11f..
            ..fffffffff1111ffffffff.ff11f...
            cfffffffffffffffffffffffff1bf...
            cfffff11111ffffffffffffff1bf....
            cfff11111111ffffffffffffbbff....
            .cf111111111ffffffffffffffff....
            ..ccb1111111ffffffff111ffbbff...
            ...ccbbb1111fffff1111ff..f1bf...
            ....ccccb11fffffff1ff.....f11f..
            ........cccccffffff........fff..
            .............ccfff..............
            `)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . 8 8 6 9 9 6 8 8 . . . . 
        . . . 8 9 9 9 6 6 6 6 6 8 . . . 
        . . 8 9 9 9 9 6 6 6 1 1 6 8 . . 
        . 8 9 9 9 9 9 6 6 6 1 1 9 8 . . 
        . 8 9 9 9 9 6 6 6 6 6 9 9 6 8 . 
        . 8 9 9 9 6 6 6 6 6 6 6 9 6 8 . 
        . 8 6 9 9 6 6 6 6 6 6 6 6 6 8 . 
        . 8 6 9 9 6 6 6 6 6 6 6 6 6 8 . 
        . . 8 6 9 9 6 6 6 6 6 6 6 8 . . 
        . . 8 6 6 9 6 6 6 6 6 6 6 8 . . 
        . . . 8 6 6 6 6 6 6 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.powerUp.play()
    sprite.startEffect(effects.halo)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.powerDown.play()
    scene.cameraShake(5, 500)
})
let EnemySprite: Sprite = null
let projectile: Sprite = null
let Decoration: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f 8 . . . . 
    . . . . . f f 7 7 7 7 7 f . . . 
    . . . . f f 7 6 f 7 7 6 4 c . . 
    . 8 8 f f 7 7 7 6 f 6 6 5 4 4 f 
    . 8 6 7 f 7 7 6 f 6 5 5 5 5 8 . 
    . . f 7 7 f 7 7 7 5 5 5 5 8 . . 
    . . f 6 7 7 f 7 7 7 7 7 7 f . . 
    . f e f 7 7 7 6 7 7 7 7 7 7 f . 
    f e e c 6 7 7 8 7 7 7 7 7 7 f . 
    c e e e c c 8 7 7 7 7 7 7 7 f . 
    c f e e e e e 7 7 7 7 7 7 7 8 . 
    . c e e e e e e 7 7 7 7 7 6 8 . 
    . . c f e e e e e 7 7 7 8 8 . . 
    . . . c c c c c c c c f 8 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666c66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666cc666666c6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666ccc66666c666666666666c666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666ccccc6666cc6666666666ccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666ccccccc666cc6666666666ccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666c6cccc666ccc666666666ccccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666ccccc666cccc66666666cccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666ccccccc666cc6666666666cccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666cccc6cc66ccc6666666cccccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666cccccc666ccc666666666cccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666cc6ccccc66cccc6666666ccccc6cc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666cccccccccccc666666ccccccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666ccccccccccccccccccc66cccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666c6666666666ccccccccccccccccccccc66cccccc6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666c666666666666666666
    666666666666ccc66666666666ccccccccccccccccccccccc66666666666666666666666666666666666666666666666666666666666666666666666666666666666666c6666cc666666666666666666
    666666666666cc6666666666cccccccccccccccccccccccccc6666666666666666666666666666666666c66666666666666666666666666666666666666666666666666cc666cc666666666666666666
    66666666666ccc666666666cccccccccccccccccccccccccccc666666666666666666666666666666666cc6666666666666666666666666666666666666666666666666cc66ccc666666666666666666
    6666666666ccccc666666ccccccccccccccccccccccccccccccc66666666666666666666666666666666cc66666666666666666666666666666666666666666666c666cccc6ccccc6666666666666666
    66666666666ccc66666cccccccccccccccccccccccccccccccccc666666666666666666666666666666cccc666666666666666666666666666666666666666666ccc66cccc66cc666666666666666666
    666666666666ccc666cccccccccccccccccccccccccccccccccccc66666666666666666666666666666cccc6666c6666666666666666666666666666666666666ccc666cc66cccccc666666666666666
    6666666666cccc66ccccccccccccccccccccccccccccccccccccccc666666666666666666666cc666666cc66666c666666666666666666666666666666666666cccc6ccccccccc666666666c66666666
    66666666666ccccccccccccccccccccccccccccccccccccccccccccc6666666666666666666ccc6666cccccc666cc6666666666666666666666666666666666666ccc6cccc666cc66666666c66666666
    666666666666ccccccccccccccccccccccccccccccccccccccccccccc66666666666666666cccc66666cccc6666cc666666666666666666666666666666666666ccc66ccccc66c66666666cccc666666
    666666666666cccccccccccccccccccccccccccccccccccccccccccccc666666666666666666ccc6666ccccc66ccc6666666666666c66666666666666666666ccccccccccccc6c666666666c66666666
    66666666666ccccccccccccccccccccccccccccccccccccccccccccccc6666666666666666cccccc6cccccccc6cccc66666666666cc666666666666666666666ccccccccccccccccc6666cccc6666666
    6666666666ccccccccccccccccccccccccccccccccccccccccccccccccc66666666666666cccccc6cccccccccc6cc666666666666ccc6666666666666c66666ccccc66ccccccccccccc666ccc6666666
    66666666cccccccccccccccccccccccccccccccccccccccccccccccccccc666666666666666cccccc66cccc6666ccc6666666666ccccc666666666666c6666cccccccccccccccccccccc66ccccc66666
    6666666cccccccccccccccccccccccccccccccccccccccccccccccccccccc6666666666666cccccc66cccccc66ccc6666666666ccccccc66666666666cc66666cccccccccccccccccccccccccc666666
    666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666666666ccccccccccccccccccccccc6666666c6cccc666666666666cc6666cccccccccccccccccccccccccc6666666
    66666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6666666666666ccccccccccccccccccccccc66666ccccc66666666666ccc6666cccccccccccccccccccccccccc6666666
    666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666666666cccccccccccccccccccccccccc66ccccccc66666666666c6666cccccccccccccccccccccccccccc666666
    66ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666666cccccccccccccccccccccccccccccc6cccc6c6666666666cccc66cccccccccccccccccccccccccccccc6666
    6cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666ccccccccccccccccccccccccccccccccccccc666666666666cc66ccccccccccccccccccccccccccccccccc66
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc666ccccccccccccccccccccccccccccccccccccccc666666666ccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6666666666cccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6666666666ccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6666666ccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6666cccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
for (let index = 0; index <= 10; index++) {
    Decoration = sprites.create(img`
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        .........888....
        .......88668....
        ......86688.....
        .....8768.......
        ....8778........
        ....8778........
        ...8778.........
        ...8578.........
        ...8558.........
        ...8758......88.
        ...87678....878.
        ...87678...878..
        ....87678.8768..
        ....876768678...
        .....87668778...
        ......8668766...
        .......8687678..
        ........8667678.
        ........8685756.
        ....88..86665756
        ...868..86685656
        ..8668..86687678
        .8668..868687678
        .868..8688667678
        8768.88886876778
        8768.8888877678.
        876688888676778.
        87676888668778..
        .876776868668...
        .87766778868....
        ..877667688.....
        ...86767788.....
        `, SpriteKind.Decor)
    Decoration.setPosition(16 * index, 96)
}
game.onUpdateInterval(500, function () {
    EnemySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . b b . . . 
        . . . . . . . b b b b f c b . . 
        . . . . . . b f c c c c f b . . 
        . . . . . b f f c c c c c c b . 
        . . . . b f f f f c c c c c c b 
        . b b b b b f f b b c c c c c b 
        b f f b c c b b f f b c c c b b 
        1 1 f b b b c b f 1 1 f f f b b 
        1 1 f b b b b b f 1 1 c c c c b 
        . b f f c b c f f b c c c c c b 
        . b c c f f f f c b b c c c b . 
        b c f f c c c c f f c b b b . . 
        b f f f b c b f f f b c b f b . 
        b f f f f b f f f f b c b f b . 
        . b b b b b b b b b . . b b b . 
        `, SpriteKind.Enemy)
    EnemySprite.setPosition(randint(0, 160), randint(0, 120))
})
