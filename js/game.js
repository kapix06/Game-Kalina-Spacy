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
this.looseImage
this.spaceCat


this.counterDisplay = document.querySelector('.counter-display');
}


draw() {
clear()

this.background.draw()
this.player.draw()

// Asteroids flying by
if (frameCount % 60 === 0) {
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
    console.log(this.lasers[i].x, this.asteroids[j].x);
    //setTimeout(() => {this.lasers.splice(i, 1)}, 500)
    //this.lasers.splice(i, 1);    
    this.asteroids.splice(j, 1);
        
        
        this.score ++;

        document.querySelector('.counter-display').innerHTML = this.score;  
   
 // increment score  
    } 
}
}

this.lasers = this.lasers.filter(laser => {
    if (laser.x > 1200) {
        return false
    } else {
        return true}
})

console.log(this.lasers);

// Game Won - if score > 10

if (this.score >= 10 ) {

image(this.spaceCat, 450, 0 , 400, 400)  ;

fill(227, 101, 91);
textSize(50);
textAlign(CENTER);
text("You Win",200, 200);
text("You deserve this",1100, 100);;
text(" SpaceCat picture !!! ",1100, 200);;
textSize(12);
textAlign(CENTER); 
}

// Game lost :  Player touches asteroids => GAME OVER

for (let j=0; j < this.asteroids.length; j++) {
if (dist(this.player.x , this.player.y , this.asteroids[j].x , this.asteroids[j].y ) < 30 ) {
this.asteroids.splice(j, 1);
//image(game.zombieImage.src, 650, 120, 90, 130);
this.lives -- ; 
document.querySelector('.lives-display').innerHTML = this.lives; 

}
}
if (this.lives <= 0) {
image(this.looseImage, 450, 0 , 400, 400)   



fill(75, 0, 130);
textSize(60);
textAlign(CENTER);
text("YOU LOST ",650, 300);
textSize(16);
textAlign(CENTER); 


    }
}




preload() {
this.backgroundImages = [

{ src : loadImage('img/images.backG/Purple Nebula 7 - 512x512.png'), x: 0, speed: 1},
{ src : loadImage('img/images.backG/Parallax60.png'), x: 0, speed: 2},
{ src : loadImage('img/images.backG/Starfield 3 - 512x512.png'), x: 0, speed: 4},

]  

this.zombieImage = { src : loadImage('img/images.backG/zombie-space.png'), x: 0, y: 0, speed: 2},
this.deathStar = { src : loadImage ('img/images.backG/Daco_4681675.png'), x: 0, y: 0, width: 0, length: 0, speed: 1},


this.laserImage = { src : loadImage ('img/image.laser/image-229014.png'), speed: 3}

this.playerImage = loadImage('img/image.player/vaisseauspatial.png')  


this.asteroidImage = { src : loadImage ('img/images.obst/asteroid-meteor-orangered-transp-space-stock-514777.png')}

this.looseImage = loadImage('img/images.obst/youwerethechosenone.jpg')

this.spaceCat = loadImage('img/images.obst/spacecat.jpg')

}

}

