let carX = 225;
let carY = 480;
let carSize = 50;
let carSpeed = 5;

let gameState="START";

let enemyX; // Slumpmässig horisontell position
let enemyY = -75; // Startposition för motståndarbilen (y, utanför skärmen)
let enemySize = 50; // Storlek på motståndarbilen
let enemySpeed = 6; // Hastighet för motståndarbilen

// Lila bil
let enemy2X; // Slumpmässig horisontell position
let enemy2Y = -75; // Startposition för motståndarbilen (y, utanför skärmen)
let enemy2Size = 50; // Storlek på motståndarbilen
let enemy2Speed = 8; // Hastighet för motståndarbilen





function setup() {
    createCanvas(500, 600);
    enemyX = floor(random(75, width - 75 - carSize)); // Slumpmässig horisontell position
  
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
        rect(carX, carY, carSize, carSize * 2, 4); // Rektangel för bilen
        

        
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


      

        // Rita motståndarbilen
        fill('red'); // Färg för motståndarbilen
        rect(enemyX, enemyY, enemySize, enemySize * 2, 4); // Form för motståndarbilen

        // Rita motståndarbilen - lila
        fill('purple'); // Färg för motståndarbilen
        rect(enemy2X, enemy2Y, enemy2Size, enemy2Size * 2, 4); // Form för motståndarbilen


        // Flytta motståndarbilen nedåt
        enemyY = enemyY + enemySpeed;

        // Flytta motståndarbilen nedåt - lila
        enemy2Y = enemy2Y + enemy2Speed;




        // Återställ motståndarbilen när den lämnar skärmen
        if (enemyY > height) {
            enemyY = -100; // Starta om ovanför skärmen
            enemyX = random(75, width - 75 - enemySize); // Slumpa ny horisontell position
      }


          // Återställ motståndarbilen när den lämnar skärmen - lila
          if (enemy2Y > height) {
            enemy2Y = -100; // Starta om ovanför skärmen
            enemy2X = random(75, width - 75 - enemy2Size); // Slumpa ny horisontell position
      }

        // Kollision
        if (
          carX + carSize > enemyX 
          && carY + carSize * 2 > enemyY
          && carX < enemyX + enemySize
          && carY < enemyY + enemySize * 2
          ) {
             gameState = "GAMEOVER";
          }


          // Kollision - lila
        if (
          carX + carSize > enemy2X 
          && carY + carSize * 2 > enemy2Y
          && carX < enemy2X + enemy2Size
          && carY < enemy2Y + enemy2Size * 2
          ) {
             gameState = "GAMEOVER";
          }

        



  
  } else if(gameState=="GAMEOVER"){
    /* Rita upp GameOver-sida med möjlighet att börja om. */
    textSize(50);
    text("Du Krockade!!!", width/2, 165);
    fill('darkred');
    textSize(21);
    text("Tryck SPACE för Restart", width/2, 220);
    fill('darkred');
    
  }



}






function keyPressed(){
    //Starta spelet när man trycker blanksteg.
    if(keyCode==32){
      gameState="PLAY";
      enemyX = floor(random(75, width - 75 - enemySize)); // Slumpmässig horisontell position
      enemyY = -100; // Startposition för motståndarbilen (y, utanför skärmen)
      
      enemy2X = floor(random(75, width - 75 - enemy2Size)); // Slumpmässig horisontell position
      enemy2Y = -100; // Startposition för motståndarbilen (y, utanför skärmen)

    }
  }
