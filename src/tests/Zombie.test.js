import Zombie from '../Zombie';

test('testing Character constructor function', () => {
  const person = new Zombie('Jhon', 'Zombie');
  expect(person.defence).toEqual(10);
});
