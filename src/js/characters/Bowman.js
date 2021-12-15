/**
 * Class representing a Bowman character.
 * @class
 * @extends Character
 */
import Character from './Character';

export default class Bowman extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(level = 1, type = 'bowman') {
    super(level, type);
    this.attack = 25;
    this.defence = 25;
    this.steps = 2;
    this.attackRadius = 2;
  }
}
