class SNOW{
    constructor(x,y,width,height,positon,){
        var options ={
            'restitution':0.0000000002,
            'friction':0.0000002

        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.image = loadImage("snow4.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    display(){
        var position = this.body.position;
        push();
        imageMode(CENTER)
        image(this.image,position.x,position.y,this.width,this.height);
        pop();
    }
}