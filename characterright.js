class CharacterRight {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./character_right.png"), 30, 0, 380, 648, 4, 0.2);

        this.x = 1024 / 3;
        this.y = 0;
        this.speed = 100;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if (this.x > 1024 / 3) this.x = -220;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}