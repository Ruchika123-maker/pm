
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone, boy, boyimg, ground, tree, treeimg, sling;
var mango1, mango2, mango3, mango4, mango4, mango5, mango6, mango7, mango8, mango9, mango10;

function preload()
{
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(2000, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone = new Stone(200,450,45);
	ground = new Ground(100,680,3800,20);
	
	mango1=new Mango(1100,240,34);
	mango2=new Mango(1355,275,35);
	mango3=new Mango(1170,210,35);
	mango4=new Mango(1230,150,35);
	mango5=new Mango(1210,270,36);
	mango6=new Mango(1280,200,35);
	mango7=new Mango(1325,120,33);
	mango8=new Mango(1380,210,35);
	mango9=new Mango(1440,270,35);
	mango10=new Mango(1480,205,35);

	sling = new Chain(stone.body,{x:200,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

    tree=createSprite(1300,365);
	tree.addImage(treeimg);
	tree.scale=0.5;

	boy=createSprite(300,550);
	boy.addImage(boyimg);
	boy.scale=0.2;
  
  drawSprites();

  stone.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  sling.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	  
	 //console.log(distance)
	//console.log(lmango.r+lstone.r)
	if(distance<=lmango.radius+lstone.radius)
	  {
		//console.log(distance);
		  Matter.Body.setStatic(lmango.body,false);
	  }
  
	}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:465});
		attach.Launch(stone.body);
	}
}

