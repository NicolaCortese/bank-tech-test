const BankAccount = require('./bankAccount');

describe('account statement', () => {
  it('prints out the headers', () => {
    const mockStatement = {
      Print: () => 'date || credit || debit || balance'
    };
    const bank = new BankAccount(mockStatement);
    expect(bank.statement.Print()).toEqual('date || credit || debit || balance');
  });

  it('prints out a deposit', () => {
    const mockStatement = {
      Print: () => 'date || credit || debit || balance\n10/01/2023 || 1000 ||  || 2000'
    };
    const mockTransaction = {
      create: () => { }
    };
    const bank = new BankAccount(mockStatement, mockTransaction);
    bank.Deposit(1000);
    expect(bank.statement.Print()).toEqual(
      'date || credit || debit || balance\n10/01/2023 || 1000 ||  || 2000'
    );
  });

  it('prints out a withdrawal', () => {
    const mockStatement = {
      Print: () => 'date || credit || debit || balance\n10/01/2023 ||  || 1000 || 2000'
    };
    const mockTransaction = {
      create: () => { }
    };
    const bank = new BankAccount(mockStatement, mockTransaction);
    bank.Withdraw(1000);
    expect(bank.statement.Print()).toEqual(
      'date || credit || debit || balance\n10/01/2023 ||  || 1000 || 2000'
    );
  });
});
