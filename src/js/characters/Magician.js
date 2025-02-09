/**
 * Class representing a Magician character.
 * @class
 * @extends Character
 */
import Character from './Character';

export default class Magician extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(level = 1, type = 'magician') {
    super(level, type);
    this.attack = 10;
    this.defence = 10;
    this.steps = 1;
    this.attackRadius = 4;
  }
}
