import { RestartButton } from "./BotonReset";            // Importa  la funcion Boton del componente BotonReset
import Phaser from "phaser";
export class Ganaste extends Phaser.Scene{

/*/ Constructor que almacenara un  identificador de la escena Victoria /*/

    constructor (){

    super( 'ganaste'  );                        

    this.RestartButton= new RestartButton(this);
   

 }
    /*/ Precarga las imagenes desde su directorio /*/

      preload(){
        this.load.image('fondo','./imagenes/fondo.jpg');
        this.load.image('ganaste','./imagenes/ganaste.png');             // Metodo que carga a las imagenes desde su directorio
        this.RestartButton.preload();                                    // Precarga al boton RESTART
        this.load.audio('sonidobotones', './musica/sonidobotones.mp3');
      }
      /*/ Metodo que se encarga de crear las imagenes precargadas/*/
     
      create(){

         this.add.image(665,374,'fondo');
         this.ganaste= this.add.image(650,270 ,'ganaste'  );       // Crea la imagen de fondo de la escena.
         this.RestartButton.create();                            // Crea el boton RESTART.
         this.sonidobotones = this.sound.add('sonidobotones');

      }

      
    update(){

      this.sonidobotones.play();     // Reproduce sonido del boton al clickear 


    }


}