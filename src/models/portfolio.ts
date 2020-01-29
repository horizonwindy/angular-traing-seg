export class Portfolio {
    private _balance = 0;

    public get balance() {
        return this._balance;
    }

    /*
    public set balance(amoumt: number) {
        this._balance = amoumt;
    }
    */

    constructor(
        public name: string = '',
        initialCash: number = 0,
        public qrcode: string = ''
    ) {
        if (initialCash > 0) {
            this.deposit(initialCash);
        }
    }

    public deposit(amount: number) {
        if (amount <= 0) { throw new Error('Invalid amount'); }

        this._balance += amount;
    }

    public withdraw(amount: number) {
        if (amount <= 0) { throw new Error('Invalid amount'); }
        if (amount > this._balance) { throw new Error('exceed code'); }
        this._balance -= amount;
    }
}
