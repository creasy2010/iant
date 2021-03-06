import { getPathVal, isArray, isFn, isObj, isStr, type } from '../src/util';

it('test getPathVal ', () => {
  const data = {
    list: [{ id: 1, name: 'test', addr: [{ id: 1, province: 'test' }] }],
    frame: {
      react: {
        id: 1,
        name: 'react.js'
      }
    }
  };

  expect(getPathVal(data, 'list.0.addr.0.province')).toEqual('test');

  expect(getPathVal(data, ['list', 0, 'addr', '0', 'province'])).toEqual(
    'test'
  );
  expect(getPathVal(data, ['list', 0, 'addr', '1', 'province'])).toEqual(
    undefined
  );

  expect(getPathVal(data, 'frame')).toEqual({
    react: {
      id: 1,
      name: 'react.js'
    }
  });

  expect(getPathVal(data, ['frame1'])).toEqual(undefined);
});

it('test type', () => {
  expect(type('')).toEqual('[object String]');
});

it('test string', () => {
  expect(isStr('')).toEqual(true);
  expect(isStr({})).toEqual(false);
});

it('test array', () => {
  expect(isArray([])).toEqual(true);
  expect(isArray('')).toEqual(false);
});

it('test is Fn', () => {
  const a = () => {};
  expect(isFn(a)).toEqual(true);
  expect(isFn('')).toEqual(false);
});

it('test is object', () => {
  expect(isObj({})).toEqual(true);
  expect(isObj(null)).toEqual(false);
});
