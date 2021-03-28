const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
  S=new shark(300,400,130,80)
  F1=new fish(900,300)
  F2=new fish(850,300)
  F3=new fish(800,300)
  F4=new fish(950,300)
  F5=new fish(990,300)
  F6=new fish(850,260)
  F7=new fish(950,260)
  F8=new fish(900,260)
  F9=new fish(900,290)
  C = new chain(S.body,{x:330, y:100});
  G = new ground(900,310,500,10)
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
 S.display();
 F1.display();
 F2.display();
 F3.display();
 F4.display();
 F5.display();
 F6.display();
 F7.display();
 F8.display();
 F9.display();
 C.display();
 G.display();
 drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(S.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    C.Fly();
}

function keyPressed(){
    if (keyCode===32){
C.attach(S.body)

    }

}