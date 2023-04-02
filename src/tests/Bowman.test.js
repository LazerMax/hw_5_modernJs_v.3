import Bowman from '../Bowman';

test('testing Character constructor function', () => {
  const person = new Bowman('Jhon', 'Bowman');
  expect(person.defence).toEqual(25);
});
