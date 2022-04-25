# Bank tech test

Today, I'll practice doing a tech test.


## Specification

### Requirements

To run the code you will need to have the latest version of Node.js, run the following:
```
npm install
```
This application runs in a REPL, you can open it by running the code:
```
node
```
In here you can create an instance of the class Bank (don't forget to load the file first!):

```
> .load bank.js
class Bank {
  constructor () {
      this.balance = 1000;
          this.recorder = [];
            }
            
              Deposit (amount, date) {
                  this.balance += amount;
                      this.recorder.push(`\n${date} || ${amount} ||  || ${this.balance}`);
                        }
                        
                          Withdraw (amount, date) {
                              this.balance -= amount;
                                  this.recorder.push(`\n${date} ||  || ${amount} || ${this.balance}`);
                                    }
                                    
                                      AccountStatement () {
                                          let statement = 'date || credit || debit || balance';
                                              this.recorder.reverse().forEach((string) => {
                                                    statement += string;
                                                        });
                                                            return statement;
                                                              }
                                                              }
                                                              
                                                              module.exports = Bank;
                                                              
[class Bank]
```
```
> myAccount = new Bank;
Bank { balance: 1000, recorder: [] }
```

And now you can Withdraw and Deposit any amounts you like!

```
> myAccount.Deposit(500)
undefined
> myAccount.Withdraw(250)
undefined
```
Don't forget to check your account statement to check on your finances!
```
> myAccount.AccountStatement()
'date || credit || debit || balance\n' +
  'undefined ||  || 250 || 1250\n' +
  'undefined || 500 ||  || 1500'
```


Dependancies:
Jest for testing
ESLint as a linter (trying to make it work)
