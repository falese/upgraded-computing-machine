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
    payments(
        id: ID,
        direction: String,
        rail: String,
        amount: Int
    ): [Payment]
    paymentById(id:ID): Payment
}
type Payment{
    id: ID!,
    direction: String,
    rail: String,
    amount: Int
    balances: [Balance] 
}
type Balance {
    id: ID!,
    type:String,
    description:String,
    amount:Int
    payments: [Payment]
}`