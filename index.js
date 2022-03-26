const {ApolloServer, gql } = require('apollo-server');
const BalancesAPI = require('./datasources/balances');


const typeDefs = gql`
    type Query {
        balances:[Balance]
        balanceById(id:ID): Balance
    },
    type Balance {
        id: ID!,
        type:String,
        description:String,
        amount:Int
    }`

const resolvers ={
    Query: {
        balances: (parent, args, {dataSources}, info) => {
            return dataSources.BalancesAPI.getBalances();
        },
        balanceById: (parent, {id}, {dataSources}, info) => {
            return dataSources.BalancesAPI.getBalanceById(id);
        }
            
    }
};
const dataSources = () => ({
    BalancesAPI: new BalancesAPI()
});
const server = new ApolloServer({typeDefs, resolvers, dataSources});

server
    .listen({port: process.env.PORT || 4000})
        .then(({url})=>{
            console.log(`graphQL running at ${url}`);
        })