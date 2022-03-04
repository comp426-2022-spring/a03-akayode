const express = require('express')
const app = express()
const args = require('minimist')(process.argv.slice(2))

args['port']

const port = args.port || process.env.PORT || 5000

const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))
});

app.use(function(req, res) {
    res.status(404).send('404 NOT FOUND')
});

app.get('/app/', (req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end(res.statusCode + ' ' + res.statusMessage);
});

function coinFlip() {
    let flip = Math.random();
    if (flip < 0.5) {
      var result = "heads";
    } else {
      var result = "tails";
    }
    return result;
  }

app.get('/app/flip', (req, res) => {
    var flip = coinFlip()
    res.status(200).json({"flip":flip})
})