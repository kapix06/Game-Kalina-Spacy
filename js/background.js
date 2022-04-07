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

game.zombieImage.x -= game.zombieImage.speed
image(game.zombieImage.src, game.zombieImage.x + width, game.zombieImage.y, 60, 90)   

if (game.zombieImage.x <= - width -100) {
    game.zombieImage.y = random(-50, 50)
    game.zombieImage.x = random(width, 1500)
    
}




}
}