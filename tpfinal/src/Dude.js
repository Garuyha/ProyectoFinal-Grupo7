import React from "react";
import Phaser from "phaser";

class Dude extends Phaser.Scene {
  constructor() {
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
          debug: false,
        },
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    var game = new Phaser.Game(config);

    function preload() {
      //carga las imagenes
      this.load.image("sky", "assets/sky.png");
      this.load.image("ground", "assets/platform.png");
      this.load.image("star", "assets/star.png");
      this.load.image("bomb", "assets/bomb.png");
      this.load.spritesheet("dude", "assets/dude.png", {
        frameWidth: 32,
        frameHeight: 48,
      });
    }
    //VARIABLES//////////////////////////
    var player;
    var stars;
    var platforms;
    var cursors;
    var score = 0;
    var scoreText;
    var bombs;

    function create() {
      //agrega el fondo de un cielo
      this.add.image(400, 300, "sky");
      //agrega una estrella
      this.add.image(400, 300, "star");

      //crea un nuevo grupo de elementos estáticos con física y lo asigna a la variable local platforms
      platforms = this.physics.add.staticGroup();

      //crea las plataformas
      platforms.create(400, 568, "ground").setScale(2).refreshBody();

      platforms.create(600, 400, "ground");
      platforms.create(50, 250, "ground");
      platforms.create(750, 220, "ground");

      //crea el sprite
      player = this.physics.add.sprite(100, 450, "dude");

      player.setBounce(0.2);
      //añade fisica
      player.setCollideWorldBounds(true);

      //crea animacion de caminar a la izquierda
      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });

      //al estar de frente
      this.anims.create({
        key: "turn",
        frames: [{ key: "dude", frame: 4 }],
        frameRate: 20,
      });

      //a la derecha
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
      });

      //el jugador colisionará con las plataformas
      this.physics.add.collider(player, platforms);

      //la linea crea un objeto cursors
      cursors = this.input.keyboard.createCursorKeys();

      //crea estrellas
      stars = this.physics.add.group({
        key: "star",
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 },
      });

      stars.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      });

      //añade colision a las estrellas
      this.physics.add.collider(stars, platforms);
      //comprueba si el personaje se superpone a alguna estrella
      this.physics.add.overlap(player, stars, collectStar, null, this);

      //el texto de puntuacion se configura con esta linea
      scoreText = this.add.text(16, 16, "score: 0", {
        fontSize: "32px",
        fill: "#000",
      });

      //crea  las bombas
      bombs = this.physics.add.group();
      //las bombas colisionan con las plataformas
      this.physics.add.collider(bombs, platforms);
      //las bombas colisionan con el jugador
      this.physics.add.collider(player, bombs, hitBomb, null, this);
    }

    function update() {
      //si se presiona la flecha izquierda el jugador va a la izquierda
      if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play("left", true);
      } else if (cursors.right.isDown) {
        //lo mismo para la  derecha
        player.setVelocityX(160);

        player.anims.play("right", true);
      } else {
        player.setVelocityX(0);

        player.anims.play("turn");
      }

      if (cursors.up.isDown && player.body.touching.down) {
        //se alade la capacidad para saltar
        player.setVelocityY(-330);
      }
    }

    function collectStar(player, star) {
      //la estrella desaparece cuando el jugador pasa sobre ella
      star.disableBody(true, true);

      //se suman 10 puntos al contador cuando el jugador "recoge" la estrella
      score += 10;
      scoreText.setText("Score: " + score);

      if (stars.countActive(true) === 0) {
        stars.children.iterate(function (child) {
          child.enableBody(true, child.x, 0, true, true);
        });

        var x =
          player.x < 400
            ? Phaser.Math.Between(400, 800)
            : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, "bomb");
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
      }
    }

    //esta funcion hace que cuando el jugador colisione con una bomba, se active el game over
    function hitBomb(player, bomb) {
      this.physics.pause();
      //el sprite del jugador se tiñe de rojo
      player.setTint(0xff0000);
      //el sprite muestra el frame donde esta de frente
      player.anims.play("turn");
      //se activa el game over
      gameOver = true;
    }
  }
}
