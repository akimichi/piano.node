// デバッグ
var socket = io();
// var socket = io.connect('http://localhost:3000');
socket.on('message', function(data){
  // console.log(data);
  $('#message').text(data.message);
});
