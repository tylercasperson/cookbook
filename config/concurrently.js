import concurrently from 'concurrently';

concurrently(['npm run server', 'npm run client'], {
  prefix: 'name',
  killOthers: ['failure', 'success'],
  restartTries: 3,
}).then(
  function onSuccess(exitInfo) {
    process.exit();
  },
  function onFailure(exitInfo) {
    process.exit();
  }
);
