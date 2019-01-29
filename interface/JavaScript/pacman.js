
document.getElementById("start").addEventListener("click", function(){
    document.getElementById("title-screen").style.display = 'none';
    document.getElementById("login").style.display = 'none';
    document.getElementById("start").style.display = 'none';
    document.getElementById("title").style.display = "none";
    document.getElementById("game").style.display = 'block';
    document.body.style.background = '#B2ADAA'
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");
	document.addEventListener("keydown",keyPush);
    setInterval(game,1000/5);
})


var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var span = document.getElementById("scor");
/////// Load images //////

 var coin = new Image();
 var tile = new Image();
 var fire = new Image();
 var pacman = new Image();
 var wall = new Image();
 coin.src = "images/coin.png";
 tile.src = "images/tile.png";
 fire.src = "images/fire.png";
 pacman.src = "images/pacman.png";
 wall.src = "images/wall.png";
var amariei = new Image();
var ciobaca = new Image();
var ferucio = new Image();
var iacob = new Image();
var masalagiu = new Image();
var patrut = new Image();
var varlan = new Image();
amariei.src = "profi/amariei.png";
ciobaca.src = "profi/ciobaca.png";
ferucio.src = "profi/ferucio.png";
iacob.src = "profi/iacob.png";
masalagiu.src = "profi/masalagiu.png";
patrut.src = "profi/patrut.png";
varlan.src = "profi/varlan.png";

/////// Load audio ///////

// var fly = new Audio();
// var scor = new Audio();
// fly.src = "sounds/fly.mp3";
// scor.src = "sounds/score.mp3";

////// Global variables /////

var teacher1 = {'number' : 0, 'tile' : 2}
var teacher2 = {'number' : 0, 'tile' : 2}
var teacher3 = {'number' : 0, 'tile' : 2}
var teacher4 = {'number' : 0, 'tile' : 2}

var xVelocity = 0;
var yVelocity = 0;
pacmanY = 7;
pacmanX = 5;
tileSize = cvs.width/30;
lines = 15;
columns = 30;
var score = 0;
var teacherArray = generate4Numbers();
var isAlive = 1;
var startGame = 0;
var boost = 0;


// -----------------


// GAME OVER MODAL

var modal = document.getElementById("modal");
// var modal = document.querySelector(".modal");
var modal_trigger = document.querySelector(".modal_trigger");
var modal_close_button = document.querySelector(".modal_close_button");

function toggleModal() {
    modal.classList.toggle("modal");
}

function gameOver() {
    toggleModal();
    window.stop();
}


