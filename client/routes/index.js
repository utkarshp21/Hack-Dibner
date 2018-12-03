var express = require('express');
var router = express.Router();
const app = require('../app');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send',(req,res) => {
	const msg = req.body.msg;
	const data = {};
	if(msg==='l'){
		data.direction = 'left';
		data.seq = [0,1000,1000,1000];
	}
	else if(msg === 'r'){
		data.direction = 'right';
		data.seq = [0,1000,1000];
	}
	else if(msg === 'Back'){
		data.direction = 'down';
		data.seq = [0,1000];
		
	}
	else if(msg === 'u'){
		data.direction = 'Straight';
		data.seq = [1000];
	}
	
	console.log(req.app.get('port'));
	const io = req.app.get('io');
	const socket = req.app.get('socket');
	socket.emit('vib',data);
	res.send('Hell yeah!');
	
})

module.exports = router;
