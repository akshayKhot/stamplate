var pgp = require('pg-promise')()

const cn = {
    host: '',
    port: 5432,
    database: '',
    user: '',
    password: ''
};
var db = pgp(cn)

module.exports = db;