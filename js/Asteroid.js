class Asteroid {

constructor(image) {
this.asteroidImage
this.x = 1350
this.y = (Math.random() * 400) / 2.5
this.width = 70
this.height = 80
this.speed = 4
}


draw() {
    
this.x -= this.speed
image(game.asteroidImage.src, this.x, this.y, this.width, this.height) 

}

}
