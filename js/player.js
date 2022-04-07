class Player {

constructor() {
    this.x = 70
	this.y = 180 
	this.width = 130
	this.height = 130
	this.playerImage	
}

draw() {
		
image(game.playerImage, this.x, this.y, this.width, this.height)

// this to main

if (keyIsDown(LEFT_ARROW)) {
this.x -= 8;
}

if (keyIsDown(RIGHT_ARROW)) {
this.x += 5;
}

if (keyIsDown(UP_ARROW)) {
this.y -= 5;
}

if (keyIsDown(DOWN_ARROW)) {
this.y += 5;
}
// this to main

// we draw the array of lasers

}


// shoot function : adds a laser to the laser array
shoot() {
console.log('shoot');
game.lasers.push(new Laser(game.player))   
      

}

//nested Loop // x / y if there is a collision 

 // when keyPressed, then adds a laser to the laser array   










/*  
keyPressed() {

 
if (keyCode === UP_ARROW) {
this.y -= 5;
}
  
if (keyCode === DOWN_ARROW) {
this.y += 5;
} 

if (keyIsDown === LEFT_ARROW) {
this.x -= 5;
} 

if (keyCode === RIGHT_ARROW) {
this.x += 5;
} 


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
