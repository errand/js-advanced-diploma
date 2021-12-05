/** @module Team
 * Class creating Team of Characters.
 */
export default class Team {
  /**
   * Create a point.
   */
  constructor() {
    this.members = [];
  }

  /**
   * Adds unique Character to the Team
   * @param {object} character - instance of Character class
   */
  add(character) {
    this.members.push(character);
  }
}
