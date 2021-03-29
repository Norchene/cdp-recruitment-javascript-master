export const findArrayChildKey = parentObject => {
  let arrayChildKey = null;
  parentObject && Object.keys(parentObject).some(childrenKey => {
    if (Array.isArray(parentObject[childrenKey])) {
      arrayChildKey = childrenKey;
    }
  });
  return arrayChildKey;
};

export const countChildren = parentElement => {
  if (!Array.isArray(parentElement)) {
    return parentElement;
  }
  return parentElement.map(element => {
    const arrayChildKey = findArrayChildKey(element);
    if (!arrayChildKey) {
      return element;
    }
    const nameWithChildrenNumber = `${element.name} [${element[arrayChildKey].length}]`;
    return {
      name: nameWithChildrenNumber,
      [`${arrayChildKey}`]: countChildren(element[arrayChildKey]),
    }
  })
};

