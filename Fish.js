class fish{
  constructor(x, y) {
    var options = {
       'restitution':0.8,
       'friction':1,
       'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("Fish.jpg");
        World.add(world, this.body);
        this.visiblity=255
      }
      display(){
      if(this.body.speed<5){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER); 
       image(this.image, 0, 0, this.width, this.height);
        pop();
      
      }
      else{World.remove(world,this.body)
      this.visibilty=this.visibility-5
      tint(255,this.visibilty)
      image(this.image, 0, 0, this.width, this.height);
      }
      }
}