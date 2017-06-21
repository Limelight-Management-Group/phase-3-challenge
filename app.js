const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const ejs = require( 'ejs' );
var url = require('url');
const queryString = require('query-string');



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
	res.render('index')
})





app.get('/double/:number', (req, res) => {
		res.render('index')
})



const port = process.env.PORT || 3000;
app.listen(port, () =>{
	console.log('the server is up, up and away')

})