var map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1],
    [1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1],
    [1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 1, 2, 1, 2, 3, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// console.log(teacherArray);

//////// Putting teachers on map ///////
function createTeachers(){
    for (var i = 0; i < 4; i++)
        if (map[10][14+i] == 0) {
            map[10][14+i] = teacherArray[i];
            switch(i){
                case 0:
                    teacher1.number = teacherArray[i];
                    break;
                case 1:
                    teacher2.number = teacherArray[i];
                    break;
                case 2:
                    teacher3.number = teacherArray[i];
                    break;
                case 3:
                    teacher4.number = teacherArray[i];
                    break;
            }
        }
}
createTeachers();

///////// Selecting random teachers ///////
function generateRandomNumber(min , max) {
        return Math.floor(Math.random() * (max-min) + min) ;
    }
function generate4Numbers(){
    array2 = []
    array = [1,2,3,4,5,6,7]
    for(var i = 0; i < 4; i++){
        n = generateRandomNumber(0 , array.length);
        array2.push(array[n] + 10)
        array.splice(n,1)
    }
    return array2;
}

// on key down

function keyPush(evt) {
    startGame = 1;
	switch(evt.keyCode) {
		case 37:
			xVelocity=-1;yVelocity=0;
			break;
		case 38:
			xVelocity=0;yVelocity=-1;
			break;
		case 39:
			xVelocity=1;yVelocity=0;
			break;
		case 40:
			xVelocity=0;yVelocity=1;
            break;
        case 80:
            startGame = 0;
            break;
	}
}

function stop(){
    xVelocity = 0;
    yVelocity = 0;
}
function drawElements(){
    for(var i = 0; i < lines; i++)
        {
            for(var j = 0; j < columns; j++)
            {
                // Drawing elements
                if (map[i][j] == 0) ctx.drawImage(tile, j*tileSize, i*tileSize, tileSize, tileSize);
                else if (map[i][j] == 1) ctx.drawImage(wall, j*tileSize, i*tileSize, tileSize, tileSize);
                else if (map[i][j] == 2) ctx.drawImage(coin, j*tileSize, i*tileSize, tileSize, tileSize);
                else if (map[i][j] == 3) ctx.drawImage(fire, j*tileSize, i*tileSize, tileSize, tileSize);
                else if (map[i][j] == 5) if (isAlive == 0) {map[i][j] = 0; ctx.drawImage(tile, j*tileSize, i*tileSize, tileSize, tileSize);} else {ctx.drawImage(pacman, j*tileSize, i*tileSize, tileSize, tileSize);}
                else if (map[i][j] == 11) {ctx.drawImage(tile, j*tileSize, i*tileSize, tileSize, tileSize); ctx.drawImage(amariei, j*tileSize, i*tileSize, tileSize, tileSize);}
                else if (map[i][j] == 12) {ctx.drawImage(tile, j*tileSize, i*tileSize, tileSize, tileSize); ctx.drawImage(ciobaca, j*tileSize, i*tileSize, tileSize, tileSize);}
                else if (map[i][j] == 13) {ctx.drawImage(tile, j*tileSize, i*tileSize, tileSize, tileSize); ctx.drawImage(ferucio, j*tileSize, i*tileSize, tileSize, tileSize);}
                else if (map[i][j] == 14) {ctx.drawImage(tile, j*tileSize, i*tileSize, tileSize, tileSize); ctx.drawImage(iacob, j*tileSize, i*tileSize, tileSize, tileSize);}
                else if (map[i][j] == 15) {ctx.drawImage(tile, j*tileSize, i*tileSize, tileSize, tileSize); ctx.drawImage(masalagiu, j*tileSize, i*tileSize, tileSize, tileSize);}
                else if (map[i][j] == 16) {ctx.drawImage(tile, j*tileSize, i*tileSize, tileSize, tileSize); ctx.drawImage(patrut, j*tileSize, i*tileSize, tileSize, tileSize);}
                else if (map[i][j] == 17) {ctx.drawImage(tile, j*tileSize, i*tileSize, tileSize, tileSize); ctx.drawImage(varlan, j*tileSize, i*tileSize, tileSize, tileSize);}
            }
            
        }
    }

function checkCollisions(){
    // Collisions
    if (xVelocity == -1 && map[pacmanY][pacmanX-1]==1) stop();
    if (xVelocity == 1 && map[pacmanY][pacmanX+1]==1) stop();
    if (yVelocity == -1 && map[pacmanY-1][pacmanX]==1) stop();
    if (yVelocity == 1 && map[pacmanY+1][pacmanX]==1) stop();
}

function movePacman(){
    if (isAlive == 1){
        pacmanX += xVelocity;
        pacmanY += yVelocity;
    }
}

function increaseScore(){
    if (map[pacmanY][pacmanX] == 2){
        score++;
        span.innerHTML = score;
   }
   if (map[pacmanY][pacmanX] == 3){
        boost = 20;
   }
}

function teacherAI(){
    /////////////// Teacher AI ///////////////////
    for(var i = 0; i < lines; i++){
        for(var j = 0; j < columns; j++){
            if (map[i][j] > 10){
                var teacher = map[i][j];
                // If is teacher
                var z = 0;
                var found = 0;
                // Search right
                while(map[i+z][j] && found == 0)
                {
                    if (map[i+z][j] == 1) break;
                    if (map[i+z][j] == 5){
                        if(map[i+1][j] == 0 || map[i+1][j] == 2 || map[i+1][j] == 3){
                            switch(teacher){
                                case teacher1.number:
                                    map[i][j] = teacher1.tile;
                                    teacher1.tile = map[i+1][j];
                                    map[i+1][j] = teacher;
                                    break;
                                case teacher2.number:
                                    map[i][j] = teacher2.tile;
                                    teacher2.tile = map[i+1][j];
                                    map[i+1][j] = teacher;
                                    break;
                                case teacher3.number:
                                    map[i][j] = teacher3.tile;
                                    teacher3.tile = map[i+1][j];
                                    map[i+1][j] = teacher;
                                    break;
                                case teacher4.number:
                                    map[i][j] = teacher4.tile;
                                    teacher4.tile = map[i+1][j];
                                    map[i+1][j] = teacher;
                                    break;
                            }
                        }
                        // Eat pacman
                        if(map[i+1][j] == 5){
                            map[i][j] == 0;
                            map[i+1][j] = teacher;
                            isAlive = 0;
                            gameOver(); 
                        }
                        found = 1;
                    }
                    z++;
                }
                z = 0;
                // Search down
                while(map[i][j+z] && found == 0)
                {
                    if (map[i][j+z] == 1) break;
                    if (map[i][j+z] == 5){
                        if (map[i][j+1] == 0 || map[i][j+1] == 2 || map[i][j+1] == 3){
                            switch(teacher){
                                case teacher1.number:
                                    map[i][j] = teacher1.tile;
                                    teacher1.tile = map[i][j+1];
                                    map[i][j+1] = teacher;
                                    break;
                                case teacher2.number:
                                    map[i][j] = teacher2.tile;
                                    teacher2.tile = map[i][j+1];
                                    map[i][j+1] = teacher;
                                    break;
                                case teacher3.number:
                                    map[i][j] = teacher3.tile;
                                    teacher3.tile = map[i][j+1];
                                    map[i][j+1] = teacher;
                                    break;
                                case teacher4.number:
                                    map[i][j] = teacher4.tile;
                                    teacher4.tile = map[i][j+1];
                                    map[i][j+1] = teacher;
                                    break;
                        }
                    }
                    // Eat pacman
                    if (map[i][j+1] == 5){
                        map[i][j] = 0;
                        map[i][j+1] = teacher;
                        isAlive = 0;
                        gameOver(); 
                    }
                    found = 1;
                    }
                    z++;
                }
                z = 0;
                // Search left
                while(map[i-z][j] && found == 0)
                {
                    if (map[i-z][j] == 1) break;
                    if (map[i-z][j] == 5){
                        if(map[i-1][j] == 0 || map[i-1][j] == 2 || map[i-1][j] == 3) {
                            switch(teacher){
                                case teacher1.number:
                                    map[i][j] = teacher1.tile;
                                    teacher1.tile = map[i-1][j];
                                    map[i-1][j] = teacher;
                                    break;
                                case teacher2.number:
                                    map[i][j] = teacher2.tile;
                                    teacher2.tile = map[i-1][j];
                                    map[i-1][j] = teacher;
                                    break;
                                case teacher3.number:
                                    map[i][j] = teacher3.tile;
                                    teacher3.tile = map[i-1][j];
                                    map[i-1][j] = teacher;
                                    break;
                                case teacher4.number:
                                    map[i][j] = teacher4.tile;
                                    teacher4.tile = map[i-1][j];
                                    map[i-1][j] = teacher;
                                    break;
                            }
                        }
                        // Eat pacman
                        if(map[i-1][j] == 5){
                            map[i][j] = 0;
                            map[i-1][j] = teacher;
                            isAlive = 0;
                            gameOver(); 
                        }
                        found = 1;
                    }
                    z++;
                }
                z = 0;
                // Search up
                while(map[i][j-z] && found == 0)
                {
                    if (map[i][j-z] == 1) break;
                    if (map[i][j-z] == 5){
                        if(map[i][j-1] == 0 || map[i][j-1] == 2 || map[i][j-1] == 3) {
                            switch(teacher){
                                case teacher1.number:
                                    map[i][j] = teacher1.tile;
                                    teacher1.tile = map[i][j-1];
                                    map[i][j-1] = teacher;
                                    break;
                                case teacher2.number:
                                    map[i][j] = teacher2.tile;
                                    teacher2.tile = map[i][j-1];
                                    map[i][j-1] = teacher;
                                    break;
                                case teacher3.number:
                                    map[i][j] = teacher3.tile;
                                    teacher3.tile = map[i][j-1];
                                    map[i][j-1] = teacher;
                                    break;
                                case teacher4.number:
                                    map[i][j] = teacher4.tile;
                                    teacher4.tile = map[i][j-1];
                                    map[i][j-1] = teacher;
                                    break;
                            }
                        }
                        // Eat pacman
                        if(map[i][j-1] == 5){
                            map[i][j] = 0;
                            map[i][j-1] = teacher;
                            isAlive = 0;
                            gameOver(); 
                        }
                        found = 1;
                    }
                    z++;
                }
                // If teacher doesn't see pacman
                if(found == 0){
                    direction = generateRandomNumber(0,4);
                    switch(direction){
                        case 0: // up
                            if(map[i][j-1] == 0 || map[i][j-1] == 2 || map[i][j-1] == 3) {
                                switch(teacher){
                                    case teacher1.number:
                                        map[i][j] = teacher1.tile;
                                        teacher1.tile = map[i][j-1];
                                        map[i][j-1] = teacher;
                                        break;
                                    case teacher2.number:
                                        map[i][j] = teacher2.tile;
                                        teacher2.tile = map[i][j-1];
                                        map[i][j-1] = teacher;
                                        break;
                                    case teacher3.number:
                                        map[i][j] = teacher3.tile;
                                        teacher3.tile = map[i][j-1];
                                        map[i][j-1] = teacher;
                                        break;
                                    case teacher4.number:
                                        map[i][j] = teacher4.tile;
                                        teacher4.tile = map[i][j-1];
                                        map[i][j-1] = teacher;
                                        break;
                                }
                            }
                            break;
                        case 1: // down
                            if (map[i][j+1] == 0 || map[i][j+1] == 2 || map[i][j+1] == 3){
                                switch(teacher){
                                    case teacher1.number:
                                        map[i][j] = teacher1.tile;
                                        teacher1.tile = map[i][j+1];
                                        map[i][j+1] = teacher;
                                        break;
                                    case teacher2.number:
                                        map[i][j] = teacher2.tile;
                                        teacher2.tile = map[i][j+1];
                                        map[i][j+1] = teacher;
                                        break;
                                    case teacher3.number:
                                        map[i][j] = teacher3.tile;
                                        teacher3.tile = map[i][j+1];
                                        map[i][j+1] = teacher;
                                        break;
                                    case teacher4.number:
                                        map[i][j] = teacher4.tile;
                                        teacher4.tile = map[i][j+1];
                                        map[i][j+1] = teacher;
                                        break;
                                }
                            }
                            break;
                        case 2: // left
                            if(map[i-1][j] == 0 || map[i-1][j] == 2 || map[i-1][j] == 3) {
                                switch(teacher){
                                    case teacher1.number:
                                        map[i][j] = teacher1.tile;
                                        teacher1.tile = map[i-1][j];
                                        map[i-1][j] = teacher;
                                        break;
                                    case teacher2.number:
                                        map[i][j] = teacher2.tile;
                                        teacher2.tile = map[i-1][j];
                                        map[i-1][j] = teacher;
                                        break;
                                    case teacher3.number:
                                        map[i][j] = teacher3.tile;
                                        teacher3.tile = map[i-1][j];
                                        map[i-1][j] = teacher;
                                        break;
                                    case teacher4.number:
                                        map[i][j] = teacher4.tile;
                                        teacher4.tile = map[i-1][j];
                                        map[i-1][j] = teacher;
                                        break;
                                }
                            }
                            break;
                        case 3: // right
                            if(map[i+1][j] == 0 || map[i+1][j] == 2 || map[i+1][j] == 3){
                                switch(teacher){
                                    case teacher1.number:
                                        map[i][j] = teacher1.tile;
                                        teacher1.tile = map[i+1][j];
                                        map[i+1][j] = teacher;
                                        break;
                                    case teacher2.number:
                                        map[i][j] = teacher2.tile;
                                        teacher2.tile = map[i+1][j];
                                        map[i+1][j] = teacher;
                                        break;
                                    case teacher3.number:
                                        map[i][j] = teacher3.tile;
                                        teacher3.tile = map[i+1][j];
                                        map[i+1][j] = teacher;
                                        break;
                                    case teacher4.number:
                                        map[i][j] = teacher4.tile;
                                        teacher4.tile = map[i+1][j];
                                        map[i+1][j] = teacher;
                                        break;
                                }
                            }
                            break;
                        default:
                            break;
                    }       
                }
            }
        }
    }
}

// Draw images
// ctx.drawImage(imageName, X, Y, Width, Height);


////////////////////////////////////////////////////////////////// GAME RUN ////////////////////////////////////////////////////////////////////////
function game() {
    if (startGame == 0) drawElements();
    if(startGame == 1){
        // Delete pacman from his old tile
        map[pacmanY][pacmanX] = 0;

        checkCollisions();

        movePacman();

        increaseScore();

        // GameOver at pacman-ghost collision
        if (map[pacmanY][pacmanX]>=11){
            gameOver();     
    }

        // New Tile for pacman
        if (isAlive == 1){
            map[pacmanY][pacmanX] = 5;
        }

        drawElements();
        
        if(boost == 0)
            teacherAI();
        else boost --;
    }
}
