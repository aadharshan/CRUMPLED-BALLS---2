  
class Dustbin{
    constructor(){
        this.body1 = Bodies.rectangle(width/2, 670, 200, 20 , {isStatic:true} );
 	    World.add(world, this.body1);

        this.body2 = Bodies.rectangle(width/2-100, 630, 20, 200 , {isStatic:true} );
 	    World.add(world, this.body2);

        this.body3 = Bodies.rectangle(width/2+100, 630, 20, 200 , {isStatic:true} );
         World.add(world, this.body3);

         this.image = loadImage("dustbingreen.png");
         


    }

    display(){
        fill("red");
        noStroke();
        rectMode(CENTER);
       // rect(this.body1.position.x,this.body1.position.y,200,20);
       // rect(this.body2.position.x,this.body2.position.y,20,200);
      //  rect(this.body3.position.x,this.body3.position.y,20,200);
        image(this.image,this.body1.position.x-100,500,200,200)


}
}