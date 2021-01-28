// 该模块用于将地图显示到页面上
import * as map from "./map.js";
map.content;
var divContainer = document.getElementById("game");
var pieceWidth = 45; //每一个小块的宽度
var pieceHeight = 45; //每一个小块的高度

function setDivContainer() {
    divContainer.style.width = pieceWidth * map.colNumber + "px";
    divContainer.style.height = pieceHeight * map.rowNumber + "px";
}

// 判断是否是正确位置
function isCorrect(row, col) {
    // for (let i = 0; i < map.correct.length; i++) {
    //     var point = map.correct[i];
    //     if(point.row === row && point.col === col) {
    //         return true;
    //     }

    // }
    // return false;
    // ES6的方法
    return map.correct.find(p => p.row === row && p.col === col) !== undefined;
}

function setOnePiece(row, col) {
    var value = map.content[row][col]; //取出地图相应位置的值
    var div = document.createElement("div");

    div.className = "item";
    // 调整div的位置
    div.style.left = col * pieceWidth + "px";
    div.style.top = row * pieceHeight + "px";

    // 判断是否是正确位置
    var correct = isCorrect(row,col);

    if (value === map.PLAYER) {
        div.classList.add("player");
    } else if (value === map.WALL) {
        div.classList.add("wall");
    } else if (value === map.BOX) {
        if (correct) {
            div.classList.add("correct-box");
        } else {
            div.classList.add("box");
        }
    } else {
        // 空白
        if (correct) {
            div.classList.add("correct");
        } else {
            return;
            // 只是一个普通空白
        }
    }

    divContainer.appendChild(div);
}


// 根据地图在页面上设置相应的内容
function setContent() {
    // 1.清空容器
    divContainer.innerHTML = "";
    // 2.遍历地图内容，设置元素
    for (var row = 0; row < map.rowNumber; row++) {
        for (var col = 0; col < map.colNumber; col++) {
            setOnePiece(row, col);
        }
    }
}

// 该函数用于显示地图
export default function () {
    // 1.设置div的宽高
    setDivContainer();
    // 2.显示地图中的内容
    setContent();
}