import Character from './Character';

export default class Magician extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = 10;
    this.defence = 40;
  }
}
