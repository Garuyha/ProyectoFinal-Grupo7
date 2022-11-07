import Phaser from 'phaser';


var snake = {    

    //Preload es donde cargas todos los assets.
    preload: function(){
        game.load.image('manzana', 'spritesEzequiel/manzana.png');
        game.load.image('cuerpo', 'spritesEzequiel/cuerpo.png');
    },
    //Create es donde haces el set up del juego.
    create: function(){
        var comida = game.add.sprite(0,0, 'food');
        comida.position.x = 300;
        comida.position.y = 400;
    },
    //Update es una funcion que llamas cada frame, siendo por defecto 60 frames por segundo.
    update: function(){
        var cursor = game.input.keyboard.createCursosKeys();
        if(cursor.right.isDown){

        }
    }
}

/**Las funciones previamente creadas, son pasadas al contructor Phaser.Game, con la finalidad
 * de instanciar el juego nuevo.
*/
var game = new Phaser.Game(600, 450, Phaser.AUTO, '',
{
    preload: snake.preload,
    create: snake.create,
    update: snake.update
});