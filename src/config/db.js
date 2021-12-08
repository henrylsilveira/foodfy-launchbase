const { Pool } = require('pg')

module.exports = new Pool({
    database : "foodfy",
    user : "postgres",
    password: "919364",
    host : "localhost",
    port: 5432
})