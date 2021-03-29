import { filterAnimalsByIncludedName } from '../animalFilter/animalFilter.js';

export const filterPeopleByAnimalIncludedName = (people, animalContaining) => {
  if (!people || !Array.isArray(people)) {
    return null;
  }
  return people.filter(person => {
    const filteredAnimals = filterAnimalsByIncludedName(person.animals, animalContaining);
    if (filteredAnimals && filteredAnimals.length > 0) {
      return {
        ...person,
        animals: filteredAnimals,
      };
    }
  })
};
