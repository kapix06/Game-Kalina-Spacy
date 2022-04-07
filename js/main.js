const game = new Game()
const player = new Player()

function setup() {
createCanvas(windowWidth, 400);

}

function preload() {
game.preload();
}

function draw() {
game.draw();
}

function keyPressed() {
    if ( keyCode === 32 ) {
        player.shoot()    
        }   
}





