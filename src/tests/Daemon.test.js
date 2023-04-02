import Daemon from '../Daemon';

test('testing Character constructor function', () => {
  const person = new Daemon('Jhon', 'Daemon');
  expect(person.defence).toEqual(40);
});
