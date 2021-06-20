class NPC{
    constructor(x,y,width,height){

this.body=Bodies.rectangle(x,y,width,height)

this.width=width;
this.height=height;
this.image=loadImage("images/ememy.png")

World.add(world,this.body)

    }
    display(){
        var angle=this.body.angle;
        push ();
       
        rotate (angle);
        image(this.image,500,290,200,200)
       
        pop ()
    }

}