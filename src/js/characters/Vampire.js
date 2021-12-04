/**
 * Class representing a Vampire character.
 * @class
 * @extends Character
 */
import Character from '../Character';

export default class Vampire extends Character {
  /**
   * Create a point.
   * @param {string} name - Name of the character
   * @param {string} type - predefined type
   */
  constructor(level = 1, type = 'Vampire') {
    super(level, type);
    this.attack = 25;
    this.defence = 25;
  }
}
