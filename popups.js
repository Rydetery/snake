var btn1 = document.getElementById('play');
let check = false;
// Play
function example(check) {
    if(check === true) { 
    document.getElementById("menu").style.display = "none";
    pauseButton = "play";}
    else {
    document.getElementById("menu").style.display = "block";
    }
}
// Pause
function pauseSet(pauseButton) {
    if(pauseButton == "pause") {
    document.getElementById("pause").style.display = "block";
    document.getElementById("pauseText").style.color = playGroundColor;
    document.getElementById("pauseContent").style.backgroundColor = topFrameColor;
}
    else (document.getElementById("pause").style.display = "none");
}

// Game Speed
let i=0;
function changeSpeed(){
    i++;
    if(i > 3)
    i=1;
    switch (i) {
    case 1: 
    gameSpeed = 0.75;
    speed.innerHTML = "0.75";
    break;
    case 2:
        gameSpeed = 1.25;
        speed.innerHTML = "1.25";
        break;  
    case 3:
        gameSpeed = 1;
        speed.innerHTML = "1";
        break;
    default: 
}
}

//GAME OVER  
function toMenu() {       //RESTART
    location.reload();  
}

//OPTIONS

function showOptions(popup){
    switch (popup) {
        case 0:
            document.getElementById("menu").style.display = "none";
            break;
        case 1:
            document.getElementById("gameOver").style.display = "none";    
            break;
        case 3:
            pauseButton = "pause";
            break;
    }
    document.getElementById("options").style.display = "block";
    if(popup == 2){
    document.getElementById("options").style.display = "none";
    document.getElementById("menu").style.display = "block";
    }
}

// DEFAULT
document.getElementById("field").style.backgroundColor = "#b1b1b1";
document.getElementById("fieldPlay").style.backgroundColor = "#454545";
document.getElementById("fieldHeader").style.backgroundColor = "#939393";
document.getElementById("fieldSnakeHead").style.backgroundColor = "#6cce36";
document.getElementById("fieldSnakeTail").style.backgroundColor = "#6cce36";
document.getElementById("fieldFood").style.backgroundColor = "#d71818";
// DEMO
document.getElementById("demoField").style.backgroundColor = "#b1b1b1";
document.getElementById("demoPlay").style.backgroundColor = "#454545";
document.getElementById("demoHeader").style.backgroundColor = "#939393";
document.getElementById("demoTail").style.backgroundColor = "#6cce36";
document.getElementById("demoHead").style.backgroundColor = "#6cce36";
document.getElementById("demoFood").style.backgroundColor = "#d71818";

// OPTIONS DEMO COLORS
var confirmSnakeColor = 0;
var confirmFoodColor = 0;
var confirmBackColor = 0;
function changeBackGround(backColor) {
    switch (backColor) {
        case 0:
            document.getElementById("demoField").style.backgroundColor = "#b1b1b1";
            document.getElementById("demoPlay").style.backgroundColor = "#454545";
            document.getElementById("demoHeader").style.backgroundColor = "#939393";
            confirmBackColor  = 0;
            break;
        case 1:
            document.getElementById("demoField").style.backgroundColor = "#6d6d97";
            document.getElementById("demoPlay").style.backgroundColor = "#373860";
            document.getElementById("demoHeader").style.backgroundColor = "#595a90";
            backColor = 1;
            break;
        case 2: 
            document.getElementById("demoField").style.backgroundColor = "#af75db";
            document.getElementById("demoPlay").style.backgroundColor = "#432b56";
            document.getElementById("demoHeader").style.backgroundColor = "#7f53a1";
            confirmBackColor  = 2;
            break;
        case 3: 
            document.getElementById("demoField").style.backgroundColor = "#dbda74";
            document.getElementById("demoPlay").style.backgroundColor = "#5f5e32";
            document.getElementById("demoHeader").style.backgroundColor = "#b7b65d";
            confirmBackColor  = 3;
            break;
        case 4: 
            document.getElementById("demoField").style.backgroundColor = "#64c684"; 
            document.getElementById("demoPlay").style.backgroundColor = "#173220";
            document.getElementById("demoHeader").style.backgroundColor = "#3f8958";
            confirmBackColor  = 4;
            break;
        default:
            break;
    }
}

