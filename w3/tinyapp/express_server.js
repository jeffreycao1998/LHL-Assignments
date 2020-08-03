const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 8080;

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

const generateRandomString = () => {
  const urlLetters = [
    '1','2','3','4','5','6','7','8','9',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  ];
  const result = [];
  for (let i = 0; i < 6; i++) {
    const randNum = (Math.round(Math.random() * 61));
    result.push(urlLetters[randNum]);
  }
  console.log(result.join(''));
  return result.join('');
};

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

app.set('view engine', 'ejs');

// GET
app.get('/urls', (req, res) => {
  let templateVars = { 
    urls: urlDatabase,
    username: req.cookies.username,
  };
  res.render('urls_index', templateVars);
});

app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});

app.get('/urls/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL;
  let templateVars = { 
    shortURL, 
    longURL: urlDatabase[shortURL],
    username: req.cookies.username,
  };
  res.render('urls_show', templateVars)
});

app.get('/u/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL;
  const longURL = urlDatabase[shortURL];

  res.redirect(longURL);
});

// POST
app.post('/login', (req, res) => {
  const username = req.body.username;
  res.cookie('username', username);
  res.redirect('/urls');
});

app.post('/logout', (req, res) => {
  res.clearCookie('username');
  res.redirect('/urls');
});

app.post('/urls', (req, res) => {
  const shortURL = generateRandomString();
  urlDatabase[shortURL] = req.body.longURL;

  res.redirect(`/urls/:${shortURL}`);
});

app.post('/urls/:shortURL/delete', (req, res) => {
  delete urlDatabase[req.params.shortURL];
  res.redirect('/urls');
});

app.post('/urls/:id', (req, res) => {
  const shortURL = req.params.id;
  const longURL = req.body.longURL;

  urlDatabase[shortURL] = longURL;
  res.redirect(`/urls/${shortURL}`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});