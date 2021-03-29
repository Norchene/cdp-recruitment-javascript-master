// import { createRequire } from 'module';
//
// const require = createRequire(import.meta.url);

import http from 'http';
import { data } from './data/data.js';
import { filterCountriesByAnimalName } from './src/filter/filter.js';
import { countChildren } from './src/counter/counter.js';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('cdp-recruitment-javascript-master');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  const myArgs = process.argv.slice(2);
  const arg = myArgs[0].split('=');
  switch (arg[0]) {
  case '--filter':
    console.log(filterCountriesByAnimalName(data, arg[1]));
    break;
  case '--count':
    console.log(countChildren(data));
    break;
  default:
    console.log('Sorry, I did not understand !');
  }
});
