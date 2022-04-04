class Game {
constructor() {

this.background = new Background()   
this.player = new Player()
this.obstacle = []
this.backgroundImages = []
this.playerImage 
this.zombieImage 
this.deathStar
}


draw() {
clear()

this.background.draw()
this.player.draw()

}


preload() {
this.backgroundImages = [

{ src : loadImage('../img/images.backG/Purple Nebula 7 - 512x512.png'), x: 0, speed: 1},
{ src : loadImage('../img/images.backG/Parallax60.png'), x: 0, speed: 2},
{ src : loadImage('../img/images.backG/Starfield 3 - 512x512.png'), x: 0, speed: 4},

]  

this.zombieImage = { src : loadImage('../img/images.backG/zombie-space.png'), x: 0, speed: 2},
this.deathStar = { src : loadImage ('../img/images.backG/Daco_4681675.png'), x: 0, speed: 1}


this.playerImage = loadImage('../img/image.player/vaisseauspatial.png')  

}


}
