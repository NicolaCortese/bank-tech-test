const Transaction = require('./transaction');

beforeEach(() => {
  this.transaction = new Transaction(500, '01/01/2022', 'Debit', 1500);
});

describe('Transaction class', () => {
  it('holds the amount attribute', () => {
    expect(this.transaction.amount).toEqual(500);
  });
  it('holds the date attribute', () => {
    expect(this.transaction.date).toEqual('01/01/2022');
  });
  it('holds the type attribute', () => {
    expect(this.transaction.type).toEqual('Debit');
  });
  it('holds the balance attribute', () => {
    expect(this.transaction.balance).toEqual(1500);
  });
});
