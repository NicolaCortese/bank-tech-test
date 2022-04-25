const Statement = require('./statement');

beforeEach(() => {
  this.statement = new Statement();
});

describe('Statement class', () => {
  it('returns an empty statement', () => {
    expect(this.statement.Print([])).toEqual('date || credit || debit || balance');
  });

  it('returns a deposit in the statement', () => {
    const deposit = { date: '01/01/2022', amount: '500', type: 'Credit', balance: 1500 };
    expect(this.statement.Print([deposit])).toEqual('date || credit || debit || balance\n01/01/2022 || 500 ||  || 1500');
  });

  it('returns a deposit and a withdrawal in the statement', () => {
    const deposit = { date: '01/01/2022', amount: '500', type: 'Credit', balance: 1500 };
    const withdrawal = { date: '02/01/2022', amount: '500', type: 'Debit', balance: 1000 };
    expect(this.statement.Print([deposit, withdrawal])).toEqual('date || credit || debit || balance\n02/01/2022 ||  || 500 || 1000\n01/01/2022 || 500 ||  || 1500');
  });
});
