const pg =  require('pg')

const Pool = pg.Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tc3005b',
    password: 'Tec2019.01',
    port: 5432,
})

module.exports = pool