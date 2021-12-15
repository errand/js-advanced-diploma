import Team from './Team';
/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

export function* characterGenerator(allowedTypes, maxLevel) {
  const index = Math.floor(Math.random() * allowedTypes.length);
  const level = Math.floor(Math.random() * maxLevel + 1);
  const Character = allowedTypes[index];
  yield new Character(level);
}

/**
 * Creates team of random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @param characterCount max character number
 * @returns team array
 */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const team = new Team();
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < characterCount; i++) {
    const character = characterGenerator(allowedTypes, maxLevel).next();
    team.add(character.value);
  }
  return team.members;
}

/**
 * Generates random position on the map for character drop
 *
 * @param side string, enemy of user
 * @returns integer - the index of cell on the map
 */
export function* characterPosition(side = 'user') {
  let cells = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];
  if (side === 'enemy') {
    cells = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];
  }
  yield cells[Math.floor(Math.random() * cells.length)];
}
