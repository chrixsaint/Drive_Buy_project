require('dotenv').config();
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const host = process.env.HOST;
const node_env = process.env.NODE_ENV;
const config = {
    dev:{
    db:{
        username,
        password,
        database,
        host,
        dialect: 'mysql' 
    }
    },
    test:{},
    prod:{}
}

module.exports = config[node_env]
