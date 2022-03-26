module.exports = {
        balances: (parent, args, {dataSources}, info) => {
            return dataSources.BalancesAPI.getBalances(args);
        },
        balanceById: (parent, {id}, {dataSources}, info) => {
            return dataSources.BalancesAPI.getBalanceById(id);
        },
        payments: (parent, args, {dataSources}, info) => {
            return dataSources.PaymentsAPI.getPayments(args);
        },
        paymentById: (parent, {id}, {dataSources}, info) => {
            return dataSources.PaymentsAPI.getPaymentById(id);
        }
    }
