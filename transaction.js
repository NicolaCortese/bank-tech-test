class Transaction {
  create (amount, type, balance) {
    return {
      amount,
      date: new Date(),
      type,
      balance
    };
  }
}

module.exports = Transaction;
