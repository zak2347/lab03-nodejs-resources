const express = require('express');
const session = require('express-session');

//creating app
const app = express();
//send the index.html when receiving HTTP GET /
//app.use(express.static('public'));
//app.get('/', (req, res) => {
 //res.sendFile('index.html', { root: __dirname });
//});

app.use(session({secret: 'some secret code'}));

//using JSON and URL Encoded middleware app.use
(express.json());
app.use(express.urlencoded({ extended: true 
}));

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
 console.log(`Cart app listening at http://localhost:${port}`);
});

//handling static HTML and EJS templates
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
 res.render('index'); //no need for ejs extension
});
//route for contacts
app.get('/contacts', (req, res) => {
    res.render('contacts');
});

//route for register
app.get('/register', (req, res) => {
    res.render('register');
});

//route for login
app.get('/login', (req, res) => {
    res.render('login');
});

//pass requests to the router middleware
const router = require('./apis/routes');
app.use(router);


   
