import Character from '../Character';
import Swordsman from '../Swordsman';

test('testing Character constructor function', () => {
  const person = new Character('Jhon', 'Swordsman');
  expect(person.level).toBe(1);
});

test('testing checkType function', () => {
  const person = new Character('Jhon', 'Swordsman');
  person.type = 1;
  expect(() => {
    person.checkType(person.type);
  }).toThrow('Некорректный класс персонажа!');
});

test('testing checkName function', () => {
  const person = new Character('Jhon', 'Swordsman');
  person.name = 1;
  expect(() => {
    person.checkName(person.name);
  }).toThrow('Имя персонажа должно быть больше 2-х символов!');
});

test('positive testing levelUp function', () => {
  const person = new Character('Jhon', 'Swordsman');
  person.levelUp();
  expect(person.level).toBe(2);
});

test('negative testing levelUp function', () => {
  const person = new Character('Jhon', 'Swordsman');
  person.health = 0;
  expect(() => {
    person.levelUp();
  }).toThrow('Персонаж мертв!');
});

test('positive testing damage function', () => {
  const person = new Swordsman('Jhon', 'Swordsman');
  person.damage(10);
  expect(person.health).toBe(91);
});

test('negative testing levelUp function', () => {
  const person = new Swordsman('Jhon', 'Swordsman');
  person.health = 0;
  expect(() => {
    person.damage(10);
  }).toThrow('Персонаж мертв!');
});
