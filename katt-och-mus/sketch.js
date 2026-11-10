let catX = 100;
let catY = 100;
let catSize = 50;
let catSpeed = 5;


let catched=false;

let playerMouseX = 200;
let playerMouseY = 200;
let mouseSize = 30;

let gameState="START";



function setup() {
  createCanvas(400, 250);

}

function draw() {
  background(220);
  background('lightblue')

  if(gameState=="START"){
    //Rita upp startsida
    textAlign(CENTER);
    textSize(32);
    text("KATTEN OCH MUSEN", width/2, 125);
    textSize(16);
    text("Tryck på SPACE för att starta", width/2, 200);
    fill('darkgreen')
    
    
    
    
  } else if(gameState=="PLAY"){
    //Spela spelet
    // Tangentbordstyrning
    if(keyIsDown(LEFT_ARROW)){
      catX = catX - catSpeed;
    }  
    
    if(keyIsDown(RIGHT_ARROW)){
      catX = catX + catSpeed;
    }
     
    if(keyIsDown(UP_ARROW)){
      catY = catY - catSpeed;
    }
  
     if(keyIsDown(DOWN_ARROW)){
      catY = catY + catSpeed;
    }

    
    //Stoppa Katten från att åka utanför skärmen
      catX = constrain(catX, catSize / 2, width - 
    catSize / 2);
      catY = constrain(catY, catSize / 2, height - 
    catSize / 2);

    // Läsa av och låsa musens position med constrain
playerMouseX = constrain(mouseX, mouseSize / 2, width - mouseSize / 2);
playerMouseY = constrain(mouseY, mouseSize / 2, height - mouseSize / 2);

    // Beräkna avståndet mellan katten och den LÅSTA muspositionen
let d = dist(catX, catY, playerMouseX, playerMouseY);


if (d < (catSize / 2 + mouseSize / 2)) {
  catched = true;
}


// Rita musen på den LÅSTA positionen
fill('pink');
circle(playerMouseX, playerMouseY, mouseSize);


    
    
  
    //Kontrollera avståndet mellan mus och katt
    
    
    
    //Kontrollera om katten har fångat musen
    if(d<(catSize/2+mouseSize/2)){
      gameState="GAMEOVER";
      fill('red');
      circle(mouseX, mouseY, 100);
    }
  
    fill('orange');
    circle(catX, catY, catSize);
    
      
    // Musstyrning
    fill('pink');
    circle(mouseX, mouseY, mouseSize);
  } else if(gameState=="GAMEOVER"){
    /* Rita upp GameOver-sida med möjlighet att börja om. */
    textSize(50);
    text("Game Over!!!", width/2, 135);
    fill('darkred');
    textSize(17);
    text("Tryck SPACE för Restart", width/2, 190);
    fill('darkred');
    
  }
}

function keyPressed(){
  //Starta spelet när man trycker blanksteg.
  if(keyCode==32){
    gameState="PLAY";
  }
}

