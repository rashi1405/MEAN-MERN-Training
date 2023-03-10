const { check, validationResult } = require('express-validator');

exports.validateUser = [
  check('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Name is Missing !')
    .isLength({ min: 3, max: 20 })
    .withMessage('Invalid name'),

  check('email').normalizeEmail().isEmail().withMessage('Email is invalid'),
  check('password').not().isEmpty().withMessage('Password is missing').isNumeric()
    .withMessage('Enter numbers only for Password '),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();

  if (!error.length) return next();
  res.status(400).json({ success: false, error: error[0].msg });
};
