const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname));

app.use(morgan('dev'));
app.use(bodyParser.json());

require('./server/routes.js')(app, express);

app.listen(app.get('port'), function() {
  console.log('Listening on port', app.get('port'));
});

module.exports = app;
