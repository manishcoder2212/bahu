class Chain{

      constructor(p,q){
     var options={
        bodyA:p,
        bodyB:q ,
        length:0
 
     }

   this.chain=Constraint.create(options)
   World.add(world,this.chain);
 

}
      

   display() {
     
      if (this.chain.bodyA ){
         stroke (89,33,34)
         strokeWeight (30)
        
         line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x-100,this.chain.bodyB.position.y)
               
                 }
       

        
      }

      
         
      

      disconectStone(){
         this.chain.bodyA=null 
      }



   }

