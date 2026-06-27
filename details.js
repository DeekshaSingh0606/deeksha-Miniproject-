let id = localStorage.getItem("productId");
console.log("    ID:", id);

async function fetchProduct() {
    let res = await fetch(`https://dummyjson.com/products/${id}`);
    let data = await res.json();

    console.log(data);

    document.getElementById("define").innerHTML = `
        <h1>${data.title}</h1>
        <img class="details-card img"src="${data.thumbnail}" width="250">
        <p class="details-card">${data.description}</p>
        <h2>Price: ₹ ${Math.ceil(data.price * 95)}</h2>
        <h3>Brand: ${data.brand}</h3>
        <h3>Category: ${data.category}</h3>
        <h4>Rating: ${data.rating} ⭐</h4>
        <h4>Stock: ${data.stock}</h4>
    `;
}

fetchProduct();


