const BankAccount = require('../src/bankAccount');

describe('bankAccount', () => {
  it('prints out the headers', () => {
    const mockStatement = {
      print: () => 'date || credit || debit || balance'
    };
    const bank = new BankAccount(mockStatement);
    expect(bank.printStatement()).toEqual('date || credit || debit || balance');
  });

  it('makes a deposit then prints it out', () => {
    const mockStatement = {
      print: () => 'date || credit || debit || balance\n10/01/2023 || 1000.00 ||  || 2000.00'
    };
    const mockTransaction = {
      create: () => { }
    };
    const bank = new BankAccount(mockStatement, mockTransaction);
    bank.deposit(1000);
    expect(bank.printStatement()).toEqual(
      'date || credit || debit || balance\n10/01/2023 || 1000.00 ||  || 2000.00'
    );
  });

  it('makes a withdrawal then prints it out', () => {
    const mockStatement = {
      print: () => 'date || credit || debit || balance\n10/01/2023 ||  || 1000.00 || 2000.00'
    };
    const mockTransaction = {
      create: () => { }
    };
    const bank = new BankAccount(mockStatement, mockTransaction);
    bank.withdraw(1000);
    expect(bank.printStatement()).toEqual(
      'date || credit || debit || balance\n10/01/2023 ||  || 1000.00 || 2000.00'
    );
  });

  it('throws an error when we try to withdraw more than our balance', () => {
    const mockStatement = {
      print: () => 'date || credit || debit || balance\n10/01/2023 ||  || 1000.00 || 2000.00'
    };
    const mockTransaction = {
      create: () => { }
    };
    const bank = new BankAccount(mockStatement, mockTransaction);
    expect(() => { bank.withdraw(1001); }).toThrow("Money doesn't grow on trees");
  });

  it('throws an error when we try to withdraw a negative number', () => {
    const mockStatement = {
      print: () => 'date || credit || debit || balance\n10/01/2023 ||  || 1000.00 || 2000.00'
    };
    const mockTransaction = {
      create: () => { }
    };
    const bank = new BankAccount(mockStatement, mockTransaction);
    expect(() => { bank.withdraw(-1); }).toThrow('You cannot withdraw a negative amount');
  });
});
