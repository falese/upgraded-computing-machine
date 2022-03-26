const payments = require('../data/payments.json')
const {DataSource} = require('apollo-datasource')
const _ = require('lodash')

class PaymentsAPI extends DataSource{
    constructor(){
        super();
    }
    
    initialize(config){

    }
    getPayments(args){
        const pmts= _.filter(payments, args);
        return pmts;
    }
    getPaymentById(id){
        const pmt= _.filter(payments, { id: parseInt(id)});
        return pmt[0];
    }

}
module.exports = PaymentsAPI;