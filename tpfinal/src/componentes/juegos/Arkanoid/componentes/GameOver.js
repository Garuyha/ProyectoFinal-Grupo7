
/*/ Escena del juego GameOver /*/

import Phaser from "phaser";
import { RestartButton } from "./BotonReset";
export class JuegoAcabado extends Phaser.Scene{



    constructor (){

    super('JuegoAcabado'  );                          // Constructor por defecto de la escena.
    this.RestartButton = new RestartButton(this); 
          
    
 }


      preload(){
        this.load.audio('gameover', './musica/gameover.mp3');
        this.load.audio('boton', './musica/boton.mp3');
        this.load.image('fondo','./imagenes/fondo.jpg');
        this.load.image('gameover','./imagenes/gameover.jpg');  // Se precargan las imagenes de la escena.
        this.RestartButton.preload();
        this.load.audio('sonidobotones', './musica/sonidobotones.mp3');
        
      }

      create(){
        this.gameover = this.sound.add('gameover');
        this.boton = this.sound.add('boton');
        this.add.image(665,374,'fondo'); 
        this.gameover= this.add.image(650,270 ,'gameover'   );   // Se crean las imagenes de la escena y el boton restart.
        this.RestartButton.create();
        this.sonidobotones = this.sound.add('sonidobotones');

      }
      
      update(){

        this.sonidobotones.play();   // Reproduce sonido del boton al clickear.


      }

   



  }
   

   
  
      
