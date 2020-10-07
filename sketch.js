
var car
var wall
var speed  
var weight


function setup() {
  createCanvas(1600,400);
  speed  = Math.round(random(55,90));
  weight = Math.round(random(400,1500)) ;
  car = createSprite(100, 200, 80, 80);
  car.velocityX = speed;
  wall = createSprite(1570,200,80,400);
}

function draw() {
  background("black");  
  
if(wall.x - car.x < (car.width+wall.width)/2){

car.velocityX = 0
 var deformation = Math.round((0.5 * weight * speed * speed)/22500)
 console.log(deformation);
if(deformation > 180){
 car.shapeColor = color(255,0,0)
 console.log("car is red" );
}
if( deformation > 80 && deformation <180 ){
 car.shapeColor = color(230, 230, 0)
 console.log("car is yellow");
}
if(deformation < 80){
  car.shapeColor = color(0, 255, 0)
  console.log("car is green");
}
}
drawSprites();
}