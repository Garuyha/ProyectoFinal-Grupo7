



import Phaser from "phaser";

class NivelUno extends Phaser.Scene{



constructor(){

super('NivelUno'  );      

}





     preload()

    {
        this.load.image('fondoUno','./imagenes/fondoUno.png');
        this.load.image('snake', './imagenes/snake.png');
        this.load.image('anana','./imagenes/anana.png');
        this.load.image('banana','./imagenes/banana.png');
        this.load.image('naranja','./imagenes/naranja.png');
        this.load.image('uva','./imagenes/uva.png');
        this.load.image('headup','./imagenes/headup.png');
        this.load.image('headdown','./imagenes/headdown.png');
    }



    

    create() 

    {

    
        this.body = this.physics.add.image(  650,500, 'snake').setImmovable();

        this.cursors = this.input.keyboard.createCursorKeys(); 
        
        

        
        
        
        this.frutas = this.physics.add.staticGroup({
            key: ['anana', 'banana', 'uva', 'naranja'],   
            frameQuantity: 12,
            gridAlign: { 
            width: 13, 
            height: 156, 
            cellWidth: 200, 
            cellHeight: 150, 
            x: 60, 
            y: 150,
        
          }
        });
        this.physics.add.collider(this.body, this.frutas, this.frutaColision, null, this);

    }


  update ()
  {

    if (this.cursors.left.isDown )
    {
  
        this.body.setVelocityX(-100); 
        this.body.setVelocityY(0); 
        this.body.flipX= true;             // Gira la imagen del jugador 300 unidades en X hacia la izquierda (la serpiente mira hacia la izquierda).
        this.body.rotation=300;
    }


   else if (this.cursors.right.isDown)
    {
  
        this.body.setVelocityX(100);  
        this.body.setVelocityY(0); 
        
        this.body.rotation=-300;          // Gira la imagen del jugador -300 unidades en X hacia la derecha (la serpiente mira hacia la derecha).
    }

    
    else if (this.cursors.up.isDown)
    {
  
        this.body.setVelocityY(-100);  
        this.body.setVelocityX(0); 
        this.body.rotation=0;              // Como la imagen inicial de la serpiente (Jugador) mira hacia arriba, se establece la rotacion en 0 de esta forma devuelve a la posicion incial cuando se presione la tecla arriba.
       
    }
  
    if (this.cursors.down.isDown )
    {
  
        this.body.setVelocityY(100);   
        this.body.setVelocityX(0); 
        this.body.rotation=600;            // Gira la imagen de la serpiente 600 unidades en Y es decir  hacia abajo (la serpiente mira hacia  abajo cuando presionamos la tecla abajo).

       
    }
    
  }

  
   frutaColision(body,frutas) {

    frutas.disableBody(true, true);                


    
}





}


export default NivelUno;