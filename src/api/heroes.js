const express = require('express');
const conn = require('../db');

const router = express.Router();

// Get all heroes
router.get('/', async (_, res, next) => {
  const start = process.hrtime();
  try {
    const heroes = await conn.query('SELECT * FROM marvels');
    res.json(heroes.rows);
  } catch (err) {
    next(err);
  }
  const end = process.hrtime(start);
  const time = parseInt(end[1] / 1000000);
  console.log('getHeroes took %d milliseconds', time);
  await conn.query(
    'insert into performance (database_name, execution_time) values ($1, $2)',
    ['Neon', time]
  );
});

module.exports = router;
