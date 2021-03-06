const {ApolloServer} = require('apollo-server');
const BalancesAPI = require('./datasources/balances');
const PaymentsAPI = require('./datasources/payments')

const typeDefs = require('./schemas/schema.js');
  
const resolvers = require('./resolvers/resolvers.js');

const dataSources = () => ({
    BalancesAPI: new BalancesAPI(),
    PaymentsAPI: new PaymentsAPI(),
});
const server = new ApolloServer({typeDefs, resolvers, dataSources});

server
    .listen({port: process.env.PORT || 4000})
        .then(({url})=>{
            console.log(`graphQL running at ${url}`);
        })