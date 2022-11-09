/** Menu principal del juego Snake, siendo el lugar donde se controlara
 * el pase entre "Ventanas" (escenas).
 */
import Phaser  from "phaser";

var music;
var Menu = {
    preload: function(){
        game.load.Image('menu', './spritesEzequiel/menu.png');
    },
    create: function(){
        this.add.button(0,0, 'menu', this.startGame, this);
    },
    startGame: function(){
        this.state.start('Game');
        console.log("hi");
    }
}