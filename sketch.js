const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world
var stage1,stage2;

function preload(){
  myImagee=loadImage("fire.png")
}


function setup() {
  createCanvas(1200,600);

engine=Engine.create()
world=engine.world



ground=new Ground(600,580,1200,30)

box=new Box(1350,40,300,100)

stone1=new Stone(1300,-40)
stone2=new Stone(1300,80)


arrow1= new Arrow(1000,300,50);

bahu=new Bahubali(1100,300)

enemy=new Enemy(200,500)
enemy1=new Enemy(220,500)
enemy2=new Enemy(240,500)
enemy3=new Enemy(330,500)
enemy4=new Enemy(260,500)
enemy5=new Enemy(350,500)
enemy6=new Enemy(280,500)
enemy7=new Enemy(380,500)
enemy8=new Enemy(300,500)
enemy9=new Enemy(400,500)
enemy10=new Enemy(420,500)
enemy11=new Enemy(70,500)
enemy12=new Enemy(90,500)
enemy13=new Enemy(130,500)
enemy14=new Enemy(110,500)
enemy15=new Enemy(150,500)
enemy16=new Enemy(10,500)
enemy17=new Enemy(170,500)
enemy18=new Enemy(180,500)
enemy19=new Enemy(0,500)
enemy20=new Enemy(40,500)
enemy21=new Enemy(50,500)

stage1=createSprite(1000,500,50,50);
stage2=createSprite(1100,500,50,50)

chain1=new Chain(stone1.body,box.body)
chain2=new Chain(stone2.body,box.body)

ground1=new Ground(0,550,30,500)



}



function draw() {
  background(255,255,255);  
Engine.update(engine)

drawSprites();

box.display();
chain1.display();
chain2.display();
stone1.display();
stone2.display();
ground.display();
enemy.display();
enemy1.display();
enemy2.display();
enemy3.display();
enemy4.display();
enemy5.display();
enemy6.display();
enemy7.display();
enemy8.display();
enemy9.display();
enemy10.display();
enemy11.display();
enemy12.display();
enemy13.display();
enemy14.display();
enemy15.display();
enemy16.display();
enemy17.display();
enemy18.display();
enemy19.display();
enemy20.display();
enemy21.display();
arrow1.display();
bahu.display();
if (mousePressedOver(stage1)){
  
    Matter.Body.setStatic(stone1.body,false) 
    Matter.Body.applyForce(stone1.body,stone1.body.position,{x:-1,y:0.5});

    Matter.Body.setStatic(stone2.body,false) 
    Matter.Body.applyForce(stone2.body,stone2.body.position,{x:-1,y:0.5});

    Matter.Body.applyForce(box.body,box.body.position,{x:-1,y:0.5});


   
}

if (mousePressedOver(stage2)){
   
    Matter.Body.setStatic(arrow1.body,false) 
    Matter.Body.applyForce(arrow1.body,arrow1.body.position,{x:-2.5,y:0.5});
    Matter.Body.setPosition(stone1.body,{x: 1300  ,   y:-40 })
     Matter.Body.setPosition(stone2.body,{x: 1300  ,   y:80 })
     Matter.Body.setPosition(box .body,{x: 1350 ,   y:40 })
}
if (arrow1.body.position.y>560) {
  image (myImagee,200,515,300,100);

}


}



 



    
     
    


   