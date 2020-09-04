const { Pool } = require('pg');
const pool = new Pool({
  database: 'qa',
  user: 'postgres',
  port: 5432,
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
}
