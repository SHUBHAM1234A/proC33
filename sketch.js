const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;

var bg;
var snow = [];
var a=100;
var TF=0;
var char, charImg1, charImg2;

function preload(){
    bg = loadImage("BG.jpg");
    charImg1 = loadImage("1 (1).png");
    charImg2 = loadImage("2 (1).png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(1200,568);

    char = createSprite(500,450,10,10);
    char.addImage(charImg1);
    char.scale = 0.45;
}

function draw(){
    Engine.update(engine);
    background(bg);

    if(frameCount % 5 === 0){
        snow.push(new createDrop(random(0,1200),random(0,1200)));
    }
    
    if(frameCount % 50 === 0){
        snow = [];
    }
    
    for(var i = 0; i<snow.length; i=i+1){
        snow[i].b();
    }

    if(keyDown("left")){
        char.x -= 5;
        char.addImage(charImg1);
    }

    if(keyDown("right")){
        char.x += 5;
        char.addImage(charImg2);
    }

    drawSprites();
}