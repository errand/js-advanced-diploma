import { calcTileType, calcHealthLevel } from '../utils';

test('Should return Top Left', () => {
  expect(calcTileType(0, 8)).toBe('top-left');
});

test('Should return Top', () => {
  expect(calcTileType(1, 8)).toBe('top');
});

test('Should return Top Right', () => {
  expect(calcTileType(7, 8)).toBe('top-right');
});

test('Should return Top Right for bigger boardSize', () => {
  expect(calcTileType(9, 10)).toBe('top-right');
});

test('Should return left', () => {
  expect(calcTileType(8, 8)).toBe('left');
});

test('Should return right', () => {
  expect(calcTileType(15, 8)).toBe('right');
});

test('Should return right for bigger Board', () => {
  expect(calcTileType(17, 9)).toBe('right');
});

test('Should return bottom-left', () => {
  expect(calcTileType(56, 8)).toBe('bottom-left');
});

test('Should return bottom', () => {
  expect(calcTileType(60, 8)).toBe('bottom');
  expect(calcTileType(61, 8)).toBe('bottom');
  expect(calcTileType(62, 8)).toBe('bottom');
});

test('Should return bottom-right', () => {
  expect(calcTileType(63, 8)).toBe('bottom-right');
});

test('Should return bottom-right for bigger Board', () => {
  expect(calcTileType(80, 9)).toBe('bottom-right');
});

test('Should return center', () => {
  expect(calcTileType(13, 8)).toBe('center');
  expect(calcTileType(21, 8)).toBe('center');
  expect(calcTileType(29, 8)).toBe('center');
  expect(calcTileType(37, 8)).toBe('center');
  expect(calcTileType(45, 8)).toBe('center');
  expect(calcTileType(52, 8)).toBe('center');
});

test('Should return critical', () => {
  expect(calcHealthLevel(10)).toBe('critical');
});

test('Should return normal', () => {
  expect(calcHealthLevel(16)).toBe('normal');
  expect(calcHealthLevel(49)).toBe('normal');
});

test('Should return high', () => {
  expect(calcHealthLevel(51)).toBe('high');
  expect(calcHealthLevel(100)).toBe('high');
});
