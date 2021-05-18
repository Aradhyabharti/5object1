function preload(){
    img = loadImage("dog_cat.jpg");
}


function setup(){
    canvas = createCanvas(600,600)
    canvas.center()
}



function draw(){
    image(img,0,0,600,600)
    fill('#FF0000')
    text("DOG",45,75)
    noFill()
    rect(45,75,260,600)
}