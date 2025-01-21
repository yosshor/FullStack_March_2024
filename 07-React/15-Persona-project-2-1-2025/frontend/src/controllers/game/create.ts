import Phaser from "phaser";

export function create(
  this: Phaser.Scene,
  params: {
    windowWidth: number;
    windowHeight: number;
    playerVelocity: number;
    delay: number;
    onGameOver: (score: number) => void;
  }
) {
  const { windowWidth, windowHeight, playerVelocity, delay, onGameOver } =
    params;

  // Player
  const player = this.physics.add
      .sprite(windowWidth / 2, windowHeight - 100, "player")
      .setCollideWorldBounds(true)
      .setScale(0.5);
  const bullets = this.physics.add.group();
  const meteors = this.physics.add.group();

  let score = 0;
  let lives = 3;

  const cursors = this.input.keyboard!.createCursorKeys();
  let scoreText = this.add.text(10, 10, `Score: ${score}`, {
    fontSize: "30px",
    color: "#fff",
  });
  let liveText = this.add.text(10, 50, `Lives: ${lives}`, {
    fontSize: "30px",
    color: "#fff",
  });

  const video = this.add.video(500, 400, "backgroundVideo"); // Center the video
  video.setDisplaySize(windowWidth, windowHeight); // Scale the video to fit canvas
  video.play(true); // Play the video on loop
  video.setMute(true); // Mute the video if needed

  // Ensure the video renders behind all other objects
  video.setDepth(-80);

  // Array of meteor image keys
  const meteorKeys = [
    "explosion1",
    "meteor",
    "meteor1",
    "meteor2",
    "meteor3",
    "meteor4",
    "meteor5",
    "explosion",
  ];

  // Add the sound object
  const explosionSound = this.sound.add("explosionSound");
  const gunSound = this.sound.add("fireSound");
  const ohhSound = this.sound.add("ohhSound");

  // Add a timed event to spawn meteors
  this.time.addEvent({
    delay: delay, // Spawn a meteor every for example 1000ms
    callback: () => {
      const x = Phaser.Math.Between(50, windowWidth); // Random horizontal position
      const randomKey = Phaser.Utils.Array.GetRandom(meteorKeys); // Pick a random meteor key
      const meteor = meteors.create(x, 0, randomKey); // Create the meteor
      let playerVelocity = this.data.get("playerVelocity") as number;
      meteor.setVelocityY(playerVelocity); // Set its velocity
      meteor.setOrigin(0.5, 0.5); // Ensure it scales from the center
      meteor.setScale(0.5); // Scale it to 50% of its original size

      // Update physics body if needed
      meteor.body.setSize(meteor.width, meteor.height);
    },
    loop: true, // Repeat the event
  });

  this.input.keyboard?.on("keydown-SPACE", () => {
    if (score < 100) {
      // Fire a single bullet when the score is under 100
      const bullet = bullets.create(player.x, player.y - 20, "bullet");
      bullet.setVelocityY(-playerVelocity).setScale(0.1);
    } else {
      // Fire three bullets when the score is 100 or higher
      let playerVelocity = this.data.get("playerVelocity") as number;
      console.log("player velocity", playerVelocity);

      const centralBullet = bullets.create(player.x, player.y - 20, "bullet");
      centralBullet.setVelocityY(-playerVelocity).setScale(0.15);

      const leftBullet = bullets.create(player.x - 20, player.y - 20, "bullet");
      leftBullet.setVelocityY(-playerVelocity).setScale(0.15);

      const rightBullet = bullets.create(
        player.x + 20,
        player.y - 20,
        "bullet"
      );
      rightBullet.setVelocityY(-playerVelocity).setScale(0.15);
    }
    // Play the sound effect
    gunSound.play({ volume: 0.3, loop: false });
  });

  // Add overlap event for bullets hitting meteors
  this.physics.add.overlap(bullets, meteors, (bullet, meteor) => {
    bullet.destroy();
    meteor.destroy();
    // let score = this.data.get("score") as number;
    score += 10; // Increment the score
    this.data.set("score", score); // Update the score in this.data
    scoreText.setText(`Score: ${score}`); // Update the on-screen score

    // Play the sound effect
    explosionSound.play();
  });

  // Add overlap event for meteors catching the player
  this.physics.add.overlap(player, meteors, (player, meteor) => {
    meteor.destroy(); // Destroy the meteor
    // let score = this.data.get("score") as number;
    if (score !== 0) {
      score -= 10;
      this.data.set("score", score); // Update the score in this.data
    }

     // Decrease score when a meteor hits the player
    score = Math.max(0, score); // Prevent score from going below 0
    lives -= 1;
    lives = Math.max(0, lives);
    this.data.set("lives", lives); // Update the score in this.data

    scoreText.setText(`Score: ${score}`); // Update the score display
    liveText.setText(`Live: ${lives}`); // Update the score display
    ohhSound.play(); // Play the sound effect
  });

  this.data.set("player", player);
  this.data.set("cursors", cursors);
  this.data.set("bullets", bullets);
  this.data.set("meteors", meteors);
  this.data.set("score", score);
  this.data.set("lives", lives);
  this.data.set("playerVelocity", playerVelocity);
  this.data.set("delay", delay);
  this.data.set("scoreText", scoreText);
  this.data.set("liveText", liveText);
  this.data.set("onGameOver", onGameOver);
}
