
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const flash = require('connect-flash');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');
const config = require('config');
const morgan = require('morgan');
const programChangeConfig = config.get('Program Change');

const MIDI = require('./lib/midi.js');

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
  console.log('GET /');
  res.render('index', { 
    title: 'MIDIコントローラ',
    programChange: programChangeConfig
  });
});

io.on('connection', (socket) => {
  // io.emit('message', {"message": "connection", "deltaTime": 0});
  // MIDI INの信号を拾ったら実行する
  MIDI.input.on('message', (deltaTime, message) => {
    io.emit('message', {"message": message, "deltaTime": deltaTime});
    // console.log('m:' + message + ' d:' + deltaTime);
    // Send a MIDI message.
    // output.sendMessage([176,22,1]);
    // output.sendMessage(message);
  }); 
});

// 3000番を指定
const port = process.env.PORT || 3000;
// const port = process.env.PORT || 8080;
http.listen(port);
// app.listen(port);

