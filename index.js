/*Exercise 1

Create a new project directory for tonight's exercises.
Make this directory a git repository.
Initialize this directory as an NPM module
Install Express
Create a new javascript file in this directory.
Create an express application
Test with curl, Postman and the browser
Save and commit any changes to the git repository
Push these changes to GitHub
*/

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Creating  a new express appication');
});

app.get('/about', function(req, res) {
  res.send('Creating  a new path about express appication');
});

app.listen(3000, function() {
  console.log("server listening port 3000...")
})
module.exports = app;
