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

this.counterDisplay = document.querySelector('.counter-display');
}


draw() {
clear()

this.background.draw()
this.player.draw()
//this.laser.draw()

// Asteroids flying by
if (frameCount % 90 === 0) {
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


// is Player  touches asteroids // player dies and loose a life



/*this.asteroids = this.asteroids.filter(asteroid => {
    if (asteroid.collision(lasers[i]) || asteroid.x < 0) {
        return false
    } else {
        return true
    }
})*/


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

}

}

