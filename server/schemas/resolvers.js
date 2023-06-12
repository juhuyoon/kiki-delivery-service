const { Kitty, Driver, Hooman } = require('../models');

const resolvers = {
    Query: {
        viewKitties: async () => {
            return await Kitty.find();
        }
    }, 

    Mutation: {
        addKitty: async (_, args) => {
            const kitty = await Kitty.create(args);

            return kitty;
        }
    }
};

module.exports = resolvers;