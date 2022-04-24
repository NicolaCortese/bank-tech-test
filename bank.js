
class Bank {

  constructor(){
    this.balance = 1000;
    
  }

  
  Balance () {
    return this.balance;
  }

  Deposit (amount) {
    this.balance += amount;
  }


}


module.exports = Bank;