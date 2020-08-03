const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 8080;

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

const users = {
  abc123 : {
    user_id: 'abc123',
    email: 'jeffreycao1998@hotmail.com',
    password: 'password'
  },
}

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
  return result.join('');
};

const getUser = (email) => {
  for (let user in users) {
    if (users[user].email === email) {
      return users[user];
    }
  }
}

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

app.set('view engine', 'ejs');

// GET-------------------------------------
app.get('/urls', (req, res) => {
  const userId = req.cookies.user_id;

  let templateVars = { 
    urls: urlDatabase,
    user: users[userId],
  };
  res.render('urls_index', templateVars);
});

app.get("/urls/new", (req, res) => {
  const userId = req.cookies.user_id;
  let templateVars = {
    user: users[userId],
  };
  res.render("urls_new", templateVars);
});

app.get('/urls/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL;
  const userId = req.cookies.user_id;
  let templateVars = { 
    shortURL, 
    longURL: urlDatabase[shortURL],
    user: users[userId],
  };
  res.render('urls_show', templateVars)
});

app.get('/register', (req, res) => {
  const userId = req.cookies.user_id;
  let templateVars = {
    user: users[userId],
  };
  res.render('register', templateVars);
});

app.get('/login', (req, res) => {
  const userId = req.cookies.user_id;
  let templateVars = {
    user: users[userId],
  };
  res.render('login', templateVars);
});

app.get('/u/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL;
  const longURL = urlDatabase[shortURL];

  res.redirect(longURL);
});

// POST-----------------------------------
app.post('/register', (req, res) => {
  const id = generateRandomString();
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).send('e-mail or password was empty');
  }
  if (getUser(email)) {
    return res.status(400).send('email already registered');
  }

  users[id] = {
    id,
    email,
    password
  }

  res.cookie('user_id', id);
  res.redirect('/urls')
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (getUser(email)) {
    const user = getUser(email);
    if (user.password === password) {
      return res.cookie('user_id', user.user_id).redirect('/urls');
    }
    return res.status(403).send('wrong password');
  }
  res.status(403).send('e-mail cannot be found');
});

app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
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