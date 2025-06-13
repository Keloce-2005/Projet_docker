const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db', // ce nom correspond au nom du service Docker Compose
  database: 'todo',
  password: 'password',
  port: 5432,
});

module.exports = pool;

