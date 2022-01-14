/*class log{

constructor(x,y,height,angle){
var options = {'restitution': 0.8, 'friction' : 1.0, 'density' : 1.0 }
this.body = Bodies.rectangle(x, y, 20, height, options)
this.width = 20;
this.height = height;
Matter.Body.setAngle(this.body, angle); //asigna un angulo
World.add(world, this.body);

}
 display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push(); //captura la nueva configuración con las posiciones y el angulo
    translate(pos.x, pos.y); //traslada la posición
    rotate(angle); //rota
    rectMode(CENTER);
    strokeWeight(4);
    stroke("red");
    fill(255);
    rect(0,0, this.width, this.height)
    pop(); //vuelve a la configuración original cuando esté estatico


 }


} */
class log extends baseClass{
   constructor(x,y,height, angle){
      super(x,y,20,height, angle);
      Matter.Body.setAngle(this.body, angle);
      this.image = loadImage("sprites/wood2.png");  
   }
}