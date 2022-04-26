const Transaction = require('../src/transaction');

describe('Transaction class', () => {
  jest
    .useFakeTimers()
    .setSystemTime(new Date('2020-01-01'));

  const transactionClass = new Transaction();

  it('creates a new debit transaction', () => {
    const debitTransaction = transactionClass.create(500, 'Debit', 1500);
    expect(debitTransaction).toEqual({
      amount: 500,
      date: '01/01/2020',
      type: 'Debit',
      balance: 1500
    });
  });

  it('creates a new credit transaction', () => {
    const creditTransaction = transactionClass.create(500, 'Credit', 500);
    expect(creditTransaction).toEqual({
      amount: 500,
      date: '01/01/2020',
      type: 'Credit',
      balance: 500
    });
  });
});
