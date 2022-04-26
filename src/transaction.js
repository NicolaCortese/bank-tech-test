class Transaction {
  create (amount, type, balance) {
    return {
      amount,
      date: new Date().toLocaleDateString('en-UK'),
      type,
      balance
    };
  }
}

module.exports = Transaction;
