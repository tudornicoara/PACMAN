pacman = {
	x: 6,
	y: 4
}
map = [ 
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,1,2,2,1,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2,2,1,9,1,2,1,2,1], 
    [1,2,2,1,2,2,1,2,2,1,2,2,2,1,2,2,2,2,2,2,1,2,2,1,2,1,2,1,2,1], 
    [1,1,2,1,2,2,1,2,1,1,2,2,2,1,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1], 
	[1,2,2,2,2,2,4,2,2,1,1,1,2,1,2,1,1,1,1,1,1,2,1,1,2,2,2,2,2,1], 
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1], 
	[1,2,2,2,2,2,2,2,2,1,1,2,1,1,1,1,1,1,2,1,1,2,2,1,1,1,1,1,1,1], 
	[1,2,2,2,2,9,2,2,2,1,2,2,2,2,2,2,2,9,2,2,1,2,2,2,2,2,2,2,2,1],
	[1,1,2,1,2,2,2,2,2,1,2,2,2,1,2,2,1,2,2,2,1,2,2,2,2,2,2,2,2,1], 
	[1,2,2,1,2,2,2,2,2,1,2,2,2,1,6,5,1,2,2,2,1,2,2,2,2,2,2,2,2,1], 
    [1,2,2,1,2,1,2,2,2,1,2,2,2,1,7,8,1,2,2,2,1,2,2,2,2,2,2,2,2,1],
    [1,2,2,1,2,1,2,2,2,1,2,2,2,1,1,1,1,2,2,2,1,2,2,2,2,2,2,2,2,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]
var el = document.getElementById("world");
console.log(el);
function drawWorld(){
	el.innerHTML = '';
	for(var y = 0; y < map.length ; y = y + 1) {
		for(var x = 0; x < map[y].length ; x = x + 1) {		
			if (map[y][x] === 1) {
				el.innerHTML += "<div class='wall'><img src='Sprites/wall.png'></div>";
			}
			else if (map[y][x] === 2) {
				el.innerHTML += "<div class='coin'><img src='Sprites/coin.png'></div>";
			}
			else if (map[y][x] === 3) {
				el.innerHTML += "<div class='ground'><img src='Sprites/tile.png'></div>";
			}
			else if (map[y][x] === 4) {
				el.innerHTML += "<div class='pacman'><img src='Sprites/pacman.png'></div>";
			}
			else if (map[y][x] === 5) {
				el.innerHTML += "<div class='ghost1'><img src='img/profi/ciobaca.png'></div>";
			}
			else if (map[y][x] === 6) {
				el.innerHTML += "<div class='ghost2'><img src='img/profi/ferucio.png'></div>";
			}
			else if (map[y][x] === 7) {
				el.innerHTML += "<div class='ghost3'><img src='img/profi/masalagiu.png'></div>";
			}
			else if (map[y][x] === 8) {
				el.innerHTML += "<div class='ghost4'><img src='img/profi/iacob.png'></div>";
			}
            else if (map[y][x] === 9) {
				el.innerHTML += "<div class='power-up'><img src='Sprites/fire.png'></div>";
			}
		}
		el.innerHTML += "<br>";
	}
}
drawWorld();
document.onkeydown = function(event){
	console.log(event);
	if (event.keyCode === 37){ // PACMAN MOVE LEFT
		if ( map[pacman.y][pacman.x-1] !== 1){
			map[pacman.y][pacman.x] = 3;
			pacman.x = pacman.x - 1;
			map[pacman.y][pacman.x] = 4;
			drawWorld();
		}
	}
	else if (event.keyCode === 38){ // PACMAN MOVE UP
		if ( map[pacman.y-1][pacman.x] !== 1){
			map[pacman.y][pacman.x] = 3;
			pacman.y = pacman.y - 1;
			map[pacman.y][pacman.x] = 4;
			drawWorld();
		}
	}
	else if (event.keyCode === 39){ // PACMAN MOVE RIGHT
		if ( map[pacman.y][pacman.x+1] !== 1){
			map[pacman.y][pacman.x] = 3;
			pacman.x = pacman.x + 1;
			map[pacman.y][pacman.x] = 4;
			drawWorld();
		}
	}
	else if (event.keyCode === 40){ // PACMAN MOVE DOWN
		if ( map[pacman.y+1][pacman.x] !== 1){
			map[pacman.y][pacman.x] = 3;
			pacman.y = pacman.y + 1;
			map[pacman.y][pacman.x] = 4;
			drawWorld();
		}
	}
	console.log(map)
}