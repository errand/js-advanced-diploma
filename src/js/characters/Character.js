export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 100;
    this.type = type;
    if (new.target.name === 'Character') {
      throw new Error('Direct creating Character is forbidden');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Character is dead');
    }
    this.level += 1;
    this.attack = Math.max(
      this.attack,
      (this.attack * (1.8 - this.health)) / 100,
    );
    this.health = this.health + 80 > 100 ? 100 : this.health + 80;
  }
}
