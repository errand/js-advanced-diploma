/**
 * Class representing a Swordsman character.
 * @class
 * @extends Character
 */
import Character from './Character';

export default class Swordsman extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(level = 1, type = 'swordsman') {
    super(level, type);
    this.attack = 400;
    this.defence = 10;
    this.steps = 40;
    this.attackRadius = 1;
  }
}
