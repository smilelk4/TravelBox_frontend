const { check } = require('express-validator');
const { User } = require('./db/models');

const usernameValidation = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid username.')
    .isLength({ min: 5 })
    .withMessage('Username must be longer than 5 characters.')
    .isLength({ max: 30 })
    .withMessage('Username must not be longer than 40 characters.')
    .matches(/^\w+$/)
    .withMessage('Username must only contain alphabets, numbers, and _(underscores).')
    .custom(value => {
      return User.findOne({ where: { username: value } }).then(user => {
        if (user) {
          throw new Error('The provided username is already used by another account.');
        }
        return true;
      });
    })
];

const nameValidation = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid first name.')
    .isLength({ max: 30 })
    .withMessage('First name must be not be longer than 30 characters.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid last name.')
    .isLength({ max: 30 })
    .withMessage('Last name must be not be longer than 30 characters.'),
];