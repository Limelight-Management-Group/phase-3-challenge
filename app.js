const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const ejs = require( 'ejs' );




// direct requests to the public directory
app.use( express.static( __dirname + '/public' ) );
// set up template
app.set( 'view engine', 'ejs' );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );


app.get('/zero', (req, res) => {
	res.render('index')
})

app.get('/add', (req, res) => {
	res.render('index')
})

app.get('/subtract', (req, res) => {
	res.render('index')
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