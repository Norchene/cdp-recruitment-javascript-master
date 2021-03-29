export const filterAnimalsByName = (animals, containing) => {
  if (!animals || !Array.isArray(animals)) {
    return null;
  }
  return animals.filter(animal => {
    if (animal.name.includes(containing)) {
      return animal;
    }
  });
};

export const filterPeopleByAnimalName = (people, animalContaining) => {
  if (!people || !Array.isArray(people)) {
    return null;
  }
  return people.filter(person => {
    const filteredAnimals = filterAnimalsByName(person.animals, animalContaining);
    if (filteredAnimals && filteredAnimals.length > 0) {
      return {
        ...person,
        animals: filteredAnimals,
      };
    }
  })
};

export const filterCountriesByAnimalName = (countries, animalContaining) => {
    if (!countries || !Array.isArray(countries)) {
    return null;
  }
  return countries.filter(country => {
    const filteredPeople = filterPeopleByAnimalName(country.people, animalContaining);
    if (filteredPeople && filteredPeople.length > 0) {
      return {
        ...country,
        people: filteredPeople,
      };
    }
  });
};

