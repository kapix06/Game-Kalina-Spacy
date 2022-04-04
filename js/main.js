const game = new Game()
const player = new Player()

function setup() {
createCanvas(1300, 500);
}

function preload() {
game.preload();
}

function draw() {
game.draw();
}

function keyPressed() {
game.player.keyPressed();  
}

