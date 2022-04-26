const BankAccount = require('../src/bankAccount');

beforeEach(() => {
  this.myAccount = new BankAccount();
});

describe('A complete feature test', () => {
  jest
    .useFakeTimers()
    .setSystemTime(new Date('2020-01-01'));

  it('returns a full account statement after deposits and withdrawals', () => {
    this.myAccount.deposit(500);
    this.myAccount.withdraw(500);
    expect(this.myAccount.printStatement()).toEqual('date || credit || debit || balance\n01/01/2020 ||  || 500.00 || 1000.00\n01/01/2020 || 500.00 ||  || 1500.00');
  });
});
