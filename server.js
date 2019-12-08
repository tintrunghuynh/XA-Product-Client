//Install express server
const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/client'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/client/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

app.on("listening", onListening);

function onListening() {
    // setInterval(function () {
    //     http.get("http://xa-leather.herokuapp.com/aboutme");
    //     http.get("http://xaproductserver.herokuapp.com/");
    //     https.get("https://xa-leather.herokuapp.com/aboutme");
    //     https.get("https://xaproductserver.herokuapp.com/");
    // }, 10000);
    // console.log("listening");
}
