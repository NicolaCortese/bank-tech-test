const Transaction = require('./transaction');
const Statement = require('./statement');

class BankAccount {
  constructor (statement = new Statement()) {
    this.transactions = [];
    this.statement = statement;
    this.balance = 1000;
  }

  PrintStatement () {
    return this.statement.AccountStatement(this.transactions);
  }

  Deposit (amount, date) {
    this.balance += amount;
    const credit = 'Credit';
    this.transactions.push(new Transaction(amount, date, credit, this.balance));
  }

  Withdraw (amount, date) {
    // add logic to block if there isn't enough cash
    this.balance -= amount;
    const debit = 'Debit';
    this.transactions.push(new Transaction(amount, date, debit, this.balance));
  }
}

module.exports = BankAccount;
