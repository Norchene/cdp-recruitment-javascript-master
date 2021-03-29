import { filterAnimalsByIncludedName } from './animalFilter.js';

describe('filterAnimalsByIncludedName', () => {
  it('Should return null when animals parameter is undefined', () => {
    expect(filterAnimalsByIncludedName(undefined, 'filter')).toEqual(null);
  });

  it('Should return null when animals parameter is string', () => {
    expect(filterAnimalsByIncludedName('animals', 'filter')).toEqual(null);
  });

  it('Should return an empty array when the filter parameter is undefined', () => {
    const animals = [{
      name: 'Crow',
    }];
    expect(filterAnimalsByIncludedName(animals, undefined)).toEqual([]);
  });

  it('Should return an empty array when no matching string', () => {
    const animals = [{
      name: 'Crow',
    }];
    const filter = 'by';
    expect(filterAnimalsByIncludedName(animals, filter)).toEqual([]);
  });

  it('Should return an array with the matching animals', () => {
    const animals = [
      { name: 'Powby' },
      { name: 'Crow' },
      { name: 'Boby' },
    ];
    const filter = 'by';
    const expectedResult = [
      { name: 'Powby' },
      { name: 'Boby' },
    ]
    expect(filterAnimalsByIncludedName(animals, filter)).toEqual(expectedResult);
  });
});
