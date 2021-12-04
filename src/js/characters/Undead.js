/**
 * Class representing a Undead character.
 * @class
 * @extends Character
 */
import Character from '../Character';

export default class Undead extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(level = 1, type = 'Undead') {
    super(level, type);
    this.attack = 40;
    this.defence = 10;
  }
}
