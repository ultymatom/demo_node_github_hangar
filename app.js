let express = require('express');
let app = express();

app.get('/', function (req, res) {
  let obj = {
    endpoints: [
      "/hangar",
      "/ping",
      "/current-date",
      "/fibo/:n",
    ]
  };
  res.send(obj);
});

app.get('/hangar', function (req, res) {
  res.send("Hello World");
});

app.get('/ping', function (req, res) {
  res.send("pong");
});


app.get('/current-date', function (req, res) {
  let obj = {
    name: "current",
    value: new Date()
  };
  res.send(obj);
});

app.get('/fibo/:n', function (req, res) {
  let obj = {
    name: "fibo",
    value: fibo(req.params.n)
  };
  res.send(obj);
});


let server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function fibo(n) { // 1
  if (n < 1)
    return 0;
  else if (n < 2)
    return 1;
  else
    return fibo(n - 2) + fibo(n - 1);
}

module.exports.server = server
module.exports.fibo = fibo