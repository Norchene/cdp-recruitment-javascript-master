import { filterAnimalsByName, filterCountriesByAnimalName, filterPeopleByAnimalName } from './filter.js';

describe('filterAnimalsByName', () => {
  it('Should return null when animals is undefined', () => {
    expect(filterAnimalsByName(undefined, 'filter')).toEqual(null);
  });

  it('Should return null when animals is string', () => {
    expect(filterAnimalsByName('animals', 'filter')).toEqual(null);
  });

  it('Should return an empty array when the filter string is undefined', () => {
    const animals = [{
      name: 'Crow',
    }];
    expect(filterAnimalsByName(animals, undefined)).toEqual([]);
  });

  it('Should return an empty array when no matching string', () => {
    const animals = [{
      name: 'Crow',
    }];
    const filter = 'by';
    expect(filterAnimalsByName(animals, filter)).toEqual([]);
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
    expect(filterAnimalsByName(animals, filter)).toEqual(expectedResult);
  });
});

describe('filterPeopleByAnimalName', () => {
  it('Should return null if animals is undefined', () => {
    expect(filterPeopleByAnimalName(undefined, 'filter')).toEqual(null);
  });

  it('Should return null when people is string', () => {
    expect(filterPeopleByAnimalName('people', 'filter')).toEqual(null);
  });

  it('Should return an empty array when there is no matching animal', () => {
    const people = [{
      name: 'Elmer',
      animals: [{
        name: 'Crow',
      }],
    }]
    const filter = 'by';
    expect(filterPeopleByAnimalName(people, filter)).toEqual([]);
  });
  it('Should return an empty array when there is no matching animal', () => {
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
    expect(filterPeopleByAnimalName(people, filter)).toEqual(expectedResult);
  });
});

describe('filterCountriesByAnimalName', () => {
  it('Should return null when countries is undefined', () => {
    expect(filterCountriesByAnimalName(undefined, 'filter')).toEqual(null);
  });

  it('Should return null when countries is string', () => {
    expect(filterCountriesByAnimalName('people', 'filter')).toEqual(null);
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
    expect(filterCountriesByAnimalName(countries, filter)).toEqual([]);
  });

  it('Should return an array with people with matching animals', () => {
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
    expect(filterCountriesByAnimalName(countries, filter)).toEqual(expectedResult);
  });
})
