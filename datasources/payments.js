const payments = require('../data/payments.json')
const {DataSource} = require('apollo-datasource')

class PaymentsAPI extends DataSource{
    constructor(){
        super();
    }
    
    initialize(config){

    }
    getPayments(){
        return payments;
    }
}
module.exports = PaymentsAPI;