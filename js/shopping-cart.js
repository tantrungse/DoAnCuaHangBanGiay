if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let removeCartItems = document.getElementsByClassName('remove')
    for(let i = 0; i < removeCartItems.length; i++) {
        let button = removeCartItems[i]
        button.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('quantity-input')
    for(let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let addToCartButton = document.getElementsByClassName('add-to-cart')
    for(let i = 0; i < addToCartButton.length; i++) {
        let button = addToCartButton[i]
        button.addEventListener('clicked', addToCart)
    }
}

function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    let input = event.target
    updateCartTotal()
}

function addToCart(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('card-title')[0].innerText
    console.log(title)
}

function updateCartTotal() {
    let cartItemsContainer = document.getElementsByClassName('cart-item')
    let total = 0
    for(let i = 0; i < cartItemsContainer.length; i++) {
        let cartRow = cartItemsContainer[i]
        let priceElement = cartRow.getElementsByClassName('price')[0]
        let quantityElement = cartRow.getElementsByClassName('quantity-input')[0]
        let cost = priceElement.innerText.replace('.', '')
        cost = parseInt(cost.replace('vnd', ''))
        let quantity = quantityElement.value
        total = total + (cost * quantity)
    }
    document.getElementsByClassName('total-price')[0].innerText = 'Tổng: '  + total + 'vnd'
}