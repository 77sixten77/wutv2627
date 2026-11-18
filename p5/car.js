let carX = 225;
let carY = 480;
let carSize = 50;
let carSpeed = 5;

let crashed=false;

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
    text("Krocka Inte!", width/2, 200);
    textSize(24);
    text("Tryck på SPACE för att starta", width/2, 300);
    fill('blue');
    
    } else if(gameState=="PLAY"){
        //Spela spelet
       
        //Svart outline på allting
        stroke('black'); // Svart kantlinje
        strokeWeight(2); // Tjocklek på kantlinjen

    
        // Rita gräs på båda sidorna
        fill('green'); // Färg för gräs
        rect(0, 0, 75, height); // Gräs till vänster
        rect(width - 75, 0, 75, height); // Gräs till höger

        
        //Vägmarkering
        stroke('white');
        strokeWeight(9);
        line(width/2, 0, width/2, height); // Mittlinje
        
        
        // Svart kanlinje för följande objekt
        stroke('black'); // Svart kantlinje
        strokeWeight(2);
        
        // Rita bilen
        fill('blue'); // Färg på bilen
        rect(carX, carY, carSize, carSize * 2); // Rektangel för bilen
        

        
        // Tangentbordstyrning
        if(keyIsDown(RIGHT_ARROW) || key === 'd' || key === 'D'){
        carX = carX + carSpeed;
        }
  
        if(keyIsDown(LEFT_ARROW) || key === 'a' || key === 'A'){
        carX = carX - carSpeed;
        }

        if(keyIsDown(UP_ARROW) || key === 'w' || key === 'W'){
        carY = carY - carSpeed;
        }
        
        if(keyIsDown(DOWN_ARROW) || key === 's' || key === 'S'){
        carY = carY + carSpeed;
        }

   
        // Begränsa bilens rörelse inom skärmen
        carX = constrain(carX, 75, width - 75 - carSize);
        carY = constrain(carY, 0, height - carSize * 2);
    
        
    
    
    
    
    
    
    


    } else if(gameState=="GAMEOVER"){
    /* Rita upp GameOver-sida med möjlighet att börja om. */
    textSize(50);
    text("Du Kraschade!!!", width/2, 135);
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
