class snow{

    constructor(x,y,r){

        var options = {
            restution:0.,
            isStatic :  false
        }
        this.body = Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("snow5.webp");

        World.add(world,this.body);
    }

    display (){

        var pos = this.body.position;
        var angle = this.body.angle;

        push()

        translate(pos.x,pos.y);
        rotate(angle);

        noStroke();
    fill("white");
    imageMode(CENTER);
    image(this.image, 0, 0,25,25);
   // this.image.resize();
    pop();
    
    }
    
    };
    

