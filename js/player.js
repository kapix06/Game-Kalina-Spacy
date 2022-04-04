class Player {

constructor() {
    this.x = 70
	this.y = 180 
	this.width = 150
	this.height = 150
	this.playerImage	
}

draw() {
		
	image(game.playerImage, this.x, this.y, this.width, this.height)
}

    
keyPressed() {

 
if (keyCode === UP_ARROW) {
this.y -= 50;
}
  
if (keyCode === DOWN_ARROW) {
this.y += 50;
} 

if (keyCode === LEFT_ARROW) {
this.x -= 50;
} 

if (keyCode === RIGHT_ARROW) {
this.x += 50;
} 

/*
   if (keyIsDown(37)) {
   this.x-= 50()
   }
    
   if (keyIsDown(39)) {
   this.flyRight()
   }
    
   if (keyIsDown(38)) {
   this.flyDown()
   }
    
   if (keyIsDown(40)) {
   this.flyUp()
   }
    
    */
}

}