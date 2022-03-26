module.exports = {
    Query: {
        balances: (parent, args, {dataSources}, info) => {
            return dataSources.BalancesAPI.getBalances(args);
        },
        balanceById: (parent, {id}, {dataSources}, info) => {
            return dataSources.BalancesAPI.getBalanceById(id);
        }
            
    }
};