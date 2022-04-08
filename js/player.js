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
}
