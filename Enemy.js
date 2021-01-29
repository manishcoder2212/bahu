class Enemy{
    constructor(m,a){
       var order1 ={
           restitution:0,
        friction:10
        }
        this.box=Bodies.rectangle(m,a,30,60,order1);
        World.add(world,this.box);
       this.image=loadImage("enemy.png")
    }
    
    
    
    
    display(){
                       imageMode(CENTER)
                       fill  ("blue")  
                       strokeWeight(1)
                    image( this.image,this.box.position.x,this.box.position.y,10,40);
    }
    
    
    
    
    
    }
    