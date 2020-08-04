const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const PORT = 8080;
const users = require('./data/users');
const urlDatabase = require('./data/urlDatabase');
const { 
  generateRandomString, 
  getUserByEmail, 
  urlsForUser 
} = require('./helper_functions/helpers');

//------------------------------------------//
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieSession({
  name: 'session',
  keys: ['blahblah']
}));

app.set('view engine', 'ejs');

// GET ROUTES-------------------------------//
// shows all urls of user in a table
app.get('/urls', (req, res) => {
  const userId = req.session.user_id;

  if (!userId) {
    return res.send('Please login!');
  }

  let templateVars = { 
    urls: urlsForUser(urlDatabase, userId),
    user: users[userId],
  };
  res.render('urls_index', templateVars);
});

// shows create a new shortURL page
app.get("/urls/new", (req, res) => {
  const userId = req.session.user_id;
  if (!userId) {
    return res.redirect('/login');
  }
  let templateVars = {
    user: users[userId],
  };
  res.render("urls_new", templateVars);
});

// shows edit page of the shortURL
app.get('/urls/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL;
  const userId = req.session.user_id;

  if (!urlDatabase.hasOwnProperty(shortURL)) {
    return res.status(404).send('invalid shortURL!')
  }
  if (!userId) {
    return res.status(401).send('Unauthorized access, please login');
  }
  if (urlDatabase[shortURL].userId !== userId) {
    return res.status(401).send('Unauthorized access, you are not the creator of this shortURL');
  }

  let templateVars = { 
    shortURL, 
    longURL: urlDatabase[shortURL].longURL,
    date: urlDatabase[shortURL].date,
    visits: urlDatabase[shortURL].visits,
    user: users[userId],
  };
  res.render('urls_show', templateVars);
});

// register form
app.get('/register', (req, res) => {
  const userId = req.session.user_id;

  if (userId) {
    return res.redirect('/urls');
  }

  let templateVars = {
    user: users[userId],
  };
  res.render('register', templateVars);
});

// login form
app.get('/login', (req, res) => {
  const userId = req.session.user_id;

  if (userId) {
    return res.redirect('/urls');
  }

  let templateVars = {
    user: users[userId],
  };
  res.render('login', templateVars);
});

// redirects to the longURL version of the shortURL
app.get('/u/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL;
  const longURL = urlDatabase[shortURL].longURL;

  if (!shortURL) {
    return res.status(404).send('invalid shortURL');
  }
  urlDatabase[shortURL].visits += 1;
  res.redirect(longURL);
});

// shows all urls of user in a table
app.get('/', (req, res) => {
  const userId = req.session.user_id;

  if (userId) {
    return res.redirect('/urls');
  }
  res.redirect('/login');
})

// POST ROUTES------------------------------//
// Register (set session cookie)
app.post('/register', (req, res) => {
  const id = generateRandomString();
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).send('e-mail or password was empty');
  }
  if (getUserByEmail(users, email)) {
    return res.status(400).send('email already registered');
  }

  users[id] = {
    id,
    email,
    password: bcrypt.hashSync(password, 10)
  };
  req.session.user_id = id;
  res.redirect('/urls');
});

// Login (set session cookie)
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (getUserByEmail(users, email)) {
    const user = getUserByEmail(users, email);

    if (bcrypt.compareSync(password, user.password)) {
      req.session.user_id = user.user_id;
      return res.redirect('/urls');
    }
    return res.status(403).send('wrong password');
  }
  res.status(403).send('e-mail cannot be found');
});

// Logout (clear session cookie)
app.post('/logout', (req, res) => {
  req.session = null;
  res.redirect('/urls');
});

// Create new shortURL
app.post('/urls', (req, res) => {
  const userId = req.session.user_id;
  const shortURL = generateRandomString();
  const longURL = req.body.longURL;
  const date = new Date(Date.now()).toLocaleString();

  if (longURL.slice(0, 7) !== 'http://') {
    return res.status(400).send('url must start with http://');
  }
  if (!userId) {
    return res.status(400).send('must be logged in to create shortURL');
  }
  urlDatabase[shortURL] = { longURL, userId, date, visits: 0 };
  res.redirect(`/urls/${shortURL}`);
});

// Delete shortURL
app.post('/urls/:shortURL/delete', (req, res) => {
  const userId = req.session.user_id;
  const usersURLs = urlsForUser(urlDatabase, userId);
  const shortURL = req.params.shortURL;

  if(!userId) {
    return res.status(400).send('must be logged in to delete shortURL');
  }
  if (usersURLs.hasOwnProperty(shortURL)) {
    delete urlDatabase[shortURL];
    return res.redirect('/urls');
  }
  res.status(400).send('only the creators of the shortURL can delete it');
});

// Edit shortURL
app.post('/urls/:id', (req, res) => {
  const shortURL = req.params.id;
  const longURL = req.body.longURL;
  const userId = req.session.user_id;

  if (!userId) {
    return res.status(400).send('must be logged in to edit shortURLS');
  }
  if (userId !== urlDatabase[shortURL].userId) {
    return res.status(400).send('must be creator of shortURL to edit');
  }
  urlDatabase[shortURL] = { ...urlDatabase[shortURL], longURL};
  res.redirect('/urls');
});
//-------------------------------------//

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});