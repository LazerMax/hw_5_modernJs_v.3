import Magician from '../Magician';

test('testing Character constructor function', () => {
  const person = new Magician('Jhon', 'Magician');
  expect(person.defence).toBe(40);
});
