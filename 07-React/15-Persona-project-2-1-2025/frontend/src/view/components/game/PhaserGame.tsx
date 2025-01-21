import React, { useEffect } from "react";
import Phaser from 'phaser';
// import space from '../../../assets/images/spaceship1.png';
// import fire from '../../../assets/images/f.png';
// import fireball from '../../../assets/images/meteors/ball.png';
// import explosion from '../../../assets/images/meteors/explosion.png';
// import explosion1 from '../../../assets/images/meteors/explosion1.png';
// import fireball1 from '../../../assets/images/meteors/fireball2.png';
// import fireball2 from '../../../assets/images/meteors/fireball3.png';
// import fireball3 from '../../../assets/images/meteors/fireball4.png';
// import asteroid from '../../../assets/images/meteors/asteroid.png';
// import asteroid1 from '../../../assets/images/meteors/asteroid2.png';
// import starsDown from '../../../assets/images/vid/starsVid2.mp4';
// import explosionSound from '../../../assets/images/sounds/explosion-sound.mp3';
// import fireSound from '../../../assets/images/sounds/gun.mp3';
// import uhohh from '../../../assets/images/sounds/uh-ohh.mp3';
import './PhaserGame.scss';
import { update } from '../../../controllers/game/update';
import { create } from '../../../controllers/game/create';
import { preload } from '../../../controllers/game/preload';


interface Props {
    onGameOver: (score: number) => void;
}

