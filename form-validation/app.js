// Imports
const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const app = express();
const port = 5000;

app.set('view engine', 'ejs');

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.get('', (req, res) => {
  res.render('index');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post(
  '/register',
  urlEncodedParser,
  [
    check('username', 'This username must be 3+ character long')
      .exists()
      .isLength({ min: 3 }),

    check('email', 'Email is not valid').isEmail().normalizeEmail(),
    check('password', 'Password length should be 6 to 10 characters').isLength({
      min: 6,
      max: 10,
    }),
    check('password1', 'Password length should be 6 to 10 characters').isLength(
      { min: 6, max: 10 }
    ),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    }

    // If no error occurs, then this
    // block of code will run
    else {
      res.send('Successfully validated');
    }
    // return res.status(422).json(errors.array());
  }
);

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`));
