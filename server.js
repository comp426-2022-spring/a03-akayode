const express = require('express')
const app = express()
const args = require('minimist')(process.argv.slice(2))

const server = app.listen(5555, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', 5555))
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