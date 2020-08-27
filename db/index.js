const { Pool } = require('pg');
const pool = new Pool({
  database: 'q_and_a',
  port: 5432,
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params)
  },
}
