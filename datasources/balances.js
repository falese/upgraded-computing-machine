const balances = require('../data/balances.json')
const {DataSource} = require('apollo-datasource')
const _ = require('lodash')
class BalancesAPI extends DataSource{
    constructor(){
        super();
    }

    initialize(config){

    }
    getBalances(){
        return balances;
    }
    getBalanceById(id){
        const balance= _.filter(balances, { id: parseInt(id)});
        return balance[0];
    }
}
module.exports = BalancesAPI;