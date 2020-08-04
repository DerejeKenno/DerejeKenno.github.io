/* global describe */
/* global it */
/* global assert */

// Account functions 
describe('Testing functions in the account class', () => {
    it('Test getNumber Method', () => {
        const account = new Account(10);
        assert.equal(10, account.getNumber());
    });
    it('Test getBalance Method', () => {
        const account = new Account(10);
        assert.equal(0.0, account.getBalance());
    });
    it('Test the deposit Method', () => {
        const account = new Account(10);
        account.deposit(200);
        assert.equal(200.00, account.getBalance());
    });
    it('Test the withdraw Method', () => {
        const account = new Account(10);
        account.deposit(200);
        account.withdraw(50);
        assert.equal(150, account.getBalance());
    });
});

//savings account 
describe('Testing functions in the SavingsAccount Class', () => {
    it('Test getInterest method', () => {
        const account = new SavingsAccount(10002, 2.5);
        assert.equal(account.getInterest(), 2.5);
    });
    it('Test setInterest method', () => {
        const account = new SavingsAccount(10002, 2.5);
        account.setInterest(3.5);
        assert.equal(account.getInterest(), 3.5);
    });
    it('Test addInterest method', () => {
        const account = new SavingsAccount(10002, 2.5);
        account.deposit(100);
        account.addInterest();
        assert.equal(account.getBalance(), 102.5);
    });
    it('Test end Of month', () => {
        const account = new SavingsAccount(10002, 2.5);
        account.deposit(100);
        assert.equal(
            account.endOfMonth(),
            'Interest added SavingsAccount 10002: balance: 102.5 interest: 2.5 \n'
        );
    });
});

// checkings account class 
describe('Testing functions in the CheckingsAccount Class', () => {
    it('Test getOverDraftLimit method', () => {
        const account = new CheckingAccount(101, -1000);
        assert.equal(-1000, account.getOverDraftLimit());
    });
    it('Test setOverDraftLimit method', () => {
        const account = new CheckingAccount(101, -1000);
        account.setOverDraftLimit(-500);
        assert.equal(-500, account.getOverDraftLimit());
    });
});

// bank account 
describe('Testing functions in the Bank class', () => {
    it('Test addAccount method', () => {
        accounts = [new Account(950), new SavingsAccount(951, 2.5), new CheckingAccount(952, -300)];
        const bank = new Bank(accounts);
        const newAccount = bank.addAccount();
        assert.equal(newAccount, 1000);
    });
    it('Test closeAccount method', () => {
        accounts = [new Account(950), new SavingsAccount(951, 2.5), new CheckingAccount(952, -300)];
        const bank = new Bank(accounts);
        const account = bank.closeAccount(951);
        assert.equal(account.getNumber(), 951);
    });
});