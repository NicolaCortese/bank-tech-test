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
    amount = this.amountValidation(amount, (errorMsg) => {
      throw new Error(errorMsg);
    });
    this.balance += amount;
    this.recordTransactions.push(this.transaction.create(amount, 'Credit', this.balance));
    return amount;
  }

  withdraw (amount) {
    amount = this.amountValidation(amount, (errorMsg) => {
      throw new Error(errorMsg);
    });
    if (amount > this.balance) {
      throw new Error("Money doesn't grow on trees");
    }
    this.balance -= amount;
    this.recordTransactions.push(this.transaction.create(amount, 'Debit', this.balance));
    return amount;
  }

  amountValidation (amount, errorCallback) {
    if (typeof amount !== 'number') {
      errorCallback('Incorrect data type has been submitted');
    } else if (amount < 0) {
      errorCallback('You cannot insert a negative amount');
    } else {
      return Math.round((amount) * 100) / 100;
    }
  }
}

module.exports = BankAccount;
