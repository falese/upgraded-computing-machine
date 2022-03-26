const _ = require('lodash');

module.exports= {

        payments(balance, args, {dataSources}){
            const payments = dataSources.PaymentsAPI.getPayments();
            const returns = payments.filter((payment)=>{
                return _.filter(balance.payments, {id: payment.id}).length >0;
            });
            return returns
        }
    }

