const Statement = require('../src/statement');

beforeEach(() => {
  this.statement = new Statement();
});

describe('Statement class', () => {
  it('returns an empty statement', () => {
    expect(this.statement.print([])).toEqual('date || credit || debit || balance');
  });

  it('returns a deposit in the statement', () => {
    const deposit = { date: '01/01/2022', amount: 500.00, type: 'Credit', balance: 1500.00 };
    expect(this.statement.print([deposit])).toEqual('date || credit || debit || balance\n01/01/2022 || 500.00 ||  || 1500.00');
  });

  it('returns a deposit and a withdrawal in the statement', () => {
    const deposit = { date: '01/01/2022', amount: 500.00, type: 'Credit', balance: 1500.00 };
    const withdrawal = { date: '02/01/2022', amount: 500.00, type: 'Debit', balance: 1000.00 };
    expect(this.statement.print([deposit, withdrawal])).toEqual('date || credit || debit || balance\n02/01/2022 ||  || 500.00 || 1000.00\n01/01/2022 || 500.00 ||  || 1500.00');
  });
});
