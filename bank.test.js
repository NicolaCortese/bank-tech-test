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
  
//   describe("expect withdraw", () => {
//     it("withdraws money - £500", () => {
//       Withdraw(500);
//       expect(Balance()).toEqual(500)
//     });
//   })
