/**
 * Entry point of app: don't change this
 */
import GamePlay from './GamePlay';
import GameController from './GameController';
import GameStateService from './GameStateService';

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector('#game-container'));

const stateService = new GameStateService(localStorage);

const gameCtrl = new GameController(gamePlay, stateService);
gameCtrl.init();

// don't write your code here


import { characterGenerator } from './generators';

console.log(characterGenerator(['Bowman', 'Mage'], 2).next());

//import Character from './Character';
//const char = new Character(100);

import Bowman from './characters/Bowman';
const bowman = new Bowman(100);
console.log(bowman)
