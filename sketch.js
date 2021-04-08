const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone,iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(500,300,30);
    stone = new Stone(500,400,70,100);
    iron = new Iron(300,350,60,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber.display();
    stone.display();
    iron.display();
    plane.display();
    hammer.display();

    
 
}