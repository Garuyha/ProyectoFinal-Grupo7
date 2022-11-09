import Phaser from "phaser";

var Game_Over = {
    preload: function(){
        game.load.image('gameover', '.spritesEzequiel/gameover.png');
    },
    create: function(){
        this.add.button(0,0, 'gameover', this.startGame, this);
        console.log("perdiste");
        
        game.add.text(300,250,"LAST SCORE", {
            font:"bolder 24px san-serif", 
            fill:"#ffb00", 
            aling:"center"
        });
        
        game.add.text(500,250,score.toString(), {
            font:"bolder 26px san-serif", 
            fill:"#fff", 
            aling:"center"
        });
    },
    startGame: function(){
        console.log("hi, juego inicia");
        this.start.start("Game");
    }
}