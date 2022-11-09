export class BotonInicio {

    constructor(scene) {
     this.relatedScene = scene; 
                     
    }
  
  
    preload()

    {
        this.relatedScene.load.image('botonInicio', './imgHenry/botonInicio.jpg');        
    }
    
    create()

    {
      this.startButton= this.relatedScene.add.image(650,500, 'botonInicio').setInteractive();       
      this.startButton.on('pointerdown', () => {
        this.relatedScene.scene.start('Game');
        });
    }   

  }