/**
 * Entry point of app: don't change this
 */
import GamePlay from './GamePlay';
import GameController from './GameController';
import GameStateService from './GameStateService';
import { generateTeam, characterPosition } from './generators';
import GameState from './GameState';

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector('#game-container'));

const stateService = new GameStateService(localStorage);

const gameCtrl = new GameController(gamePlay, stateService);
gameCtrl.init();

// don't write your code here

console.log(GameState.playerCells);
