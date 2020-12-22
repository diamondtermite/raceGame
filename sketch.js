var database, gammeState, playerCount, form, player, game, allPlayerInfo;
gameState=0;
playerCount=0;

function setup(){
createCanvas(500,500);
database = firebase.database();//creating database object
game = new Game();
game.start();
}

function draw(){
if(playerCount===4){
    game.updateGameState(1);
}
if(gameState===1){
    game.play();
}

}