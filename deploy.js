console.log("Deploying to prod...")
const {v4: uuidv4} = require('uuid');
const ghpages = require('gh-pages');
ghpages.publish('./build', {
  message: 'Deployed Website: ' + uuidv4(),
  branch: 'prod',
  repo: 'git@github.com:michaelkoohang/michaelkoohang.github.io.git'
}, function(err) {
  console.log(err);
});