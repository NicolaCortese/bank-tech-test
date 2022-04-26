const Transaction = require('./transaction');
const Statement = require('./statement');

class BankAccount {
  constructor (statement = new Statement(), transaction = new Transaction()) {
    this.recordTransactions = [];
    this.statement = statement;
    this.transaction = transaction;
    this.balance = 1000.00;
  }

  printStatement () {
    return this.statement.print(this.recordTransactions);
  }

  deposit (amount) {
    this.amountValidation(amount, (errorMsg) => {
      throw new Error(errorMsg);
    });
    this.balance += amount;
    this.recordTransactions.push(this.transaction.create(amount, 'Credit', this.balance));
  }

  withdraw (amount) {
    this.amountValidation(amount, (errorMsg) => {
      throw new Error(errorMsg);
    });
    if (amount > this.balance) {
      throw new Error("Money doesn't grow on trees");
    }
    this.balance -= amount;
    this.recordTransactions.push(this.transaction.create(amount, 'Debit', this.balance));
  }

  amountValidation (amount, errorCallback) {
    if (amount < 0) {
      errorCallback('You cannot withdraw a negative amount');
    }
  }
}

module.exports = BankAccount;
