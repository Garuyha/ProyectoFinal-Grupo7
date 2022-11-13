
export class BotonNivelUno {
    constructor(scene) {
    this.relatedScene = scene;     // Constructor de la escena y del boton jugar.

    }
    preload() {
        this.relatedScene.load.image('niveluno', './imagenes/niveluno.png');      // Precarga  de la imagen para el boton nivel uno.
    }
    create() {
        this.startButton = this.relatedScene.add.image(632, 430, 'niveluno').setInteractive();
        this.startButton.on('pointerdown', () => {                                                 //Funcion del boton nivel uno.
            this.relatedScene.scene.start('Preloader');                       // Permite el cambio a la escena Preloader.
        });
    }

}