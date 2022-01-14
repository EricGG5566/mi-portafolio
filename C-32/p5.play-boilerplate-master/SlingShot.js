class SlingShot {
    constructor(bodyA, pointB){
        var options = {bodyA: bodyA, pointB: pointB, stiffness: 0.05, lengh: 5}
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }
    display(){
        //console.log("posiciónX ", this.sling1.x);
        image(this.sling1,200,50);
        image(this.sling2,175,50);
        if (this.sling.bodyA){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
      
        if (pointA.x < 150){
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        line(pointA.x + 20, pointA.y, pointB.x + 20, pointB.y - 10);
        image(this.sling3, pointA.x - 25, pointA.y -15, 10, 40);
        
        }
        else if (pointA.x > 210){
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        line(pointA.x + 20, pointA.y, pointB.x + 20, pointB.y - 10);
        image(this.sling3, pointA.x - 25, pointA.y -15, 10, 40);
        
        }
        else {
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x + 20, pointA.y, pointB.x + 20, pointB.y - 10);
            image(this.sling3, pointA.x + 25, pointA.y -15, 10, 40);
        }
    
        

    }
        
        
    }
    fly(){
        this.sling.bodyA = null;


    }
    attach(body){ //cremos una función para devolver al pájaro a donde estaba antes.
    this.sling.bodyA = body; //vuelve a atar al pájaro a la resortera.
    }
}