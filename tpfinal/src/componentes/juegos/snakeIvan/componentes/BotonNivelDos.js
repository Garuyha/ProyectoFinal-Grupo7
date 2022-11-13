
export class BotonNivelDos {
    constructor(scene) {
        this.relatedScene = scene;                                                   // Constructor de la escena y del boton jugar.

    }
    preload() {
        this.relatedScene.load.image('niveldos', './imagenes/niveldos.png');      // Precarga  de la imagen para el boton jugar.
    }

    create() {
        this.startButton = this.relatedScene.add.image(632, 500, 'niveldos').setInteractive();
        this.startButton.on('pointerdown', () => {                                                 //Funcion del boton jugar.
            this.relatedScene.scene.start('NivelDos');                       // Permite el cambio a la escena Preloader.
        });
    }

}