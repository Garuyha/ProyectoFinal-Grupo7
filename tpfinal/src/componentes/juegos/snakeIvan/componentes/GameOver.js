import Phaser from "phaser";
export class GameOver extends Phaser.Scene {



    constructor() {

        super('GameOver');                          // Constructor por defecto de la escena.

    }

    preload() {
        this.load.image('fondogameover', './imagenes/fondogameover.jpg');
        this.load.image('gameover', './imagenes/gameover.png');

    }

    create() {

        this.add.image(650, 350, 'fondogameover');
        this.add.image(650, 200, 'gameover');
    }

    update() {

       

    }





}