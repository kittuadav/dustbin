var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options = {
     isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
	}
  fill("green")
    ball = Bodies.circle(200,200,30,ball_options);
	World.add(world,ball);
    
	//Engine.run(engine);
 
   ground = new Ground(width/2,685,1000,15);
   left= new Ground(600,630,10,90);
   right= new Ground(700,630,10,90);
  



}


function draw() {
  rectMode(CENTER);
  background(0);
   Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30);
  
  drawSprites();
  ground.Show();
  left.Show();
  right.Show();

  if(keyDown("DOWN_ARROW")){
    Matter.Body.applyForce(ball,ball.position,{x:20,y:-20})
  }
  

}
