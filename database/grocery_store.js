const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/grocery_store';
const db = pgp(connectionString);

const queries = {
	getAll(){
		return db.any('SELECT * FROM groceryItems')
	}
}
