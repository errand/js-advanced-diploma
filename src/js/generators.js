/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

export function* characterGenerator(allowedTypes, maxLevel) {
  const index = Math.floor(Math.random() * allowedTypes.length + 1);
  const Character = allowedTypes[index];
  yield new Character(maxLevel);
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const team = [];
}
