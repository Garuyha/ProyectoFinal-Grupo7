import Phaser from "phaser";
export class Menu extends Phaser.Scene{



    constructor (){

    super( 'Menu'  );                        

    
 }


      preload(){
        this.load.image('fondo','./imagenes/fondo.jpg');
        this.load.image('logo','./imagenes/logo.png');                            // Se precarga las imagenes y los botones.
        this.load.image('logov','./imagenes/snakelogo.png');     
        this.load.image('logob','./imagenes/logob.png'); 
      
      }
      
     
      create(){
        
        this.add.image(650,350,'fondo'); 
         this.add.image(549,180,'logo');  
         this.add.image(550,180,'logob');                     // Se crean las imagenes y los botones.
         this.add.image(850,150,'logov');        
         
         
      }

      
     update(){
   
     
   }

     

      
}