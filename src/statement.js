class Statement {
  print (recordTransactions) {
    let statement = 'date || credit || debit || balance';

    recordTransactions.reverse().forEach((transaction) => {
      statement += this.formatTransactions(transaction);
    });
    return statement;
  }

  formatTransactions (transaction) {
    if (transaction.type === 'Credit') {
      return `\n${transaction.date} || ${transaction.amount.toFixed(2)} ||  || ${transaction.balance.toFixed(2)}`;
    } else {
      return `\n${transaction.date} ||  || ${transaction.amount.toFixed(2)} || ${transaction.balance.toFixed(2)}`;
    }
  }
}

module.exports = Statement;
