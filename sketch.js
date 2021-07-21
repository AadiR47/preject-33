const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
 function preload() {

  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
 boy = createSprite(400, 200, 50, 50);
 snow = new Snow(10,300,50,50);
}

function draw() {
  background(backgroundImg);
  engine = Engine.create();
  snow.x=random(10,799)
  snow.y=random(0,100)
  snow.display()
  drawSprites();
}

