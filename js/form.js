class Form{
    constructor(){
    this.input=createInput("enter the name");
    this.button=createButton("play");
    this.title=createElement("h2", "car racers");
    this.greeting=createElement("h2");
    this.reset=createButton("reset");

    }
    display(){
        this.title.position(130, 0);
        this.input.position(130,160);
        this.button.position(250, 200);
        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        playerCount++
        player.playerNumber=playerCount;
        player.playerName = this.input.value();
        player.updatePlayerCount(playerCount);
        
        this.greeting.html("hello "+player.playerName);
        this.greeting.position(180,200);
        player.updatePlayer()
        }
        );
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}