
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect1=createSprite(300,400,50,80);
  fixedRect1.shapeColor="green";
  fixedRect2=createSprite(400,300,80,50);
  fixedRect2.shapeColor="red";
  fixedRect3=createSprite(200,100,50,70);
  fixedRect3.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "blue";
    fixedRect1.shapeColor = "blue";

  }
  
  else if(isTouching(movingRect,fixedRect2)){

    movingRect.shapeColor="red";
    fixedRect2.shapeColor="red";
  }

  else if(isTouching(movingRect,fixedRect3)){

    movingRect.shapeColor="blue";
    fixedRect3.shapeColor="blue";
  }
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green";
    fixedRect1.shapeColor="green";
fixedRect2.shapeColor="red";
fixedRect3.shapeColor="blue";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




