
/*/ Componente boton RESTART /*/

export class BotonRestart {
    
    constructor(scene) {
     this.relatedScene = scene; 
                     
    }


    preload(){

      this.relatedScene.load.spritesheet('botonrestart', './imagenes/botonrestart.png', { frameWidth: 190, frameHeight: 49 });  // Se precarga la imagen del boton desde su directorio.

    }

    create(){



      this.startButton= this.relatedScene.add.sprite(650,550, 'botonrestart').setInteractive();     // Se crea y se ubica el boton en la pantalla.    
     
      this.startButton.on('pointerover', () => {
        this.startButton.setFrame(1);
      });                                                      
      this.startButton.on('pointerout', () => {
        this.startButton.setFrame(0);
      });
      this.startButton.on('pointerdown', () => {
        this.relatedScene.scene.start('Menu');                      // Permite que el boton redireccione a la escena del juego (Menu).
      });

      
     

    }
    
   

   

  
}