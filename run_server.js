const {
    exec
} = require('child_process');
const waitPort = require('wait-port');

// start server
let child = exec('npm run start', () => {});


// check if server is ready
waitPort({
  host: 'localhost',
  port: 9999
})
  .then((open) => {
  	console.log('server is ready');
    process.exit(0);
  })
  .catch((err) => {
  	console.log(err);
  	process.exit(1);
  });