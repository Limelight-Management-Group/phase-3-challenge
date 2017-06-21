const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/grocery_store';
const db = pgp(connectionString);

const query = {
	getAll(){
		return db.any('SELECT * FROM groceryItems')
	},
	createTransaction(transaction){
		console.log('this is the transaction', transaction)
		return db.any(`
			INSERT INTO groceryItems(name, price, section)
			VALUES($1, $2, $3)
			`, [transaction.name, transaction.price, transaction.section])	
			.catch(console.log)
	}
}

module.exports = query;