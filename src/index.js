import { chooseExercise } from './exercices/chooseExercise.js';

export const init = () => {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    const arg = args[0].split('=');
    chooseExercise(arg);
  } else {
    console.log('Missing argument !')
  }
};
