const BankAccount = require('./bankAccount');

beforeEach(() => {
  this.myAccount = new BankAccount();
});

describe('A complete feature test', () => {
  it('returns a full account statement after deposits and withdrawals', () => {
    this.myAccount.Deposit(500, '01/01/2022');
    this.myAccount.Withdraw(500, '02/01/2022');
    expect(this.myAccount.PrintStatement()).toEqual('date || credit || debit || balance\n02/01/2022 ||  || 500 || 1000\n01/01/2022 || 500 ||  || 1500');
  });
});
