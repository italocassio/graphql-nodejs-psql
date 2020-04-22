//resolvers é como se fosse as controllers
// importa os services do db
const services = require('./services');

module.exports = {
    Query: {
       async users() {
           const dbusers = await services.getAllUsers();
           return dbusers;
       },
        async user(_, args) {
           const dbusers = await services.getUserById(args);
           return dbusers;
        }
    },

    Mutation: {
        async createUser(_, args) {
            console.log(args);
            const [newUser] = await services.postUser(args);
            return newUser;
        }
    },
};