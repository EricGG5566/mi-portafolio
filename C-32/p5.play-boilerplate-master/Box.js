/*class Box {
    constructor(x,y,width,height){
    var options = {'restitution': 0.7, 'friction': 0.1, 'density': 0.1}
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width;
    this.height = height;
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
      stroke("blue");
      fill(255);
      rect(0,0, this.width, this.height)
      pop(); //vuelve a la configuración original cuando esté estatico
  }

}
*/
class Box extends baseClass{
  constructor (x,y,width,height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    
  }

}