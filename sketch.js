const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas, backgroundImage;

var npc,npc1;
var engine, world;
var bg2;
var ground
var ball




function setup(){
  canvas = createCanvas(displayWidth , displayHeight);

  engine = Engine.create();
  world = engine.world;
  
  npc=new NPC(100,100,20,20);
  npc1=new PC(50,200,20,20);
   ground = new Ground(600,height,1500,500);
   ball=new Ball(200,600,10,20)
   
  bg2 = loadImage("images/bg2.jpg")
  

 

  
}


function draw(){
  background (bg2);
  Engine.update(engine);
  
  npc.display();
 
  ground.display();
  ground.velocityX=2
  
  
  npc1.display();
  ball.display();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-10});
	}





  

}
