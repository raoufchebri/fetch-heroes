const express = require('express');

const router = express.Router();
const heroes = require('./heroes');

router.get('/', (_, res) => {
  res.json({
    message: 'Welcome to API 🚀',
  });
});

router.use('/heroes', heroes);

module.exports = router;
