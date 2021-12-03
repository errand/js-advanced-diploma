/**
 * Entry point of app: don't change this
 */
import GamePlay from './GamePlay';
import GameController from './GameController';
import GameStateService from './GameStateService';

import Bowman from './characters/Bowman';

// don't write your code here

import { characterGenerator } from './generators';

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector('#game-container'));

const stateService = new GameStateService(localStorage);

const gameCtrl = new GameController(gamePlay, stateService);
gameCtrl.init();

const char = characterGenerator([Bowman], 2).next().value;
console.log(char);

const bowman = new Bowman(100);
console.log(bowman);
