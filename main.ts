info.onScore(1000, function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    music.play(music.stringPlayable("C5 B C5 B B A B C5 ", 120), music.PlaybackMode.UntilDone)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`keutel`, mySprite, 0, -100)
    music.play(music.createSoundEffect(
    WaveShape.Square,
    200,
    1,
    255,
    0,
    100,
    SoundExpressionEffect.None,
    InterpolationCurve.Curve
    ), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(sprite, effects.halo, 500)
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite, effects.hearts, 500)
    sprites.destroy(sprite)
    info.changeScoreBy(1)
})
let myenemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`me`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundImage(assets.image`vloer`)
music.setVolume(21)
music.play(music.createSong(assets.song`music`), music.PlaybackMode.LoopingInBackground)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(500, function () {
    myenemy = sprites.create(assets.image`evil`, SpriteKind.Enemy)
    myenemy.follow(mySprite, 40)
    myenemy.setPosition(randint(scene.screenWidth(), 0), 0)
})
