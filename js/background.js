class Background {



draw(){


game.backgroundImages.forEach(function(img) {
img.x -= img.speed
image(img.src, img.x, 0, width, height)
image(img.src, img.x + width, 0, width, height)

 if (img.x <= - width) {
    img.x = 0
}
} ) 


game.deathStar.y -= game.deathStar.speed
image(game.deathStar.src, game.deathStar.x, game.deathStar.y + height, 200, 200) 
 
if (game.deathStar.y <= - height - 200) {
    game.deathStar.x = random(1200)
    game.deathStar.y = random(height, 800)
}


/*
this.dir = p5.Vector.random2D() ;
image(game.zombieImage.src, game.zombieImage.this.dir.mult(random(200)),
 game.zombieImage.this.dir.mult(random(200)), 60, 90)   

*/

/*game.zombieImage.x -= game.zombieImage.speed
image(game.zombieImage.src, game.zombieImage.x + width, game.zombieImage.y, 60, 90)   

if (game.zombieImage.x <= - width -100) {
    game.zombieImage.y = (Math.random() * 800) / 2.5
    game.zombieImage.x = (Math.random() * 1400) / 2.5
    
}*/




}
}
