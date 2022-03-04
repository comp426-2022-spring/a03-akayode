const express = require('express')
const app = express()
const args = require('minimist')(process.argv.slice(2))

args['port']

const call = args.call

const port = args.port || process.env.PORT || 5000

const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))
});

app.get('/app', (req, res) => {
    res.status(200).end('OK')
    res.type('text/plain')
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
    res.status(200).json({ 'flip' : flip })
});

function coinFlips(flips) {
    var flip_array = [];
    for (var i = 0; i < flips; i ++) {
      flip_array.push(coinFlip());
    }
    return flip_array
}

function countFlips(array) {
    let heads = 0;
    let tails = 0;
    for (const outcome of array) {
      if (outcome == "heads") {
        heads += 1;
      } else {
        tails += 1;
      }
    }
    if (heads > 0 && tails >0) {
      var output = `{ heads: ${heads}, tails: ${tails} }`;
    } else if (heads > 0 && tails == 0) {
      var output = `{ heads: ${heads} }`;
    } else {
      var output = `{ tails: ${tails} }`;
    }
    return output;
}

app.get('/app/flips/:number', (req, res) => {
    const flips = coinFlips(req.params.number)
    const summary = countFlips(flips)
    res.status(200).json({"raw": flips, "summary": summary})
});

function flipACoin(call) {
    var hidden_filp = coinFlip();
    if (call == hidden_filp) {
        return { call: call, flip: hidden_filp, result: 'win' };
    } else {
        return { call: call, flip: hidden_filp, result: 'lose' };
    } 
}

app.get('/app/flip/call/:guess', (req, res) => {
    const result = flipACoin(req.params.guess)
    res.status(200).json(result)
});

app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
    res.type("text/plain")
});

