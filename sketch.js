var database,timetable,homepage;
var form,user;
var userCount=0;
var gameState=0;
var writeProgress;

var allUsers=[],flag=0;

function setup() {
  createCanvas(1500,800);
  database=firebase.database();

  game= new Game();

  game.start();
}

function draw() {
   clear();
   

   if(gameState===1){
      game.signup();
   }

   if(gameState===2){
      game.home();
   }

}