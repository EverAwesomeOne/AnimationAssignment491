class CharacterLeft {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./character_left.png"), 30, 0, 380, 460, 4, 0.2);

        this.x = 1028 / 4;
        this.y = 1028-485;
        this.speed = 100;
    };

    update() {
        this.x -= this.speed*this.game.clockTick;
        if (this.x < -270) this.x = 1028 / 4;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}