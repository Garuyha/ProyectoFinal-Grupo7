

/*/  Componente boton que tiene por funcion pasar a la escena Modo de juego Easy  /*/

     export class LvlunoButton {
    
    constructor(scene) {
     this.relatedScene = scene; 
                     
    }


    preload(){
      
        this.relatedScene.load.image('botonuno', './imagenes/botonuno.png');    // Precarga de la imagen del boton.
        
    }
    
    create(){



      this.startButton= this.relatedScene.add.image(637,500, 'botonuno').setInteractive();    // Se crea y se ubica ña imagen en la pantalla.    
      
      
      this.startButton.on('pointerdown', () => {                       // Funcion que activa el cambio de escena al clickear el boton.
      this.relatedScene.scene.start('NivelDos');                      // Permite que el boton redireccione a la escena del juego (NivelDos).
      
    
    
    
    
    });

      
     

    }
    
   

   

  
}