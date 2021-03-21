const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ball;

function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;

var options = {isStatic:true}

ground = Bodies.rectangle(200, 390, 400, 10, options);
World.add(world, ground);

var ball_options = {restitution:1} 
ball = Bodies.circle(200, 200, 20);
World.add(world, ball);

}

function draw() {
  background(255,255,255);  
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x, ground.position.y, 400, 10); 
ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 20, 20);
}
