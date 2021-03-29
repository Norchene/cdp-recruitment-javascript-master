import { filterCountriesByAnimalName } from './filter/filter.js';
import { countChildren } from './counter/counter.js';
import { data } from '../data/data.js';

export const chooseExerciseAccordingToUserChoice = (userChoice) => {
    switch (userChoice[0]) {
  case '--filter':
    console.log(filterCountriesByAnimalName(data, userChoice[1]));
    break;
  case '--count':
    console.log(countChildren(data));
    break;
  default:
    console.log('Sorry, I did not understand !');
  }
}
