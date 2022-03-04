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

app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
    res.type("text/plain")
});

