



export class BotonJugar {
    constructor(scene) {
    this.relatedScene = scene;   
                   
  }


  preload(){
      
    this.relatedScene.load.image('jugar', './imagenes/jugar.png');     
    
  }
  
  create(){

        
    this.startButton= this.relatedScene.add.image(632,475, 'jugar').setInteractive();    
    this.startButton.on('pointerdown', () => {                                            
    this.relatedScene.scene.start('Preloader');                                              
    
  
  
  
  
  });

   
  }
  

}