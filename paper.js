class Paper{
    constructor(x,y){
        var option = {
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
       this.body = Bodies.circle(x,y,35,option);
       World.add(world,this.body);
       this.image = loadImage("paper ball.png");
       
    }

    display(){
        var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate (angle);
        imageMode(CENTER);
        image(this.image,0,0,100,100);
       pop();
       
    }
}