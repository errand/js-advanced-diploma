/**
 * Class representing a Swordsman character.
 * @class
 * @extends Character
 */
import Character from '../Character';

export default class Swordsman extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(level = 1, type = 'Swordsman') {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
  }
}
