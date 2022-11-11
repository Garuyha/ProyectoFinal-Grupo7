



import Phaser from "phaser";
class NivelUno extends Phaser.Scene{

    

constructor(){

super('NivelUno'  );    


}





     preload()

    {
        
        this.load.image('snake', './imagenes/snake.png');
        this.load.image('cuerpo', './imagenes/cuerpo.png');
        this.load.image('anana','./imagenes/anana.png');
        this.load.image('banana','./imagenes/banana.png');
        this.load.image('naranja','./imagenes/naranja.png');
        this.load.image('uva','./imagenes/uva.png');
        this.load.image('barra','./imagenes/barra.png');
        
        
       




        
    }



    

    create() 

    {
       
        

        
       
    
        this.body = this.physics.add.image(  650,500, 'snake').setImmovable();    // La variable y palabra reservada body se encarga de guardar a la imagen del jugador con su posicion en la pantalla, ademas se la establece como  Inamovible es decir permancera quieta amenos que se produzca un movimiento.
        this.physics.add.collider(this.body,this.barra)
        this.body.setCollideWorldBounds(true);
        
        
        this.cursors = this.input.keyboard.createCursorKeys();                    // Se  crea un input o entrada de registro para las teclas presionadas.
        
        /*/Array que crea y posiciona a las frutas /*/

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

        this.physics.add.collider(this.body, this.frutas, this.frutaColision, null, this);  //  Se añade la funcion de colision a los objetos establecidos en los parametros.

       
    this.map=this.add.tilemap('tiles')
    var tileset=this.map.addTilesetImage("grass", "grass");
 
     var solidos=this.map.createStaticLayer("bordes", tileset);
     

    solidos.setCollisionByProperty({solido:true })

    this.physics.add.collider(this.body, solidos)

     
        

    }


  update ()
  {

    if (this.cursors.left.isDown )               // Si se presiona la tecla "izquierda" :
    {
  
        this.body.setVelocityX(-100);            // El jugador se desplaza a 100 unidades en X hacia la izquierda.
        this.body.setVelocityY(0);              // El desplazamiento en Y se anula en cero, de lo contrario se produce un movimiento hacia la izquierda y en diagonal.
        this.body.flipX= true;                  // Gira la imagen del jugador 300 unidades en X hacia la izquierda (la serpiente mira hacia la izquierda).
        this.body.rotation=300;
    }


   else if (this.cursors.right.isDown)            // Si se presiona la tecla "derecha" :
    {
  
        this.body.setVelocityX(100);             // El jugador se desplaza a 100 unidades en X hacia la derecha.
        this.body.setVelocityY(0);              //  El desplazamiento en Y se anula en cero, de lo contrario se produce un movimiento hacia la derecha y en diagonal.
        this.body.rotation=-300;               // Gira la imagen del jugador -300 unidades en X hacia la derecha (la serpiente mira hacia la derecha).
    }

    
    else if (this.cursors.up.isDown)          // Si se presiona la tecla "arriba" :
    {
  
        this.body.setVelocityY(-100);        // El jugador se desplaza a -100 unidades en Y hacia arriba.
        this.body.setVelocityX(0);          //  El desplazamiento en X se anula en cero, de lo contrario se produce un movimiento hacia arriba y en diagonal.
        this.body.rotation=0;              // Como la imagen inicial de la serpiente (Jugador) mira hacia arriba, se establece la rotacion en 0 de esta forma devuelve a la posicion incial cuando se presione la tecla arriba.
       
    }
  
    if (this.cursors.down.isDown )            // Si se presiona la tecla "abajo" :
    {
  
        this.body.setVelocityY(100);         // El jugador se desplaza a -100 unidades en Y hacia abajo.
        this.body.setVelocityX(0);          //  El desplazamiento en X se anula en cero, de lo contrario se produce un movimiento hacia abajo y en diagonal.
        this.body.rotation=600;            // Gira la imagen de la serpiente 600 unidades en Y es decir  hacia abajo (la serpiente mira hacia  abajo cuando presionamos la tecla abajo).

       
    }
    
  }

  
   frutaColision(body,frutas) {               

    frutas.disableBody(true, true);                 // Si se produce una colision entre el objeto body y los objetos frutas, estos ultimos se destruyen.

    
}






}


export default NivelUno;