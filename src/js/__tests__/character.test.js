/* eslint-disable quotes */
import Bowman from "../characters/Bowman";
import Character from '../Character';

test('Throw error constructing Character', () => {
  const archer = new Bowman('Archer');
  expect(() => new Character(100)).toThrow();
});

test('OK constructing Character descendents', () => {
  expect(() => new Bowman(10)).not.toThrow();
});
