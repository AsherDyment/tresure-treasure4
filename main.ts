function call_blocks () {
    tiles.setWallAt(tiles.getTileLocation(27, 0), false)
    tiles.setWallAt(tiles.getTileLocation(27, 2), false)
    tiles.setWallAt(tiles.getTileLocation(26, 1), false)
    tiles.setWallAt(tiles.getTileLocation(28, 1), false)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (location.col == 14 && location. row == 13) {
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnTile(explorer, tiles.getTileLocation(14, 0))
    } else if (location.col == 0 && location. row == 3) {
        tiles.setTilemap(tilemap`level5`)
        tiles.placeOnTile(explorer, tiles.getTileLocation(0, 0))
    } else if (location.col == 0 && location. row == 15) {
        tiles.setTilemap(tilemap`level4`)
        tiles.placeOnTile(explorer, tiles.getTileLocation(0, 0))
    } else if (location.col == 2 && location. row == 9) {
        tiles.setTilemap(tilemap`level3`)
        tiles.placeOnTile(explorer, tiles.getTileLocation(0, 0))
    } else if (location.col == 15 && location. row == 15) {
        tiles.setTilemap(tilemap`level7`)
        tiles.placeOnTile(explorer, tiles.getTileLocation(1, 31))
    } else if (location.col == 31 && location. row == 31) {
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let SCARYBAT: Sprite = null
let explorer: Sprite = null
info.setLife(10)
scene.setBackgroundColor(4)
tiles.setTilemap(tilemap`level1`)
explorer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(explorer, 100, 100)
scene.cameraFollowSprite(explorer)
tiles.placeOnTile(explorer, tiles.getTileLocation(27, 1))
explorer.say("Hi, you can move with arrow keys and there are many levels so enjoy.", 10000)
pause(10000)
call_blocks()
game.onUpdateInterval(100, function () {
    SCARYBAT = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(SCARYBAT, sprites.builtin.forestTiles20)
    SCARYBAT.vx = -50
    SCARYBAT.setFlag(SpriteFlag.DestroyOnWall, true)
})