function changeSnakeColor (snakeColor) {
    switch (snakeColor) {
        case 0:
            document.getElementById("demoHead").style.backgroundColor = "#6cce36";  //#49e40d
            document.getElementById("demoTail").style.backgroundColor = "#6cce36";
            confirmSnakeColor = 0;
            break;
        case 1:
            document.getElementById("demoHead").style.backgroundColor = "#357c9a";  //#5196b3
            document.getElementById("demoTail").style.backgroundColor = "#357c9a";
            confirmSnakeColor = 1;
            break;
         case 2:
            document.getElementById("demoHead").style.backgroundColor = "#8f51b3";  //#b87cdb
            document.getElementById("demoTail").style.backgroundColor = "#8f51b3";
            confirmSnakeColor = 2;
            break;   
        case 3:
            document.getElementById("demoHead").style.backgroundColor = "#ddd43a";  //#e9de19
            document.getElementById("demoTail").style.backgroundColor = "#ddd43a";
            confirmSnakeColor = 3;
            break;  
        case 4:
            document.getElementById("demoHead").style.backgroundColor = "#ae1212";  //#cc2323
            document.getElementById("demoTail").style.backgroundColor = "#ae1212";
            sconfirmSnakeColor = 4;
            break;       
        default:
            break;
    }
}

function changeFoodColor (foodColor) {
    switch (foodColor) {
        case 0:
            document.getElementById("demoFood").style.backgroundColor = "#d71818";
            confirmFoodColor = 0;
            break;
        case 1:
            document.getElementById("demoFood").style.backgroundColor = "#6480d0";
            confirmFoodColor = 1;
            break;
         case 2:
            document.getElementById("demoFood").style.backgroundColor = "#3b0f54";
            confirmFoodColor = 2;
            break;   
        case 3:
            document.getElementById("demoFood").style.backgroundColor = "#d7ba18";
            confirmFoodColor = 3;
            break;  
        case 4:
            document.getElementById("demoFood").style.backgroundColor = "#49d718";
            confirmFoodColor = 4;
            break;       
        default:
            break;
    }
}

//SETTINGS PLAY
function applySetColors() {
    switch (confirmBackColor ) {
        case 0:
            playGroundColor = "#454545";
            playFrameColor = "#b1b1b1";
            topFrameColor = "#939393";
            break;
        case 1:
            playGroundColor = "#373860";
            playFrameColor = "#6d6d97";
            topFrameColor = "#595a90";
            break;
        case 2:
            playGroundColor = "#432b56";
            playFrameColor = "#af75db";
            topFrameColor = "#7f53a1";
            break;
        case 3:
            playGroundColor = "#5f5e32";
            playFrameColor = "#dbda74";
            topFrameColor = "#b7b65d";
            break;
        case 4:
            playGroundColor = "#173220";
            playFrameColor = "#64c684";
            topFrameColor = "#3f8958";
            break;        
        default:
            break;
    };
    switch (confirmSnakeColor) {
        case 0:
            snakeHeadColor = "#49e40d";
            snakeTailColor = "#6cce36";
            break;
        case 1:
            snakeHeadColor = "#5196b3";
            snakeTailColor = "#357c9a";
            break;
        case 2:
            snakeHeadColor = "#b87cdb";
            snakeTailColor = "#8f51b3";
            break;
        case 3:
            snakeHeadColor = "#e9de19";
            snakeTailColor = "#ddd43a";
            break;
        case 4:
            snakeHeadColor = "#cc2323";
            snakeTailColor = "#ae1212";
            break;        
        default:
            break;
    };
    switch (confirmFoodColor) {
        case 0:
            foodGColor = "#d71818";
            break;
        case 1:
            foodGColor = "#6480d0";
            break;
        case 2:
            foodGColor = "#3b0f54";
            break;
        case 3:
            foodGColor = "#d7ba18";
            break;
        case 4:
            foodGColor = "#49d718";
            break;        
        default:
            break;
    };

    document.getElementById("options").style.display = "none";
    pauseButton = "play";
}