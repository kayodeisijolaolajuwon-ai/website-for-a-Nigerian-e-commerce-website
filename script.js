// SHOPPING CART

let cart = [];


// ADD PRODUCT

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " has been added to your cart!");
}


// UPDATE CART

function updateCart() {

    document.getElementById("cart-count").textContent = cart.length;

    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <span>
                    ${item.name}
                </span>

                <strong>
                    ₦${item.price.toLocaleString()}
                </strong>

            </div>
        `;
    });

    document.getElementById("cart-total").textContent =
        "₦" + total.toLocaleString();
}


// OPEN CART

document.querySelector(".cart").addEventListener("click", function () {

    document.getElementById("cart-popup").style.display = "flex";

});


// CLOSE CART

function closeCart() {

    document.getElementById("cart-popup").style.display = "none";

}


// WHATSAPP CHECKOUT

function checkoutWhatsApp() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    let message = "Hello NaijaStore! 🇳🇬%0A%0AI would like to order:%0A%0A";

    let total = 0;


    cart.forEach(item => {

        message +=
            "• " +
            item.name +
            " - ₦" +
            item.price.toLocaleString() +
            "%0A";

        total += item.price;

    });


    message +=
        "%0ATotal: ₦" +
        total.toLocaleString() +
        "%0A%0A";

    message +=
        "Please send me the delivery details.";


    // CHANGE THIS TO YOUR REAL WHATSAPP NUMBER

    const phoneNumber = "2348000000000";


    window.open(
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message,
        "_blank"
    );
}