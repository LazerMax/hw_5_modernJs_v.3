import Undead from '../Undead';

test('testing Character constructor function', () => {
  const person = new Undead('Jhon', 'Undead');
  expect(person.defence).toEqual(25);
});
