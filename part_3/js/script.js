let modal = document.querySelector('.modal-content')
let modalOverlay = document.querySelector('.modal-overlay')
let modalOpen = document.getElementById('cart-button')
let modalClose = document.querySelector('.modal-close')
let addToCart = document.querySelectorAll('.item-button')
let prices = document.querySelectorAll('.item-price')
let names = document.querySelectorAll('.item-name')
let clearButton = document.querySelector('.modal-clear')
let shopCart = []
let shopCartName = document.querySelector('#name')
let shopCartPrice = document.querySelector('#price')

addToCart.forEach((elements, index) =>
  elements.addEventListener('click', cartAdd(index))
)
modalOpen.addEventListener('click', openModal)
modalClose.addEventListener('click', closeModal)
// addToCart.addEventListener('click', cartAdd)
clearButton.addEventListener('click', clearModal)
  
  function clearModal(){
  	shopCart = []
  	console.log('this is the shopCart: ', shopCart)
  	shopCartSize = 0;
  	//now show most recent cart totals!
  }

function cartAdd(index) {
  return function (){
	shopCart.push({
	  name: names[index].textContent,
	  price: prices[index].textContent,
	})

	console.log('shopCart', shopCart)

	// alert('this just pushed, dawg!')
  }
}

function openModal(){
	console.log(shopCart)
	if(shopCart.length === 0){
		console.log('empty')
		let price = shopCartPrice.innerHTML = 0.00
		let name = shopCartName.innerHTML = 'n/a'
		console.log(name, price)
	}
	else{
		if(price){
			console.log('there are this many items in the cart: ', shopCart.length)
					let price = shopCart.forEach((itemprice) =>{
						console.log('this is the length', shopCart.length)
						for(var price in itemprice){
							 // return itemprice.price
						}
							price = shopCartPrice.innerHTML = itemprice.price
							console.log('this is the price', price)
					})
					// shopCart[0].price
					let name = shopCartName.innerHTML = shopCart[0].name
		}
	}
	
	// }
	modal.classList.add('modal-open')
	
	// div.classList.remove('foo')
	modalOverlay.classList.add('hide-overlay')
}

function closeModal(){
	modal.classList.remove('modal-open')
	// div.classList.remove('foo')
	modal.classList.remove('hide-overlay')
}	

