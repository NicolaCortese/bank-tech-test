const Transaction = require('./transaction');
const Statement = require('./statement');

class BankAccount {
  constructor (statement = new Statement(), transaction = new Transaction()) {
    this.transactions = [];
    this.statement = statement;
    this.transaction = transaction;
    this.balance = 1000;
  }

  PrintStatement () {
    return this.statement.Print(this.transactions);
  }

  Deposit (amount) {
    this.balance += amount;
    this.transactions.push(this.transaction.create(amount, 'Credit', this.balance));
  }

  Withdraw (amount) {
    if (amount > this.balance) {
      throw new Error("Money doesn't grow on trees");
    }
    this.balance -= amount;
    this.transactions.push(this.transaction.create(amount, 'Debit', this.balance));
  }
}

module.exports = BankAccount;
