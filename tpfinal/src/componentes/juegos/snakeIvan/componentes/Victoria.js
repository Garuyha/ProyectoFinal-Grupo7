import Phaser from "phaser";
import { BotonRestart } from "./BotonRestart";
export class YouWin extends Phaser.Scene{



    constructor (){

    super('Victoria');                        
    this.BotonRestart = new BotonRestart(this); 
    
 }


      preload(){
        this.load.image('fondo', './imagenes/fondo.jpg');
        this.load.image('youwin', './imagenes/youwin.png');
        this.load.audio('botonsonido', './musica/botonsonido.mp3');
        this.BotonRestart.preload();
       
      }
      
     
      create()
      {
        this.add.image(650, 350, 'fondo');
        this.add.image(650, 250, 'youwin');
        this.botonsonido = this.sound.add('botonsonido');
        this.BotonRestart.create();
        
      }

      
      update(){

        this.botonsonido.play();
      

      }
     

      
}