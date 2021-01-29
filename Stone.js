class Stone{
    constructor(m,a){
       var order1 ={
           restitution:0,
        friction:10,
        isStatic:true

        }
        this.body=Bodies.circle(m,a,25,order1);
        World.add(world,this.body);

        this.image=loadImage("stone 1.png")
    }
    
    
    
    
    display(){
                 imageMode(CENTER)
                       fill  ("black")  
                       strokeWeight(1)
                       image(this.image,this.body.position.x,this.body.position.y,50,50);
    }

    

    }
    