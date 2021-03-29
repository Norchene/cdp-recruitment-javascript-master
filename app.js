import http from 'http';
import { chooseExercise } from './src/exercices/chooseExercise.js';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('cdp-recruitment-javascript-master');
});

const init = () => {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    const arg = args[0].split('=');
    chooseExercise(arg);
  } else {
    console.log('Missing argument !')
  }

};

server.listen(port, hostname, () => {
  init();
});