const PhaserGame: React.FC<Props> = ({ onGameOver }) => {

    // let playerVelocity = 200;
    // let overlapTimes = 3;
    // let delay = 1000;
    let windowWidth = (window.innerWidth + 10) * 0.8;
    let windowHeight = (window.innerHeight + 10) * 0.8;

    useEffect(() => {
        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            width: windowWidth,
            height: windowHeight,
            physics: {
                default: 'arcade',
                arcade: { debug: false },
            },
            dom: {
                createContainer: true,
            },

            scene: {
                preload,
                create: function (this: Phaser.Scene) {
                    create.call(this, {
                        windowWidth,
                        windowHeight,
                        playerVelocity: 200,
                        delay: 1000,
                        onGameOver,
                    });
                },
                update,
            },
        };

        const game = new Phaser.Game(config);

        // let player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
        // let cursors: Phaser.Types.Input.Keyboard.CursorKeys;
        // let bullets: Phaser.Physics.Arcade.Group;
        // let meteors: Phaser.Physics.Arcade.Group;
        // let score = 0;
        // let scoreText: Phaser.GameObjects.Text;
        // let liveText: Phaser.GameObjects.Text;


        // function preload(this: Phaser.Scene): void {
        //     this.load.video('backgroundVideo', starsDown); // Load the video
        //     this.load.image('player', space);
        //     this.load.image('bullet', fire);
        //     this.load.image('meteor', fireball);
        //     this.load.image('explosion1', explosion1);
        //     this.load.image('meteor1', fireball1);
        //     this.load.image('meteor2', fireball2);
        //     this.load.image('meteor3', fireball3);
        //     this.load.image('meteor4', asteroid);
        //     this.load.image('meteor5', asteroid1);
        //     this.load.image('explosion', explosion);
        //     this.load.audio('explosionSound', explosionSound); // Load the sound effect
        //     this.load.audio('fireSound', fireSound); // Load the sound effect
        //     this.load.audio('ohhSound', uhohh); // Load the sound effect




        // }

        // function create(this: Phaser.Scene): void {

        //     const video = this.add.video(500, 400, 'backgroundVideo'); // Center the video
        //     video.setDisplaySize(windowWidth, windowHeight); // Scale the video to fit canvas
        //     video.play(true); // Play the video on loop
        //     video.setMute(true); // Mute the video if needed
        //     // Ensure the video renders behind all other objects
        //     video.setDepth(-80);

        //     // Create the player sprite
        //     player = this.physics.add.sprite(400, 1000, 'player').setCollideWorldBounds(true).setScale(0.5);

        //     // Initialize bullet and meteor groups
        //     bullets = this.physics.add.group();
        //     meteors = this.physics.add.group();

        //     // Array of meteor image keys
        //     const meteorKeys = ['explosion1', "meteor", 'meteor1', 'meteor2', 'meteor3', 'meteor4', 'meteor5', 'explosion'];

        //     // Add the sound object
        //     const explosionSound = this.sound.add('explosionSound');
        //     const gunSound = this.sound.add('fireSound');
        //     const ohhSound = this.sound.add('ohhSound');

        //     // Add a timed event to spawn meteors
        //     this.time.addEvent({
        //         delay: delay, // Spawn a meteor every for example 1000ms
        //         callback: () => {
        //             const x = Phaser.Math.Between(50, windowWidth); // Random horizontal position
        //             const randomKey = Phaser.Utils.Array.GetRandom(meteorKeys); // Pick a random meteor key
        //             const meteor = meteors.create(x, 0, randomKey); // Create the meteor
        //             meteor.setVelocityY(playerVelocity); // Set its velocity
        //             meteor.setOrigin(0.5, 0.5); // Ensure it scales from the center
        //             meteor.setScale(0.5); // Scale it to 50% of its original size

        //             // Update physics body if needed
        //             meteor.body.setSize(meteor.width, meteor.height);
        //         },
        //         loop: true, // Repeat the event
        //     });

        //     if (this.input.keyboard) {
        //         cursors = this.input.keyboard.createCursorKeys();
        //     }
        //     this.input.keyboard?.on('keydown-SPACE', () => {
        //         if (score < 100) {
        //             // Fire a single bullet when the score is under 100
        //             const bullet = bullets.create(player.x, player.y - 20, 'bullet');
        //             bullet.setVelocityY(-playerVelocity).setScale(0.1);
        //         } else {
        //             // Fire three bullets when the score is 100 or higher
        //             const centralBullet = bullets.create(player.x, player.y - 20, 'bullet');
        //             centralBullet.setVelocityY(-playerVelocity).setScale(0.15);

        //             const leftBullet = bullets.create(player.x - 20, player.y - 20, 'bullet');
        //             leftBullet.setVelocityY(-playerVelocity).setScale(0.15);

        //             const rightBullet = bullets.create(player.x + 20, player.y - 20, 'bullet');
        //             rightBullet.setVelocityY(-playerVelocity).setScale(0.15);
        //         }
        //         // Play the sound effect
        //         gunSound.play({ volume: 0.3, loop: false });
        //     });

        //     // Add overlap event for bullets hitting meteors
        //     this.physics.add.overlap(bullets, meteors, (bullet, meteor) => {
        //         bullet.destroy();
        //         meteor.destroy();
        //         score += 10;
        //         scoreText.setText(`Score: ${score}`);

        //         // Play the sound effect
        //         explosionSound.play();
        //     });

        //     // Add overlap event for meteors catching the player
        //     this.physics.add.overlap(player, meteors, (player, meteor) => {
        //         meteor.destroy(); // Destroy the meteor
        //         if (score !== 0) score -= 10; // Decrease score when a meteor hits the player
        //         score = Math.max(0, score); // Prevent score from going below 0
        //         overlapTimes -= 1;
        //         overlapTimes = Math.max(0, overlapTimes);
        //         scoreText.setText(`Score: ${score}`); // Update the score display
        //         liveText.setText(`Live: ${overlapTimes}`); // Update the score display
        //         ohhSound.play(); // Play the sound effect
        //     });

        //     scoreText = this.add.text(10, 10, `Score: ${score}`, { fontSize: '30px', color: '#fff' });
        //     liveText = this.add.text(10, 50, `Live: ${overlapTimes}`, { fontSize: '30px', color: '#fff' });

        // }

        // function update(this: Phaser.Scene): void {

        //     // Update player velocity based on score
        //     if (score >= 100 && score < 200) {
        //         playerVelocity = 300;
        //         delay = 950;
        //     }
        //     else if (score >= 200 && score < 300) {
        //         playerVelocity = 400;
        //         delay = 900;
        //     }
        //     else if (score >= 300 && score < 400) {
        //         playerVelocity = 500;
        //         delay = 850;
        //     }
        //     else if (score >= 400 && score < 500) {
        //         playerVelocity = 600;
        //         delay = 800;
        //     }
        //     else if (score >= 500 && score < 600) {
        //         playerVelocity = 700;
        //         delay = 750;
        //     }
        //     else if (score >= 600 && score < 700) {
        //         playerVelocity = 800;
        //         delay = 700;
        //     }


        //     if (cursors.left?.isDown) player.setVelocityX(-playerVelocity);
        //     else if (cursors.right?.isDown) player.setVelocityX(playerVelocity);
        //     else player.setVelocityX(0);

        //     if (overlapTimes <= 0 || score < 0) {
        //         game.destroy(true); // Destroy the game
        //         onGameOver(score); // Call the game over callback with the final score
        //     }
        // }

        return () => game.destroy(true);
    }, [onGameOver]);

    return <div id="phaser-container" />;
};

export default PhaserGame;
