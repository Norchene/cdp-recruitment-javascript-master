import { filterPeopleByAnimalIncludedName } from '../peopleFilter/peopleFilter.js';

export const filterCountriesByAnimalIncludedName = (countries, animalContaining) => {
    if (!countries || !Array.isArray(countries)) {
    return null;
  }
  return countries.filter(country => {
    const filteredPeople = filterPeopleByAnimalIncludedName(country.people, animalContaining);
    if (filteredPeople && filteredPeople.length > 0) {
      return {
        ...country,
        people: filteredPeople,
      };
    }
  });
};

