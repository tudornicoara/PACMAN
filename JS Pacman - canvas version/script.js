/*eslint-env browser*/
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

window.onload=function() {
    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");
	document.addEventListener("keydown",keyPush);
	setInterval(game,1000/10);
}

// Load images

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

// Load audio

// var fly = new Audio();
// var scor = new Audio();

// fly.src = "sounds/fly.mp3";
// scor.src = "sounds/score.mp3";

// Global variables

var xv = 0;
var yv = 0;
pacmanY = 7;
pacmanX = 5;
tileSize = 40;
lines = 15;
columns = 30;


var map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0, 11, 12, 13, 14, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0, 16, 17, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 1, 2, 1, 2, 3, 2, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// on key down

//document.addEventListener("keydown",keyPush);

function keyPush(evt) {
	switch(evt.keyCode) {
		case 37:
			xv=-1;yv=0;
			break;
		case 38:
			xv=0;yv=-1;
			break;
		case 39:
			xv=1;yv=0;
			break;
		case 40:
			xv=0;yv=1;
			break;
	}
}

function stop(){
    xv = 0;
    yv = 0
}

// Draw images

// ctx.drawImage(imageName, X, Y, Width, Height);

function game() {
    // Delete pacman from his old tile
    map[pacmanY][pacmanX] = 0;

    if (xv == -1 && map[pacmanY][pacmanX-1]==1) stop();
    if (xv == 1 && map[pacmanY][pacmanX+1]==1) stop();
    if (yv == -1 && map[pacmanY-1][pacmanX]==1) stop();
    if (yv == 1 && map[pacmanY+1][pacmanX]==1) stop();

    pacmanX += xv;     // ????? Nu stiu de ce sunt inversate ?????
    pacmanY += yv;

    // New Tile for pacman
    map[pacmanY][pacmanX] = 5;

    for(var i = 0; i < lines; i++)
    {
        for(var j = 0; j < columns; j++)
        {
            if (map[i][j] == 0) ctx.drawImage(tile, j*40, i*40, tileSize, tileSize);
            else if (map[i][j] == 1) ctx.drawImage(wall, j*40, i*40, tileSize, tileSize);
            else if (map[i][j] == 2) ctx.drawImage(coin, j*40, i*40, tileSize, tileSize);
            else if (map[i][j] == 3) ctx.drawImage(fire, j*40, i*40, tileSize, tileSize);
            else if (map[i][j] == 5) ctx.drawImage(pacman, j*40, i*40, tileSize, tileSize);
            else if (map[i][j] == 11) {ctx.drawImage(tile, j*40, i*40, tileSize, tileSize); ctx.drawImage(amariei, j*40, i*40, tileSize, tileSize);}
            else if (map[i][j] == 12) {ctx.drawImage(tile, j*40, i*40, tileSize, tileSize); ctx.drawImage(ciobaca, j*40, i*40, tileSize, tileSize);}
            else if (map[i][j] == 13) {ctx.drawImage(tile, j*40, i*40, tileSize, tileSize); ctx.drawImage(ferucio, j*40, i*40, tileSize, tileSize);}
            else if (map[i][j] == 14) {ctx.drawImage(tile, j*40, i*40, tileSize, tileSize); ctx.drawImage(iacob, j*40, i*40, tileSize, tileSize);}
            else if (map[i][j] == 15) {ctx.drawImage(tile, j*40, i*40, tileSize, tileSize); ctx.drawImage(masalagiu, j*40, i*40, tileSize, tileSize);}
            else if (map[i][j] == 16) {ctx.drawImage(tile, j*40, i*40, tileSize, tileSize); ctx.drawImage(patrut, j*40, i*40, tileSize, tileSize);}
            else if (map[i][j] == 17) {ctx.drawImage(tile, j*40, i*40, tileSize, tileSize); ctx.drawImage(varlan, j*40, i*40, tileSize, tileSize);}
        }
        
    }
    
    
     
    
     //ctx.fillStyle = "#000";
     
     requestAnimationFrame(draw);
}

draw();
