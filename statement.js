class Statement {
  Print (records) {
    let statement = 'date || credit || debit || balance';
    records.reverse().forEach((transaction) => {
      if (transaction.type === 'Credit') {
        statement += `\n${transaction.date} || ${transaction.amount} ||  || ${transaction.balance}`;
      } else {
        statement += `\n${transaction.date} ||  || ${transaction.amount} || ${transaction.balance}`;
      }
    });
    return statement;
  }
}

module.exports = Statement;
