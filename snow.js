class createDrop{
    constructor(x,y){
        var options = {
            friction: 0.1,
            restitution:1,
            density:1 
        }
        this.image = loadImage("snow.png");
        this.snow = Bodies.rectangle(x,y,width,height,options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.snow);
    }

    a(){     
        if(this.snow.position.y > height){
            Matter.Body.setPosition(this.snow, {x:random(0,1200), y:random(0,1200)})
        }
    }

    b(){
        push();
        translate(this.snow.position.x,this.snow.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}