const { Client } = require('pg');
const client = new Client({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "testdb1"
});

client.connect();

exports.execute = function (query, values) {
    return new Promise(function (resolve, reject) {
        client.query(query, values, function (err, res){
            if (err) {
                reject(err);
            } else {
                resolve(res.rows);
            }            
        });
    });
    
};
