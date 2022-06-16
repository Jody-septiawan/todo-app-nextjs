const { Pool } = require('pg');

module.exports = new Pool({
  database: 'todo-app-nextjs',
  port: '5432',
  user: 'postgres',
  password: 'root',
});
