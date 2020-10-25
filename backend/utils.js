const bcrypt = require('bcrypt');

const asyncHandler = handler => {
  return (req, res, next) => {
    return handler(req, res, next).catch(next);
  }
}

const hashPassword = async password => {
  return await bcrypt.hash(password, 10);
}

module.exports = {
  asyncHandler,
}