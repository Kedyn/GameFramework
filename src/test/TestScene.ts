import {GameScene} from "../framework/GameScene";
import {Game} from "../framework/Game";
import {RectangularGameObject, GameObject} from "../framework/GameObject";
import {Vector2D} from "../framework/Vector2D";
import {RectangleDrawing, TextDrawing} from "../framework/Drawing";

class TestScene extends GameScene {
    public constructor(private game: Game) {
        super("test");
        let canvas_context = game.canvas.getContext("2d");
        let bg_rect = new RectangularGameObject(new Vector2D(0,0), game.canvas.width, game.canvas.height);
        let bg = new RectangleDrawing(bg_rect, "black", true, canvas_context);
        let title = new TextDrawing(new Vector2D(game.canvas.width / 2, game.canvas.height / 2), 30, "impact", "white", "eSe Game Framework", true, true, canvas_context);
        this.objects.push(new GameObject(bg));
        this.objects.push(new GameObject(title));
    }
}

export {TestScene};