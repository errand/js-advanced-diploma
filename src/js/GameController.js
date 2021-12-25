import { generateTeam, characterPosition } from './generators';
import themes from './themes';
import PositionedCharacter from './PositionedCharacter';
import Bowman from './characters/Bowman';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Vampire from './characters/Vampire';
import Undead from './characters/Undead';
import Daemon from './characters/Daemon';
import GameState from './GameState';
import GamePlay from './GamePlay';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.userTypes = [Bowman, Swordsman, Magician];
    this.aiTypes = [Vampire, Undead, Daemon];
    this.userPositions = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];
    this.enemyPositions = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];
    this.player = 'user';
    this.positions = [];
    this.state = {};
    this.level = 1;
    this.score = 0;
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    this.gamePlay.addNewGameListener(this.onNewGameClick.bind(this));
    this.gamePlay.addSaveGameListener(this.onSaveGameClick.bind(this));
    this.gamePlay.addLoadGameListener(this.onLoadGameClick.bind(this));
  }

  onCellClick(index) {
    console.log(index);
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }

  onNewGameClick() {
    this.positions = [];
    this.level = 1;
    this.score = 0;
    this.gamePlay.redrawPositions(this.generatePositions(this.userPositions, this.userTypes.slice(0, 2)));
    this.gamePlay.redrawPositions(this.generatePositions(this.enemyPositions, this.aiTypes));
  }

  generatePositions(positions, types) {
    const team = generateTeam(types, 1, 2);
    [...team].forEach(character => {
      const pos = this.getRandomPosition(positions);
      const char = new PositionedCharacter(character, pos);
      this.positions.push(char);
    });
    return this.positions;
  }

  getRandomPosition(positions) {
    let index = characterPosition(positions).next().value;
    while (this.checkPosition(index)) {
      index = characterPosition(positions).next().value;
    }
    return index;
  }

  checkPosition(index) {
    for (const pos of this.positions) {
      if (index === pos.position) {
        return true;
      }
    }
    return false;
  }

  onSaveGameClick() {
    const savedGame = {
      level: this.level,
      activePlayer: this.player,
      position: this.positionss,
      score: this.score,
    };
    this.stateService.save(GameState.from(savedGame));
    console.log(savedGame);
    GamePlay.showMessage('Saved');
  }

  onLoadGameClick() {
    const loaded = this.stateService.load();
    if (loaded) {
      this.level = loaded.level;
      this.player = loaded.activePlayer;
      this.positions = loaded.position;
      this.scores = loaded.scores;
      switch (loaded.level) {
        case 1:
          this.gamePlay.drawUi(themes.prairie);
          break;
        case 2:
          this.gamePlay.drawUi(themes.desert);
          break;
        case 3:
          this.gamePlay.drawUi(themes.arctic);
          break;
        case 4:
          this.gamePlay.drawUi(themes.mountain);
          break;
        default:
          this.gamePlay.drawUi(themes.prairie);
          break;
      }
    } else {
      GamePlay.showError('Something wrong...');
    }
    this.gamePlay.redrawPositions(this.positions);
  }
}
