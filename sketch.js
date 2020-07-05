var fixedRect, movingRect, gameObject1, gameObject2;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(200, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800, 400, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(50, 100, 50, 50);
  gameObject2 = createSprite(50, 500, 50, 50);

  gameObject1.velocityY = 4;
  gameObject2.velocityY = -4;

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
}

function draw() {
  background(10,10,0);

  bounceOff(movingRect, fixedRect);
  bounceOff(gameObject1, gameObject2);

  if(isTouching(gameObject1, gameObject2)){
    gameObject1.shapeColor = "yellow";
    gameObject2.shapeColor = "yellow";
  }else{
    gameObject1.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }

  drawSprites();
}