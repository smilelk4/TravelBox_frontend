const { Router } = require('express');
const { asyncHandler } = require('../../utils');
const { User } = require('../../db/models');

const router = Router();

router.get('/', (req, res, next) => {
  res.send('users');
});

router.post('/', asyncHandler(async (req, res, next) => {
  const { username, firstName, lastName, email, password, profileImage } = req.body;

  console.log(username)

  // const user = await User.create({

  // });
 
  res.status(201).json({
    user: {
    }
  });
}));

module.exports = router;