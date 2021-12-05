import { generateTeam } from './generators';
import PositionedCharacter from './PositionedCharacter';
import Bowman from './characters/Bowman';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Vampire from './characters/Vampire';
import Undead from './characters/Undead';
import Daemon from './characters/Daemon';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.userTypes = [Bowman, Swordsman, Magician];
    this.aiTypes = [Vampire, Undead, Daemon];
    this.userTeamPositions = [];
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi('prairie');
    this.userTeam = generateTeam([Bowman, Swordsman], 1, 2);
    this.aiTeam = generateTeam(this.aiTypes, 1, 2);
    this.userTeam.forEach(member => {
      this.userTeamPositions.push(new PositionedCharacter(member, 1));
    });
    console.log(this.userTeamPositions);

    this.gamePlay.redrawPositions(this.userTeamPositions);

    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
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
}
