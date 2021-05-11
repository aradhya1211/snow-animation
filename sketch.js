const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snowing;
var ground;
var backgroundImg;
 var snowing = [];
 var t;
function preload() {
backgroundImg = loadImage("snow1.jpg");
}

function setup() {
 var canvas = createCanvas(800,600);
 engine = Engine.create();
 world = engine.world;
 Engine.run(engine);

 ground = new Ground();

}

function draw() {
  background(backgroundImg);
 
  if(frameCount % 50 === 0 ){
    snowing.push(new SNOW(random(width/2,width+20),10,10))
  }
  for ( t = 0;t < height; t++){
    snowing[t].display();

  }



   ground.display();

  drawSprites();
}
