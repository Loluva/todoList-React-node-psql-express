const {Pool}=require('pg')
const {db}=require('./config')
const config={
    host:db.host,
    user:db.user,
    database:db.database,
    password:db.password,
    port:db.port
}
const pool=new Pool(config)
module.exports={pool}