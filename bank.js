
class Bank {

  constructor(){
    this.balance = 1000;
    this.recorder = [];
  }

  Deposit (amount,date) {
    this.balance += amount;
    this.recorder.push(`\n${date} || ${amount} ||  || ${this.balance}`);
  }
  
  Withdraw (amount,date) {
    this.balance -= amount;
    this.recorder.push(`\n${date} ||  || ${amount} || ${this.balance}`);
  }

  AccountStat () {
    let statement = "date || credit || debit || balance";
    this.recorder.reverse().forEach(string => {
      statement += string;
    });
    return statement;
  }


}


module.exports = Bank;