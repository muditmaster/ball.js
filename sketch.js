
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var wall;
var wall2;

function preload()
{
	
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground_options = {
		isStatic: true
	}
	
	var wall_options = {
		isStatic: true 
    }

	var wall2_options = {
		isStatic: true 
	}

	var ball_options = {
		restitution: 0.3,
		friction:0,
		density:1.2
	  }

	  ground = Bodies.rectangle(450,390,900,20,ground_options);
  	  World.add(world,ground);

	  ball = Bodies.circle(100,10,20,ball_options);
	  World.add(world,ball);

	  wall = Bodies.rectangle(600,320,20,120,wall_options);
  	  World.add(world,wall);

      wall2 = Bodies.rectangle(800,320,20,120,wall2_options);
      World.add(world,wall2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)

  rect(ground.position.x,ground.position.y,900,20);
  ellipse(ball.position.x,ball.position.y,30,30);
  rect(wall.position.x,wall.position.y,20,120);
  rect(wall2.position.x,wall2.position.y,20,120);
  
  drawSprites();
}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x: 70,y: -70})

	}

}






