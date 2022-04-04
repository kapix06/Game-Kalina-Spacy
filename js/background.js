class Background {



draw(){

 if (true) {
image(game.zombieImage.src, 150 , 200, 150, 200)   
}
console.log(game.zombieImage.src)

game.backgroundImages.forEach(function(img) {
img.x -= img.speed
image(img.src, img.x, 0, width, height)
image(img.src, img.x + width, 0, width, height)

 if (img.x <= - width) {
    img.x = 0
}
} ) 


/*
game.backgroundIm.forEach(function(img) {
    
img.x -= img.speed
img.y = (Math.random() * 500) / 2.5
image(img.image, img.x, img.y, img.width, img.height)

}) */

}
}