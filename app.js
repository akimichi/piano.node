
const express = require('express');
const app = express();
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');
const config = require('config');
const morgan = require('morgan');
const programChangeConfig = config.get('Program Change');

// view setting
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// POSTでdataを受け取るための記述
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ルーティング登録
const api = require('./routes/api');
app.use('/api', api);


app.get('/', function (req, res) {
  res.render('index', { 
    title: 'MIDIコントローラ',
    programChange: programChangeConfig
  });
});

// 3000番を指定
const port = process.env.PORT || 3000;
app.listen(port);

