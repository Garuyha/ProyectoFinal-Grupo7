import Phaser from "phaser";
import { BotonRestart } from "./BotonRestart";
export class YouWin extends Phaser.Scene {



  constructor() {

    super('Victoria');                              // Constructor de la escena Victoria y del boton Restart.
    this.BotonRestart = new BotonRestart(this);
  }


  preload() {
    this.load.image('fondo', './imagenes/fondo.jpg');
    this.load.image('youwin', './imagenes/youwin.png');                // Precarga de las imagenes y del boton y su sonido.
    this.load.audio('botonsonido', './musica/botonsonido.mp3');
    this.BotonRestart.preload();
  }


  create() {
    this.add.image(650, 350, 'fondo');
    this.add.image(650, 250, 'youwin');
    this.botonsonido = this.sound.add('botonsonido');         //Creacion de las imagenes de la escena y del boton con su sonido.
    this.BotonRestart.create();
  }


  update() {
    this.botonsonido.play();                                 // Reproduce el sonido del boton.
  }


}