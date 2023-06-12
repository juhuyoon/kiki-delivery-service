const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Kitty {
        _id: ID
        name: String
        breed: String
        age: Int
        gender: String
        color: String
        trauma: String
        declawed: Boolean
    }

    type Query {
        viewKitties: [Kitty]
    }

`;

module.exports = typeDefs;