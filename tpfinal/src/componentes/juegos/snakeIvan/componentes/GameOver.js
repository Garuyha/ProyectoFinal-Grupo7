import Phaser from "phaser";
import { BotonRestart } from "./BotonRestart";
export class GameOver extends Phaser.Scene {
        constructor() {
        super('GameOver');                          // Constructor por defecto de la escena.
        this.BotonRestart = new BotonRestart(this);  // Llama a la clase del boton Restart.
    }
    preload() {
        this.load.image('fondo', './imagenes/fondo.jpg');
        this.load.image('gameover', './imagenes/gameover.png');               // Precarga de las imagenes de la escena Game Over, sonidos y del boton restart.
        this.load.audio('botonsonido', './musica/botonsonido.mp3');
        this.BotonRestart.preload();
    }
    create() {
        this.add.image(650, 350, 'fondo');
        this.add.image(650, 300, 'gameover');
        this.botonsonido = this.sound.add('botonsonido');            // Creacion de los objetos sonidos y del boton restart.
        this.BotonRestart.create();
    }

    update() {
        this.botonsonido.play();                  // Reproduce el sonido del boton.
    }
}