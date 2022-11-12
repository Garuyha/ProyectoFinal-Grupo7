import Phaser from "phaser";
import { BotonRestart } from "./BotonRestart";
export class GameOver extends Phaser.Scene {



    constructor() {

        super('GameOver');                          // Constructor por defecto de la escena.

        this.BotonRestart = new BotonRestart(this); 
    }

    preload() {
        this.load.image('fondo', './imagenes/fondo.jpg');
        this.load.image('gameover', './imagenes/gameover.png');
        this.load.audio('botonsonido', './musica/botonsonido.mp3');
        this.BotonRestart.preload();
    }

    create() {
        
        this.add.image(650, 350, 'fondo');
        this.add.image(650, 300, 'gameover');
        this.botonsonido = this.sound.add('botonsonido');
        this.BotonRestart.create();
    }

    update() {

        this.botonsonido.play();
      
    }





}