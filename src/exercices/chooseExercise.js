import { filterCountriesByAnimalName } from '../exercices/filter/filter.js';
import { countChildren } from '../exercices/counter/counter.js';
import { data } from '../../data/data.js';

export const chooseExercise = (choice) => {
  let response;
    switch (choice[0]) {
  case '--filter':
    response = filterCountriesByAnimalName(data, choice[1]);
    break;
  case '--count':
    response = countChildren(data);
    break;
  default:
    response = 'Sorry, I did not understand !';
  }
  console.log(response);
}
