class CharacterUp {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./character_up.png"), 36, 0, 380, 648, 4, 0.2);

        this.x = 600;
        this.y = 768;
        this.speed = 100;
    };

    update() {
        this.y -= this.speed*this.game.clockTick;
        if (this.y < -300) this.y = 768;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}