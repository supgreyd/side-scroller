import './assets/styles/style.css'
import { Game } from "./modules/game";

window.addEventListener("load", () => {
    const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const game = new Game(canvas.width, canvas.height);

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        game.update();
        game.draw(ctx);

        requestAnimationFrame(animate)
    }

    animate();

})