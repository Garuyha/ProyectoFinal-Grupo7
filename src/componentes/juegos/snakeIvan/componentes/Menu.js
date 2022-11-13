import Phaser from "phaser";
import { BotonJugar } from "./BotonStart";
import { BotonNivelUno } from "./BotonNivelUno";
import { BotonNivelDos } from "./BotonNivelDos";
export class Menu extends Phaser.Scene {
// Metodo constructor por defecto de la escena //
  constructor() {
    super('Menu');                                  // Nombre del key o identficador de la escena
    this.BotonJugar = new BotonJugar(this);        // Se invoca un nuevo constructor del boton jugar desde la clase   BotonJugar.        
    this.BotonNivelUno= new BotonNivelUno(this);   // Se invoca un nuevo constructor del boton nivel uno desde la clase   BotonNivelUno. 
    this.BotonNivelDos= new BotonNivelDos(this);   // Se invoca un nuevo constructor del boton dos desde la clase   BotonNivelDos. 
 
  }
  preload() {
    // Precarga de images //
    this.load.image('fondo', './imagenes/fondo.jpg');
    this.load.image('hungry2', './imagenes/hungry2.png');
    this.load.image('hungry', './imagenes/hungry.png');
    this.load.image('hormigalogo', './imagenes/hormigalogo.png');                         // Se precarga las imagenes y los botones.
    this.load.image('jugar', './imagenes/jugar.png');
    this.load.audio('musica1', './musica/musica1.mp3');
    this.load.audio('botonsonido', './musica/botonsonido.mp3');
    this.load.audio('botonsonido', './musica/botonsonido.mp3');
    // Precarga del boton jugar o start //
    this.BotonJugar.preload();
    this.BotonNivelUno.preload();
    this.BotonNivelDos.preload();
  }
  create() {
    //  Creacion de las imagenes  //
    this.add.image(650, 350, 'fondo');
    this.add.image(950, 160, 'hormigalogo');
    this.add.image(570, 230, 'hungry2');
    this.add.image(570, 230, 'hungry');
    //  Creacion de musica y sonidos  //
    this.botonsonido = this.sound.add('botonsonido');
    this.musica1 = this.sound.add('musica1');
    // Creacion del boton jugar //
    this.BotonJugar.create();
    this.BotonNivelUno.create();
    this.BotonNivelDos.create();
  }

  update() {
    this.musica1.play();       // Reproduce la musica del nivel 1.
    this.botonsonido.play();
    this.musica1.play();    // Reproduce el sonido del boton jugar.
  
  }

}