let id = localStorage.getItem("productId");
console.log("    ID:", id);

async function fetchProduct() {
    let res = await fetch(`https://dummyjson.com/products/${id}`);
    let data = await res.json();

    console.log(data);

    document.getElementById("define").innerHTML = `
        <div class="container2">
        <div class="top">
        <h1>${data.title}</h1>
        <img class="details-card img"src="${data.thumbnail}" width="250">
        </div>
        <div class ="bottom">
        <p class="details-card1">${data.description}</p>
        <h2>Price: ₹ ${Math.ceil(data.price * 95)}/-</h2>
        <h3>Brand: ${data.brand}</h3>
        <h3>Category: ${data.category}</h3>
        <h4>Rating: ${data.rating} ⭐</h4>
        <h4>Stock: ${data.stock}</h4>
           <div class="button2">

            <button class="cart-btn" onclick="addToCart()">Back To Go</button>
            <button class="buy-btn" onclick="buyNow()">Buy Now</button>
        </div>

        </div>
        </div>
    `;
}

fetchProduct();

function addToCart() {
    window.location.href = "index.html";
}


function buyNow() {
    localStorage.setItem("buyProducts", id);
    window.location.href = "buy.html";
}




