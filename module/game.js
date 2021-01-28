import {playerMove,isWin} from "./play.js";
import showUI from "./ui.js";
// 完成整个游戏
showUI()
var over = false;
window.onkeydown = function (e) {

    if(over) {
        return ;
    }
    var result = false;
    if(e.key === "ArrowUp") {
        result = playerMove("up");
    }else if(e.key === "ArrowDown") {
        result = playerMove("down");
    }
    else if(e.key === "ArrowRight") {
        result = playerMove("right");
    }
    else if(e.key === "ArrowLeft") {
        result = playerMove("left");
    }

    if(result) {
        showUI();
        if(isWin()) {
            over = true;
            alert("游戏胜利！")
            
        }
    }
}

