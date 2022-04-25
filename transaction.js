class Transaction {
  constructor (amount, date, type, balance) {
    this.amount = amount;
    this.date = date;
    this.type = type;
    this.balance = balance;
  }
}

module.exports = Transaction;
