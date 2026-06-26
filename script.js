//function loadData() {
let url = " https://dummyjson.com/products?limit=500";
fetch(url)
    .then((response) => {
        return response.json();

    })
    .then((data) => {
        // console.log(data);
        displayData(data.products);
        //let box=document.querySelector(".cart");

    })
    .catch((error) => {
        console.error("Error fetching products:", error);
    });
//}
function displayData(products) {
    let cart = document.getElementById("cart");
    //displayProducts(data.products);
    cart.innerHTML = "";

    products.forEach((product) => {
        cart.innerHTML += `
        <div class="product">
            <h3 class="title">${product.title}</h3>
            <img class="thumbnail" src="${product.thumbnail}" alt="${product.title}" />
            <p class="detail">${product.description}</p>
            <div class="price">
            <p>Price: $${product.price}</p>
            <button class="button" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
        `;
    });
}
