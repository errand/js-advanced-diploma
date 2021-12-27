import { generateTeam, characterPosition } from './generators';
import { getMoveArea, getAttackArea } from './utils';
import themes from './themes';
import cursors from './cursors';
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
    this.enemyCells = [];
    this.userPositions = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];
    this.enemyPositions = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];
    this.player = 1;
    this.positions = [];
    this.moveArea = [];
    this.attackArea = [];
    this.selected = undefined;
    this.level = 1;
    this.score = 0;
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    this.gamePlay.addNewGameListener(this.onNewGameClick.bind(this));
    this.gamePlay.addSaveGameListener(this.onSaveGameClick.bind(this));
    this.gamePlay.addLoadGameListener(this.onLoadGameClick.bind(this));
  }

  onCellClick(index) {
    const clickedPosition = this.positions.find(character => character.position === index);

    this.enemyCells = this.positions.filter(cell => (
      cell.character.type === 'daemon' || cell.character.type === 'undead' || cell.character.type === 'vampire')).map((cell) => cell.position);

    if (clickedPosition !== undefined && !this.enemyCells.includes(index)) {
      this.positions.forEach(character => this.gamePlay.deselectCell(character.position));
      this.gamePlay.selectCell(index);
      this.selected = clickedPosition;
      this.moveArea = getMoveArea(this.selected.position, this.selected.character.steps, this.gamePlay.boardSize);
      this.attackArea = getAttackArea(this.selected.position, this.selected.character.attackRadius, this.gamePlay.boardSize);
    } else if (this.moveArea.includes(index) && !this.enemyCells.includes(index)) {
      this.gamePlay.deselectCell(this.selected.position);
      this.selected.position = index;
      this.gamePlay.redrawPositions(this.positions);
      this.gamePlay.selectCell(index);
      this.enemyMove();
    } else if (clickedPosition && !(this.attackArea.includes(index))) {
      GamePlay.showError('Please choose one of your characters');
    }

    if (this.selected && this.attackArea.includes(index) && this.enemyCells.includes(index)) {
      const target = clickedPosition;
      this.doAttack(index, this.selected.character, target.character);
      this.enemyMove();
      this.checkGameStatus();
    }
  }

  onCellEnter(index) {
    const currentPosition = this.positions.find((element) => element.position === index);

    const icons = {
      level: '\u{1F396}',
      attack: '\u{2694}',
      defence: '\u{1F6E1}',
      health: '\u{2764}',
    };

    if (currentPosition) {
      const message = `${icons.level}${currentPosition.character.level}${icons.attack}${currentPosition.character.attack}${icons.defence}${currentPosition.character.defence}${icons.health}${currentPosition.character.health}`;
      this.gamePlay.showCellTooltip(message, index);
      this.gamePlay.setCursor(cursors.pointer);

      if (['vampire', 'undead', 'daemon'].includes(currentPosition.character.type)) {
        this.gamePlay.setCursor(cursors.notallowed);
      }
    } else {
      this.gamePlay.setCursor(cursors.auto);
    }

    if (this.selected && !currentPosition) {
      this.moveArea = getMoveArea(this.selected.position, this.selected.character.steps, this.gamePlay.boardSize);
      if (this.moveArea.includes(index)) {
        this.gamePlay.selectCell(index, 'green');
        this.gamePlay.setCursor(cursors.pointer);
      }
    }

    if (this.selected && currentPosition && ['vampire', 'undead', 'daemon'].includes(currentPosition.character.type)) {
      this.attackArea = getAttackArea(this.selected.position, this.selected.character.attackRadius, this.gamePlay.boardSize);
      if (this.attackArea.includes(index)) {
        this.gamePlay.selectCell(index, 'red');
        this.gamePlay.setCursor(cursors.crosshair);
      }
    }
  }

  onCellLeave(index) {
    this.gamePlay.hideCellTooltip(index);
    if (this.selected !== undefined && this.selected.position !== index) {
      this.gamePlay.deselectCell(index);
    }
  }

  onNewGameClick() {
    this.positions = [];
    this.level = 1;
    this.score = 0;
    this.userTeam = [];
    this.enemyTeam = [];
    this.deselectCells();
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
    // eslint-disable-next-line no-restricted-syntax
    for (const character of this.positions) {
      if (index === character.position) {
        return true;
      }
    }
    return false;
  }

  enemyMove() {
    this.gamePlay.deselectCell(this.selected.position);
    this.player = 0;
    this.enemyTeam = this.positions.filter((char) => char.character.type === 'daemon' || char.character.type === 'undead' || char.character.type === 'vampire');
    this.userTeam = this.positions.filter((element) => ['bowman', 'swordsman', 'magician'].includes(element.character.type));

    const randomEnemyChar = () => this.enemyTeam[Math.floor(Math.random() * this.enemyTeam.length)];

    if (randomEnemyChar()) {
      this.moveArea = getMoveArea(randomEnemyChar().position, randomEnemyChar().character.steps, this.gamePlay.boardSize);
      this.attackArea = getAttackArea(randomEnemyChar().position, randomEnemyChar().character.attackRadius, this.gamePlay.boardSize);

      // eslint-disable-next-line no-restricted-syntax
      for (const user of this.userTeam) {
        if (this.attackArea.indexOf(user.position) !== -1) {
          this.doAttack(user.position, randomEnemyChar().character, user.character);
          this.player = 1;
          return;
        }

        randomEnemyChar().position = this.getRandomPosition(this.moveArea);
        this.gamePlay.redrawPositions(this.positions);
        this.player = 1;
        return;
      }
    }
  }

  doAttack(index, activeChar, target) {
    const damageScores = Math.max(activeChar.attack - target.defence, activeChar.attack * 0.1);
    // eslint-disable-next-line no-param-reassign
    target.health -= damageScores;
    if (target.health <= 0) {
      // eslint-disable-next-line no-param-reassign
      target.health = 0;
      this.positions = this.positions.filter((char) => char.position !== index);
    }
    this.gamePlay.deselectCell(index);
    this.gamePlay.showDamage(index, damageScores).then(() => {
      this.checkGameStatus();
      this.gamePlay.redrawPositions(this.positions);
    });
  }

  checkGameStatus() {
    let scoreTotal = 0;
    this.userTeam.forEach(character => {
      scoreTotal += character.character.health;
    });

    this.score = scoreTotal;

    this.enemyTeam = this.positions.filter((element) => ['vampire', 'undead', 'daemon'].includes(element.character.type));
    this.userTeam = this.positions.filter((element) => ['bowman', 'swordsman', 'magician'].includes(element.character.type));

    if (this.enemyTeam.length === 0 && this.level < 4) {
      this.level += 1;

      for (const user of this.userTeam) {
        user.character.levelUp();
      }

      this.newLevel();
    } else if (this.userTeam.length === 0) {
      GamePlay.showMessage('Game over');
      this.gamePlay.cellClickListeners = [];
      this.gamePlay.cellEnterListeners = [];
      this.gamePlay.cellLeaveListeners = [];
    } else if (this.level >= 4 && this.enemyTeam.length === 0) {
      GamePlay.showMessage(`You win! Your score is ${this.score}`);
      this.gamePlay.cellClickListeners = [];
      this.gamePlay.cellEnterListeners = [];
      this.gamePlay.cellLeaveListeners = [];
    }
  }

  newLevel() {
    if (this.level === 2) {
      this.gamePlay.drawUi(themes.desert);
      this.gamePlay.redrawPositions(this.teamNewLevel(this.userPositions, this.userTypes, 1, 1));
      this.gamePlay.redrawPositions(this.teamNewLevel(this.enemyPositions, this.aiTypes, 2, this.userTeam.length + 1));
    }
    if (this.level === 3) {
      this.gamePlay.drawUi(themes.arctic);
      this.gamePlay.redrawPositions(this.teamNewLevel(this.userPositions, this.userTypes, 2, 2));
      this.gamePlay.redrawPositions(this.teamNewLevel(this.enemyPositions, this.aiTypes, 3, this.userTeam.length + 2));
    }
    if (this.level === 4) {
      this.gamePlay.drawUi(themes.mountain);
      this.gamePlay.redrawPositions(this.teamNewLevel(this.userPositions, this.userTypes, 3, 2));
      this.gamePlay.redrawPositions(this.teamNewLevel(this.enemyPositions, this.aiTypes, 4, this.userTeam.length + 2));
    }

    this.gamePlay.redrawPositions(this.positions);
  }

  teamNewLevel(teamPositions, teamArr, level, charAmount) {
    const team = generateTeam(teamArr, level, charAmount);
    for (const char of team) {
      this.positions.push(new PositionedCharacter(char, this.getRandomPosition(teamPositions)));
    }
    return this.positions;
  }

  deselectCells() {
    this.gamePlay.cells.forEach((cell, index) => {
      // eslint-disable-next-line no-unused-expressions
      cell.classList.contains('selected') ? this.gamePlay.deselectCell(index) : null;
    });
  }

  onSaveGameClick() {
    const currentState = {
      level: this.level,
      activePlayer: this.player,
      positions: this.positions,
      score: this.score,
    };
    this.stateService.save(GameState.from(currentState));
    GamePlay.showMessage('Game Saved');
  }

  onLoadGameClick() {
    const loadedState = this.stateService.load();
    if (loadedState) {
      this.level = loadedState.level;
      this.player = loadedState.activePlayer;
      this.positions = loadedState.positions;
      this.score = loadedState.score;
      switch (loadedState.level) {
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
