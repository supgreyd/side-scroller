import { LevelOneBackground } from "./background";

import type { ILevelBackground } from "./background";

export class Game {
    protected speed = 1;

    constructor(
        protected width: number,
        protected height: number,
    ) {
        this.width = width;
        this.height = height;
        this.background = new LevelOneBackground();
    }

    private background: ILevelBackground;

    public update() {
        this.background.update(this.speed);
    }

    public draw(ctx: CanvasRenderingContext2D) {
        this.background.draw(ctx);
    }

}