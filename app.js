import http from 'http';
import { chooseExerciseAccordingToUserChoice } from './src/index.js';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('cdp-recruitment-javascript-master');
});

const init = () => {
  const args = process.argv.slice(2);
  const arg = args[0].split('=');
  chooseExerciseAccordingToUserChoice(arg);
};

server.listen(port, hostname, () => {
  init();
});
