const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myworld,myengine;
var object,ball;
function setup(){
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;
  var option = {
    isStatic : true
  }

  object = Bodies.rectangle(200,380,400,20,option);
  World.add(myworld,object);

  var ball_option = {
    restitution : 0.6
  }

  ball = Bodies.circle(200,100,20,ball_option);
  World.add(myworld,ball);
}
function draw(){
  background("black");
  Engine.update(myengine);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,40,40);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);
 
}
