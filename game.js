 canv = document.getElementById("snakeCanvas"),
 ctx = canv.getContext("2d");
canv.width = 960;
canv.height = 608;

// ADD ICONS
var settings = new Image();
settings.src = "/source/Settings.png";
//ADD COLOR SETTINGS
var playGroundColor = "#454545";
var playFrameColor = "#b1b1b1";
var topFrameColor = "#939393";
var snakeHeadColor = "#49e40d";
var snakeTailColor = "#6cce36";
var foodGColor = "#d71818";

//FIELD SETTINGS BEGIN
var gameSpeed = 1;
let box = 32;
let score = 0;
let food = {
    x: Math.floor((Math.random() * 28 + 1)) * box,
    y: Math.floor((Math.random() * 16 + 2)) * box
}
let snake = [];
snake[0] = {
    x: 15 * box,
    y: 10 * box
}
//FIELD SETTINGS END

// MOVE CONROLS BEGIN
let pauseButton = "pause";
let dir;
document.addEventListener("keydown", direction);
function direction(event) {                      // Pause settings
    if (event.keyCode == 32){
        if(pauseButton != "pause"){
        pauseButton = "pause";
        } 
        else {
            pauseButton = "play";
        }
        pauseSet(pauseButton);
    };
    if((event.keyCode == 37 && dir !="right" && dirConf !="right") || (event.keyCode == 65 && dir !="right" && dirConf !="right"))
    dir = "left";
    else if((event.keyCode == 38 && dir !="down" && dirConf !="down") || (event.keyCode == 87 && dir !="down" && dirConf !="down"))
    dir = "up";
    else if((event.keyCode == 39 && dir !="left" && dirConf !="left") || (event.keyCode == 68 && dir !="left" && dirConf !="left"))
    dir = "right";
    else if((event.keyCode == 40 && dir !="up" && dirConf !="up") || (event.keyCode == 83 && dir !="up" && dirConf !="up"))
    dir = "down";
};
var dirConf;
setInterval (function dirCheck() {
   dirConf = dir;
}, 50)
// MOVE CONTROLS END

function eatTail(head, arr) {                          //SNAKE TAIL SETTINGS (GAME OVER)
    for(let i = 0; i < arr.length; i++){
        if(head.x == arr[i].x && head.y == arr[i].y){
        clearInterval(game);
        document.getElementById("gameOver").style.display = "block";
        gameScore.innerHTML = score;
        }
    };

}

// GAME DRAW
function drawGame() {
    if(pauseButton != "pause"){     //Check pause game
    ctx.fillStyle = playFrameColor;                                //TOP OF FIELD
    ctx.fillRect(0, 0, canv.width, canv.height);
    ctx.fillStyle = topFrameColor;                            //BOX OF FIELD
    ctx.fillRect(0, 0, canv.width, box); 
    ctx.fillStyle = playGroundColor;                               //PLAY FIELD
    ctx.fillRect(box, box*2, box*28, box*16);

    //draw icons
    ctx.drawImage(settings, 28*box, 0);
    //end draw icons

    ctx.fillStyle = "white";                               //SCORE
    ctx.font = "20pt Poppins";
    ctx.fillText("Score: " + Math.floor(score*gameSpeed*10), box/2.5, box/1.3);


        ctx.fillStyle = foodGColor;                            //FOOD DRAW
        ctx.fillRect(food.x, food.y, box, box);

    for(let i=0; i<snake.length; i++){                      //SNAKE DRAW
        if(i>0){
        ctx.fillStyle = snakeTailColor;}
        else {ctx.fillStyle = snakeHeadColor;};
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    // FOOD EATING
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if(snakeX == food.x && snakeY == food.y){
        score++;
        food = {
            x: Math.floor((Math.random() * 28 + 1)) * box,
            y: Math.floor((Math.random() * 16 + 2)) * box
        };
    }  else {
        snake.pop();
       }
     //END OF FOOD EATING

     //GAME OVER
       if(snakeX<box || snakeX>28*box || snakeY<2*box || snakeY>17*box) {
          clearInterval(game);
          document.getElementById("gameOver").style.display = "block";
          gameScore.innerHTML = Math.floor(score*gameSpeed*10);
       }

    // MOVE SET

    if(dirConf == "left") snakeX -= box;
    if(dirConf == "right") snakeX += box;
    if(dirConf == "up") snakeY -= box;
    if(dirConf == "down") snakeY += box;

    let newHeadSnake = {
        x: snakeX,
        y: snakeY
    };
    // END OF MOVE SET

    eatTail(newHeadSnake, snake);
    snake.unshift(newHeadSnake);
}
}

let game = setInterval(drawGame, 1000/(13*gameSpeed));