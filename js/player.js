class Player{
    constructor(){
        this.playerName=null;
        this.playerNumber=null;
        this.playerDistance=0;
    }
    getPlayerCount(){
        var locationOfChild=database.ref("playerCount");
        locationOfChild.on("value",function(data){
            playerCount=data.val()
        })
    }
    updatePlayerCount(count){
      var locationOfChild=database.ref("/")
      locationOfChild.update({
          playerCount:count
      })
    }

    updatePlayer(){
        var playerReference="players/player"+this.playerNumber;
        var locationOfChild=database.ref(playerReference);
        locationOfChild.set({
        name:this.playerName,
        distance:this.playerDistance
        })
    }
    static getAllPlayerInfo(){
        var locationOfChild= database.ref("players");
        locationOfChild.on("value",function(data){
            allPlayerInfo=data.val();
        })
    }
}