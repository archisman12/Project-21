var canvas;
var block;
var block1,block2,block3,block4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    block1=createSprite(700,580,190,24)
    block1.shapeColor=("green")

    block2=createSprite(500,580,190,24)
    block2.shapeColor=("red")

    block3=createSprite(300,580,190,24)
    block3.shapeColor=("orange")

    block4=createSprite(100,580,190,24)
    block4.shapeColor=("blue")

    //create box sprite and give velocity
    box=createSprite(random(20,750),0,20,20)
    box.shapeColor=("white");
    box.velocityX=4;
    box.velocityY=2;

   
      
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  //  text(mouseX+','+mouseY,40,100)
    if(box.x>800){
        box.velocityX=-5;
        box.velocityY=3;

    }
    if(box.y<0){
        box.velocityX=-4;
        box.velocityY=2;

    }
    if(box.x<0){
        box.velocityX=4;
        box.velocityY=2;

    }
    if(isTouching(box,block1)&&box.bounceOff(block1)){
      box.shapeColor = "green";
      box.velocityX=0
      box.velocityY=0
      box.shapeColor=rgb(255,128,0)
      music.stop();

     
    }
     
      
      if(isTouching(box,block2)&&box.bounceOff(block2)){
        box.shapeColor = "red";
        music.play();
        
      }
      if(isTouching(box,block3)&&box.bounceOff(block3)){
        box.shapeColor = "orange";
        music.play();
        
      }
      if(isTouching(box,block4)&&box.bounceOff(block4)){
        box.shapeColor = "blue";
        music.play();
      }
      else {
        block1.shapeColor = "green";
        block2.shapecolor="red"
        block3.shapecolor="orange"
        block4.shapecolor="blue"
      }
       
      

    
    
    


drawSprites();
    }
    //add condition to check if box touching surface and make it box
  
    


    
    
