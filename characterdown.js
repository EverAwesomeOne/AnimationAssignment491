class CharacterDown {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./character_down.png"), 36, 25, 380, 648, 4, 0.2);

        this.x = 835;
        this.y = 0;
        this.speed = 100;
    };

    update() {
        this.y += this.speed*this.game.clockTick;
        if (this.y > 768) this.y = -300;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}