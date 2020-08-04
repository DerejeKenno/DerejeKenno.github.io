class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(interestRate) {
        this._interest = interestRate;
    }

    addInterest() {
        this._balance += this._balance * this._interest / 100;
    }

    toString() {
        return `Balance of this account(${this._number}) is:${this._balance}`;
    }

    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest} \n`;
    }

}