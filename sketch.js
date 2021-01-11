var car,wall;

function setup() {
  createCanvas(1600,400);
  car = createSprite(90, 200, 50, 50);
  wall = createSprite(1500,200,60,100);
  car.velocityx = 10;
}

function draw() {
  background("black"); 
  car.shapeColor("green");
  wall.shapeColor("blue") 
  if(car.isToching(wall)){
    car.shapeColor("red");
  }
  drawSprites();
}