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
			INSERT INTO groceryItems(name, price, section, date_of_purchase)
			VALUES($1, $2, $3, $4)
			`, [transaction.name, transaction.price, transaction.section, transaction.date_of_purchase])	
			.catch(console.log)
	},
	itemsInSection(section){
		console.log('this is the result of my section query', section)
		let result = db.any(`
			SELECT name, id
			FROM groceryItems
			where section =$1
			`, [section.section]);
		console.log(result)
		return result
	},
	cheapItems(transactions){
		db.any(`
			SELECT price, id
			FROM groceryItems
			WHERE price =< $1
			ORDER BY price DESC
			`, [transactions.price])
		.catch('error')
	},
	countItemsInSection(section){
		db.any(`
			SELECT name, COUNT(section)
			FROM groceryItems
			WHERE section = $1
			GROUP BY name
		`, [section.section])
		.catch('error')
	},
	mostRecentOrders(transactions){
		db.any(`
		SELECT date_of_purchase, id
		FROM groceryItems
		WHERE date_of_purchase >= $1
		ORDER BY date_of_purchase DESC

		`,[transactions.date_of_purchase]
		)
	}
}

module.exports = query;