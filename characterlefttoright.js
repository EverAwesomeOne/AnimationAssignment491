class CharacterLeftToRight {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./character_right.png"), 30, 0, 380, 648, 4, 0.2);
        this.ar = new Animator(ASSET_MANAGER.getAsset("./character_right.png"), 30, 0, 380, 460, 4, 0.2);
        this.al = new Animator(ASSET_MANAGER.getAsset("./character_left.png"), 30, 0, 380, 460, 4, 0.2);
        this.x = 0;
        this.animatortype = 0;
        this.y = 275;
        this.speed = 100;
    };

    update() {
        // go right
        if (this.x === 0 || this.animatortype === 0) {
            this.x += this.speed*this.game.clockTick;
        }

        // set animator to go left
        if (this.x > 1024 / 3) {
            this.animator = this.al;
            this.animatortype = 1;
        }

        // if animator is left then go left
        if (this.animatortype === 1) {
            this.x -= this.speed*this.game.clockTick;
        }

        // set animator to go right
        if (this.x < 0) {
            this.animatortype = 0;
            this.animator = this.ar;
        }
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}