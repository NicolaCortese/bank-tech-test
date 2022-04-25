
const BankAccount = require('./bankAccount');

beforeEach(() => {
  const mockModel = 
  this.bank = new BankAccount();
});

describe('account statement', () => {
  it('prints out the headers', () => {
    expect(this.bank.AccountStatement()).toEqual('date || credit || debit || balance');
  });

  it('prints out a deposit', () => {
    this.bank.Deposit(1000, '10/01/2023');
    expect(this.bank.AccountStatement()).toEqual(
      'date || credit || debit || balance\n10/01/2023 || 1000 ||  || 2000'
    );
  });

  it('prints out two deposits', () => {
    this.bank.Deposit(1000, '10/01/2023');
    this.bank.Deposit(2000, '13/01/2023');

    expect(this.bank.AccountStatement()).toEqual(
      'date || credit || debit || balance\n13/01/2023 || 2000 ||  || 4000\n10/01/2023 || 1000 ||  || 2000'
    );
  });

  it('prints out two deposits and a withdrawal', () => {
    this.bank.Deposit(1000, '10/01/2023');
    this.bank.Deposit(2000, '13/01/2023');
    this.bank.Withdraw(500, '14/01/2023');

    expect(this.bank.AccountStatement()).toEqual(
      'date || credit || debit || balance\n14/01/2023 ||  || 500 || 3500\n13/01/2023 || 2000 ||  || 4000\n10/01/2023 || 1000 ||  || 2000'
    );
  });
});
