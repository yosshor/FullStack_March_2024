import space from '../../assets/images/spaceship1.png';
import fire from '../../assets/images/f.png';
import fireball from '../../assets/images/meteors/ball.png';
import explosion from '../../assets/images/meteors/explosion.png';
import explosion1 from '../../assets/images/meteors/explosion1.png';
import fireball1 from '../../assets/images/meteors/fireball2.png';
import fireball2 from '../../assets/images/meteors/fireball3.png';
import fireball3 from '../../assets/images/meteors/fireball4.png';
import asteroid from '../../assets/images/meteors/asteroid.png';
import asteroid1 from '../../assets/images/meteors/asteroid2.png';
import starsDown from '../../assets/images/vid/starsVid2.mp4';
import explosionSound from '../../assets/images/sounds/explosion-sound.mp3';
import fireSound from '../../assets/images/sounds/gun.mp3';
import uhohh from '../../assets/images/sounds/uh-ohh.mp3';

export function preload(this: Phaser.Scene): void {
    this.load.video('backgroundVideo', starsDown); // Load the video
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
    this.load.audio('explosionSound', explosionSound); // Load the sound effect
    this.load.audio('fireSound', fireSound); // Load the sound effect
    this.load.audio('ohhSound', uhohh); // Load the sound effect




}