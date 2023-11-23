import pg from 'pg'; 

// console.dir(pg)

const pool = new pg.Pool({
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE
})

export default pool