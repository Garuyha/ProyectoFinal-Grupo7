import Phaser from "phaser";
export class Menu extends Phaser.Scene{



    constructor (){

    super( 'Menu'  );                        

    
 }


      preload(){
        this.load.image('fondo','./imagenes/fondo.jpg');
        this.load.image('logo','./imagenes/logo.png');                            // Se precarga las imagenes y los botones.
        this.load.image('jugar','./imagenes/jugarBoton.png');
      }
      
     
      create(){
        
        this.add.image(650,350,'fondo'); 
        this.add.image(650,250,'logo');  
        this.add.image(650,450,'jugar'); 
         
      }

    
     

      
}