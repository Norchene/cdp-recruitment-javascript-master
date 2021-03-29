import { filterPeopleByAnimalIncludedName } from './peopleFilter.js';

describe('filterPeopleByAnimalIncludedName', () => {
  it('Should return null if animals parameter is undefined', () => {
    expect(filterPeopleByAnimalIncludedName(undefined, 'filter')).toEqual(null);
  });

  it('Should return null when people parameter is a string', () => {
    expect(filterPeopleByAnimalIncludedName('people', 'filter')).toEqual(null);
  });

  it('Should return an empty array when there is no matching animal', () => {
    const people = [{
      name: 'Elmer',
      animals: [{
        name: 'Crow',
      }],
    }]
    const filter = 'by';
    expect(filterPeopleByAnimalIncludedName(people, filter)).toEqual([]);
  });
  it('Should return an array of people with the matching animals', () => {
    const matchingAnimals = [
      {
        name: 'Crow',
      },
      {
        name: 'Riby',
      }];
    const nonMatchingAnimals = [
      {
        name: 'Crow',
      },
      {
        name: 'Pu',
      }];
    const people = [
      {
        name: 'Elva',
        animals: matchingAnimals,
      },
      {
        name: 'Panda',
        animals: nonMatchingAnimals,
      }]
    const filter = 'by';
    const expectedResult = [{
      name: 'Elva',
      animals: matchingAnimals,
    }];
    expect(filterPeopleByAnimalIncludedName(people, filter)).toEqual(expectedResult);
  });
});
