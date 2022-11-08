
// Componente boton REINICIO

export class BotonReinicio {
    
    constructor(scene) {
     this.relatedScene = scene; 
                     
    }


    preload(){
    // Se precarga la imagen del boton desde su directorio.
      this.relatedScene.load.spritesheet('reinicio', './imgHenry/botonReinicio.jpg', { frameWidth: 190, frameHeight: 49 });  

    }

    create(){


        // Se crea y se ubica el boton en la pantalla. 
      this.startButton= this.relatedScene.add.sprite(650,550, 'reinicio').setInteractive();        
     
      this.startButton.on('pointerover', () => {
        this.startButton.setFrame(1);
      });                                                           // Permite la animacion del boton RESTART.
      this.startButton.on('pointerout', () => {
        this.startButton.setFrame(0);
      });
      // Permite que el boton redireccione a la escena del nivel 1 (Game).
        this.startButton.on('pointerdown', () => {
        this.relatedScene.scene.start('GameHenry');                      
      });

      
     

    }
    
   

   

  
}