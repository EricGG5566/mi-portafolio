class bird extends baseClass{
constructor(x,y){
    super(x,y, 50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeIM = loadImage("sprites/smoke.png");
    this.smoke = [];

}
display(){
    super.display();
    if (this.body.velocity.x > 10 && this.body.position.x > 100 ){
    var position = [this.body.position.x, this.body.position.y]
    this.smoke.push(position);
    }
    for (var i = 0;  i < this.smoke.length; i++){
        image(this.smokeIM, this.smoke[i][0], this.smoke[i][1])
        
    }
    
}




}












/*constructor(x,y){
        var options = {'restitution': 0.5, 'friction' : 0.1, 'density' : 0.1}
        this.body = Bodies.rectangle(x,y,50,50, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("sprites/bird.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push(); //captura la nueva configuración con las posiciones y el angulo
        translate(pos.x, pos.y); //traslada la posición
        rotate(angle); //rota
        imageMode(CENTER);
        image(this.image,0,0, this.width, this.height)
        pop(); //vuelve a la configuración original cuando esté estatico
    
    



    } */
