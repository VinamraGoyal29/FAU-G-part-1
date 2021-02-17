
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var commando, terrorist;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	commando = new Commando(windowWidth/2, windowHeight-20, 20,20);
	terrorist = new Terrorist(windowWidth/2, windowHeight-250, 20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  Engine.update(engine);
  commando.display();
  terrorist.display(); 
  terrorist.bomb();
}



