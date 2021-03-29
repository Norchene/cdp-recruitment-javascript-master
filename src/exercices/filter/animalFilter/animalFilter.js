export const filterAnimalsByIncludedName = (animals, includedName) => {
  if (!animals || !Array.isArray(animals)) {
    return null;
  }
  return animals.filter(animal => {
    if (animal.name.includes(includedName)) {
      return animal;
    }
  });
};
