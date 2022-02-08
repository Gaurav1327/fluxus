//==================================================== Dependencies ============================================//

const express = require('express');
const firebase = require('firebase');
const admin = require("firebase-admin");
const request = require('request');
const app = express();
const bodyParser = require('body-parser');
const serviceAccount = require("./key/key.json");
var port = process.env.PORT || 3000;

//==================================================== Initializing =============================================//


const firebaseConfig = {
    apiKey: "AIzaSyC2sg7eHMCTYXwTPZFBkV6rIUanfUMJDaY",
    authDomain: "fluxus-f35a9.firebaseapp.com",
    projectId: "fluxus-f35a9",
    storageBucket: "fluxus-f35a9.appspot.com",
    messagingSenderId: "918554481511",
    appId: "1:918554481511:web:2d6546f1eb32632c6095c2",
    measurementId: "G-FYLTS0JC41"
};

firebase.initializeApp(firebaseConfig);

//==================================================== Declarations =========================================//

//==================================================== Parsing ==============================================//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//==================================================== Routes ===============================================//

app.get('/', function(req, res) {
    res.sendFile('public/main/index.html', { root: __dirname });
});

app.get('/app', function(req, res) {
    res.sendFile('public/index.html', { root: __dirname });
});

app.get('/dashboard', function(req, res) {
    res.sendFile(__dirname + '/public/dashboard/dashboard.html');
});

app.get('/techEvents', function(req, res) {
    res.sendFile(__dirname + '/public/dashboard/technical.html');
});

app.get('/cultEvents', function(req, res) {
    res.sendFile(__dirname + '/public/dashboard/cultural.html');
});

// app.get('/user', function(req, res) {
//     res.sendFile(__dirname + '/public/dashboard/user.html');
// });

app.get('/accommodation', function(req, res) {
    res.sendFile(__dirname + '/public/dashboard/accommodation.html');
});


//==================================================== Static ============================================================//

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/details'));
app.use(express.static(__dirname + '/public/dashboard'));
app.use(express.static(__dirname + '/public/main'));

//==================================================== Server ============================================================//

app.listen(port, () => console.log('app listening on port 3000!'));