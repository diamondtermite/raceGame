class Game{
    getGameState(){
        var locationOfChild=database.ref("gameState");
        locationOfChild.on("value",function(data){
            gameState=data.val();
        })
    }
    updateGameState(y){
    var locationOfChild = database.ref("/");
        locationOfChild.update({
            gameState:y
        })
    }
    start(){
        if(gameState==0){
        player=new Player();
        form = new Form();
        form.display();
        player.getPlayerCount();
        }
        
    }
    play(){
        form.hide();
        Player.getAllPlayerInfo();
        background("white");
        if(allPlayerInfo!=undefined){
            var yPos=150;
            for(var i in allPlayerInfo){
                if(i==="player"+player.playerNumber){
                    fill("red");
                }
                else{
                    fill("black");
                }
                text(allPlayerInfo[i].name+":"+allPlayerInfo[i].distance,120,yPos);
                yPos+=30
            }
            if(keyDown("up")&&player.playerNumber!=null){
                player.distance+=20;
                player.updatePlayer();
            }
        }
    }
}
