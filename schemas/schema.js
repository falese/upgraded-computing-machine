const {gql} = require('apollo-server');

module.exports = gql`
type Query {
    balances(
        id: ID,
        type:String,
        description:String,
        amount:Int
    ):[Balance]
    balanceById(id:ID): Balance
},
type Balance {
    id: ID!,
    type:String,
    description:String,
    amount:Int
}`