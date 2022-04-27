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
In here you can create an instance of the class BankAccount (don't forget to require the file first!):

```
> const BankAccount = require('./src/bankAccount.js');
undefined
> myAccount = new BankAccount();
BankAccount {
  recordTransactions: [],
  statement: Statement {},
  transaction: Transaction {},
  balance: 1000
}
> 
```

And now you can withdraw and deposit any amounts you like!

```
> myAccount.deposit(150);
150
> myAccount.withdraw(500);
500
```
Don't forget to check your account statement to check on your finances!
```
> myAccount.printStatement();
'date || credit || debit || balance\n' +
  '27/04/2022 ||  || 500.00 || 650.00\n' +
  '27/04/2022 || 150.00 ||  || 1150.00'
> 
```


Dependancies:
Jest for testing
ESLint as a linter
