const Pool = require('pg').Pool;

// DB connection env variables setup
const pool = new Pool({
    user: 'postgres',
    password: '1234',
    database: 'avtaar_db',
    host: 'localhost',
    port: 5432,
});
  
module.exports = pool;