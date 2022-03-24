const balances = require('../data/balances.json')
const {DataSource} = require('apollo-datasource')

class BalancesAPI extends DataSource{
    constructor(){
        super();
    }
    
    initialize(config){

    }
    getBalances(){
        return balances;
    }
}
module.exports = BalancesAPI;