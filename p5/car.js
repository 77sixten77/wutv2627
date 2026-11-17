let carX = 225;
let carY = 480;
let carSize = 50;
let carSpeed = 5;


let gameState="START";



function setup() {
    createCanvas(500, 600);
  
}

  




function draw() {
    background('gray');

    if(gameState=="START"){
        //Rita upp startsida
    textAlign(CENTER);
    textSize(64);
    text("Undvik Bilkrock!", width/2, 200);
    textSize(24);
    text("Tryck på SPACE för att starta", width/2, 300);
    fill('lightgreen');
    
    } else if(gameState=="PLAY"){
    //Spela spelet
        // Rita gräs på båda sidorna
        fill('green'); // Färg för gräs
        rect(0, 0, 75, height); // Gräs till vänster
        rect(width - 75, 0, 75, height); // Gräs till höger
        

        // Tangentbordstyrning
        if(keyIsDown(RIGHT_ARROW) || key === 'd' || key === 'D'){
        carX = carX + carSpeed;
        }
  
        if(keyIsDown(LEFT_ARROW) || key === 'a' || key === 'A'){
        carX = carX - carSpeed;
        }

        // Rita bilen
        fill('blue'); // Färg på bilen
        rect(carX, carY, carSize, carSize * 2); // Rektangel för bilen
   
        // Begränsa bilens rörelse inom skärmen
        carX = constrain(carX, 0, width - carSize);
        carY = constrain(carY, 0, height - carSize * 2);
    }
}









function keyPressed(){
    //Starta spelet när man trycker blanksteg.
    if(keyCode==32){
      gameState="PLAY";
    }
  }
