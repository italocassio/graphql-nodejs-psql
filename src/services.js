const database = require('./database');

exports.getAllUsers = function () {
    return database.execute("select * from casestests.usuario");
};

exports.getUserById = function (args) {
    return database.execute("select * from casestests.usuario where id = $1", [args.id]);
};

exports.postUser = function (args) {
    return database.execute("insert into casestests.usuario (nome, email) values ($1, $2) returning *", [args.nome, args.email]);
};