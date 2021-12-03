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
  const team = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < characterCount; i++) {
    const character = characterGenerator(allowedTypes, maxLevel).next();
    team.push(character);
  }
  return team;
}
