import React, { useEffect } from "react";
import Phaser from 'phaser';
import './PhaserGame.scss';
import { update } from '../../../controllers/game/update';
import { create } from '../../../controllers/game/create';
import { preload } from '../../../controllers/game/preload';


interface Props {
    onGameOver: (score: number) => void;
}

const PhaserGame: React.FC<Props> = ({ onGameOver }) => {
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
        return () => game.destroy(true);
    }, [onGameOver]);

    return <div id="phaser-container" />;
};

export default PhaserGame;
