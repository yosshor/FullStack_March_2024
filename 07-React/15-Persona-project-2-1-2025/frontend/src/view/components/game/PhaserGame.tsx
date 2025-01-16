import React, { useEffect } from "react";
import Phaser from 'phaser';
import space from '../../../assets/images/spaceship1.png';
import fire from '../../../assets/images/f.png';
import fireball from '../../../assets/images/utils/ball.png';
import explosion from '../../../assets/images/meteors/explosion.png';
import explosion1 from '../../../assets/images/meteors/explosion1.png';
import fireball1 from '../../../assets/images/meteors/fireball2.jpeg';
import fireball2 from '../../../assets/images/meteors/fireball3.jpeg';
import fireball3 from '../../../assets/images/meteors/fireball4.jpeg';
import asteroid from '../../../assets/images/meteors/asteroid.jpeg';
import asteroid1 from '../../../assets/images/meteors/asteroid2.png';

interface Props {
    onGameOver: (score: number) => void;
}

const PhaserGame: React.FC<Props> = ({ onGameOver }) => {
    
    let playerVelocity = 200;
    useEffect(() => {
        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            width: 1000,
            height: 800,
            physics: {
                default: 'arcade',
                arcade: { debug: false },
            },
            scene: {
                preload,
                create,
                update,
            },
        };

        const game = new Phaser.Game(config);

        let player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
        let cursors: Phaser.Types.Input.Keyboard.CursorKeys;
        let bullets: Phaser.Physics.Arcade.Group;
        let meteors: Phaser.Physics.Arcade.Group;
        let score = 1;
        let scoreText: Phaser.GameObjects.Text;

        function preload(this: Phaser.Scene): void {
            this.load.image('player', space);
            this.load.image('bullet', fire);
            this.load.image('meteor', fireball);
            this.load.image('explosion1', explosion1);
            this.load.image('meteor1', fireball1);
            this.load.image('meteor2', fireball2);
            this.load.image('meteor3', fireball3);
            this.load.image('meteor4', asteroid);
            this.load.image('meteor5', asteroid1);
            this.load.image('explosion', explosion);
        }

        function create(this: Phaser.Scene): void {
            // Create the player sprite
            player = this.physics.add.sprite(400, 1000, 'player').setCollideWorldBounds(true).setScale(0.5);

            // Initialize bullet and meteor groups
            bullets = this.physics.add.group();
            meteors = this.physics.add.group();

            // Array of meteor image keys
            const meteorKeys = ['explosion1', "meteor", 'meteor1', 'meteor2', 'meteor3', 'meteor4', 'meteor5', 'explosion'];

            // Add a timed event to spawn meteors
            this.time.addEvent({
                delay: 1000, // Spawn a meteor every 1000ms
                callback: () => {
                    const x = Phaser.Math.Between(50, 750); // Random horizontal position
                    const randomKey = Phaser.Utils.Array.GetRandom(meteorKeys); // Pick a random meteor key
                    const meteor = meteors.create(x, 0, randomKey); // Create the meteor
                    meteor.setVelocityY(playerVelocity); // Set its velocity
                    // if (score < 100) meteor.setVelocityY(playerVelocity); // Set its velocity
                    // else if (score >= 100 && score < 200) meteor.setVelocityY(300);
                    // else if (score >= 200 && score < 300) meteor.setVelocityY(400);
                    meteor.setOrigin(0.5, 0.5); // Ensure it scales from the center
                    meteor.setScale(0.5); // Scale it to 50% of its original size

                    // Update physics body if needed
                    meteor.body.setSize(meteor.width, meteor.height);
                },
                loop: true, // Repeat the event
            });

            if (this.input.keyboard) {
                cursors = this.input.keyboard.createCursorKeys();
            }
            this.input.keyboard?.on('keydown-SPACE', () => {
                if (score < 100) {
                    // Fire a single bullet when the score is under 100
                    const bullet = bullets.create(player.x, player.y - 20, 'bullet');
                    bullet.setVelocityY(-playerVelocity).setScale(0.1);
                } else {
                    // Fire three bullets when the score is 100 or higher
                    const centralBullet = bullets.create(player.x, player.y - 20, 'bullet');
                    centralBullet.setVelocityY(-playerVelocity).setScale(0.15);

                    const leftBullet = bullets.create(player.x - 20, player.y - 20, 'bullet');
                    leftBullet.setVelocityY(-playerVelocity).setScale(0.15);

                    const rightBullet = bullets.create(player.x + 20, player.y - 20, 'bullet');
                    rightBullet.setVelocityY(-playerVelocity).setScale(0.15);
                }
            });

            // Add overlap event for bullets hitting meteors
            this.physics.add.overlap(bullets, meteors, (bullet, meteor) => {
                bullet.destroy();
                meteor.destroy();
                score += 10;
                scoreText.setText(`Score: ${score}`);
            });

            // Add overlap event for meteors catching the player
            this.physics.add.overlap(player, meteors, (player, meteor) => {
                meteor.destroy(); // Destroy the meteor
                score -= 10; // Decrease score when a meteor hits the player
                score = Math.max(0, score); // Prevent score from going below 0
                scoreText.setText(`Score: ${score}`); // Update the score display
            });

            scoreText = this.add.text(10, 10, 'Score: 0', { fontSize: '20px', color: '#fff' });
        }

        function update(this: Phaser.Scene): void {

            // Update player velocity based on score
            if (score >= 100 && score < 200) {
                playerVelocity = 300;
            }
            else if (score >= 200 && score < 300) {
                playerVelocity = 400;
            }
            else if (score >= 300 && score < 400) {
                playerVelocity = 500;
            }
            else if (score >= 400 && score < 500) {
                playerVelocity = 600;
            }
            console.log(score, playerVelocity);


            if (cursors.left?.isDown) player.setVelocityX(-playerVelocity);
            else if (cursors.right?.isDown) player.setVelocityX(playerVelocity);
            else player.setVelocityX(0);


            // Check if the score is zero and end the game
            if (score <= 0) {
                game.destroy(true); // Destroy the game
                onGameOver(score); // Call the game over callback with the final score
            }
        }

        return () => {
            game.destroy(true);
        };
    }, [onGameOver]);

    return <div id="phaser-container" />;
};

export default PhaserGame;
