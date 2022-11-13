
export class BotonHome {
    constructor(scene) {
      this.relatedScene = scene;     // Constructor de la escena y del boton jugar.
      
      }
  
    preload() {
      
      this.relatedScene.load.image('home', './imagenes/home.png');      // Precarga  de la imagen para el boton jugar.
      
    }
  
    create() {
      
      this.startButton = this.relatedScene.add.image(1210, 500, 'home').setInteractive();
      this.startButton.on('pointerdown', () => {                                                 //Funcion del boton jugar.
      this.relatedScene.scene.start('Menu');                       // Permite el cambio a la escena Preloader. 
      });
      
    }


  }