import { countChildren } from '../exercices/counter/counter.js';
import { data } from '../../data/data.js';
import { filterCountriesByAnimalIncludedName } from '../exercices/filter/countriesFilter/countriesFilter.js';

export const chooseExercise = (choice) => {
  let response;
    switch (choice[0]) {
  case '--filter':
    response = filterCountriesByAnimalIncludedName(data, choice[1]);
    break;
  case '--count':
    response = countChildren(data);
    break;
  default:
    response = 'Sorry, I did not understand !';
  }
  console.log(response);
}
