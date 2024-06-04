var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = 3000;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(App de Exemplo escutando na porta http://localhost:${port}/);
});


// SOMA
// a, b = numeros a somar

app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);
    
    res.send(O resultado da soma de ${body.a} e ${body.b} é ${resultado});
  });

function soma(a, b) {
    return a + b;
}

// SUBTRACAO
// a, b = numeros a suubtrair

app.post('/subtracao', function (req, res) {
  var body = req.body;
  var resultado = subtracao(body.a, body.b);
  
  res.send(O resultado da subtraçao de ${body.a} e ${body.b} é ${resultado});
});

function subtracao(a, b) {
  return a - b;
}

// MULTIPLICAÇAO
// a, b = numeros a multiplicar

app.post('/multiplicacao', function (req, res) {
  var body = req.body;
  var resultado = multiplicacao(body.a, body.b);
  
  res.send(O resultado da multiplicaçao de ${body.a} e ${body.b} é ${resultado});
});

function multiplicacao(a, b) {
  return a * b;
}

// DIVISAO
// a, b = numeros a dividir

app.post('/divisao', function (req, res) {
  var body = req.body;
  var resultado = divisao(body.a, body.b);
  
  res.send(O resultado da divisao dentre ${body.a} e ${body.b} é ${resultado});
});

function divisao(a, b) {
  return a / b;
}

// FIBONACCI
// a = quantidade de números

app.post('/fibo', function (req, res) {
    var body = req.body;
    var resultado = fibonacci(body.a);
    
    res.send(Fibonacci representado por ${body.a} números é ${resultado});
});


function fibonacci(a) {
    let primeiro = 0;
    let segundo = 1;
    let sequenciaDeNumeros = '0 1';

    for (let x = 0; x < a - 2; x++) {
        let soma = primeiro + segundo;
        sequenciaDeNumeros += " " + soma;
        let aux = soma;
        primeiro = segundo;
        segundo = soma;
    }

    return sequenciaDeNumeros;
}
