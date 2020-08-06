const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');

const PORT = 8080;
const app = express();

// Data bases
const users = require('./data/users');
const urlDatabase = require('./data/urlDatabase');

// Helper Functions
const {
  generateRandomString,
  getUserByEmail,
  urlsForUser,
} = require('./helper_functions/helpers');

//------------------------------------------//
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cookieSession({
  name: 'session',
  keys: ['blahblah'],
}));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

// GET ROUTES-------------------------------//
// shows all urls of user in a table
app.get('/urls', (req, res) => {
  const userId = req.session.user_id;

  if (!userId) {
    return res.send('Please login!');
  }

  const templateVars = {
    urls: urlsForUser(urlDatabase, userId),
    user: users[userId],
  };
  return res.render('urls_index', templateVars);
});

// shows create a new shortURL page
app.get('/urls/new', (req, res) => {
  const userId = req.session.user_id;
  if (!userId) {
    return res.redirect('/login');
  }
  const templateVars = {
    user: users[userId],
  };
  return res.render('urls_new', templateVars);
});

// shows edit page of the shortURL
app.get('/urls/:shortURL', (req, res) => {
  const { shortURL } = req.params;
  const userId = req.session.user_id;

  if (!urlDatabase.hasOwnProperty(shortURL)) {
    return res.status(404).send('invalid shortURL!');
  }
  if (!userId) {
    return res.status(401).send('Unauthorized access, please login');
  }
  if (urlDatabase[shortURL].userId !== userId) {
    return res.status(401).send('Unauthorized access, you are not the creator of this shortURL');
  }

  const templateVars = {
    shortURL,
    longURL: urlDatabase[shortURL].longURL,
    date: urlDatabase[shortURL].date,
    visitsTotal: urlDatabase[shortURL].visitsTotal,
    visitsUnique: urlDatabase[shortURL].visitsUnique,
    user: users[userId],
  };
  return res.render('urls_show', templateVars);
});

// register form
app.get('/register', (req, res) => {
  const userId = req.session.user_id;

  if (userId) {
    return res.redirect('/urls');
  }

  const templateVars = {
    user: users[userId],
    error: '',
  };
  return res.render('register', templateVars);
});

// login form
app.get('/login', (req, res) => {
  const userId = req.session.user_id;

  if (userId) {
    return res.redirect('/urls');
  }

  const templateVars = {
    user: users[userId],
    error: '',
  };
  return res.render('login', templateVars);
});

// redirects to the longURL version of the shortURL
app.get('/u/:shortURL', (req, res) => {
  const userId = req.session.user_id;
  const { shortURL } = req.params;
  const { longURL } = urlDatabase[shortURL];

  if (!shortURL) {
    return res.status(404).send('invalid shortURL');
  }
  if (!urlDatabase[shortURL].visitsUnique.includes(userId)) {
    urlDatabase[shortURL].visitsUnique.push(userId);
  }
  urlDatabase[shortURL].visitsTotal += 1;
  return res.redirect(longURL);
});

// shows all urls of user in a table
app.get('/', (req, res) => {
  const userId = req.session.user_id;

  if (userId) {
    return res.redirect('/urls');
  }
  return res.redirect('/login');
});

// POST ROUTES------------------------------//
// Register (set session cookie)
app.post('/register', (req, res) => {
  const userId = req.session.user_id;
  const id = generateRandomString();
  const { email, password } = req.body;

  if (!email || !password) {
    const templateVars = {
      user: users[userId],
      error: 'email or password was empty',
    };
    return res.render('register', templateVars);
  }
  if (getUserByEmail(users, email)) {
    const templateVars = {
      user: users[userId],
      error: 'email already registered',
    };
    return res.render('register', templateVars);
  }

  users[id] = {
    id,
    email,
    password: bcrypt.hashSync(password, 10),
  };
  req.session.user_id = id;
  return res.redirect('/urls');
});

// Login (set session cookie)
app.post('/login', (req, res) => {
  const userId = req.session.user_id;
  const { email, password } = req.body;

  if (getUserByEmail(users, email)) {
    const user = getUserByEmail(users, email);

    if (bcrypt.compareSync(password, user.password)) {
      req.session.user_id = user.user_id;
      return res.redirect('/urls');
    }
    const templateVars = {
      user: users[userId],
      error: 'wrong password',
    };
    return res.render('login', templateVars);
  }
  const templateVars = {
    user: users[userId],
    error: 'e-mail cannot be found',
  };
  return res.render('login', templateVars);
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
  const { longURL } = req.body;
  const date = new Date(Date.now()).toLocaleString();

  if (longURL.slice(0, 7) !== 'http://') {
    return res.status(400).send('url must start with http://');
  }
  if (!userId) {
    return res.status(400).send('must be logged in to create shortURL');
  }
  urlDatabase[shortURL] = {
    longURL,
    userId,
    date,
    visitsTotal: 0,
    visitsUnique: [],
  };
  return res.redirect(`/urls/${shortURL}`);
});

// Delete shortURL
app.delete('/urls/:shortURL', (req, res) => {
  const userId = req.session.user_id;
  const usersURLs = urlsForUser(urlDatabase, userId);
  const { shortURL } = req.params;

  if (!userId) {
    return res.status(400).send('must be logged in to delete shortURL');
  }
  if (usersURLs.hasOwnProperty(shortURL)) {
    delete urlDatabase[shortURL];
    return res.redirect('/urls');
  }
  return res.status(400).send('only the creators of the shortURL can delete it');
});

// Edit shortURL
app.put('/urls/:id', (req, res) => {
  const shortURL = req.params.id;
  const { longURL } = req.body;
  const userId = req.session.user_id;

  if (!userId) {
    return res.status(400).send('must be logged in to edit shortURLS');
  }
  if (userId !== urlDatabase[shortURL].userId) {
    return res.status(400).send('must be creator of shortURL to edit');
  }
  urlDatabase[shortURL] = { ...urlDatabase[shortURL], longURL };
  return res.redirect('/urls');
});

//-------------------------------------//
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
