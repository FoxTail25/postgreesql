import pg from 'pg'; 

// console.dir(pg)

const pool = new pg.Pool({
    user: "postgres",
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: "node_postgres"
})

export default pool