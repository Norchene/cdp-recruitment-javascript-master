import { filterCountriesByAnimalIncludedName } from './countriesFilter.js';

describe('filterCountriesByAnimalIncludedName', () => {
  it('Should return null when countries parameter is undefined', () => {
    expect(filterCountriesByAnimalIncludedName(undefined, 'filter')).toEqual(null);
  });

  it('Should return null when countries parameter is string', () => {
    expect(filterCountriesByAnimalIncludedName('people', 'filter')).toEqual(null);
  });

  it('Should return an empty array when there is no matching animals', () => {
    const people = [{
      name: 'Elmer',
      animals: [{
        name: 'Crow',
      }],
    }];
    const countries = [{
      name: 'country',
      people,
    }];
    const filter = 'by';
    expect(filterCountriesByAnimalIncludedName(countries, filter)).toEqual([]);
  });

  it('Should return an array of countries with people with matching animals', () => {
    const peopleWithMatchingAnimals = [{
      name: 'Elmer',
      animals: [
        { name: 'Blue' },
        { name: 'Crow' },
      ],
    }];
    const peopleWithoutMatchingAnimals = [{
      name: 'Elsa',
      animals: [{
        name: 'Po',
      }],
    }];
    const countries = [
      {
        name: 'Dillauti',
        people: peopleWithMatchingAnimals,
      },
      {
        name: 'Zuhackog',
        people: peopleWithoutMatchingAnimals,
      }
    ];
    const filter = 'ro';
    const expectedResult = [{
      name: 'Dillauti',
      people: peopleWithMatchingAnimals,
    }];
    expect(filterCountriesByAnimalIncludedName(countries, filter)).toEqual(expectedResult);
  });
})
