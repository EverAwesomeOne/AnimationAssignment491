class CharacterUpAndDown {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./character_up.png"), 18, 0, 380, 648, 4, 0.2);
        this.au = new Animator(ASSET_MANAGER.getAsset("./character_up.png"), 18, 0, 380, 648, 4, 0.2);
        this.ad = new Animator(ASSET_MANAGER.getAsset("./character_down.png"), 16, 25, 380, 648, 4, 0.2);

        this.x = 650;
        this.y = 520;
        this.animatortype = 0;
        this.speed = 100;
    };

    update() {
        // go up
        if (this.animatortype === 0) {
            this.y -= this.speed*this.game.clockTick;
        }

        // set animator to go down
        if (this.y < -30) {
            this.animator = this.ad;
            this.animatortype = 1;
        }

        // if animator is 1 then go down
        if (this.animatortype === 1) {
            this.y += this.speed*this.game.clockTick;
        }

        // set animator to go up
        if (this.y > 510) {
            this.animatortype = 0;
            this.animator = this.au;
        }
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}