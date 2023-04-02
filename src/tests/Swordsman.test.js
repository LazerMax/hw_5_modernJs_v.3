import Swordsman from '../Swordsman';

test('testing Character constructor function', () => {
  const person = new Swordsman('Jhon', 'Swordsman');
  expect(person.defence).toBe(10);
});
