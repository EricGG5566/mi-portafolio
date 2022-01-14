const Engine = Matter.Engine; //el Engine se utiliza para crear el motor físico 
const World = Matter.World; // world se utiliza para crear el mundo físico y agregarle objetos
const Bodies = Matter.Bodies; //boides se utiliza para crear los objetos físicos que habitan el mundo
const Constraint = Matter.Constraint;

var ConstrainedLog;
var engine, world, bodies;
var box1, box2, box3, box4, box5, ground1;
var pig1, pig2;
var log1, log2, log3, log4;
var bird1;
var canvas;
var fondoIMG;
var chain1;
var baseResortera, baseResorteraIM;
var gameState = "slingOn";
var bg,backgroundIMG

function preload(){
  fondoIMG = loadImage("sprites/bg.png");
 
}



function setup() {
  canvas = createCanvas(1200,400);
  engine = Engine.create(); //creamos un motor físico y lo guardamos en la variablre engine
  world = engine.world; // creamos un mundo utilizando el motor fisico y lo guardamos en la variable world
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new pig(810,350);
  log1 = new log(810,260,300,PI/2);
  box3 = new Box(700,250,70,70);
  box4 = new Box(920,250,70,70);
  pig2 = new pig(820,250);
  log2 = new log(810,200,300,PI/2);
  box5 = new Box(810,200,70,70);
  log3 = new log(720,170,150,PI/7);
  log4 = new log(900,170,150,-PI/7);
  bird1 = new bird(150,150);
  baseResortera = new ground(170,350,300,200);
  slingShot1 = new SlingShot(bird1.body, {x: 200, y: 100});


  //ConstrainedLog = new log(230,180,80,PI/2);
  //var options = {bodyA: bird1.body, bodyB: ConstrainedLog.body, stiffness: 1, length: 0.2} //se crea una restricción entre el cuerpo A y el B y agrega rigides y longitud
  //var chain = Constraint.create(options);
  //World.add(world, chain);

 
  
  
  ground1 = new ground(600,380,1200,20);
 }
//density
function draw() {
if (backgroundIMG === undefined){
  backgroundIMG = loadImage("sprites/bg.png");
}
else {
  
  background(backgroundIMG);  
  Engine.update(engine); //actualiza el motor físico de manera recurrente
  

ground1.display();
box1.display();
box2.display();
pig1.display();
log1.display();
box3.display();
box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
slingShot1.display();
bird1.display();
baseResortera.display();

//ConstrainedLog.display();
//strokeWeight(3);
//line(bird1.body.position.x, bird1.body.position.y, ConstrainedLog.body.position.x, ConstrainedLog.body.position.y);



 getTime();
}
}

function mouseDragged(){
  if (gameState !== "launched"){ //distinto a
  Matter.Body.setPosition(bird1.body, {x: mouseX, y: mouseY}) 
  }
}
function mouseReleased(){
  slingShot1.fly();
  gameState = "launched";


}
function keyPressed(){ //crea una función para devolver al pájaro a la resortera
  if (keyCode === 32){ //al presionar el espacio (número 32 en código ascii) vuelve a atar al pájaro a la resortera
    slingShot1.attach(bird1.body); //manda a llamar a la otra función
  }
}

 // RADIANES: una circunferencia de 360 grados hay 2PI radianes, un radian se obtiene dividiendo esos 360 grados entre 2PI (un radian es igualm 57 grados, 17 minutos, y 44.81 segundos.)


 async function getTime(){
var response = await fetch("http://worldtimeapi.org/api/timezone/America/Mexico_City");
var responseJSON = await response.json();
var datetime = responseJSON.datetime;
//var hora = datetime.slice(-10);
//console.log("respuesta json=", responseJSON);
//console.log("reversa", hora );
var hora = datetime.slice(11,13);
console.log("indices específicos", hora );
if (hora >= 07 && hora <= 19){
  bg = "sprites/bg.png";
}
else {
  bg = "sprites/bg2.jpg";
}
backgroundIMG = loadImage(bg);

}

