class BankAccount {
	#balance;

	constructor(initialBalance) {
		this.#balance = initialBalance;
	}

	deposit(amount) {
		if (amount > 0) {
			this.#balance += amount;
		}
	}

	getBalance() {
		return this.#balance;
	}
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150
// account.#balance; // Private field; cannot be accessed directly.
