
export class BotonJugar {
  constructor(scene) {
    this.relatedScene = scene;     // Constructor de la escena y del boton jugar.

  }

  preload() {
    this.relatedScene.load.image('jugar', './imagenes/jugar.png');      // Precarga  de la imagen para el boton jugar.
  }

  create() {
    this.startButton = this.relatedScene.add.image(632, 350, 'jugar').setInteractive();
    this.startButton.on('pointerdown', () => {                                                 //Funcion del boton jugar.
      this.relatedScene.scene.start('Preloader');                       // Permite el cambio a la escena Preloader.
    });


  }


}