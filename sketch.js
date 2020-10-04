var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(600,600);
  speed=random(55,90)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(100, 200, 100, 25);
  bullet.velocityX=speed;

  wall=createSprite(580, 200, thickness,width/2);
  wall.shapeColor=color(80,80,80);

  
}

function draw() {
  background(0,0,0);
  if (bullet.x - wall.x <= bullet.width/2 + wall.width/2
    && wall.x - bullet.x <= bullet.width/2 + wall.width/2) {
    bullet.velocityX=0;
    bulletColor();
  }
   
 console.log(wall.x);
  bullet.collide(wall);
  drawSprites();
}

function bulletColor(){
  var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
  if (damage>10){
    bullet.shapeColor="red";
  }
  
  if (damage<10) {
    bullet.shapeColor="green";
  }
}