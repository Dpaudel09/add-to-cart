function addToCart() {
    const productTitle = document.querySelector('.product h2').innerText;
    const cartList = document.getElementById('cart');
    
    const listItem = document.createElement('li');
    listItem.innerText = productTitle;
    
    cartList.appendChild(listItem);
}

function addToWishlist() {
    const productTitle = document.querySelector('.product h2').innerText;
    const wishlist = document.getElementById('wishlist');
    
    const listItem = document.createElement('li');
    listItem.innerText = productTitle;
    
    wishlist.appendChild(listItem);
}
