const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
  res.send('Hiii');
})

module.exports = router;