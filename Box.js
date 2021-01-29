class Box{
constructor(m,a,n,i){
   var order1 ={
       restitution:0,
    friction:10,
  
    }
    
    
    this.body=Bodies.rectangle(m,a,n,i,order1);
    this.width=n
    this.height=i
    World.add(world,this.body);
    this.image=loadImage("cloth.jpg")
}




display(){
                    imageMode(CENTER)
                   fill  ("brown")  
                   image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
}





}
