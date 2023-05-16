export class ImageCreator {
    private readonly image: HTMLImageElement;

    constructor(src: string) {
        this.image = new Image();
        this.image.src = src;
    }

    public getImage(): HTMLImageElement {
        return this.image;
    }
}