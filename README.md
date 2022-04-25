# Bank tech test

Today, I'll practice doing a tech test.
I have approached the problem by using the simple TDD, Red Green Refactor approach.
I ran into some trouble when I extracted out the methods to separate classes, I'm still working on a solution to mock the classes, as well as not create instances of other classes inside of a method. At this moment I'm creating new transactions each time we call Deposit or Withdraw which is not optimal.

### Requirements

To run the code you will need to have the latest version of Node.js, run the following:
```
npm install
```
This application runs in a REPL, you can open it by running the code:
```
node
```
In here you can create an instance of the class BankAccount (don't forget to load the file first!):

```
> .load bankAccount.js
const Transaction = require('./transaction');
const Statement = require('./statement');

class BankAccount {
  constructor (statement = new Statement()) {
      this.transactions = [];
          this.statement = statement;
              this.balance = 1000;
                }
                
                  PrintStatement () {
                      return this.statement.Print(this.transactions);
                        }
                        
                          Deposit (amount, date) {
                              this.balance += amount;
                                  const credit = 'Credit';
                                      this.transactions.push(new Transaction(amount, date, credit, this.balance));
                                        }
                                        
                                          Withdraw (amount, date) {
                                              // add logic to block if there isn't enough cash
                                                  this.balance -= amount;
                                                      const debit = 'Debit';
                                                          this.transactions.push(new Transaction(amount, date, debit, this.balance));
                                                            }
                                                            }
                                                            
                                                            module.exports = BankAccount;
                                                            
[class BankAccount]
```
```
> myAccount = new BankAccount
BankAccount {
  transactions: [],
  statement: Statement {},
  balance: 1000
}
```

And now you can Withdraw and Deposit any amounts you like!

```
> myAccount.Deposit(500,"01/01/2022")
undefined
> myAccount.Withdraw(500,"02/01/2022")
undefined
```
Don't forget to check your account statement to check on your finances!
```
> myAccount.PrintStatement()
'date || credit || debit || balance\n' +
  '02/01/2022 ||  || 500 || 1000\n' +
  '01/01/2022 || 500 ||  || 1500'
```


Dependancies:
Jest for testing
ESLint as a linter
