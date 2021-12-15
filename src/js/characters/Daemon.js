/**
 * Class representing a Daemon character.
 * @class
 * @extends Character
 */
import Character from './Character';

export default class Daemon extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(level = 1, type = 'daemon') {
    super(level, type);
    this.attack = 10;
    this.defence = 10;
    this.steps = 1;
    this.attackRadius = 4;
  }
}
