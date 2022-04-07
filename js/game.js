class Game {
constructor() {

this.background = new Background()   
this.player = new Player()
this.laser = new Laser(this.player)
this.backgroundImages = []
this.playerImage 
this.asteroidImage
this.laserImage
this.zombieImage 
this.deathStar
this.asteroids = []
this.lasers = []
this.score = 0;
this.lives = 10;
this.winGif


this.counterDisplay = document.querySelector('.counter-display');
}


draw() {
clear()

this.background.draw()
this.player.draw()

// Asteroids flying by
if (frameCount % 80 === 0) {
    this.asteroids.push(new Asteroid(this.asteroidImage))   
}

this.asteroids.forEach(function (asteroid) {
    asteroid.draw()
})


//  Lasers flying -- draw the display of a laser

this.lasers.forEach(function (laser) {
    laser.draw();
}
)

// Asteroids collision with lasers = nested arrays

for ( let i=0; i < this.lasers.length; i++ ) {
for (let j=0; j < this.asteroids.length; j++) {
if (dist(this.lasers[i].x , this.lasers[i].y , this.asteroids[j].x , this.asteroids[j].y ) < 45 ) {
        this.asteroids.splice(j, 1);
        this.score ++;

        document.querySelector('.counter-display').innerHTML = this.score;  
   
 // increment score  
    } 
}
}

// Game Won - if score > 10

if (this.score > 15 ) {

fill(0);
rect(280,0,800,600);
fill(227, 101, 91);
textSize(50);
textAlign(CENTER);
text("You Win",700, 200);
textSize(12);
textAlign(CENTER); 
}

// Game lost :  Player touches asteroids => GAME OVER

for (let j=0; j < this.asteroids.length; j++) {
if (dist(this.player.x , this.player.y , this.asteroids[j].x , this.asteroids[j].y ) < 30 ) {
this.asteroids.splice(j, 1);
image(game.zombieImage.src, 650, 120, 90, 130);
this.lives -- ; 
document.querySelector('.lives-display').innerHTML = this.lives; 

}
}
}



preload() {
this.backgroundImages = [

{ src : loadImage('../img/images.backG/Purple Nebula 7 - 512x512.png'), x: 0, speed: 1},
{ src : loadImage('../img/images.backG/Parallax60.png'), x: 0, speed: 2},
{ src : loadImage('../img/images.backG/Starfield 3 - 512x512.png'), x: 0, speed: 4},

]  

this.zombieImage = { src : loadImage('../img/images.backG/zombie-space.png'), x: 0, y: 0, speed: 2},
this.deathStar = { src : loadImage ('../img/images.backG/Daco_4681675.png'), x: 0, y: 0, width: 0, length: 0, speed: 1},


this.laserImage = { src : loadImage ('../img/image.laser/image-229014.png'), speed: 3}

this.playerImage = loadImage('../img/image.player/vaisseauspatial.png')  


this.asteroidImage = { src : loadImage ('../img/images.obst/asteroid-meteor-orangered-transp-space-stock-514777.png')}

this.winGif = loadImage('../img/images.obst/giphycat.gif')
}

}

