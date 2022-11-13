import Phaser from "phaser";

class Escena extends Phaser.Scene {

  platforms = null;
  player = null;
  cursors = null;
  stars = null;
  score = null;
  scoreText = null;
  bombs = null;
  gameOver = null;
  x = null;

  preload() {
    this.load.image('sky', 'img/sky.png');
    this.load.image('ground', 'img/platform.png');
    this.load.image('star', 'img/star.png');
    this.load.image('bomb', 'img/bomb.png');
    this.load.spritesheet('dude',
      'img/dude.png', {
        frameWidth: 32,
        frameHeight: 48
      }
    );

  }

  create() {
    //creando el fondo
    this.add.image(400, 300, 'sky');

    //creando las plataformas
    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');

    //agregando la estrella y dude
    //al personaje se le asigna el sprite
    //this.add.image(400,300, 'star' );
    this.player = this.physics.add.sprite(100, 250, 'dude')

    //seteando rebote y el choque con los limites del canva
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    //se crean los movimientos (que seran utilizados en update)
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', {
        start: 0,
        end: 3
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{
        key: 'dude',
        frame: 4
      }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', {
        start: 5,
        end: 8
      }),
      frameRate: 10,
      repeat: -1
    });


    //agregando las estrellas 
    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 15,
      setXY: {
        x: 12,
        y: 0,
        stepX: 60
      }
    });

    // esto si genera el rebote del grupo
    this.stars.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });



    //rebote contra las plataformas
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.stars, this.platforms);



    this.cursors = this.input.keyboard.createCursorKeys();

    //choque de las estrellas con el jugador
    this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);



    //texto de puntaje
    this.scoreText = this.add.text(16, 16, 'score: 0', {
      fontSize: '32px',
      fill: '#000'
    });

    //agregando de bombas
    this.bombs = this.physics.add.group();

    //rebote contra las plataformas
    this.physics.add.collider(this.bombs, this.platforms);
    //choque de la bombas con el jugador
    this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);

  }

  update() {

    //movimientos segun el cursor del teclado
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play('turn');
    }

    //saltar si esta en el suelo y la tecla de cursos hacia arriba
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-200);
    }

  }

  //se llama desde collider entre el jugador y el 
  collectStar(player, star) {
    star.disableBody(true, true);
    this.score += 10;
    this.scoreText.setText('Score: ' + this.score)
    if (this.stars.countActive(true) === 0) {
      this.stars.children.iterate(function (child) {

        child.enableBody(true, child.x, 0, true, true);

      });

      var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
      var bomb = this.bombs.create(x, 16, 'bomb');
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)

    }

  }

  hitBomb(player, bomb) {
    this.physics.pause()
    this.player.setTint(0xff0000);
    this.player.anims.play('turn');
    this.gameOver = true;
  }

}

export default Escena;