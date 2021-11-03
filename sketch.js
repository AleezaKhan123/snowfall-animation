const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Background;
var snow1;
var snowImg;
var character;
var characterImg;
var snowman;
var snowmanImg;
var snowParticles= [];

function preload(){
  Background = loadImage("snow3.png");
  character = loadImage("Character2.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  character = createSprite(540, 350, 10, 10);
  character.addImage(characterImg);
  character.scale=0.3;

  snowman = createSprite(260, 300, 10, 10);
  snowman.addImage(snowmanImg);
  snowman.scale=0.3;
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(Background);
  Engin.update(engine);
  if(frameCount%2===0){
    snowParticle.push
  }  
  drawSprites();
}