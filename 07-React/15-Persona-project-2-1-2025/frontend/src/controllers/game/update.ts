import Phaser from "phaser";

export function update(this: Phaser.Scene): void {
  // Get the values from this.data
  let player = this.data.get("player") as Phaser.Physics.Arcade.Sprite;
  let cursors = this.data.get(
    "cursors"
  ) as Phaser.Types.Input.Keyboard.CursorKeys;
  let playerVelocity = this.data.get("playerVelocity") as number;
  let delay = this.data.get("delay") as number;
  let lives = this.data.get("lives") as number;
  let score = this.data.get("score") as number;
  const onGameOver = this.data.get("onGameOver") as (score: number) => void;

  // Update player velocity based on score
  if (score >= 100 && score < 200) {
    playerVelocity = 300;
    delay = 950;
  } else if (score >= 200 && score < 300) {
    playerVelocity = 400;
    delay = 900;
  } else if (score >= 300 && score < 400) {
    playerVelocity = 500;
    delay = 850;
  } else if (score >= 400 && score < 500) {
    playerVelocity = 600;
    delay = 800;
  } else if (score >= 500 && score < 600) {
    playerVelocity = 700;
    delay = 750;
  } else if (score >= 600 && score < 700) {
    playerVelocity = 800;
    delay = 700;
  }

  // Store the updated values back in this.data
  this.data.set("playerVelocity", playerVelocity);
  this.data.set("delay", delay);

  // Player movement
  if (cursors.left?.isDown) {
    player.setVelocityX(-playerVelocity);
  } else if (cursors.right?.isDown) {
    player.setVelocityX(playerVelocity);
  } else {
    player.setVelocityX(0);
  }
  console.log(
    "Player Velocity:",
    playerVelocity,
    "Delay:",
    delay,
    "Score:",
    score,
    "Lives:",
    lives
  );

  if (lives <= 0 || score < 0) {
    this.scene.stop(); // Stop the scene
    // game.destroy(true); // Destroy the game
    onGameOver(score); // Call the game over callback with the final score
  }
}
