var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
app.post('/soma', function (req, res) { 
    var body = req.body;
    console.log(body);
    res.send('via post');
    res.send('Response da requisição POST'); 
  }); 