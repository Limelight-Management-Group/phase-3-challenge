const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const ejs = require( 'ejs' );
var url = require('url');
const queryString = require('query-string');
const query = require('./database/grocery_store')


// direct requests to the public directory
app.use( express.static( __dirname + '/public' ) );
// set up template
app.set( 'view engine', 'ejs' );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );


app.get('/zero', (req, res) => {
	res.send('0')
})
// var queryString = '?' + ':a'+'&' + ':b'
app.get('/add/' +'?'+ ':a'+'&' + ':b', (req, res) => {
	const A = req.params.a
	const parsedA = queryString.parse(A)
	const B = req.params.b
	const parsedB = queryString.parse(B)
	// numA = parseInt(parsedA)
	// numB = parseInt(parsedB)
	const value = Number(parsedA.a) + Number(parsedB.b)
	res.send(value.toString())
})

app.get('/subtract/' +'?'+ ':a'+'&' + ':b', (req, res) => {
	const A = req.params.a
	const parsedA = queryString.parse(A)
	const B = req.params.b
	const parsedB = queryString.parse(B)
	// numA = parseInt(parsedA)
	// numB = parseInt(parsedB)
	const value = Number(parsedA.a) - Number(parsedB.b)
	res.send(value.toString())
})

app.get('/', (req, res) => {
	query.getAll()
	.then(transactions => {
		console.log("I am in the transactions query", transactions)
	res.render('index')	
	})
})

app.post('/cart', (req, res) =>{
	query.createTransaction(req.body)
	.then(transaction => {
		console.log('this is the transaction', transaction)
		res.render('index')
	}).catch('error')
})



app.get('/double/' +'?'+':number', (req, res) => {
	const num = req.params.number
	const parsedNum = queryString.parse(num)
	console.log(parsedNum.number)
	const double = Number(parsedNum.number) * 2
	console.log(double)
	res.send(double.toString())
	})



const port = process.env.PORT || 3001;
app.listen(port, () =>{
	console.log('the server is up, up and away on port: ', port)

})