
function buy() {
    let products = JSON.parse(localStorage.getItem("buyProducts")) || [];
    console.log(products);

    let box = document.getElementById("define");

    products.forEach((item) => {
        box.innerHTML += `
        <div class="card">
            <img src="${item.thumbnail}" width="150">
            <h3>${item.title}</h3>
            <p>₹${Math.ceil(item.price * 95)}/-</p>
        </div>
        `;
    });
}

buy();