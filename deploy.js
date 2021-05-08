const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'master',
  repo: 'git@github.com:olehpatrushev/olehpatrushev.github.io.git',
  message: 'Deployed from britishcamp'
}, function (err) {
  err === undefined || console.log(err);
});
