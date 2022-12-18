class Character {
    constructor() {

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./character.png"),0,0);
    };
}