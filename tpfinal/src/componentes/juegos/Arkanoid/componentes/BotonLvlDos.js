

/*/  Componente boton que tiene por funcion pasar a la escena Modo de juego Normal  /*/

   export class LvlNormal {
      constructor(scene) {
      this.relatedScene = scene;    // Constructor por defecto para la escena.
                     
    }


    preload(){
        
        this.relatedScene.load.image('botondos', './imagenes/botondos.png');     // Precarga de la imagen del boton.

    }
    
    create(){

          
      this.startButton= this.relatedScene.add.image(632,400, 'botondos').setInteractive();    // Mediante la variable  "startButton"  se le asigna la imagen precargada al boton. 
      this.startButton.on('pointerdown', () => {                                            // Funcion que activa el cambio de escena al clickear el boton.
      this.relatedScene.scene.start('Game');                                                // Permite que el boton redireccione a la escena del juego (Game).
      
    
    
    
    
    });
 
     
    }
    
  
}