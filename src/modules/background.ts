import { ImageCreator } from "../helpers";

const LAYER_WIDTH = 1920;

interface ILayer {
    update(speed: number): void;
    draw(ctx: CanvasRenderingContext2D): void;
}

export interface ILevelBackground {
    backgroundLayers: ReadonlyArray<ILayer>;
    update(speed: number): void;
    draw(ctx: CanvasRenderingContext2D): void;
}

class Layer implements ILayer{
    private x = 0;
    private y= 0;
    public width = window.innerWidth > LAYER_WIDTH ? window.innerWidth : LAYER_WIDTH;
    public height = window.innerHeight;
    constructor(
        public image: HTMLImageElement,
        public speedModifier: number,
    ) {
        this.speedModifier = speedModifier;
        this.image = image;
    }

    update(speed: number): void {
        if (this.x < -this.width) this.x = 0;
        else this.x -= speed * this.speedModifier;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

class LevelBackground implements ILevelBackground{
    constructor(
        public backgroundLayers: readonly ILayer[],
    ) {
        this.backgroundLayers = backgroundLayers;
    }

    update(speed: number): void {
        this.backgroundLayers.forEach(layer => layer.update(speed))
    }

    draw (ctx: CanvasRenderingContext2D): void {
        this.backgroundLayers.forEach(layer => layer.draw(ctx))
    }

}

export class LevelOneBackground extends LevelBackground{
    constructor() {
        const layers = [
            new Layer(new ImageCreator("src/assets/parallax/level1/1.png").getImage(),0),
            new Layer(new ImageCreator("src/assets/parallax/level1/2.png").getImage(), 0.2),
            new Layer(new ImageCreator("src/assets/parallax/level1/3.png").getImage(), 0.3),
            new Layer(new ImageCreator("src/assets/parallax/level1/4.png").getImage(), 0.5),
            new Layer(new ImageCreator("src/assets/parallax/level1/5.png").getImage(), 0.7),
            new Layer(new ImageCreator("src/assets/parallax/level1/6.png").getImage(), 0.8),
            new Layer(new ImageCreator("src/assets/parallax/level1/7.png").getImage(), 1),
        ]
        super(layers);
    }
}