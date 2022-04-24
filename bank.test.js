const Bank = require("./bank");

beforeEach(() => {
  bank = new Bank;
})

describe("returns the initial balance", () => {
  it("starts with - £1000", () => {
    expect(bank.Balance()).toEqual(1000);
  })
})

describe("expect deposit", () => {
  it("deposits money - £500", () => {
    bank.Deposit(500);
    expect(bank.Balance()).toEqual(1500);
  });
})
  
describe("expect withdraw", () => {
  it("withdraws money - £500", () => {
    bank.Withdraw(500);
    expect(bank.Balance()).toEqual(500)
  });
})

describe("account statement", () => {
  it("prints out the headers", () => {
    expect(bank.AccountStat()).toEqual("date || credit || debit || balance")
  });

  it("prints out a deposit", () => {
    bank.Deposit(1000,"10/01/2023")
    expect(bank.AccountStat()).toEqual("date || credit || debit || balance\n10/01/2023 || 1000 ||  || 2000")
  });
  
  it("prints out two deposits and a withdrawal", () => {
    bank.Deposit(1000,"10/01/2023")
    bank.Deposit(2000,"13/01/2023")
    
    expect(bank.AccountStat()).toEqual("date || credit || debit || balance\n13/01/2023 || 2000 ||  || 4000\n10/01/2023 || 1000 ||  || 2000")
  });

  it("prints out two deposits and a withdrawal", () => {
    bank.Deposit(1000,"10/01/2023")
    bank.Deposit(2000,"13/01/2023")
    bank.Withdraw(500,"14/01/2023")

    expect(bank.AccountStat()).toEqual("date || credit || debit || balance\n14/01/2023 ||  || 500 || 3500\n13/01/2023 || 2000 ||  || 4000\n10/01/2023 || 1000 ||  || 2000")
  });

})
