const { Kitty, Driver, Hooman } = require('../models');

const resolvers = {
    Query: {
        viewKitties: async () => {
            return await Kitty.find();
        }
    }, 

    // Mutation: {

    // }
};

module.exports = resolvers;