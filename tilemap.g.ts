// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`100010000102020306020203020302060202020408110a0a0a0a0a0a0a0a0a0a0a0a1005080515151515151515151515151512050805151515151515151515151515120714051315151515151515151515151205080515151515151515151515151512050805151515151515151515151515120508051515151515151515151515151205140515151515151515151515151512050805151515151515151515151513120508051515151515151515151515151207080515151515151515151515151512050805151513151515151515151515120514051515151515151313151515131205080e0303030303030303030303030f05090b0c0a0b0b0a0a0c0b0a0b0c0b0b0d`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.greenOuterWest2,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
