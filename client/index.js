const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
	console.log('Connected');
	socket.emit('vib', 'Testing 1 2 3' );
})

http.listen(4000, function(){
  console.log('listening on *:3000');
});