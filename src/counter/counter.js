export const findArrayChildKey = parentObject => {
  let arrayChildKey = null;
  parentObject && Object.keys(parentObject).some(childrenKey => {
    if (Array.isArray(parentObject[childrenKey])) {
      arrayChildKey = childrenKey;
    }
  });
  return arrayChildKey;
};

export const countChildren = parentObjects => {
  if (!Array.isArray(parentObjects)) {
    return parentObjects;
  }
  return parentObjects.map(parentObject => {
    let arrayChildKey = findArrayChildKey(parentObject);
    if (!arrayChildKey) {
      return parentObject;
    } else {
      const nameWithChildrenNumber = `${parentObject.name} [${parentObject[arrayChildKey].length}]`;
      return {
        name: nameWithChildrenNumber,
        [`${arrayChildKey}`]: countChildren(parentObject[arrayChildKey]),
      }
    }
  })
};

