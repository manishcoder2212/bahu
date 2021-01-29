class Ground{

    constructor (t,a,n,g){
var order1={
    isStatic:true
}
        this.ground=Bodies.rectangle(t,a,n,g,order1);
World.add(world,this.ground)
this.width=n
this.height=g
    }



display(){
rectMode(CENTER)
fill  ("brown")     
rect(this.ground.position.x,this.ground.position.y,this.width,this.height)
}





}
