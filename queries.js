const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "hw8",
  password: "postgre",
  port: 5432,
});

module.exports = pool;
