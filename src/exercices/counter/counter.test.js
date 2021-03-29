import { countChildren, findArrayChildKey } from './counter.js';

describe('findArrayChildKey', () => {
  it('Should return null if the parameter is null', () => {
    expect(findArrayChildKey(null)).toEqual(null);
  });

  it('Should return null if there is no array child', () => {
    expect(findArrayChildKey({})).toEqual(null);
  });

  it('Should return the key of the array child', () => {
    const parent = {
      'name': 'Elsa',
      'age': 23,
      'animals': ['Boly'],
    };
    const expectedResult = 'animals';
    expect(findArrayChildKey(parent)).toEqual(expectedResult);
  });
});

describe('countChildren', () => {
  describe('Should return the parameter if it has no array children', () => {
    it('Should return null when the parameter is null', () => {
      expect(countChildren(null)).toBe(null);
    });

    it('Should return an empty array when the parameter is an empty array', () => {
      expect(countChildren({})).toEqual({});
    });
  });

  it('Should return the same object with the children count in the name (one level)', () => {
    const parent = [{
      name: 'level1',
      children: [2, 29, 8],
    }];
    const expectedResult = [{
      name: 'level1 [3]',
      children: [2, 29, 8],
    }];
    expect(countChildren(parent)).toEqual(expectedResult);
  });

  it('Should return the same object with th children count in the name for eachlevel', () => {
    const parentLevel1 = [
      {
        name: 'level1',
        children: [2, 29, 8],
      },
      {
        name: 'level1',
        children: [109],
      }
    ];
    const parentLevel2 = [{
      name: 'level2',
      children: parentLevel1,
    }];
    const expectedResult = [{
      name: 'level2 [2]',
      children: [
      {
        name: 'level1 [3]',
        children: [2, 29, 8],
      },
      {
        name: 'level1 [1]',
        children: [109],
      }
    ],
    }];
    expect(countChildren(parentLevel2)).toEqual(expectedResult);
  });
});
