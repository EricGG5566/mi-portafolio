
class pig extends baseClass{
    constructor(x,y){
     super(x,y,50,50);
     this.image = loadImage("sprites/enemy.png");
     this.visibility = 255; // establecemos la visibilidad del cerdito al maximo
    }
    display(){
       if(this.body.speed < 3){ // si la velocidad del cerdito es menor a tres va a mostrarse.
        super.display();
        
        //console.log("velocidad:", this.body.speed)
       }
      else{
          World.remove(world, this.body); //pero si sobrepasa el 3 se detecta un golpe y se remueve del mundo
          push();
          this.visibility = this.visibility - 5; // antes de removerlo va perdiendo visibilidad poco a poco.
          tint(255, this.visibility ); //lo que hace la tinta es dar transparencia al momento de ir desapareciendo
          image(this.image, this.body.position.x, this.body.position.y, 50, 50); //carga la imagen para que no deje de verse. 
          pop(); // lo devuelve a su configuración original.
      }
    }
    
}