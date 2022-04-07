class Laser {

constructor(player) {
//this.player = player;
this.laserImage
this.x = (player.x + player.width / 2) + 40
this.y = player.y + 55
this.width = 20
this.height = 20
this.speed = 3

}

draw() {
    
    this.x += this.speed
    image(game.laserImage.src, this.x, this.y, this.width, this.height) 
    }

}


