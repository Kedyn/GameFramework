import { SimpleGame } from "./framework/Game";
import { SimpleSceneManager } from "./framework/SceneManager";
//import your scene

window.onload = function () {
    SimpleGame.create();
    //SimpleSceneManager.pushScene(); add your scene
    SimpleGame.init();
}